import ProductTable from '@/app/admin/products/components/product-table'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Suspense } from 'react'

export default function ProductPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductTable />
    </Suspense>
  )
}
