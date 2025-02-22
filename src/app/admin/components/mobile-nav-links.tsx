'use client'
import menuItems from '@/app/admin/menuItems'
import { path } from '@/common/path'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { ChefHat, PanelLeft } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileNavLinks() {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant='outline' className='sm:hidden'>
          <PanelLeft className='h-5 w-5' />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='sm:max-w-xs'>
        <SheetHeader className='sr-only'>
          <SheetTitle />
          <SheetDescription />
        </SheetHeader>
        <nav className='grid gap-6 text-lg font-medium'>
          {menuItems.map((Item, index) => {
            const isActive = pathname === Item.href
            return (
              <Link
                key={index}
                href={Item.href}
                className={cn('flex items-center gap-4 px-2.5  hover:text-foreground', {
                  'text-foreground': isActive,
                  'text-muted-foreground': !isActive
                })}
              >
                <Item.Icon className='h-5 w-5' />
                {Item.title}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
