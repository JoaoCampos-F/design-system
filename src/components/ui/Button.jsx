import { forwardRef } from 'react'

/**
 * Button — JPC.IO Design System
 * Variants: primary | secondary | ghost
 * Sizes: sm | md | lg
 */
const Button = forwardRef(function Button(
  { variant = 'primary', size = 'md', disabled = false, children, className = '', ...props },
  ref
) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-body font-medium rounded-control transition-colors duration-150 select-none whitespace-nowrap outline-none'
  
  const sizeClasses = {
    sm: 'text-sm px-3 h-8',
    md: 'text-sm px-5 h-10',
    lg: 'text-base px-6 h-12',
  }

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-hover hover:shadow-sm active:scale-[0.98]',
    secondary: 'bg-transparent text-primary border border-border-subtle hover:bg-bg-base active:scale-[0.98]',
    ghost: 'bg-transparent text-primary hover:bg-primary-light active:scale-[0.98]',
  }

  const disabledClasses = 'opacity-40 cursor-not-allowed pointer-events-none'

  const combinedClasses = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    disabled ? disabledClasses : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  )
})

export default Button
