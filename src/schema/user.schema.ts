import { Role } from '@/constants/type'
import { LoginRes } from '@/schema/auth.schema'
import z from 'zod'

export const AccountSchema = z.object({
  user_id: z.number(),
  full_name: z.string(),
  email: z.string(),
  phone_number: z.string(),
  date_of_birth: z.string(),
  role: z.enum([Role.OWNER, Role.USER, Role.ADMIN])
})

export type AccountType = z.TypeOf<typeof AccountSchema>

export const AccountListRes = z.object({
  data: z.array(AccountSchema),
  message: z.string()
})

export type AccountListResType = z.TypeOf<typeof AccountListRes>

export const AccountRes = z
  .object({
    data: AccountSchema,
    message: z.string()
  })
  .strict()

export type AccountResType = z.TypeOf<typeof AccountRes>

export const CreateEmployeeAccountBody = z
  .object({
    name: z.string().trim().min(2).max(256),
    email: z.string().email(),
    avatar: z.string().url().optional(),
    password: z.string().min(6).max(100),
    confirmPassword: z.string().min(6).max(100)
  })
  .strict()
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Mật khẩu không khớp',
        path: ['confirmPassword']
      })
    }
  })

export type CreateEmployeeAccountBodyType = z.TypeOf<typeof CreateEmployeeAccountBody>

export const UpdateEmployeeAccountBody = z
  .object({
    name: z.string().trim().min(2).max(256),
    email: z.string().email(),
    avatar: z.string().url().optional(),
    changePassword: z.boolean().optional(),
    password: z.string().min(6).max(100).optional(),
    confirmPassword: z.string().min(6).max(100).optional(),
    role: z.enum([Role.OWNER, Role.USER]).optional().default(Role.USER)
  })
  .strict()
  .superRefine(({ confirmPassword, password, changePassword }, ctx) => {
    if (changePassword) {
      if (!password || !confirmPassword) {
        ctx.addIssue({
          code: 'custom',
          message: 'Hãy nhập mật khẩu mới và xác nhận mật khẩu mới',
          path: ['changePassword']
        })
      } else if (confirmPassword !== password) {
        ctx.addIssue({
          code: 'custom',
          message: 'Mật khẩu không khớp',
          path: ['confirmPassword']
        })
      }
    }
  })

export type UpdateEmployeeAccountBodyType = z.TypeOf<typeof UpdateEmployeeAccountBody>

export const UpdateMeBody = z
  .object({
    name: z.string().trim().min(2).max(256),
    avatar: z.string().url().optional()
  })
  .strict()

export type UpdateMeBodyType = z.TypeOf<typeof UpdateMeBody>

export const ChangePasswordBody = z
  .object({
    oldPassword: z.string().min(6).max(100),
    password: z.string().min(6).max(100),
    confirmPassword: z.string().min(6).max(100)
  })
  .strict()
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Mật khẩu mới không khớp',
        path: ['confirmPassword']
      })
    }
  })

export type ChangePasswordBodyType = z.TypeOf<typeof ChangePasswordBody>

export const ChangePasswordV2Body = ChangePasswordBody

export type ChangePasswordV2BodyType = z.TypeOf<typeof ChangePasswordV2Body>

export const ChangePasswordV2Res = LoginRes

export type ChangePasswordV2ResType = z.TypeOf<typeof ChangePasswordV2Res>

export const AccountIdParam = z.object({
  id: z.coerce.number()
})

export type AccountIdParamType = z.TypeOf<typeof AccountIdParam>
