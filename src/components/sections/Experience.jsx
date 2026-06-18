import { motion } from 'framer-motion'
import SectionWrapper from '../../ui/SectionWrapper'
import SectionHeading from '../../ui/SectionHeading'
import { experience } from '../../data/experience'

const typeColors = {
  'Frontend Developer': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'QA & Scrum': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
}

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title="Beyond the code"
          subtitle="Where I'm sharpening my craft through real-world projects and Agile teams."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-3 top-6 w-4 h-4 rounded-full bg-[#0B0F19] border-2 border-blue-500 hidden md:flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>

                {/* Card */}
                <div className="p-6 rounded-2xl bg-[#111827]/70 border border-white/5 hover:border-blue-500/15 transition-all duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-base group-hover:text-blue-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-blue-400 text-sm font-medium">{exp.org}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${typeColors[exp.type]}`}
                      >
                        {exp.type}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-400 border border-white/10">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/8 text-slate-400 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Experience