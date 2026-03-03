import { motion, useScroll, useSpring, useInView } from "motion/react"
import { useRef, useState, useEffect } from "react"

const skills = [
  { name: "Next.js", level: 92 },
  { name: "TypeScript", level: 90 },
  { name: "React", level: 90 },
  { name: "Python", level: 88 },
  { name: "SQL", level: 85 },
  { name: "NestJS", level: 82 },
  { name: "Supabase", level: 80 },
  { name: "Expo", level: 78 },
  { name: "Django", level: 75 },
  { name: "Power BI", level: 72 },
  { name: "Machine Learning", level: 70 },
  { name: "Express", level: 68 },
]

const getLevelText = (level: number): string => {
  if (level >= 85) return "Avanzado"
  if (level >= 65) return "Intermedio"
  return "Básico"
}

const projects = [
  {
    title: "Biovity",
    category: "Healthcare",
    description: "Plataforma de salud y bienestar. Fundada por Diego, enfocada en soluciones tecnológicas para el sector salud.",
    tags: ["Next.js", "Supabase", "AI"],
  },
  {
    title: "GigSy",
    category: "Gig Economy",
    description: "Plataforma de trabajos freelance y gigs. Conexión entre profesionales y oportunidades laborales.",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
  },
  {
    title: "Dashboard Analytics",
    category: "Data",
    description: "Dashboards interactivos en Power BI para visualización de KPIs y análisis de datos.",
    tags: ["Power BI", "SQL", "Python"],
  },
  {
    title: "ML Models",
    category: "Machine Learning",
    description: "Modelos de Machine Learning para análisis exploratorio y predicción de datos.",
    tags: ["Python", "Scikit-learn", "Pandas"],
  },
]

