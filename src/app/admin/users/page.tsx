import UserTable from '@/app/admin/users/components/user-table'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Suspense } from 'react'

export default function AccountsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserTable />
    </Suspense>
  )
}
