import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Section from './Section'

export default function Hero() {
  return (
    <Section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-400/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-indigo-500/25 to-cyan-400/25 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32 md:pb-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Minimalistik va premium landing sahifa
            </h1>
            <p className="mt-4 text-slate-300 md:text-lg">
              Ko‘p bo‘shliq, yumshoq soyalar va chiroyli tipografiya bilan yaratilgan, zamonaviy va moslashuvchan dizayn.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="#services" className="btn-gradient rounded-lg px-6 py-3 text-sm font-medium">
                Xizmatlarni ko‘rish
              </Link>
              <Link href="#contact" className="rounded-lg px-6 py-3 text-sm font-medium border border-white/10 hover:border-white/20 transition-colors">
                Bog‘lanish
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl glass">
              <Image
                alt="Hero"
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
