import { motion } from 'framer-motion'
import { ArrowRight, Layers, Sun, Moon } from 'lucide-react'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

export default function Hero({ theme, onToggleTheme }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--text-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Top gradient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, var(--color-primary) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Navbar */}
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="section-container">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-[8px] flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <Layers size={16} strokeWidth={1.75} className="text-white" />
              </div>
              <span
                className="font-display font-700 text-lg tracking-tight"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontWeight: 700 }}
              >
                JPC.IO
              </span>
            </div>

            {/* Nav links + theme toggle */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                {['Paleta', 'Tipografia', 'Componentes', 'Ícones'].map(item => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="font-body text-sm transition-colors duration-150"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Theme Toggle */}
              <button
                id="theme-toggle"
                onClick={onToggleTheme}
                aria-label="Alternar tema"
                className="w-9 h-9 rounded-[8px] flex items-center justify-center border transition-all duration-150"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-secondary)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.color = 'var(--color-primary)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
              >
                {theme === 'dark'
                  ? <Sun size={16} strokeWidth={1.75} />
                  : <Moon size={16} strokeWidth={1.75} />
                }
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero content */}
      <div className="section-container relative z-10 pt-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Badge variant="primary" dot className="mb-6">
              Design System v1.0
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
            className="font-display leading-[1.15] tracking-tight mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              color: 'var(--text-primary)',
            }}
          >
            Construído para{' '}
            <span style={{ color: 'var(--color-primary)' }}>finanças</span>
            {' '}e{' '}
            <span style={{ color: 'var(--color-accent)' }}>tecnologia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.16 }}
            className="font-body text-lg mb-10 max-w-xl leading-relaxed"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            Tokens, componentes e diretrizes visuais que reduzem a carga cognitiva
            de quem lida com números, prazos e decisões importantes.
            Sério sem ser frio. Técnico sem ser hostil.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.24 }}
            className="flex flex-wrap gap-3"
          >
            <Button variant="primary" size="lg" onClick={() => document.getElementById('componentes')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver componentes
              <ArrowRight size={16} strokeWidth={2} />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => document.getElementById('paleta')?.scrollIntoView({ behavior: 'smooth' })}>
              Explorar tokens
            </Button>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.36 }}
          className="mt-20 pt-10 border-t grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          {[
            { value: '24+', label: 'Tokens de cor' },
            { value: '5',   label: 'Componentes base' },
            { value: '9',   label: 'Seções documentadas' },
            { value: 'WCAG AA', label: 'Conformidade' },
          ].map(stat => (
            <div key={stat.label}>
              <p
                className="tabular-nums font-display text-2xl font-semibold mb-1"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                {stat.value}
              </p>
              <p className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
