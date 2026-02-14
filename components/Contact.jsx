'use client'

import { useState } from 'react'
import { Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react'
import Section from './Section'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Ismingizni kiriting'
    if (!form.email.trim()) e.email = 'Email manzilingizni kiriting'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email formati noto\'g\'ri'
    if (!form.phone.trim()) e.phone = 'Telefon raqamingizni kiriting'
    if (!form.message.trim()) e.message = 'Xabaringizni kiriting'
    return e
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) {
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', message: '' })
    }
  }

  function handleChange(field) {
    return (ev) => {
      setForm(prev => ({ ...prev, [field]: ev.target.value }))
      if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const inputBase = 'w-full rounded-lg border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:ring-2 focus:ring-primary/30 focus:border-primary'

  return (
    <Section id="contact">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Aloqa</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Biz bilan bog{"'"}laning
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Savollaringiz bormi? Biz bilan bog{"'"}laning, albatta javob beramiz
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Manzil</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Toshkent shahri, Chilonzor tumani, 40-maktab
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Telefon</h3>
                  <p className="mt-1 text-sm text-muted-foreground">+998 71 123 45 67</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="mt-1 text-sm text-muted-foreground">info@40maktab.uz</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-12 text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Xabaringiz yuborildi!</h3>
                <p className="mt-2 text-muted-foreground">
                  Tez orada siz bilan bog{"'"}lanamiz
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Yana xabar yuborish
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 md:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Ism</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Ismingiz"
                      value={form.name}
                      onChange={handleChange('name')}
                      className={`${inputBase} ${errors.name ? 'border-red-400' : 'border-border'}`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="email@misol.uz"
                      value={form.email}
                      onChange={handleChange('email')}
                      className={`${inputBase} ${errors.email ? 'border-red-400' : 'border-border'}`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Telefon</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    className={`${inputBase} ${errors.phone ? 'border-red-400' : 'border-border'}`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>
                <div className="mt-5">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Xabar</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Xabaringizni yozing..."
                    value={form.message}
                    onChange={handleChange('message')}
                    className={`${inputBase} resize-none ${errors.message ? 'border-red-400' : 'border-border'}`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors w-full sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  Yuborish
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
