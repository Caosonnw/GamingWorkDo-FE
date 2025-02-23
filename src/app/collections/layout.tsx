import Footer from '@/app/(public)/components/footer'
import NavItems from '@/app/(public)/components/nav-items'
import MobileNavLinks from '@/app/admin/components/mobile-nav-links'
import NavLinks from '@/app/admin/components/nav-links'
import { ModeToggle } from '@/components/ModeToogle'

export default function Layout({
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
