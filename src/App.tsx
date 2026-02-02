import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Integrations } from './components/Integrations';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Integrations />
      <Footer />
    </div>
  )
}

export default App
