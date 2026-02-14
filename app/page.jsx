import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Bento from '../components/Bento'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import GithubPreview from '../components/GithubPreview'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Bento />
        <GithubPreview />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
