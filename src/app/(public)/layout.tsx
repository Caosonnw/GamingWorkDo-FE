import ChatBubble from '@/app/(public)/components/chatbubble'
import Footer from '@/app/(public)/components/footer'
import NavItems from '@/app/(public)/components/nav-items'
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
      <ChatBubble />
      <Footer />
    </div>
  )
}
