import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stacks from './components/Stacks'
import Activities from './components/Activities'
import Projects from './components/Projects'
import Documentation from './components/Documentation'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stacks />
        <Activities />
        <Projects />
        <Documentation />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
