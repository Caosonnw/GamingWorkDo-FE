import http from '@/lib/http'
import { LoginBodyType, LogoutBodyType, RefreshTokenBodyType, RefreshTokenResType } from '@/schema/auth.schema'
import { ApiResponseType } from '@/schema/res.schema'

const authServ = {
  sLogin: (body: LoginBodyType) => http.post<ApiResponseType>('/auth/login', body),
  login: (body: LoginBodyType) =>
    http.post<ApiResponseType>('/api/auth/login', body, {
      baseUrl: ''
    }),
  sLogout: (
    body: LogoutBodyType & {
      accessToken: string
    }
  ) =>
    http.post(
      '/auth/logout',
      {
        refreshToken: body.refreshToken
      },
      {
        headers: {
          Authorization: `Bearer ${body.accessToken}`
        }
      }
    ),
  // client gọi đến route handler, không cần truyền AT và RT vào body vì AT và RT tự động gửi thông qua cookie rồi
  logout: () => http.post('/api/auth/logout', null, { baseUrl: '' }),

  refreshTokenRequest: null as Promise<{
    status: number
    payload: RefreshTokenResType
  }> | null,

  sRefreshToken: (body: RefreshTokenBodyType) => http.post<RefreshTokenResType>('/auth/refresh-token', body),

  async refreshToken() {
    if (this.refreshTokenRequest) {
      return this.refreshTokenRequest
    }
    this.refreshTokenRequest = http.post<RefreshTokenResType>('/api/auth/refresh-token', null, {
      baseUrl: ''
    })
    const result = await this.refreshTokenRequest
    this.refreshTokenRequest = null
    return result
  }
}

export default authServ
