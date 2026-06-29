import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Badge from '../ui/Badge'

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
}

const SCALE = [
  {
    name: 'H1 — Título de Página',
    font: 'Sora',
    weight: 700,
    size: '2.25rem / 36px',
    cssSize: '2.25rem',
    usage: 'Título principal de cada página',
    sample: 'Controle total das suas finanças',
    isDisplay: true,
  },
  {
    name: 'H2 — Seções Principais',
    font: 'Sora',
    weight: 600,
    size: '1.75rem / 28px',
    cssSize: '1.75rem',
    usage: 'Subtítulos de seções',
    sample: 'Visão geral do período',
    isDisplay: true,
  },
  {
    name: 'H3 — Subtítulos de Card',
    font: 'Sora',
    weight: 600,
    size: '1.375rem / 22px',
    cssSize: '1.375rem',
    usage: 'Títulos de cards e painéis',
    sample: 'Receitas do mês',
    isDisplay: true,
  },
  {
    name: 'Body — Texto Padrão',
    font: 'Inter',
    weight: 400,
    size: '1rem / 16px',
    cssSize: '1rem',
    usage: 'Corpo de texto principal',
    sample: 'Acompanhe seus lançamentos financeiros com clareza e precisão, sem ruído visual.',
    isDisplay: false,
  },
  {
    name: 'Body Small — Auxiliar',
    font: 'Inter',
    weight: 400,
    size: '0.875rem / 14px',
    cssSize: '0.875rem',
    usage: 'Texto auxiliar e legendas',
    sample: 'Atualizado em 28 de junho de 2026 às 09:45',
    isDisplay: false,
  },
  {
    name: 'Caption — Labels',
    font: 'Inter',
    weight: 500,
    size: '0.75rem / 12px',
    cssSize: '0.75rem',
    usage: 'Legendas, labels, timestamps',
    sample: 'SALDO DISPONÍVEL',
    isDisplay: false,
    uppercase: true,
  },
]

export default function Typography() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [tabular, setTabular] = useState(false)

  return (
    <section id="tipografia" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="section-container" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} className="mb-12">
            <Badge variant="neutral" className="mb-4">03 — Tipografia</Badge>
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <h2
                  className="font-display text-3xl font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                >
                  Escala Tipográfica
                </h2>
                <p className="font-body text-base max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Duas fontes. Uma hierarquia rígida. <strong style={{ color: 'var(--text-primary)' }}>Sora</strong> para headlines com personalidade tech,{' '}
                  <strong style={{ color: 'var(--text-primary)' }}>Inter</strong> para corpo e dados com máxima legibilidade.
                </p>
              </div>

              {/* Toggle tabular nums */}
              <button
                onClick={() => setTabular(t => !t)}
                className="flex items-center gap-2 px-4 py-2 rounded-[8px] border text-sm font-body font-medium transition-all duration-150"
                style={{
                  backgroundColor: tabular ? 'var(--color-primary-light)' : 'var(--bg-base)',
                  borderColor: tabular ? 'var(--color-primary)' : 'var(--border-subtle)',
                  color: tabular ? 'var(--color-primary)' : 'var(--text-secondary)',
                }}
              >
                <span style={{
                  fontFeatureSettings: tabular ? '"tnum"' : 'normal',
                  fontVariantNumeric: tabular ? 'tabular-nums' : 'normal',
                }}>
                  1.234.567,89
                </span>
                {tabular ? 'Tabular ativo' : 'Ver tabular nums'}
              </button>
            </div>
          </motion.div>

          {/* Font families */}
          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { name: 'Sora', role: 'Display / Headlines', weights: [300, 400, 600, 700], isDisplay: true },
              { name: 'Inter', role: 'Body / Dados / Tabelas', weights: [400, 500, 600], isDisplay: false },
            ].map(font => (
              <div
                key={font.name}
                className="p-6 rounded-[12px] border"
                style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-base)' }}
              >
                <p className="font-body text-xs font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>
                  {font.role}
                </p>
                <p
                  className="text-4xl mb-2"
                  style={{
                    fontFamily: font.isDisplay ? 'var(--font-display)' : 'var(--font-body)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    fontFeatureSettings: !font.isDisplay && tabular ? '"tnum"' : 'normal',
                  }}
                >
                  {font.name}
                </p>
                <p className="font-body text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Aa Bb Cc — 0123456789
                </p>
                <div className="flex flex-wrap gap-2">
                  {font.weights.map(w => (
                    <span
                      key={w}
                      className="text-sm px-2 py-0.5 rounded"
                      style={{
                        fontFamily: font.isDisplay ? 'var(--font-display)' : 'var(--font-body)',
                        fontWeight: w,
                        color: 'var(--text-primary)',
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Scale table */}
          <motion.div variants={fadeUp} className="space-y-4">
            {SCALE.map((item) => (
              <div
                key={item.name}
                className="flex flex-col md:flex-row md:items-center gap-4 p-5 rounded-[12px] border transition-all duration-200 group"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--bg-base)',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                {/* Metadata */}
                <div className="md:w-52 flex-shrink-0">
                  <p className="font-body text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{item.name}</p>
                  <p className="font-body text-xs mt-0.5 font-mono" style={{ color: 'var(--color-accent)' }}>{item.font} · {item.weight} · {item.size}</p>
                </div>

                {/* Live preview */}
                <div className="flex-1 min-w-0">
                  <p
                    className="leading-tight"
                    style={{
                      fontFamily: item.isDisplay ? 'var(--font-display)' : 'var(--font-body)',
                      fontWeight: item.weight,
                      fontSize: item.cssSize,
                      color: 'var(--text-primary)',
                      textTransform: item.uppercase ? 'uppercase' : undefined,
                      letterSpacing: item.uppercase ? '0.08em' : undefined,
                      fontFeatureSettings: !item.isDisplay && tabular ? '"tnum"' : 'normal',
                    }}
                  >
                    {item.sample}
                  </p>
                </div>

                {/* Usage badge */}
                <div className="md:w-52 flex-shrink-0">
                  <span className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>{item.usage}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
