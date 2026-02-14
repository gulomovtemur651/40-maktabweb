import { Github, Linkedin, Twitter } from 'lucide-react'

const socials = [
  { href: '#', label: 'Twitter', Icon: Twitter },
  { href: '#', label: 'GitHub', Icon: Github },
  { href: '#', label: 'LinkedIn', Icon: Linkedin }
]

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} ZenLabs. Barcha huquqlar himoyalangan.</p>
        <div className="flex items-center gap-4">
          {socials.map(({ href, Icon, label }) => (
            <a key={label} aria-label={label} href={href} className="glass rounded-lg p-2 hover:bg-white/10 transition-colors">
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
