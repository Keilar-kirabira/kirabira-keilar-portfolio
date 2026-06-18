import { motion } from 'framer-motion'
import {
  Code2,
  Smartphone,
  Server,
  Database,
  Wrench,
  FlaskConical,
  Cloud,
  Workflow,
  Users,
} from 'lucide-react'
import SectionWrapper from '../../ui/SectionWrapper'
import SectionHeading from '../../ui/SectionHeading'
import { skills } from '../../data/skills'

const categoryMeta = {
  Frontend: { Icon: Code2, color: 'text-blue-400', border: 'border-blue-500/15', bg: 'bg-blue-500/8' },
  Mobile: { Icon: Smartphone, color: 'text-violet-400', border: 'border-violet-500/15', bg: 'bg-violet-500/8' },
  'Backend & APIs': { Icon: Server, color: 'text-emerald-400', border: 'border-emerald-500/15', bg: 'bg-emerald-500/8' },
  Databases: { Icon: Database, color: 'text-amber-400', border: 'border-amber-500/15', bg: 'bg-amber-500/8' },
  'Tools & Technologies': { Icon: Wrench, color: 'text-sky-400', border: 'border-sky-500/15', bg: 'bg-sky-500/8' },
  Testing: { Icon: FlaskConical, color: 'text-rose-400', border: 'border-rose-500/15', bg: 'bg-rose-500/8' },
  Cloud: { Icon: Cloud, color: 'text-cyan-400', border: 'border-cyan-500/15', bg: 'bg-cyan-500/8' },
  'Development Practices': { Icon: Workflow, color: 'text-indigo-400', border: 'border-indigo-500/15', bg: 'bg-indigo-500/8' },
  'Soft Skills': { Icon: Users, color: 'text-teal-400', border: 'border-teal-500/15', bg: 'bg-teal-500/8' },
}

const Skills = () => {
  const categories = Object.entries(skills)

  return (
    <SectionWrapper id="skills" className="bg-[#0F172A]/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Skills"
          title="What's in my toolbox"
          subtitle="Technical skills, development practices, and the soft skills that tie it all together."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(([category, items], i) => {
            const meta = categoryMeta[category] ?? categoryMeta.Frontend
            const { Icon, color, border, bg } = meta

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-[#111827]/60 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-xl ${bg} border ${border} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-4.5 h-4.5 ${color}`} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-white font-semibold text-sm">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/8 text-slate-300 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Skills