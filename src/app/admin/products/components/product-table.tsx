'use client'

import ProductDetailModal from '@/app/admin/products/components/product-detail-modal'
import { path } from '@/common/path'
import AutoPagination from '@/components/auto-pagination'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { StatusProduct } from '@/constants/type'
import { useAlert } from '@/context/AlertContext'
import { handleErrorApi } from '@/lib/utils'
import { useGetAllProducts } from '@/queries/useProduct'
import { ProductListType, ProductType } from '@/schema/product.schema'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { useSearchParams } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'

const statusColors: Record<string, string> = {
  [StatusProduct.Available]: 'bg-green-500 text-white',
  [StatusProduct.OutOfStock]: 'bg-red-500 text-white'
}

type ProductItem = ProductListType['data'][0]

const ProductTableContext = createContext<{
  setProductIdEdit: (value: number) => void
  productIdEdit: number | undefined
  productDelete: ProductItem | null
  setProductDelete: (value: ProductItem | null) => void
  selectedProduct: ProductItem | null
  setSelectedProduct: (value: ProductItem | null) => void
}>({
  setProductIdEdit: () => {},
  productIdEdit: undefined,
  productDelete: null,
  setProductDelete: () => {},
  selectedProduct: null,
  setSelectedProduct: () => {}
})

export const columns: ColumnDef<ProductType>[] = [
  {
    header: 'STT',
    cell: ({ row }) => {
      return <div>{row.index + 1}</div>
    }
  },
  {
    accessorKey: 'product_id',
    header: 'ID',
    cell: ({ row }) => {
      return <div>{row.getValue('product_id')}</div>
    }
  },
  {
    accessorKey: 'product_name',
    header: 'Product Name',
    cell: ({ row }) => <div className='capitalize'>{row.getValue('product_name')}</div>
  },
  {
    header: 'Category Name',
    cell: ({ row }) => {
      const product = row.original
      return <div>{product.categories?.category_name || 'Unknown'}</div>
    }
  },
  {
    header: 'Brand',
    cell: ({ row }) => {
      const product = row.original
      return <div>{product.brands?.brand_name || 'Unknown'}</div>
    }
  },
  {
    header: 'Status',
    cell: ({ row }) => {
      const product = row.original as ProductItem
      return (
        <Badge className={`px-2 py-1 rounded-md ${statusColors[product.product_status] || 'bg-gray-300'}`}>
          {product.product_status}
        </Badge>
      )
    }
  },
  {
    header: 'Details',
    cell: ({ row }) => {
      const { setSelectedProduct } = useContext(ProductTableContext)
      return (
        <Button
          className='bg-orange-500 hover:bg-orange-700 text-white'
          onClick={() => setSelectedProduct(row.original as ProductItem)}
        >
          Details
        </Button>
      )
    }
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: function Actions({ row }) {
      const { setProductIdEdit, setProductDelete } = useContext(ProductTableContext)
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <DotsHorizontalIcon className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setProductIdEdit(row.original.product_id)}>Sửa</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setProductDelete(row.original as ProductItem)}>Xóa</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]

function AlertDialogDeleteAccount({
  productDelete,
  setProductDelete
}: {
  productDelete: ProductItem | null
  setProductDelete: (value: ProductItem | null) => void
}) {
  const { showAlert } = useAlert()

  // const { mutateAsync } = useDeleteAccountMutation()
  const deleteAccount = async () => {
    if (productDelete) {
      try {
        // const result = await mutateAsync(productDelete.id)
        setProductDelete(null)
        // showAlert(result.payload.message, 'success')
      } catch (error) {
        handleErrorApi({
          error,
          setError: () => {}
        })
      }
    }
  }
  return (
    <AlertDialog
      open={Boolean(productDelete)}
      onOpenChange={(value) => {
        if (!value) {
          setProductDelete(null)
        }
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Xóa nhân viên?</AlertDialogTitle>
          <AlertDialogDescription>
            Tài khoản{' '}
            <span className='bg-foreground text-primary-foreground rounded px-1'>{productDelete?.product_name}</span> sẽ
            bị xóa vĩnh viễn
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteAccount}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

// Số lượng item trên 1 trang
const PAGE_SIZE = 10
export default function ProductTable() {
  const searchParam = useSearchParams()
  const page = searchParam.get('page') ? Number(searchParam.get('page')) : 1
  const pageIndex = page - 1
  const params = Object.fromEntries(searchParam.entries())
  const [productIdEdit, setProductIdEdit] = useState<number | undefined>()
  const [productDelete, setProductDelete] = useState<ProductItem | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null)
  const productListQuery = useGetAllProducts()
  const data: any[] = productListQuery.data?.payload.data ?? []
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [pagination, setPagination] = useState({
    pageIndex, // Gía trị mặc định ban đầu, không có ý nghĩa khi data được fetch bất đồng bộ
    pageSize: PAGE_SIZE //default page size
  })

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    autoResetPageIndex: false,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination
    }
  })

  useEffect(() => {
    table.setPagination({
      pageIndex,
      pageSize: PAGE_SIZE
    })
  }, [table, pageIndex])

  return (
    <ProductTableContext.Provider
      value={{ productIdEdit, setProductIdEdit, productDelete, setProductDelete, selectedProduct, setSelectedProduct }}
    >
      <div className='w-full p-6'>
        {/* <EditProduct id={productIdEdit} setId={setProductIdEdit} onSubmitSuccess={() => {}} /> */}
        <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        <AlertDialogDeleteAccount productDelete={productDelete} setProductDelete={setProductDelete} />
        <div className='flex items-center py-4'>
          <Input
            placeholder='Filter Product Name...'
            value={(table.getColumn('product_name')?.getFilterValue() as string) ?? ''}
            onChange={(event) => table.getColumn('product_name')?.setFilterValue(event.target.value)}
            className='max-w-sm'
          />
          <div className='ml-auto flex items-center gap-2'>{/* <AddProduct /> */}</div>
        </div>
        <div className='rounded-md border'>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className='h-24 text-center'>
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className='flex items-center justify-end space-x-2 py-4'>
          <div className='text-xs text-muted-foreground py-4 flex-1 '>
            Showing <strong>{table.getPaginationRowModel().rows.length}</strong> of <strong>{data.length}</strong>{' '}
            results
          </div>
          <div>
            <AutoPagination
              page={table.getState().pagination.pageIndex + 1}
              pageSize={table.getPageCount()}
              pathname={path.adminProducts}
            />
          </div>
        </div>
      </div>
    </ProductTableContext.Provider>
  )
}
