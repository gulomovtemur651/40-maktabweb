import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Bog‘lanish</h2>
          <p className="mt-3 text-slate-400">Fikr-mulohaza va takliflaringizni yuboring</p>
        </div>
        <form className="mx-auto mt-10 max-w-2xl grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Ism"
            className="glass rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/40"
          />
          <input
            type="email"
            placeholder="Email"
            className="glass rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/40"
          />
          <textarea
            rows={6}
            placeholder="Xabar"
            className="glass rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/40"
          />
          <div className="flex items-center justify-center">
            <button className="btn-gradient rounded-lg px-6 py-3 text-sm font-medium">
              Yuborish
            </button>
          </div>
        </form>
      </div>
    </Section>
  )
}
