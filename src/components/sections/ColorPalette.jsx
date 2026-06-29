import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ColorSwatch from '../ui/ColorSwatch'
import Badge from '../ui/Badge'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.07 } },
}

const PALETTE = [
  {
    group: 'Primária',
    description: 'A cor âncora do sistema. Verde Esmeralda Técnico que associa crescimento financeiro sem o clichê de "banco genérico".',
    swatches: [
      { name: 'Primary',       token: '--color-primary',       hex: '#0F6E5C', usage: 'Botões primários, links de destaque, ícones ativos' },
      { name: 'Primary Hover', token: '--color-primary-hover',  hex: '#0C5A4B', usage: 'Estado hover/active de elementos primários' },
      { name: 'Primary Light', token: '--color-primary-light',  hex: '#E3F3EE', usage: 'Backgrounds suaves, badges, highlights sutis' },
    ]
  },
  {
    group: 'Secundária & Accent',
    description: 'Azul-Marinho para ancoragem e Violeta Tech para destaque secundário — sem competir com o verde primário.',
    swatches: [
      { name: 'Secondary',   token: '--color-secondary',   hex: '#1A1F36', usage: 'Headers, textos de alta ênfase, navbar dark' },
      { name: 'Accent',      token: '--color-accent',      hex: '#6C5CE7', usage: 'Badges "novo/beta", gráficos comparativos' },
      { name: 'Accent Soft', token: '--color-accent-soft', hex: '#F0EEFB', usage: 'Background de accent suave' },
    ]
  },
  {
    group: 'Semânticas',
    description: 'Cores com significado fixo. Usadas exclusivamente para estados de sistema — nunca decorativamente.',
    swatches: [
      { name: 'Success', token: '--color-success', hex: '#16A34A', usage: 'Confirmações, saldo positivo, status "pago"' },
      { name: 'Warning', token: '--color-warning', hex: '#D97706', usage: 'Alertas, vencimento próximo, pendências' },
      { name: 'Error',   token: '--color-error',   hex: '#DC2626', usage: 'Erros, saldo negativo, falhas de validação' },
      { name: 'Info',    token: '--color-info',    hex: '#2563EB', usage: 'Dicas, tooltips, notificações neutras' },
    ]
  },
]

function SectionHeader({ badge, title, subtitle }) {
  return (
    <div className="mb-12">
      <Badge variant="neutral" className="mb-4">{badge}</Badge>
      <h2
        className="font-display text-3xl font-semibold mb-3"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
      >
        {title}
      </h2>
      <p className="font-body text-base max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {subtitle}
      </p>
    </div>
  )
}

export default function ColorPalette() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="paleta" className="section-padding" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="section-container" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp}>
            <SectionHeader
              badge="02 — Paleta"
              title="Sistema de Cores"
              subtitle="Cada cor existe por uma razão. Nenhum HEX solto no código — todos mapeados como tokens para garantir consistência entre produtos."
            />
          </motion.div>

          {PALETTE.map((group) => (
            <motion.div key={group.group} variants={fadeUp} className="mb-12">
              <div className="flex items-start gap-3 mb-5">
                <div>
                  <h3
                    className="font-display text-lg font-semibold mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                  >
                    {group.group}
                  </h3>
                  <p className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Large swatches for first item, normal for rest */}
              {group.group === 'Primária' ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {group.swatches.map(s => (
                    <ColorSwatch key={s.token} {...s} size="large" />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.swatches.map(s => (
                    <ColorSwatch key={s.token} {...s} size="default" />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
