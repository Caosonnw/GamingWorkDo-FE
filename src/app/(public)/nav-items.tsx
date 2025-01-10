'use client'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { Globe, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function NavItems({ className }: { className?: string }) {
  return (
    <header className='w-full border-b bg-black text-white sticky top-0 px-80 z-999999'>
      <div className='container flex items-center justify-between h-[70px] relative'>
        <NavigationMenu className='hidden md:flex relative'>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='grid grid-cols-[250px_250px_1fr] gap-6 p-6 w-[800px]'>
                  <div>
                    <h4 className='text-lg font-semibold mb-4'>Category Page</h4>
                    <div className='grid gap-2'>
                      {[
                        'Gaming PCs',
                        'Game Remote',
                        'Gaming Cards',
                        'Gaming Chairs',
                        'Gaming Monitor',
                        'Game Console'
                      ].map((category) => (
                        <NavigationMenuLink asChild key={category}>
                          <Link
                            href={`/category/${category.toLowerCase().replace(' ', '-')}`}
                            className='block p-2 hover:bg-accent rounded-md'
                          >
                            {category}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold mb-4'>Feature product</h4>
                    <div className='grid gap-2'>
                      {[
                        'Gaming Office Chair',
                        'Gaming Chair For Gamers With Lumbar',
                        'HTC Vive Tracker (3.0) - PC',
                        'VR Headset With Headphones',
                        'RX 590 GTS Graphics Card',
                        'RX 680 GTS Graphics Card'
                      ].map((product) => (
                        <NavigationMenuLink asChild key={product}>
                          <Link
                            href={`/product/${product.toLowerCase().replace(' ', '-')}`}
                            className='block p-2 hover:bg-accent rounded-md'
                          >
                            {product}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                  <div className='grid gap-4'>
                    <Image
                      src='/placeholder.svg?height=200&width=300'
                      alt='Gaming Setup'
                      width={300}
                      height={200}
                      className='rounded-lg object-cover'
                    />
                    <Image
                      src='/placeholder.svg?height=200&width=300'
                      alt='Gaming Experience'
                      width={300}
                      height={200}
                      className='rounded-lg object-cover'
                    />
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='w-48 p-2'>
                  <NavigationMenuLink asChild>
                    <Link href='/product' className='block p-2 hover:bg-accent'>
                      Product Detail
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='w-48 p-2'>
                  <NavigationMenuLink asChild>
                    <Link href='/about' className='block p-2 hover:bg-accent'>
                      About
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href='/contact' className='block p-2 hover:bg-accent'>
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='w-48 p-2'>
                  <NavigationMenuLink asChild>
                    <Link href='/blog' className='block p-2 hover:bg-accent'>
                      All Posts
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className='absolute left-1/2 transform -translate-x-1/2'>
          <Link href='/' className='text-xl font-bold'>
            <Image
              src='/img/logo-gaming-workdo.webp'
              alt='Gaming Setup'
              width={300}
              height={200}
              className='w-[130px]'
              priority
            />
          </Link>
        </div>

        <div className='ml-auto flex items-center space-x-4'>
          <div className='hidden md:flex items-center space-x-4'>
            <div className='flex items-center'>
              <span className='mr-2'>My Cart:</span>
              <span>$0.00</span>
            </div>
            <Button variant='ghost' size='icon'>
              <ShoppingCart className='h-5 w-5' />
              <span className='sr-only'>Shopping cart</span>
            </Button>
            <Button variant='ghost' size='icon'>
              <User className='h-5 w-5' />
              <span className='sr-only'>User account</span>
            </Button>
            <Button variant='ghost' size='icon'>
              <Globe className='h-5 w-5' />
              <span className='sr-only'>Language selection</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost'>USD</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>USD</DropdownMenuItem>
                <DropdownMenuItem>EUR</DropdownMenuItem>
                <DropdownMenuItem>GBP</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
