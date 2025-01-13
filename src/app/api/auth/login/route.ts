import { HttpError } from '@/lib/http'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { LoginBodyType } from '@/schema/auth.schema'
import authServ from '@/services/authServ'

export async function POST(request: Request) {
  const body = (await request.json()) as LoginBodyType
  const cookieStore = await cookies()

  try {
    const { payload } = await authServ.sLogin(body)
    const { accessToken, refreshToken } = payload.data

    const decodedAccessToken = jwt.decode(accessToken) as { exp: number }
    const decodedRefreshToken = jwt.decode(refreshToken) as { exp: number }

    cookieStore.set('accessToken', accessToken, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      expires: new Date(decodedAccessToken.exp * 1000)
    })
    cookieStore.set('refreshToken', refreshToken, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      expires: new Date(decodedRefreshToken.exp * 1000)
    })
    return new Response(JSON.stringify(payload), { status: 200 })
  } catch (error) {
    if (error instanceof HttpError) {
      return new Response(JSON.stringify({ message: error.message }), { status: error.status })
    } else {
      return new Response(JSON.stringify({ message: 'An unexpected error occurred' }), { status: 500 })
    }
  }
}
