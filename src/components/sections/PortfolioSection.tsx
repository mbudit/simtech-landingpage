import { motion, useScroll, useTransform } from 'framer-motion'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import {
  ArrowUpRight,
  Activity,
  Building2,
  Hospital,
  RadioTower,
  Smartphone,
} from 'lucide-react'
import { useRef } from 'react'

const portfolios = [
  {
    title: 'SIMRS Type D/C Platform',
    category: 'Healthcare System',
    desc: 'Prototype sistem informasi rumah sakit modular untuk pendaftaran, poli, IGD, RME, kasir, farmasi, dan dashboard manajemen.',
    icon: Hospital,
    tags: ['SIMRS', 'RME', 'Kasir', 'Farmasi'],
    stats: [
      { label: 'Modules', value: '8+' },
      { label: 'Flow', value: 'End-to-End' },
      { label: 'Ready', value: 'Demo' },
    ],
  },
  {
    title: 'RFID Laundry Monitoring',
    category: 'Hospital Operation',
    desc: 'Solusi monitoring linen rumah sakit berbasis RFID untuk pelacakan aset, distribusi, pencucian, dan kontrol kehilangan linen.',
    icon: RadioTower,
    tags: ['RFID', 'Linen', 'Tracking', 'Dashboard'],
    stats: [
      { label: 'Asset', value: 'Trackable' },
      { label: 'Data', value: 'Realtime' },
      { label: 'Use Case', value: 'RSUD' },
    ],
  },
  {
    title: 'SIMOLI Business Monitoring',
    category: 'Business Operation',
    desc: 'Sistem monitoring operasional untuk sales, finance, procurement, customer, dan production agar manajemen dapat melihat performa bisnis.',
    icon: Building2,
    tags: ['Dashboard', 'Workflow', 'ERP Lite'],
    stats: [
      { label: 'Division', value: 'Multi' },
      { label: 'Control', value: 'Central' },
      { label: 'Report', value: 'Digital' },
    ],
  },
  {
    title: 'Mobile Field App',
    category: 'Mobile Application',
    desc: 'Aplikasi mobile untuk teknisi lapangan agar data survey, progress pekerjaan, foto, dan kebutuhan produksi bisa dikirim cepat ke kantor.',
    icon: Smartphone,
    tags: ['Android', 'Field App', 'Workflow'],
    stats: [
      { label: 'User', value: 'Field' },
      { label: 'Input', value: 'Mobile' },
      { label: 'Speed', value: 'Fast' },
    ],
  },
]

function MockupPanel({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [20, -20])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8])
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 8])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.18, 0.42, 0.18])

  const barOne = useTransform(scrollYProgress, [0, 1], ['35%', '88%'])
  const barTwo = useTransform(scrollYProgress, [0, 1], ['48%', '76%'])
  const barThree = useTransform(scrollYProgress, [0, 1], ['28%', '92%'])
  const barFour = useTransform(scrollYProgress, [0, 1], ['54%', '82%'])

  const bars = [barOne, barTwo, barThree, barFour]

  return (
    <motion.div
      ref={ref}
      style={{ y, rotateX, rotateY, transformPerspective: 1200 }}
      className="relative min-h-[300px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/30"
    >
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.45),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.35),transparent_34%)]"
      />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-300">
            Dashboard Preview
          </p>
          <p className="mt-2 text-sm text-slate-400">SIMTECH Digital Console</p>
        </div>

        <div className="flex gap-2">
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: 0 }}
            className="h-3 w-3 rounded-full bg-yellow-300"
          />
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: 0.4 }}
            className="h-3 w-3 rounded-full bg-cyan-300"
          />
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: 0.8 }}
            className="h-3 w-3 rounded-full bg-slate-500"
          />
        </div>
      </div>

      <div className="relative mt-7 grid grid-cols-3 gap-3">
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            whileHover={{ y: -4, scale: 1.03 }}
            className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"
          >
            <div className="mb-3 h-2 w-12 rounded-full bg-yellow-300/70" />
            <div className="h-8 rounded-xl bg-cyan-300/10" />
          </motion.div>
        ))}
      </div>

      <div className="relative mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <div className="mb-4 flex items-center gap-2">
          <Activity size={18} className="text-yellow-300" />
          <p className="text-sm font-bold text-white">Operational Flow</p>
        </div>

        <div className="space-y-3">
          {bars.map((bar, itemIndex) => (
            <div key={itemIndex} className="flex items-center gap-3">
              <motion.div
                animate={{ opacity: [0.45, 1, 0.45] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: itemIndex * 0.25,
                }}
                className="h-3 w-3 rounded-full bg-yellow-300"
              />
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  style={{ width: bar }}
                  className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-cyan-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-5 grid grid-cols-4 gap-3">
        {[1, 2, 3, 4].map((item) => (
          <motion.div
            key={item}
            animate={{ opacity: [0.35, 0.9, 0.35] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: item * 0.25 + index * 0.1,
            }}
            className="h-14 rounded-2xl border border-white/10 bg-white/[0.04]"
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const direction = useScrollDirection()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0px', '-180px'])
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.15, 0.95])

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative overflow-hidden bg-slate-950 px-6 py-24"
    >
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl"
      />
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
              Portfolio & Use Case
            </p>
            <h2 className="text-4xl font-black text-white md:text-5xl">
              Solusi digital yang dirancang untuk kebutuhan nyata di lapangan.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              SIMTECH membantu membangun sistem yang dapat dipakai oleh user operasional,
              dipahami oleh manajemen, dan dikembangkan oleh tim teknis.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 px-6 py-3 font-bold text-yellow-100 transition hover:bg-yellow-300/10"
          >
            Discuss Project
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <div className="space-y-10">
          {portfolios.map((item, index) => {
            const Icon = item.icon
            const reverse = index % 2 === 1

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: direction === 'down' ? 80 : -80,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: direction === 'down' ? 80 : -80,
                  scale:0.96,
                }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{
                  duration: 1.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/20 md:grid-cols-2 md:p-7"
              >
                <div className={reverse ? 'md:order-2' : ''}>
                  <MockupPanel index={index} />
                </div>

                <motion.div
                  initial={{ 
                    opacity: 0, 
                    x: direction === 'down' ? (reverse ? 50 :-50) : (reverse ? 50 : -50), 
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                  }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.75, delay: 0.15 }}
                  className="flex flex-col justify-center p-2 md:p-6"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-300/10 text-yellow-300"
                    >
                      <Icon size={28} />
                    </motion.div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                        {item.category}
                      </p>
                      <h3 className="mt-2 text-2xl font-black text-white md:text-3xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg leading-8 text-slate-400">{item.desc}</p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ y: -2, scale: 1.05 }}
                        className="rounded-full bg-yellow-300/10 px-3 py-1 text-xs font-semibold text-yellow-100"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {item.stats.map((stat, statIndex) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: statIndex * 0.08 }}
                        className="rounded-2xl border border-white/10 bg-slate-950/70 p-4"
                      >
                        <p className="text-lg font-black text-white">{stat.value}</p>
                        <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
