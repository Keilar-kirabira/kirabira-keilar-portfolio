import { motion } from 'framer-motion'
import { Rocket, Link2, Target } from 'lucide-react'
import SectionWrapper from '../../ui/SectionWrapper'
import SectionHeading from '../../ui/SectionHeading'

const highlights = [
  {
    Icon: Rocket,
    title: 'What I Build',
    text: 'Responsive web and mobile apps with React, React Native, and Vue.js — reusable components, clean state management, and accessible UI.',
  },
  {
    Icon: Link2,
    title: 'How I Connect Them',
    text: 'REST API integration and authentication flows that tie frontends to real data, with React Hooks and Context API for state.',
  },
  {
    Icon: Target,
    title: 'My Goals',
    text: 'To become a proficient Frontend and Mobile Developer, contribute to impactful digital products, and eventually build a technology startup that empowers young people through innovation, mentorship, and opportunities for growth.',
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
                I'm a{' '}
                <span className="text-blue-400 font-medium">Junior Frontend Engineer</span>{' '}
                experienced in building responsive web and mobile applications using React
                Native, React.js, Vue.js, JavaScript (ES6+), HTML5, and CSS3. I'm skilled in
                developing reusable UI components, Context API state management, React Hooks,
                REST API integration, authentication systems, and mobile-first accessible
                interfaces.
              </p>
              <p>
                Right now, I'm developing through the{' '}
                <span className="text-blue-400 font-medium">Refactory Apprenticeship Program</span>{' '}
                and <span className="text-blue-400 font-medium">TechCrush</span>, gaining
                hands-on experience in Agile workflows, testing with Jest and Vitest, and Git
                collaboration — all while focused on delivering clean, scalable, high-quality
                frontend code on real-world software projects.
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
              {['React', 'React Native', 'Vue.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3'].map((t) => (
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
                <div className="flex-shrink-0 mt-0.5 w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center group-hover:bg-blue-500/15 transition-colors">
                  <item.Icon className="w-5 h-5 text-blue-400" strokeWidth={1.75} />
                </div>
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
      </div>
    </SectionWrapper>
  )
}

export default About