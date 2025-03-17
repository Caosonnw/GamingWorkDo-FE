'use client'

import menuItems from '@/app/admin/menuItems'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from '@/components/blocks/sidebar'
import { useAccountMe } from '@/queries/useUser'

import { ChevronsUpDown, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [accessToken, setAccessToken] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken')
      setAccessToken(token)
    }
  }, [])

  const { data, isLoading } = useAccountMe(accessToken)
  const account = data?.payload?.data

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className='text-xl font-bold text-black justify-center'>
              <a href='/'>Gaming Work Do</a>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <a href={item.href}>
                        <item.Icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarGroup>
            <SidebarMenuButton className='w-full justify-between gap-3 h-12'>
              <div className='flex items-center gap-2'>
                <User className='h-5 w-5 rounded-md' />
                {isLoading ? (
                  <div className='flex flex-col items-start'>
                    <Skeleton className='h-4 w-24' />
                    <Skeleton className='h-3 w-32 mt-1' />
                  </div>
                ) : (
                  <div className='flex flex-col items-start'>
                    <span className='text-sm font-medium'>{account?.full_name}</span>
                    <span className='text-xs text-muted-foreground'>{account?.email}</span>
                  </div>
                )}
              </div>
              <ChevronsUpDown className='h-5 w-5 rounded-md' />
            </SidebarMenuButton>
          </SidebarGroup>
        </SidebarFooter>
      </Sidebar>

      <main className='flex-1 min-w-100vh'>
        <div className='px-4 py-2'>
          <SidebarTrigger className='h-4 w-4 mt-2' />
        </div>
        {children}
      </main>
    </SidebarProvider>
  )
}
