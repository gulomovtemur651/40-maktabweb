'use client'

import Link from 'next/link'
import { Menu, X, GraduationCap } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { href: '#home', label: 'Bosh sahifa' },
  { href: '#about', label: 'Biz haqimizda' },
  { href: '#achievements', label: 'Yutuqlar' },
  { href: '#news', label: 'Yangiliklar' },
  { href: '#teachers', label: 'O\'qituvchilar' },
  { href: '#contact', label: 'Aloqa' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl text-foreground">40-Maktab</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(it => (
            <a
              key={it.href}
              href={it.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {"Ro'yxatdan o'tish"}
          </a>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          className="lg:hidden text-foreground p-2"
          aria-label={open ? 'Menuni yopish' : 'Menuni ochish'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navItems.map(it => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg px-3 py-2.5 transition-colors"
              >
                {it.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {"Ro'yxatdan o'tish"}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
