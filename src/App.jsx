import { useState, useEffect } from 'react'
import './index.css'

import Hero               from './components/sections/Hero'
import BrandConcept       from './components/sections/BrandConcept'
import ColorPalette       from './components/sections/ColorPalette'
import Typography         from './components/sections/Typography'
import ElevationShowcase  from './components/sections/ElevationShowcase'
import ComponentsShowcase from './components/sections/ComponentsShowcase'
import IconographySection from './components/sections/IconographySection'
import Footer             from './components/sections/Footer'

export default function App() {
  // Dark mode by default (persisted in localStorage)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('jpcio-theme')
    return saved ?? 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('jpcio-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <div>
      <Hero theme={theme} onToggleTheme={toggleTheme} />
      <BrandConcept />
      <ColorPalette />
      <Typography />
      <ElevationShowcase />
      <ComponentsShowcase />
      <IconographySection />
      <Footer />
    </div>
  )
}
