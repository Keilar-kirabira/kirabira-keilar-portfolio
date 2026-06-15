import { motion } from 'framer-motion'

const Button = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  external = false,
}) => {
  const base =
    'inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap'

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
  }

  const variants = {
    primary:
      'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40',
    outline:
      'border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400',
    ghost:
      'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10',
  }

  const Tag = href ? 'a' : 'button'

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Tag
        href={href}
        target={href && external ? '_blank' : undefined}
        rel={href && external ? 'noreferrer' : undefined}
        onClick={onClick}
        type={!href ? type : undefined}
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  )
}

export default Button