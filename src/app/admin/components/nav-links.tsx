'use client'
import menuItems from '@/app/admin/menuItems'
import { path } from '@/common/path'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { ChefHat, Settings } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <TooltipProvider>
      <aside className='fixed inset-y-0 left-0 z-10 hidden w-[85px] flex-col border-r bg-background sm:flex'>
        <nav className='flex flex-col items-center gap-4 px-2 py-4'>
          {menuItems.map((Item, index) => {
            const isActive = pathname === Item.href
            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Link
                    href={Item.href}
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8',
                      {
                        'bg-accent text-accent-foreground': isActive,
                        'text-muted-foreground': !isActive
                      }
                    )}
                  >
                    <Item.Icon className='h-5 w-5' />
                    <span className='sr-only'>{Item.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side='right'>{Item.title}</TooltipContent>
              </Tooltip>
            )
          })}
        </nav>
        <nav className='mt-auto flex flex-col items-center gap-4 px-2 py-4'>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='/manage/setting'
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8',
                  {
                    'bg-accent text-accent-foreground': pathname === '/manage/setting',
                    'text-muted-foreground': pathname !== '/manage/setting'
                  }
                )}
              >
                <Settings className='h-5 w-5' />
                <span className='sr-only'>Cài đặt</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Cài đặt</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
    </TooltipProvider>
  )
}
