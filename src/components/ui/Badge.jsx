/**
 * Badge — JPC.IO Design System
 * Variants: primary | success | warning | error | info | accent | neutral
 */
export default function Badge({
  variant = 'primary',
  size = 'sm',
  children,
  dot = false,
  className = '',
  ...props
}) {
  const sizeClasses = {
    xs: 'text-[10px] px-2 py-0.5',
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
  }

  const variantClasses = {
    primary: 'bg-primary-light text-primary',
    success: 'bg-success/12 text-success',
    warning: 'bg-warning/12 text-warning',
    error:   'bg-error/12 text-error',
    info:    'bg-info/12 text-info',
    accent:  'bg-accent-soft text-accent',
    neutral: 'bg-border-subtle text-text-secondary',
  }

  const dotColors = {
    primary: 'bg-primary',
    success: 'bg-success',
    warning: 'bg-warning',
    error:   'bg-error',
    info:    'bg-info',
    accent:  'bg-accent',
    neutral: 'bg-text-secondary',
  }

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 rounded-full font-body font-medium leading-none whitespace-nowrap
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[variant]}`} />
      )}
      {children}
    </span>
  )
}
