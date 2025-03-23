import { decodeToken } from '@/lib/utils'
import cartServ from '@/services/cartServ'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useGetCartByUserId = (userId: any) => {
  return useQuery({
    queryKey: ['getCartByUserId', userId],
    queryFn: () => (userId ? cartServ.getCartByUserId(userId) : Promise.reject('Không nhận được User ID')),
    enabled: !!userId
  })
}

export const useAddProductToCart = () => {
  return useMutation({
    mutationFn: ({ user_id, product_variant_id, quantity }: { user_id: number; product_variant_id: number; quantity: number }) =>
      cartServ.addProductToCart(user_id, product_variant_id, quantity)
  })
}
