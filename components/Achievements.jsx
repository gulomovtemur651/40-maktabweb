'use client'

import { useEffect, useState, useRef } from 'react'
import { GraduationCap, Users, Trophy, Award } from 'lucide-react'
import Section from './Section'

const stats = [
  { icon: GraduationCap, value: 500, suffix: '+', label: 'O\'quvchilar' },
  { icon: Users, value: 50, suffix: '+', label: 'O\'qituvchilar' },
  { icon: Trophy, value: 20, suffix: '+', label: 'Sport yutuqlari' },
  { icon: Award, value: 100, suffix: '+', label: 'Olimpiada g\'oliblari' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let current = 0
          const step = Math.max(1, Math.floor(target / 60))
          const interval = setInterval(() => {
            current += step
            if (current >= target) {
              current = target
              clearInterval(interval)
            }
            setCount(current)
          }, 20)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </span>
  )
}

export default function Achievements() {
  return (
    <Section id="achievements">
      <div className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Raqamlarda</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
              Bizning yutuqlarimiz
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, suffix, label }) => (
              <div key={label} className="text-center">
                <div className="flex items-center justify-center mx-auto h-16 w-16 rounded-2xl bg-primary/10 text-primary mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <Counter target={value} suffix={suffix} />
                <p className="mt-2 text-sm font-medium text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
