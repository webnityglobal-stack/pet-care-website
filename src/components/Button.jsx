
export default function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200'

  const variants = {
    primary: 'bg-[#536B55] text-white hover:bg-[#405642]',
    secondary:
      'border border-[#D8C6AC] bg-white text-[#292D28] hover:bg-[#F7F5EF]',
  }

  const styles = `${baseStyles} ${variants[variant] || variants.primary} ${className}`

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  )
}
