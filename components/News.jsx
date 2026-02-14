import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'
import Section from './Section'

const news = [
  {
    title: 'Fan olimpiadalarida muvaffaqiyat',
    desc: 'O\'quvchilarimiz viloyat fan olimpiadalarida 5 ta oltin va 3 ta kumush medal qo\'lga kiritdi.',
    date: '2025-01-15',
    img: '/images/news-1.jpg',
  },
  {
    title: 'Yangi o\'quv yili boshlanmoqda',
    desc: 'Yangilangan o\'quv dasturlari va zamonaviy jihozlar bilan yangi o\'quv yiliga tayyormiz.',
    date: '2025-02-01',
    img: '/images/news-2.jpg',
  },
  {
    title: 'Sport musobaqalari natijalari',
    desc: 'Maktabimiz futbol jamoasi shahar chempionatida 2-o\'rinni egalladi.',
    date: '2025-01-28',
    img: '/images/news-3.jpg',
  },
]

export default function News() {
  return (
    <Section id="news">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Yangiliklar</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            So{"'"}nggi yangiliklar
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Maktabimiz hayotidagi eng so{"'"}nggi voqealar va yutuqlar
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.title}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  alt={item.title}
                  src={item.img}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <time>{item.date}</time>
                </div>
                <h3 className="mt-3 font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all">
                  Batafsil <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
