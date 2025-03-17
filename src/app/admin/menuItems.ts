import { path } from '@/common/path'
import { Home, LineChart, ShoppingCart, Users2, Salad, Table, Gamepad2 } from 'lucide-react'

const menuItems = [
  {
    title: 'Dashboard',
    Icon: Home,
    href: path.admin
  },
  {
    title: 'Orders',
    Icon: ShoppingCart,
    href: path.adminOrders
  },
  {
    title: 'Products',
    Icon: Gamepad2,
    href: path.adminProducts
  },
  {
    title: 'Users',
    Icon: Users2,
    href: path.adminUsers
  },
  {
    title: 'Analytics',
    Icon: LineChart,
    href: path.adminAnalytics
  }
]

export default menuItems
