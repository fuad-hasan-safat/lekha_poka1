import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const poppins = localFont({
  src: [
    {
      path: './LiSirajee.ttf',
      weight: '400'
    },
    {
      path: './LiSirajee.ttf',
      weight: '700'
    }
  ],
  variable: '--font-kangsoMj'
})

export const metadata: Metadata = {
  title: 'লেখার পোকা',
  description: 'লাইভ টেকনোলজিস',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
