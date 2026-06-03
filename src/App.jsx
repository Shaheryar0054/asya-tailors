import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Showcase from './components/Showcase'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Marquee />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Contact />
      </main>
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923150505488"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed', bottom: '32px', right: '32px',
          zIndex: 9999, width: '60px', height: '60px',
          borderRadius: '50%', background: '#25D366',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
          transition: 'all 0.3s ease', textDecoration: 'none',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.1)'
          e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,211,102,0.6)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)'
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="white">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.484.672 4.81 1.845 6.807L2 30l7.405-1.818A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 01-5.822-1.587l-.418-.248-4.33 1.063 1.094-4.222-.272-.434A11.46 11.46 0 014.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.27-8.37c-.344-.172-2.036-1.004-2.352-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.037-1.912-2.381-.2-.344-.021-.53.15-.701.155-.154.344-.402.516-.603.172-.2.23-.344.344-.573.115-.23.058-.43-.029-.603-.086-.172-.776-1.87-1.063-2.562-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.233 3.328 1.405 3.557c.172.23 2.427 3.707 5.88 5.197.822.355 1.463.567 1.963.726.824.263 1.574.226 2.167.137.661-.099 2.036-.832 2.323-1.635.287-.803.287-1.492.2-1.635-.086-.144-.316-.23-.66-.402z"/>
        </svg>
      </a>
    </>
  )
}