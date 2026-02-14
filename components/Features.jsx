import { Rocket, Shield, Zap } from 'lucide-react'
import Section from './Section'

const items = [
  {
    icon: Rocket,
    title: 'Tez va yengil',
    desc: 'Optimallashtirilgan kod va animatsiyalar bilan yuqori tezlik.'
  },
  {
    icon: Shield,
    title: 'Ishonchli',
    desc: 'Eng yaxshi amaliyotlar va xavfsizlik tamoyillariga asoslangan.'
  },
  {
    icon: Zap,
    title: 'Interaktiv',
    desc: 'Framer Motion yordamida silliq va yoqimli harakatlar.'
  }
]

export default function Features() {
  return (
    <Section id="services">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Xizmatlar</h2>
          <p className="mt-3 text-slate-400">Siz uchun eng kerakli jihatlar</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-xl p-6 transition-transform hover:scale-105">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-500/30 to-cyan-400/30 text-white">
                <Icon />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
