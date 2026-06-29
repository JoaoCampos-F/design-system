import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Badge from '../ui/Badge'

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const LEVELS = [
  {
    label: 'shadow-xs',
    token: '--shadow-xs',
    value: '0 1px 2px rgba(16, 24, 40, 0.04)',
    usage: 'Linhas de tabela em hover',
    elevation: 0,
  },
  {
    label: 'shadow-sm',
    token: '--shadow-sm',
    value: '0 1px 3px rgba(16,24,40,.06), 0 1px 2px rgba(16,24,40,.04)',
    usage: 'Cards padrão — resumo financeiro',
    elevation: 1,
  },
  {
    label: 'shadow-md',
    token: '--shadow-md',
    value: '0 4px 8px rgba(16,24,40,.08), 0 2px 4px rgba(16,24,40,.04)',
    usage: 'Cards em hover, dropdowns',
    elevation: 2,
  },
  {
    label: 'shadow-lg',
    token: '--shadow-lg',
    value: '0 12px 24px rgba(16,24,40,.10), 0 4px 8px rgba(16,24,40,.05)',
    usage: 'Modais, painéis flutuantes',
    elevation: 3,
  },
]

export default function ElevationShowcase() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="elevacao" className="section-padding" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="section-container" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} className="mb-12">
            <Badge variant="neutral" className="mb-4">04 — Elevação</Badge>
            <h2
              className="font-display text-3xl font-semibold mb-3"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Sombras & Elevação
            </h2>
            <p className="font-body text-base max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Quatro níveis de profundidade. Sombras multicamadas com baixa opacidade — sugerem hierarquia sem peso visual.
              Passe o mouse para ver a transição entre os níveis.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {LEVELS.map((level) => (
              <motion.div
                key={level.label}
                variants={fadeUp}
                className="rounded-[12px] p-6 border cursor-default transition-all duration-300"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)',
                  boxShadow: `var(${level.token})`,
                }}
                whileHover={{
                  y: -4,
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                {/* Level indicator */}
                <div className="flex items-center gap-1.5 mb-4">
                  {Array.from({ length: level.elevation + 1 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-1 rounded-full flex-1"
                      style={{ backgroundColor: 'var(--color-primary)', opacity: (i + 1) / (level.elevation + 1) }}
                    />
                  ))}
                </div>

                <p
                  className="font-display text-sm font-semibold mb-1 font-mono"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}
                >
                  {level.label}
                </p>
                <p className="font-body text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>
                  {level.usage}
                </p>
                <code
                  className="font-body text-[10px] block leading-relaxed"
                  style={{ color: 'var(--color-accent)', wordBreak: 'break-all' }}
                >
                  {level.value}
                </code>
              </motion.div>
            ))}
          </div>

          {/* Focus ring demo */}
          <motion.div
            variants={fadeUp}
            className="rounded-[12px] p-6 border"
            style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-surface)' }}
          >
            <p
              className="font-display text-sm font-semibold mb-1"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              focus-ring — Acessibilidade
            </p>
            <p className="font-body text-xs mb-4" style={{ color: 'var(--text-secondary)' }}>
              Inputs e botões focados via teclado. WCAG 2.1 — visibilidade garantida em ambos os temas.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <div
                className="px-5 py-2.5 rounded-[8px] text-sm font-medium font-body"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  boxShadow: 'var(--shadow-focus-ring)',
                }}
              >
                Botão com foco
              </div>
              <div
                className="px-3.5 py-2.5 rounded-[8px] border text-sm font-body"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--color-primary)',
                  color: 'var(--text-primary)',
                  boxShadow: 'var(--shadow-focus-ring)',
                }}
              >
                Input com foco
              </div>
              <code className="font-body text-xs" style={{ color: 'var(--color-accent)' }}>
                {'0 0 0 3px rgba(15, 110, 92, 0.25)'}
              </code>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
