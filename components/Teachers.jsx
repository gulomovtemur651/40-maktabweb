import Image from 'next/image'
import { Mail } from 'lucide-react'
import Section from './Section'

const teachers = [
  {
    name: 'Karimov Akbar',
    role: 'Matematika fani o\'qituvchisi',
    img: '/images/teacher-1.jpg',
  },
  {
    name: 'Rahimova Nilufar',
    role: 'Ingliz tili o\'qituvchisi',
    img: '/images/teacher-2.jpg',
  },
  {
    name: 'Toshmatova Dilorom',
    role: 'Ona tili va adabiyot o\'qituvchisi',
    img: '/images/teacher-3.jpg',
  },
  {
    name: 'Nazarov Jasur',
    role: 'Informatika fani o\'qituvchisi',
    img: '/images/teacher-4.jpg',
  },
]

export default function Teachers() {
  return (
    <Section id="teachers">
      <div className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Jamoa</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
              Bizning o{"'"}qituvchilar
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Professional va mehribon pedagoglar jamoasi
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((t) => (
              <div
                key={t.name}
                className="group relative rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    alt={t.name}
                    src={t.img}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      aria-label={`${t.name}ga xabar yozish`}
                      className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-foreground">{t.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
