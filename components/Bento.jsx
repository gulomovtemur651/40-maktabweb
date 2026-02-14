import Image from 'next/image'
import Section from './Section'

const cards = [
  {
    span: 'md:col-span-2',
    title: 'Premium tipografiya',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop'
  },
  {
    span: '',
    title: 'Gradient tugmalar',
    img: 'https://images.unsplash.com/photo-1495462911434-be47104d70fa?q=80&w=1600&auto=format&fit=crop'
  },
  {
    span: '',
    title: 'Silliq animatsiyalar',
    img: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop'
  },
  {
    span: 'md:col-span-2',
    title: 'Keng bo‘shliq va balans',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function Bento() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Bento Grid</h2>
            <p className="mt-2 text-slate-400">Loyihalar va g‘oyalar kollej ko‘rinishida</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(card => (
            <div key={card.title} className={`group relative overflow-hidden rounded-2xl glass ${card.span}`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
              <Image
                alt={card.title}
                src={card.img}
                width={1600}
                height={1200}
                className="h-64 md:h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-semibold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
