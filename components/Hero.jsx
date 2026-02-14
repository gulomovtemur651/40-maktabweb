'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          alt="40-Maktab binosi"
          src="/images/hero-school.jpg"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40 lg:py-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm border border-primary/30 mb-6">
            2024-2025 o{"'"}quv yili
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground text-balance">
            Kelajak bugundan boshlanadi
          </h1>
          <p className="mt-5 text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-xl">
            40-sonli umumiy o{"'"}rta ta{"'"}lim maktabi - zamonaviy ta{"'"}lim, professional o{"'"}qituvchilar va ilg{"'"}or texnologiyalar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
            >
              Hozir ro{"'"}yxatdan o{"'"}ting
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              Batafsil
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
