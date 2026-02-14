import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Achievements from '../components/Achievements'
import News from '../components/News'
import Teachers from '../components/Teachers'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Achievements />
        <News />
        <Teachers />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