const experience = [
  {
    role: "Founder",
    company: "Biovity",
    period: "2025 - Present",
    description: "Fundador de plataforma de salud y bienestar. Desarrollo de soluciones tecnológicas para el sector salud.",
  },
  {
    role: "Open Source Program Lead",
    company: "indies.la",
    period: "2026 - Present",
    description: "Liderando programa de código abierto, gestión de proyectos y comunidad de desarrolladores.",
  },
  {
    role: "Marketing B2B Apprentice Analyst",
    company: "Telefónica",
    period: "2025 - Present",
    description: "Manejo y análisis de datos mediante SQL. Creación y mantenimiento de tablas. Diseño de dashboards interactivos en Power BI para visualización de KPIs.",
  },
]

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f2f2f2] text-[#1a1a1a] overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#1a1a1a] z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-8 py-6 flex justify-between items-center bg-[#f2f2f2]/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl font-semibold tracking-tight"
        >
          <span className="text-[#1a1a1a]">Diego Letelier</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-8 text-sm text-[#1a1a1a]/50"
        >
          {['Work', 'About', 'Experience', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#1a1a1a] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#1a1a1a] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 pt-20">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="text-center max-w-4xl"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm text-[#1a1a1a]/40 uppercase tracking-[0.2em] mb-6"
          >
            Software & Data Engineer | AI
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 text-[#1a1a1a]"
          >
            <span className="block">Diego</span>
            <span className="block text-[#1a1a1a]/60">Letelier</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[#1a1a1a]/50 max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Me apasionan la tecnología y los datos. Autodidacta, enfocado en entregar soluciones prácticas que generan valor.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-[#1a1a1a] text-white font-medium rounded-full hover:bg-[#1a1a1a]/90 transition-colors"
            >
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 border border-[#1a1a1a]/20 text-[#1a1a1a] font-medium rounded-full hover:bg-[#1a1a1a]/5 transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-5 h-8 rounded-full border border-[#1a1a1a]/20 flex justify-center pt-2">
              <motion.div
                className="w-1 h-2 bg-[#1a1a1a]/40 rounded-full"
                animate={{ opacity: [1, 0.3, 1], y: [0, 6, 12] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Work Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-[#1a1a1a]/30 font-mono text-sm">01 — Work</span>
            <h2 className="text-4xl md:text-6xl font-semibold mt-4 text-[#1a1a1a]">Selected Projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper bg="bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-[#1a1a1a]/30 font-mono text-sm">02 — About</span>
            <h2 className="text-4xl md:text-6xl font-semibold mt-4 text-[#1a1a1a]">About Me</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-lg text-[#1a1a1a]/70 leading-relaxed mb-6">
                Me apasionan la tecnología y los datos; soy autodidacta y me enfoco
                en entregar soluciones prácticas que generan valor. Entusiasmo de fintechs y startups.
              </p>
              <p className="text-base text-[#1a1a1a]/50 leading-relaxed mb-6">
                Mi día a día: Power BI + SQL para dashboards y manejo de datos. Desarrollo web y mobile:
                Next.js, NestJS, Supabase, Expo, Express, Django. Python para análisis exploratorio y modelos de ML.
              </p>
              <p className="text-base text-[#1a1a1a]/50 leading-relaxed mb-4">
                Actualmente curso Ingeniería Civil Industrial en la Universidad del Desarrollo.
                Busco integrarme a un equipo dinámico donde seguir aprendiendo y aportar.
              </p>

              <a
                href="https://dlsdev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a] underline underline-offset-4 transition-colors"
              >
                Ver portafolio →
              </a>

              <div className="grid grid-cols-3 gap-8 pt-6">
                {[
                  { number: "2+", label: "Años Exp" },
                  { number: "4+", label: "Proyectos" },
                  { number: "100%", label: "Remoto" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <div className="text-4xl font-semibold text-[#1a1a1a]">{stat.number}</div>
                    <div className="text-sm text-[#1a1a1a]/40">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Experience Section */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-[#1a1a1a]/30 font-mono text-sm">03 — Experience</span>
            <h2 className="text-4xl md:text-6xl font-semibold mt-4 text-[#1a1a1a]">Work History</h2>
          </motion.div>

          <div className="relative">
            {experience.map((exp, index) => (
              <ExperienceItem key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper bg="bg-white">
        <div className="max-w-3xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#1a1a1a]/30 font-mono text-sm">04 — Contact</span>
            <h2 className="text-4xl md:text-6xl font-semibold mt-4 text-[#1a1a1a]">Let's Connect</h2>
            <p className="text-[#1a1a1a]/50 mt-4 max-w-md mx-auto">
              Have a project in mind? I'd love to hear about it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
          >
            {[
              { label: "Email", value: "dleteliersr@gmail.com", href: "mailto:dleteliersr@gmail.com" },
              { label: "Location", value: "Santiago, Chile" },
              { label: "LinkedIn", value: "Conectar", href: "https://www.linkedin.com/in/diegoleteliers10/" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                whileHover={{ scale: 1.02, y: -3 }}
                className="p-5 bg-[#f2f2f2] border-2 border-dashed border-[#1a1a1a]/10 rounded-xl text-center hover:bg-[#f2f2f2]/80 transition-colors group"
              >
                <div className="text-sm text-[#1a1a1a]/40 mb-1">{item.label}</div>
                <div className="text-[#1a1a1a] font-medium text-sm">{item.value}</div>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-5 py-4 bg-[#f2f2f2] border-0 rounded-xl text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/10 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-5 py-4 bg-[#f2f2f2] border-0 rounded-xl text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/10 transition-all"
              />
            </div>
            <textarea
              placeholder="Tell me about your project..."
              rows={4}
              className="w-full px-5 py-4 bg-[#f2f2f2] border-0 rounded-xl text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/10 transition-all resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-4 bg-[#1a1a1a] text-white font-medium rounded-xl hover:opacity-90 transition-opacity border-2 border-dashed border-white/20"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="py-10 px-8 border-t border-[#1a1a1a]/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-lg font-semibold text-[#1a1a1a]">
            Diego Letelier
          </div>
          <p className="text-[#1a1a1a]/40 text-sm">
            © 2024. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["GitHub", "LinkedIn", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

function SectionWrapper({ children, bg = "" }: { children: React.ReactNode; bg?: string }) {
  return (
    <section className={`py-28 px-8 ${bg}`}>
      {children}
    </section>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        whileHover={{ y: -4 }}
        className="p-8 bg-white border-2 border-dashed border-[#1a1a1a]/5 rounded-2xl hover:border-[#1a1a1a]/25 transition-all duration-300 group cursor-pointer"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-[#1a1a1a]/30 uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a] group-hover:text-[#1a1a1a]/70 transition-colors">
          {project.title}
        </h3>

        <p className="text-[#1a1a1a]/50 mb-5 leading-relaxed text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[#f2f2f2] rounded-full text-xs text-[#1a1a1a]/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex justify-between items-center py-2 border-b border-[#1a1a1a]/5 last:border-0"
    >
      <span className="text-[#1a1a1a]/70 font-medium text-sm">{skill.name}</span>
      <span className="text-[#1a1a1a]/40 text-sm">{getLevelText(skill.level)}</span>
    </motion.div>
  )
}

function ExperienceItem({ experience, index }: { experience: typeof experience[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative py-8 border-b border-[#1a1a1a]/5 last:border-0"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">{experience.role}</h3>
        <span className="text-sm text-[#1a1a1a]/30 font-mono shrink-0">{experience.period}</span>
      </div>
      <p className="text-[#1a1a1a]/50 font-medium mb-2">{experience.company}</p>
      <p className="text-[#1a1a1a]/40 leading-relaxed max-w-xl">{experience.description}</p>
    </motion.div>
  )
}
