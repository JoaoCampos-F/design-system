// Helper: Calculate WCAG contrast
function getLuminance(hex) {
  const rgb = hex.replace('#', '').match(/.{2}/g).map(x => {
    const val = parseInt(x, 16) / 255
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]
}

function getContrastRatio(hex1, hex2) {
  const l1 = getLuminance(hex1)
  const l2 = getLuminance(hex2)
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
  return ratio.toFixed(1)
}

function getContrastLevel(ratio) {
  if (ratio >= 7) return { label: 'AAA', color: 'bg-success/20 text-success' }
  if (ratio >= 4.5) return { label: 'AA', color: 'bg-[#0F6E5C]/20 text-[#0F6E5C]' } // Usando a cor AA do print
  if (ratio >= 3) return { label: 'AA+', color: 'bg-warning/20 text-warning' }
  return { label: 'Fail', color: 'bg-error/20 text-error' }
}

/**
 * ColorSwatch — JPC.IO Design System
 * Displays a color token, hex, usage description and computes real-time WCAG contrast against white background.
 */
export default function ColorSwatch({
  name,
  token,
  hex,
  usage,
  size = 'default' // 'default' | 'large'
}) {
  const contrastOnWhite = getContrastRatio(hex, '#FFFFFF')
  const levelWhite = getContrastLevel(parseFloat(contrastOnWhite))
  
  // Decide text color to display ON the swatch box
  const textOnSwatch = getLuminance(hex) > 0.35 ? 'text-gray-900' : 'text-white'

  if (size === 'large') {
    return (
      <div
        className="rounded-card overflow-hidden transition-shadow duration-200"
        style={{
          border: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-surface)',
          boxShadow: 'var(--shadow-sm)',
        }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
      >
        <div
          className="h-28 flex items-end p-4"
          style={{ backgroundColor: hex }}
        >
          <span className={`font-body text-xs font-semibold ${textOnSwatch}`}>
            {hex}
          </span>
        </div>
        <div className="p-4">
          <p className="font-body text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{name}</p>
          <p className="font-mono text-xs mb-2" style={{ color: 'var(--color-accent)' }}>{token}</p>
          {usage && (
            <p className="font-body text-xs mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {usage}
            </p>
          )}
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-bold font-body px-1.5 py-0.5 rounded ${levelWhite.color}`}>
              {levelWhite.label} · {contrastOnWhite}:1
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="flex items-center gap-3 p-3 rounded-control transition-shadow duration-200"
      style={{
        border: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-surface)',
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
    >
      <div
        className="w-10 h-10 rounded-control shrink-0"
        style={{
          backgroundColor: hex,
          border: '1px solid var(--border-subtle)',
        }}
      />
      <div className="min-w-0 flex-1">
        <p className="font-body text-sm font-medium truncate" style={{ color: 'var(--text-primary)' }}>{name}</p>
        <p className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>{hex}</p>
      </div>
      <span className={`text-[10px] font-bold font-body px-1.5 py-0.5 rounded shrink-0 ${levelWhite.color}`}>
        {levelWhite.label}
      </span>
    </div>
  )
}
