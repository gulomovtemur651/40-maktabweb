import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: '40-Maktab | Toshkent shahridagi zamonaviy ta\'lim maskani',
  description: '40-sonli umumiy o\'rta ta\'lim maktabi - sifatli ta\'lim, zamonaviy muhit va professional o\'qituvchilar jamoasi.',
}

export const viewport = {
  themeColor: '#1e40af',
}

export default function RootLayout({ children }) {
  return (
    <html lang="uz" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen font-sans">
        {children}
      </body>
    </html>
  )
}
