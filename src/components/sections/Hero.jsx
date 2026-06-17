import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Download } from 'lucide-react'
import { IoChatbubbleEllipsesOutline, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import keilarPhoto from '../../assets/images/keilar.jpeg'
import Button from '../../ui/Button'

const Hero = () => {
  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLetsTalk = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0F19]"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 lg:px-16 pt-20 pb-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left — Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-sm font-medium mb-1"
          >
            Hi there, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] mb-3"
          >
            Keilar
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Kirabira
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-slate-300 text-base font-medium tracking-wide mb-4"
          >
            Junior Frontend &amp; Mobile Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6"
          >
            I am passionate about building modern web and mobile applications. Skilled in React
            Native, React.js, Vue.js, JavaScript, HTML, and CSS — focused on creating responsive,
            accessible, and user-friendly experiences.
          </motion.p>

          {/* Location & Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-5"
          >
            <div className="flex items-center gap-1.5 text-slate-400 text-xs">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Kampala, Uganda</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 text-xs">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <a
                href="mailto:kirabirakeilarlisa@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                kirabirakeilarlisa@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Row 1: GitHub | LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-3"
          >
            <Button href="https://github.com/Keilar-kirabira" variant="ghost" size="sm" external>
              <IoLogoGithub className="w-3.5 h-3.5" />
              GitHub
            </Button>
            <Button
              href="https://www.linkedin.com/in/keilar-kirabira-9abaa2373/"
              variant="ghost"
              size="sm"
              external
            >
              <IoLogoLinkedin className="w-3.5 h-3.5" />
              LinkedIn
            </Button>
          </motion.div>

          {/* Row 2: Let's Talk | Download CV | View My Work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
          >
            <Button onClick={handleLetsTalk} variant="outline" size="sm">
              <IoChatbubbleEllipsesOutline className="w-3.5 h-3.5" />
              Let's Talk
            </Button>
            <Button
              href="https://drive.google.com/file/d/1kqaV1GKneZdEsp4K3tAl40ENk4516amK/view?usp=sharing"
              variant="outline"
              size="sm"
              external
            >
              <Download className="w-3.5 h-3.5" />
              Download CV
            </Button>
            <Button onClick={handleViewWork} variant="primary" size="sm">
              View My Work
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-6 justify-center lg:justify-start"
          >
            {[
              { value: '4+', label: 'Projects Built' },
              { value: '2+', label: 'Years Learning' },
              { value: '100%', label: 'Commitment' },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Circular Profile Photo, vertically centered */}
        <div className="flex-1 flex items-center justify-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            {/* Soft ambient glow */}
            <div className="absolute w-[340px] h-[340px] lg:w-[400px] lg:h-[400px] rounded-full bg-blue-500/20 blur-3xl" />

            {/* Photo */}
            <div
              className="relative z-10 rounded-full overflow-hidden"
              style={{
                boxShadow:
                  '0 8px 40px rgba(59,130,246,0.4), 0 24px 80px rgba(6,182,212,0.2), 0 2px 16px rgba(0,0,0,0.7)',
              }}
            >
              <img
                src={keilarPhoto}
                alt="Keilar Kirabira"
                className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[340px] lg:h-[340px] object-cover rounded-full block"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero