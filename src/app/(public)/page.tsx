import About from '@/app/(public)/components/about'
import Banner from '@/app/(public)/components/banner'
import Categories from '@/app/(public)/components/categories'
import Partner from '@/app/(public)/components/partners'
import Product from '@/app/(public)/components/product'
import Story from '@/app/(public)/components/story'
import Subscribe from '@/app/(public)/components/subscribe'

export default function Home() {
  return (
    <main>
      <Banner />
      <Product />
      <Partner />
      <Categories />
      <Subscribe />
      <Story />
      <About />
    </main>
  )
}
