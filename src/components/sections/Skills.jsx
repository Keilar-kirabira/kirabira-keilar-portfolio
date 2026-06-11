import { motion } from 'framer-motion'
import SectionWrapper from '../../ui/SectionWrapper'
import SectionHeading from '../../ui/SectionHeading'

const highlights = [
  {
    icon: '🚀',
    title: 'What I Build',
    text: 'Clean, performant React interfaces — admin dashboards, chat systems, moderation tools, and landing pages that work beautifully on every device.',
  },
  {
    icon: '📚',
    title: "What I'm Learning",
    text: 'Currently diving into React Native to bring my skills to mobile, and REST APIs to connect frontends to real data.',
  },
  {
    icon: '🎯',
    title: 'My Goals',
    text: 'Grow into a well-rounded fullstack engineer, contribute to impactful products, and eventually build my own tech startup.',
  },
]

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-[#0F172A]/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="About Me"
          title="The story so far"
          subtitle="From curiosity to code — here's a little about who I am and where I'm headed."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Story */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5 text-slate-400 leading-relaxed"
            >
              <p>
                My journey in tech started with a simple question:{' '}
                <span className="text-slate-200 font-medium">
                  "How do websites actually work?"
                </span>{' '}
                That curiosity turned into HTML experiments, which turned into React projects,
                which turned into a genuine passion for building things on the web.
              </p>
              <p>
                I'm a self-driven{' '}
                <span className="text-blue-400 font-medium">Fullstack Junior Developer</span>{' '}
                focused on the frontend. I love turning designs into real, working interfaces — 
                paying close attention to spacing, motion, and the tiny details that make a product 
                feel polished.
              </p>
              <p>
                Beyond code, I've built strong collaboration and leadership skills through
                editorial work and team programs — skills that make me a better teammate,
                communicator, and engineer.
              </p>
            </motion.div>

            {/* Tech I love */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Git'].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg bg-blue-500/8 border border-blue-500/15 text-blue-300 text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Highlight cards */}
          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ x: 6 }}
                className="flex gap-5 p-5 rounded-2xl bg-[#111827]/60 border border-white/5 hover:border-blue-500/20 transition-all duration-300 group"
              >
                <div className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1.5 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun facts row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { emoji: '☕', label: 'Coffee-fuelled coder' },
            { emoji: '🌍', label: 'Based in Uganda' },
            { emoji: '🎨', label: 'Design-minded dev' },
            { emoji: '📱', label: 'Mobile-first thinker' },
          ].map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center"
            >
              <span className="text-2xl">{fact.emoji}</span>
              <span className="text-slate-400 text-xs font-medium">{fact.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default About