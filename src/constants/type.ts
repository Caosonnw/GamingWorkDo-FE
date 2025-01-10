export const Role = {
  Owner: 'Owner',
  Employee: 'Employee',
  User: 'User'
} as const

export const RoleValues = [Role.Owner, Role.Employee, Role.User] as const
