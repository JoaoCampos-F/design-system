import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

/**
 * Card — JPC.IO Design System
 * Financial card: Label → Value → Variation
 */
export default function Card({
  label,
  value,
  variation,
  variationDirection = 'up',
  variationPeriod = 'este mês',
  children,
  variant = 'default',
  className = '',
  ...props
}) {
  const baseClasses = 'bg-bg-surface border border-border-subtle rounded-card p-6 transition-all duration-200'
  
  const shadowClasses = {
    default: 'shadow-sm hover:shadow-md hover:-translate-y-0.5',
    elevated: 'shadow-md',
    flat: 'shadow-none',
  }

  const directionConfig = {
    up:      { color: 'text-success',      Icon: TrendingUp },
    down:    { color: 'text-error',        Icon: TrendingDown },
    neutral: { color: 'text-text-secondary', Icon: Minus },
  }

  const dir = directionConfig[variationDirection]

  return (
    <div className={`${baseClasses} ${shadowClasses[variant]} ${className}`} {...props}>
      {label && (
        <p className="font-body text-xs font-medium uppercase tracking-wider text-text-secondary mb-2">
          {label}
        </p>
      )}
      
      {value && (
        <p className="font-body text-3xl font-semibold tabular-nums text-text-primary mb-2 leading-tight">
          {value}
        </p>
      )}

      {variation && (
        <div className={`flex items-center gap-1 text-sm font-medium ${dir.color}`}>
          <dir.Icon size={14} strokeWidth={2} />
          <span>{variation} {variationPeriod}</span>
        </div>
      )}

      {children}
    </div>
  )
}
