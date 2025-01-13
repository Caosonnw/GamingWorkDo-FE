import Footer from '@/app/(public)/footer'
import NavItems from '@/app/(public)/nav-items'
import React from 'react'

export default function layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <NavItems />
      {children}
      <Footer />
    </div>
  )
}
