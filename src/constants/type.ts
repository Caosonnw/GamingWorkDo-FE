export const Role = {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  USER: 'USER'
} as const

export const RoleValues = [Role.OWNER, Role.ADMIN, Role.USER] as const

export const TokenType = {
  AccessToken: 'AccessToken',
  RefreshToken: 'RefreshToken'
} as const
