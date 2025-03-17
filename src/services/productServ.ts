import http from '@/lib/http'
import { ApiResponseType } from '@/schema/res.schema'

const prefix = '/products'

const productServ = {
  getAllProducts: () => {
    return http.get<ApiResponseType>(`${prefix}/get-all-products`)
  }
}

export default productServ
