import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/ThemeProvider'
import { AlertProvider } from '@/context/AlertContext'
import AppProvider from '@/context/AppProvider'

const fontSans = Outfit({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Gaming WorkDo',
  description: 'The best e-commerce platform for gamers'
}
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider>
          <AppProvider>
            <AlertProvider>{children}</AlertProvider>
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
