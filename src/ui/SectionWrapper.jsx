import { motion } from 'framer-motion'

const SectionWrapper = ({ children, id, className = '' }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className={`px-6 md:px-12 lg:px-24 py-24 ${className}`}
    >
      {children}
    </motion.section>
  )
}

export default SectionWrapper