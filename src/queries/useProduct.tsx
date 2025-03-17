import productServ from '@/services/productServ'
import { useQuery } from '@tanstack/react-query'

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ['getAllProducts'],
    queryFn: productServ.getAllProducts
  })
}
