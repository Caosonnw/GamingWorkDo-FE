import http from '@/lib/http'
import { ApiResponseType } from '@/schema/res.schema'

const prefix = '/friends'

const friendServ = {
  addFriend: (userId: number) => {
    return http.post<ApiResponseType>(`${prefix}/add-friend/${userId}`, {})
  },
  getFriendByUserId: (userId: number) => {
    return http.get<ApiResponseType>(`${prefix}/get-friends-by-userId/${userId}`)
  }
}

export default friendServ
