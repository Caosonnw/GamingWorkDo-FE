import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { StatusProduct } from '@/constants/type'
import { ProductListType } from '@/schema/product.schema'

type ProductDetailModalProps = {
  product: ProductListType['data'][0] | null
  onClose: () => void
}
const statusColors: Record<string, string> = {
  [StatusProduct.Available]: 'bg-green-500 text-white',
  [StatusProduct.OutOfStock]: 'bg-red-500 text-white'
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null

  return (
    <Dialog open={!!product} onOpenChange={onClose}>
      <DialogContent className='max-w-4xl w-full'>
        <DialogHeader>
          <DialogTitle>{product.product_name}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-4'>
          <div>
            <strong>Category:</strong> {product.categories?.category_name || 'Unknown'}
          </div>
          <div>
            <strong>Brand:</strong> {product.brands?.brand_name || 'Unknown'}
          </div>
          <div>
            <strong>Status:</strong>
            <Badge className={`ml-2 px-2 py-1 rounded-md ${statusColors[product.product_status] || 'bg-gray-300'}`}>
              {product.product_status}
            </Badge>
          </div>
          <div>
            <strong>Variants:</strong>
            {product.product_variants && product.product_variants.length > 0 ? (
              <table className='w-full border-collapse border border-gray-300 mt-2'>
                <thead>
                  <tr className='bg-gray-200'>
                    <th className='border border-gray-300 px-4 py-2'>Image</th>
                    <th className='border border-gray-300 px-4 py-2'>Variant Name</th>
                    <th className='border border-gray-300 px-4 py-2'>Price</th>
                    <th className='border border-gray-300 px-4 py-2'>Status</th>
                    <th className='border border-gray-300 px-4 py-2'>Rating</th>
                    <th className='border border-gray-300 px-4 py-2'>Attributes</th>
                  </tr>
                </thead>
                <tbody>
                  {product.product_variants.map((variant) => (
                    <tr key={variant.variant_id} className='border border-gray-300'>
                      <td className='border border-gray-300 px-4 py-2 w-[180px]'>
                        <div className='flex gap-5'>
                          <img
                            src={variant.product_image_main}
                            alt='Main'
                            className='w-16 h-16 object-cover rounded-md border'
                          />
                          <img
                            src={variant.product_image_hover}
                            alt='Main'
                            className='w-16 h-16 object-cover rounded-md border'
                          />
                        </div>
                      </td>
                      <td className='border border-gray-300 px-4 py-2'>{variant.variant_name}</td>
                      <td className='border border-gray-300 px-4 py-2'>${variant.variant_price}</td>
                      <td className='border border-gray-300 px-4 py-2'>
                        <Badge
                          className={`px-2 py-1 rounded-md ${statusColors[variant.product_status] || 'bg-gray-300'}`}
                        >
                          {variant.product_status}
                        </Badge>
                      </td>
                      <td className='border border-gray-300 px-4 py-2'>{variant.rating} ⭐</td>
                      <td className='border border-gray-300 px-4 py-2'>
                        <ul>
                          {variant.attributes &&
                            Object.entries(variant.attributes).map(([key, value]) => (
                              <li key={key}>
                                <strong>{key}:</strong> {value}
                              </li>
                            ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No Variants</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductDetailModal
