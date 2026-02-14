import './globals.css'

export const metadata = {
  title: 'Minimal Premium Landing',
  description: 'Modern responsive landing page with Next.js, Tailwind CSS, and Framer Motion'
}

export default function RootLayout({ children }) {
  return (
    <html lang="uz" className="dark">
      <body className="min-h-screen bg-[#0f172a] text-slate-100 antialiased selection:bg-indigo-500/40">
        {children}
      </body>
    </html>
  )
}
