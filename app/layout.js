import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agrichain',
  description: 'Blockchain on the network chain',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
