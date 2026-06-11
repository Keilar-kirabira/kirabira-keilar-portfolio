import { motion } from 'framer-motion'

const Button = ({ children, href, variant = 'primary', onClick }) => {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer'
  const styles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25',
    outline: 'border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400',
    ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
  }

  const Tag = href ? 'a' : 'button'
  return (
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
      <Tag href={href} target={href ? '_blank' : undefined} onClick={onClick}
        className={`${base} ${styles[variant]}`}>
        {children}
      </Tag>
    </motion.div>
  )
}

export default Button