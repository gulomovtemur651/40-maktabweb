'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const items = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ]
  return (
    <header className="sticky top-0 z-50">
      <div className="glass">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="#home" className="font-semibold tracking-tight text-lg">
            <span className="gradient-text">ZenLabs</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {items.map(it => (
              <a key={it.href} href={it.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {it.label}
              </a>
            ))}
          </nav>
          <button onClick={() => setOpen(v => !v)} className="md:hidden text-slate-200">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 px-6 pb-4">
            <nav className="flex flex-col gap-3">
              {items.map(it => (
                <a key={it.href} href={it.href} onClick={() => setOpen(false)} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {it.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
