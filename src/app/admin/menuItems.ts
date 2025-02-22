import { path } from '@/common/path'
import { Home, LineChart, ShoppingCart, Users2, Salad, Table, Gamepad2 } from 'lucide-react'

const menuItems = [
  {
    title: 'Dashboard',
    Icon: Home,
    href: path.home
  },
  {
    title: 'Orders',
    Icon: ShoppingCart,
    href: path.home
  },
  {
    title: 'Products',
    Icon: Gamepad2,
    href: path.home
  },
  {
    title: 'Users',
    Icon: Users2,
    href: path.home
  },
  {
    title: 'Analytics',
    Icon: LineChart,
    href: path.home
  }
]

export default menuItems
