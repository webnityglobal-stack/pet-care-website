
import { Link } from 'react-router-dom'

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary:
      'bg-[#536B55] text-white hover:bg-[#405642] focus:ring-[#536B55]',
    secondary:
      'border border-[#D9DFD3] bg-white text-[#292D28] hover:bg-[#F7F5EF] focus:ring-[#536B55]',
  }

  const buttonClass = `${baseStyles} ${variants[variant] || variants.primary} ${className}`

  if (href) {
    return (
      <Link to={href} className={buttonClass} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
