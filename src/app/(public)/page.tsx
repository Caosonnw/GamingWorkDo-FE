import Banner from '@/app/(public)/components/banner'
import Partner from '@/app/(public)/components/partners'
import Product from '@/app/(public)/components/product'

export default function Home() {
  return (
    <main>
      <Banner />
      <Product />
      <Partner />
    </main>
  )
}
