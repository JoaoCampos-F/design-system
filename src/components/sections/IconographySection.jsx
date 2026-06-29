import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Wallet, TrendingUp, TrendingDown, PieChart, CreditCard, ShieldCheck,
  BarChart2, Bell, Search, Settings, User, FileText, Download, Upload,
  ArrowUpRight, ArrowDownLeft, RefreshCw, Lock, Eye, Zap, Target,
  Calendar, Filter, ChevronRight, Plus, Minus, CheckCircle, AlertCircle,
  XCircle, Info, Star, Bookmark, Clock, Globe,
} from 'lucide-react'
import Badge from '../ui/Badge'

const ICONS = [
  { Icon: Wallet,         name: 'wallet' },
  { Icon: TrendingUp,     name: 'trending-up' },
  { Icon: TrendingDown,   name: 'trending-down' },
  { Icon: PieChart,       name: 'pie-chart' },
  { Icon: CreditCard,     name: 'credit-card' },
  { Icon: ShieldCheck,    name: 'shield-check' },
  { Icon: BarChart2,      name: 'bar-chart-2' },
  { Icon: Bell,           name: 'bell' },
  { Icon: Search,         name: 'search' },
  { Icon: Settings,       name: 'settings' },
  { Icon: User,           name: 'user' },
  { Icon: FileText,       name: 'file-text' },
  { Icon: Download,       name: 'download' },
  { Icon: Upload,         name: 'upload' },
  { Icon: ArrowUpRight,   name: 'arrow-up-right' },
  { Icon: ArrowDownLeft,  name: 'arrow-down-left' },
  { Icon: RefreshCw,      name: 'refresh-cw' },
  { Icon: Lock,           name: 'lock' },
  { Icon: Eye,            name: 'eye' },
  { Icon: Zap,            name: 'zap' },
  { Icon: Target,         name: 'target' },
  { Icon: Calendar,       name: 'calendar' },
  { Icon: Filter,         name: 'filter' },
  { Icon: ChevronRight,   name: 'chevron-right' },
  { Icon: Plus,           name: 'plus' },
  { Icon: Minus,          name: 'minus' },
  { Icon: CheckCircle,    name: 'check-circle' },
  { Icon: AlertCircle,    name: 'alert-circle' },
  { Icon: XCircle,        name: 'x-circle' },
  { Icon: Info,           name: 'info' },
  { Icon: Star,           name: 'star' },
  { Icon: Bookmark,       name: 'bookmark' },
  { Icon: Clock,          name: 'clock' },
  { Icon: Globe,          name: 'globe' },
]

const stagger = {
  visible: { transition: { staggerChildren: 0.03 } },
}

const fadeUp = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

export default function IconographySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="icones" className="section-padding" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="section-container" ref={ref}>
        <div className="mb-12">
          <Badge variant="neutral" className="mb-4">06 — Iconografia</Badge>
          <h2
            className="font-display text-3xl font-semibold mb-3"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Biblioteca de Ícones
          </h2>
          <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between">
            <p className="font-body text-base max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Lucide Icons</strong> — open-source, outline consistente com a estética fintech.
              Stroke-width <code className="font-mono text-sm" style={{ color: 'var(--color-accent)' }}>1.75</code>,
              tamanho padrão <code className="font-mono text-sm" style={{ color: 'var(--color-accent)' }}>20px</code>.
            </p>
            <div className="flex gap-2">
              <Badge variant="primary">stroke-width 1.75</Badge>
              <Badge variant="neutral">20px default</Badge>
            </div>
          </div>
        </div>

        {/* Icon grid */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2"
        >
          {ICONS.map(({ Icon, name }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="flex flex-col items-center gap-2 p-3 rounded-[8px] border cursor-default group transition-all duration-150"
              style={{ borderColor: 'transparent', backgroundColor: 'var(--bg-surface)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--color-primary)'
                e.currentTarget.style.backgroundColor = 'var(--color-primary-light)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'transparent'
                e.currentTarget.style.backgroundColor = 'var(--bg-surface)'
              }}
            >
              <Icon
                size={20}
                strokeWidth={1.75}
                style={{ color: 'var(--text-secondary)', transition: 'color 150ms' }}
                className="group-hover:!text-[var(--color-primary)]"
              />
              <span
                className="font-mono text-[9px] text-center leading-tight truncate w-full text-center"
                style={{ color: 'var(--text-secondary)' }}
              >
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Sizes demo */}
        <div
          className="mt-8 p-6 rounded-[12px] border"
          style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-surface)' }}
        >
          <p className="font-body text-xs font-medium uppercase tracking-wider mb-5" style={{ color: 'var(--text-secondary)' }}>
            Tamanhos de uso
          </p>
          <div className="flex items-end gap-8 flex-wrap">
            {[
              { size: 16, label: '16px — inline com texto' },
              { size: 20, label: '20px — interface padrão' },
              { size: 24, label: '24px — destaque' },
            ].map(({ size, label }) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <Wallet size={size} strokeWidth={1.75} style={{ color: 'var(--color-primary)' }} />
                <span className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
