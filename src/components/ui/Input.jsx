import { forwardRef, useState } from 'react'
import { AlertCircle, CheckCircle, Eye, EyeOff } from 'lucide-react'

/**
 * Input — JPC.IO Design System
 * States: default | focus | error | disabled | success
 */
const Input = forwardRef(function Input(
  {
    label,
    id,
    type = 'text',
    placeholder,
    helperText,
    errorText,
    successText,
    state = 'default',
    disabled = false,
    className = '',
    ...props
  },
  ref
) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  
  const isDisabled = disabled || state === 'disabled'
  const isError = state === 'error'
  const isSuccess = state === 'success'

  // Border & Focus colors
  let borderClass = 'border-border-subtle focus:border-primary focus:ring-4 focus:ring-primary/15'
  if (isError) borderClass = 'border-error focus:border-error focus:ring-4 focus:ring-error/15'
  else if (isSuccess) borderClass = 'border-success focus:border-success focus:ring-4 focus:ring-success/15'

  const bgClass = isDisabled ? 'bg-bg-base text-text-secondary cursor-not-allowed' : 'bg-bg-surface text-text-primary'

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={id} className="font-body text-sm font-medium text-text-primary">
          {label}
        </label>
      )}
      
      <div className="relative">
        <input
          ref={ref}
          id={id}
          type={isPassword && showPassword ? 'text' : type}
          placeholder={placeholder}
          disabled={isDisabled}
          className={`
            w-full font-body text-sm rounded-control border outline-none transition-all duration-150
            ${isPassword ? 'py-2.5 pl-3.5 pr-10' : 'px-3.5 py-2.5'}
            ${borderClass}
            ${bgClass}
          `}
          {...props}
        />

        {/* Right icons (Error/Success/Password Toggle) */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          {isError && !isPassword && <AlertCircle size={16} className="text-error" strokeWidth={2} />}
          {isSuccess && !isPassword && <CheckCircle size={16} className="text-success" strokeWidth={2} />}
          
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
              className="text-text-secondary hover:text-text-primary focus:outline-none"
            >
              {showPassword ? <EyeOff size={16} strokeWidth={1.75} /> : <Eye size={16} strokeWidth={1.75} />}
            </button>
          )}
        </div>
      </div>

      {/* Helper / Error Text */}
      {(helperText || errorText || successText) && (
        <p className={`font-body text-xs ${isError ? 'text-error' : isSuccess ? 'text-success' : 'text-text-secondary'}`}>
          {isError ? errorText : isSuccess ? successText : helperText}
        </p>
      )}
    </div>
  )
})

export default Input
