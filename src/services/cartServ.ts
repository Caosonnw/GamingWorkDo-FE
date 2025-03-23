import http from '@/lib/http'
import { ApiResponseType } from '@/schema/res.schema'

const prefix = '/cart'

const cartServ = {
  getCartByUserId: (userId: number) => {
    return http.get<ApiResponseType>(`${prefix}/get-cart-by-user-id/${userId}`)
  },
  addProductToCart: (user_id: number, product_variant_id: number, quantity: number) => {
    return http.put<ApiResponseType>(`${prefix}/add-product-to-cart`, { user_id, product_variant_id, quantity })
  }
}

export default cartServ
