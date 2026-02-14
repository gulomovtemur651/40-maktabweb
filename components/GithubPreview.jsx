/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react'

export default function GithubPreview() {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  useEffect(() => {
    let mounted = true
    fetch('/api/github')
      .then(r => r.json().then(j => ({ ok: r.ok, j })))
      .then(({ ok, j }) => {
        if (!mounted) return
        if (ok) setData(j)
        else setError(j?.error || 'Xatolik')
      })
      .catch(() => mounted && setError('Ulanishda xatolik'))
    return () => {
      mounted = false
    }
  }, [])
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="glass rounded-2xl p-6">
        <h3 className="text-xl font-semibold">GitHub Ma’lumotlari</h3>
        {!data && !error && <p className="mt-2 text-sm text-slate-400">Yuklanmoqda…</p>}
        {error && <p className="mt-2 text-sm text-rose-400">{error}. .env.local ichida GITHUB_TOKEN o‘rnating.</p>}
        {data && (
          <div className="mt-4">
            <div className="flex items-center gap-2">
              <span className="gradient-text font-semibold">{data.user.name || data.user.login}</span>
              <span className="text-slate-400 text-sm">@{data.user.login}</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {data.repos.map(r => (
                <a
                  key={r.id}
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="glass rounded-lg p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="font-medium">{r.name}</div>
                  {r.description && <div className="text-sm text-slate-400 mt-1">{r.description}</div>}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
