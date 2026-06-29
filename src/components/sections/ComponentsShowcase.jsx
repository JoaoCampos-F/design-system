import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Input from '../ui/Input'
import Badge from '../ui/Badge'

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function ComponentsShowcase() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [inputValue, setInputValue] = useState('')

  return (
    <section id="componentes" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="section-container" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} className="mb-12">
            <Badge variant="neutral" className="mb-4">05 — Componentes</Badge>
            <h2
              className="font-display text-3xl font-semibold mb-3"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Componentes Base
            </h2>
            <p className="font-body text-base max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Cada componente nasce com todos os estados documentados. Interaja com eles abaixo — são os mesmos
              que você usará nos produtos SaaS.
            </p>
          </motion.div>

          {/* ── Buttons ── */}
          <motion.div variants={fadeUp} className="mb-10">
            <h3
              className="font-display text-lg font-semibold mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Botões
            </h3>
            <div
              className="rounded-[12px] border p-6"
              style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-base)' }}
            >
              {/* Variants row */}
              <p className="font-body text-xs font-medium uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>Variantes</p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Button variant="primary" id="btn-primary">Primário</Button>
                <Button variant="secondary" id="btn-secondary">Secundário</Button>
                <Button variant="ghost" id="btn-ghost">Ghost</Button>
              </div>

              {/* Sizes row */}
              <p className="font-body text-xs font-medium uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>Tamanhos</p>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <Button variant="primary" size="sm" id="btn-sm">Small</Button>
                <Button variant="primary" size="md" id="btn-md">Medium</Button>
                <Button variant="primary" size="lg" id="btn-lg">Large</Button>
              </div>

              {/* States row */}
              <p className="font-body text-xs font-medium uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>Estados</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" id="btn-default">Default</Button>
                <Button variant="primary" disabled id="btn-disabled">Disabled</Button>
                <Button variant="secondary" disabled id="btn-sec-disabled">Sec. Disabled</Button>
                <Button variant="ghost" disabled id="btn-ghost-disabled">Ghost Disabled</Button>
              </div>
            </div>
          </motion.div>

          {/* ── Inputs ── */}
          <motion.div variants={fadeUp} className="mb-10">
            <h3
              className="font-display text-lg font-semibold mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Inputs de Formulário
            </h3>
            <div
              className="rounded-[12px] border p-6 grid md:grid-cols-2 gap-5"
              style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-base)' }}
            >
              <Input
                id="input-default"
                label="Email"
                placeholder="seu@email.com"
                helperText="Nunca vamos compartilhar seus dados."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
              <Input
                id="input-success"
                label="CNPJ"
                placeholder="00.000.000/0001-00"
                state="success"
                successText="CNPJ válido e verificado."
                defaultValue="12.345.678/0001-90"
              />
              <Input
                id="input-error"
                label="Valor"
                placeholder="R$ 0,00"
                state="error"
                errorText="Valor inválido. Insira um número positivo."
                defaultValue="abc"
              />
              <Input
                id="input-disabled"
                label="Conta bancária"
                placeholder="Selecione uma conta"
                state="disabled"
                disabled
                defaultValue="Conta corrente — Banco X"
              />
              <Input
                id="input-password"
                label="Senha"
                type="password"
                placeholder="••••••••"
                helperText="Mínimo 8 caracteres com letras e números."
              />
            </div>
          </motion.div>

          {/* ── Financial Cards ── */}
          <motion.div variants={fadeUp}>
            <h3
              className="font-display text-lg font-semibold mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              Cards Financeiros
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <Card
                label="Saldo Disponível"
                value="R$ 12.450,00"
                variation="4,2%"
                variationDirection="up"
                variationPeriod="este mês"
              />
              <Card
                label="Despesas do Mês"
                value="R$ 3.820,50"
                variation="12,8%"
                variationDirection="down"
                variationPeriod="vs. junho"
              />
              <Card
                label="Investimentos"
                value="R$ 48.000,00"
                variation="0%"
                variationDirection="neutral"
                variationPeriod="sem variação"
              />
            </div>

            {/* Badges row */}
            <div
              className="mt-6 rounded-[12px] border p-5"
              style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-base)' }}
            >
              <p className="font-body text-xs font-medium uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>
                Badges semânticos
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="primary" dot>Design System</Badge>
                <Badge variant="success" dot>Pago</Badge>
                <Badge variant="warning" dot>Vencimento próximo</Badge>
                <Badge variant="error" dot>Inadimplente</Badge>
                <Badge variant="info" dot>Em análise</Badge>
                <Badge variant="accent" dot>Beta</Badge>
                <Badge variant="neutral">Rascunho</Badge>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
