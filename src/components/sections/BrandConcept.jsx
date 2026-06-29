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

export default function BrandConcept() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const principles = [
    {
      title: 'Confiança Técnica',
      description: 'Precisão de uma fintech combinada com a confiabilidade de uma dev tool. Cada elemento existe por uma razão.',
    },
    {
      title: 'Clareza Financeira',
      description: 'Hierarquia tipográfica rígida e espaço em branco generoso para que os dados sejam os protagonistas.',
    },
    {
      title: 'Minimalismo Funcional',
      description: 'Nada de excesso decorativo. Cor usada com intenção — nunca como decoração — seguindo as heurísticas de Nielsen.',
    },
    {
      title: 'Séria, Não Fria',
      description: 'Estética que estabelece credibilidade sem parecer hostil. Técnica sem criar distância com o usuário.',
    },
  ]

  return (
    <section id="conceito" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="section-container" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} className="mb-16">
            <Badge variant="neutral" className="mb-4">01 — Conceito</Badge>
            <h2
              className="font-display text-3xl font-semibold mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Identidade da Marca
            </h2>
            <p className="font-body text-base leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
              A identidade visual da <strong style={{ color: 'var(--text-primary)' }}>JPC.IO</strong> comunica{' '}
              <em style={{ color: 'var(--color-primary)' }}>confiança técnica e clareza financeira</em>.
              É a interseção entre a precisão de uma fintech e a confiabilidade de uma ferramenta de desenvolvedor:
              nada de excesso decorativo, nada de gradientes gritantes, nada de ruído visual.
            </p>
          </motion.div>

          {/* Reference bar */}
          <motion.div
            variants={fadeUp}
            className="mb-12 p-5 rounded-[12px] border-l-4 flex items-start gap-4"
            style={{
              borderLeftColor: 'var(--color-primary)',
              backgroundColor: 'var(--color-primary-light)',
            }}
          >
            <div className="flex-1">
              <p
                className="font-display text-base font-semibold mb-1"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}
              >
                Referência de posicionamento
              </p>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-primary-hover)' }}>
                Se a Stripe parece "o painel de controle em que eu confiaria meu dinheiro" e um bom app financeiro
                parece "eu entendo isso em 2 segundos" — esse é o ponto de chegada.
              </p>
            </div>
          </motion.div>

          {/* Principles grid */}
          <motion.div variants={stagger} className="grid md:grid-cols-2 gap-5">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="p-6 rounded-[12px] border transition-all duration-200"
                style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-base)' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0 font-display text-sm font-bold"
                    style={{
                      backgroundColor: 'var(--color-primary-light)',
                      color: 'var(--color-primary)',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3
                      className="font-display text-base font-semibold mb-2"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                    >
                      {p.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {p.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
