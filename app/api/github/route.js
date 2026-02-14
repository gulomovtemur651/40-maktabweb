export async function GET() {
  const token = process.env.GITHUB_TOKEN
  if (!token) {
    return new Response(JSON.stringify({ error: 'GITHUB_TOKEN missing' }), { status: 500 })
  }
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'nextjs-app'
  }
  const userRes = await fetch('https://api.github.com/user', { headers, cache: 'no-store' })
  if (!userRes.ok) {
    const txt = await userRes.text()
    return new Response(JSON.stringify({ error: 'GitHub API error', details: txt }), { status: userRes.status })
  }
  const user = await userRes.json()
  const reposRes = await fetch('https://api.github.com/user/repos?per_page=6&sort=updated', { headers, cache: 'no-store' })
  const repos = reposRes.ok ? await reposRes.json() : []
  return new Response(JSON.stringify({ user, repos }), { status: 200, headers: { 'Content-Type': 'application/json' } })
}
