import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, MessageSquare, ExternalLink, Layers, ArrowUpRight } from 'lucide-react'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <footer style={{ backgroundColor: 'var(--color-secondary)' }}>
      {/* CTA section */}
      <div className="section-container py-20 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto"
        >
          <Badge variant="accent" className="mb-6">Open Source</Badge>
          <h2
            className="font-display text-3xl md:text-4xl font-semibold mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: '#F3F4F6' }}
          >
            Pronto para usar nos seus produtos
          </h2>
          <p className="font-body text-base mb-8 leading-relaxed" style={{ color: '#9CA3AF' }}>
            Este Design System é a base visual dos produtos <strong style={{ color: '#F3F4F6' }}>JPC.IO</strong>.
            Acesse o repositório, explore os tokens e componentes.
          </p>
          <div className="flex justify-center flex-wrap gap-3">
            <Button
              variant="primary"
              size="lg"
              id="cta-github"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Code2 size={16} strokeWidth={1.75} />
              Ver no GitHub
              <ArrowUpRight size={14} strokeWidth={2} />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              id="cta-docs"
              className="!text-white hover:!bg-white/10"
            >
              Documentação
              <ExternalLink size={14} strokeWidth={1.75} />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Footer bottom */}
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-[6px] flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <Layers size={14} strokeWidth={1.75} className="text-white" />
            </div>
            <span
              className="font-display font-bold text-base"
              style={{ fontFamily: 'var(--font-display)', color: '#F3F4F6' }}
            >
              JPC.IO
            </span>
            <Badge variant="neutral" size="xs">Design System v1.0</Badge>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {['Paleta', 'Tipografia', 'Componentes', 'Ícones'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-body text-sm transition-colors duration-150"
                style={{ color: '#6B7280' }}
                onMouseEnter={e => e.target.style.color = '#F3F4F6'}
                onMouseLeave={e => e.target.style.color = '#6B7280'}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { Icon: Code2,         href: 'https://github.com',  label: 'GitHub' },
              { Icon: MessageSquare, href: 'https://twitter.com', label: 'Twitter' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-[6px] flex items-center justify-center border transition-all duration-150"
                style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#6B7280' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.color = 'var(--color-primary)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#6B7280' }}
              >
                <Icon size={15} strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t text-center" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="font-body text-xs" style={{ color: '#4B5563' }}>
            © 2026 JPC.IO — Construído com React, Vite e Tailwind CSS.
            Design System documentado e implementado com atenção a cada detalhe.
          </p>
        </div>
      </div>
    </footer>
  )
}
