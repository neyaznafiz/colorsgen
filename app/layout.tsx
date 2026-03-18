import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Color Palette Generator',
  description: 'Generate stunning palettes and shades using an AI-inspired interface.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-stone-900`}>
        <div className="flex flex-col md:flex-row min-h-screen">
          <Sidebar />
          <div className="flex-1 md:ml-64 p-6 md:p-12 overflow-x-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
