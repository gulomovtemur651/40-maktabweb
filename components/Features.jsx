import { BookOpen, Users, Trophy, Laptop, Shield, Heart } from 'lucide-react'
import Section from './Section'

const features = [
  {
    icon: BookOpen,
    title: 'Sifatli ta\'lim',
    desc: 'Zamonaviy o\'quv dasturlari va ilg\'or ta\'lim metodlari asosida sifatli bilim beramiz.',
  },
  {
    icon: Users,
    title: 'Tajribali o\'qituvchilar',
    desc: 'Yuqori malakali va tajribali pedagoglar jamoasi har bir o\'quvchiga individual yondashadi.',
  },
  {
    icon: Trophy,
    title: 'Sport va san\'at',
    desc: 'O\'quvchilarning har tomonlama rivojlanishi uchun sport va ijodiy to\'garaklar mavjud.',
  },
  {
    icon: Laptop,
    title: 'Zamonaviy texnologiyalar',
    desc: 'Kompyuter sinflari, smart doskalar va raqamli kutubxona xizmatlari.',
  },
  {
    icon: Shield,
    title: 'Xavfsiz muhit',
    desc: 'Bolalar xavfsizligi bizning ustuvor vazifamiz. 24/7 qo\'riqlash xizmati.',
  },
  {
    icon: Heart,
    title: 'Mehr va g\'amxo\'rlik',
    desc: 'Har bir o\'quvchi uchun qulay va do\'stona muhitni ta\'minlaymiz.',
  },
]

export default function Features() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Afzalliklar</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Nima uchun aynan 40-Maktab?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Biz o{"'"}quvchilarimizga eng yaxshi ta{"'"}lim muhitini yaratish uchun doimo ishlaymiz
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-border bg-card p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
