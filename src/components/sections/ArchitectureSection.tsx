import { motion, useScroll, useTransform } from 'framer-motion'
import { Cloud, Database, Gauge, Globe2, Layers3, ServerCog } from 'lucide-react'
import { useRef } from 'react'

const layers = [
  {
    title: 'Client Access',
    desc: 'User mengakses sistem melalui browser, mobile app, dashboard operasional, atau perangkat lapangan.',
    icon: Globe2,
    tags: ['Browser', 'Mobile', 'Dashboard'],
  },
  {
    title: 'Application Layer',
    desc: 'Frontend web dan mobile mengelola pengalaman pengguna, workflow, form input, dan interaksi data.',
    icon: Layers3,
    tags: ['React', 'Mobile UI', 'Workflow'],
  },
  {
    title: 'API & Business Logic',
    desc: 'API menjadi penghubung antara aplikasi, validasi, business rules, integrasi eksternal, dan proses backend.',
    icon: ServerCog,
    tags: ['REST API', 'Validation', 'Integration'],
  },
  {
    title: 'Database Layer',
    desc: 'Data transaksi, master data, user, billing, report, dan histori operasional tersimpan secara terstruktur.',
    icon: Database,
    tags: ['PostgreSQL', 'MySQL', 'Data Model'],
  },
  {
    title: 'Cloud Infrastructure',
    desc: 'Sistem dideploy menggunakan server/cloud dengan NGINX, SSL, backup, dan environment production.',
    icon: Cloud,
    tags: ['Cloud', 'NGINX', 'SSL'],
  },
  {
    title: 'Monitoring & Insight',
    desc: 'Dashboard membantu manajemen membaca status operasional, performa layanan, dan perkembangan data.',
    icon: Gauge,
    tags: ['Report', 'Analytics', 'Monitoring'],
  },
]

function ArchitectureLayer({
  layer,
  index,
  total,
}: {
  layer: (typeof layers)[number]
  index: number
  total: number
}) {
  const itemRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['start 90%', 'center 45%'],
  })

  const isLeft = index % 2 === 0
  const Icon = layer.icon

  /**
   * Saat scroll down:
   * opacity 0 -> 1
   * x dari kiri/kanan -> tengah
   * y dari bawah -> normal
   *
   * Saat scroll up:
   * progress turun lagi, maka otomatis balik ke opacity 0 dan posisi awal.
   */
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [isLeft ? -90 : 90, 0]
  )
  const y = useTransform(scrollYProgress, [0, 1], [45, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1])
  const iconScale = useTransform(scrollYProgress, [0, 1], [0.75, 1])
  const iconOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 1])

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity, x, y, scale }}
      className="relative grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-center"
    >
      <div className={isLeft ? 'md:text-right' : 'md:col-start-3'}>
        <motion.div
          whileHover={{ y: -4, scale: 1.02 }}
          className="rounded-[1.5rem] border border-white/10 bg-slate-950/85 p-6 transition hover:border-yellow-300/40"
        >
          <div className={`mb-3 flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
            {layer.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-yellow-300/10 px-3 py-1 text-xs font-semibold text-yellow-100"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-black text-white">{layer.title}</h3>
          <p className="mt-3 leading-7 text-slate-400">{layer.desc}</p>
        </motion.div>
      </div>

      <motion.div
        style={{ scale: iconScale, opacity: iconOpacity }}
        animate={{
          boxShadow: [
            '0 0 0 rgba(250,204,21,0.0)',
            '0 0 30px rgba(250,204,21,0.28)',
            '0 0 0 rgba(250,204,21,0.0)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.25,
        }}
        className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-300/30 bg-slate-950 text-yellow-300 shadow-xl shadow-yellow-400/10 md:col-start-2 md:row-start-1"
      >
        <Icon size={28} />
      </motion.div>

      <div
        className={
          isLeft
            ? 'hidden md:block'
            : 'hidden md:col-start-1 md:row-start-1 md:block'
        }
      />

      {index < total - 1 && (
        <div className="absolute left-8 top-[72px] h-8 w-[2px] bg-yellow-300/20 md:hidden" />
      )}
    </motion.div>
  )
}

export default function ArchitectureSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const glowY = useTransform(scrollYProgress, [0, 1], ['120px', '-220px'])
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.2, 0.9])

  /**
   * Garis tengah ikut scroll:
   * scroll down  -> garis terisi
   * scroll up    -> garis menyusut kembali
   */
  const lineScale = useTransform(scrollYProgress, [0.18, 0.78], [0, 1])

  const headerOpacity = useTransform(scrollYProgress, [0, 0.18], [0, 1])
  const headerY = useTransform(scrollYProgress, [0, 0.18], [40, 0])

  return (
    <section
      ref={sectionRef}
      id="architecture"
      className="relative overflow-hidden bg-slate-950 px-6 py-24"
    >
      <motion.div
        style={{ y: glowY, scale: glowScale }}
        className="absolute left-1/2 top-20 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <motion.div
        style={{ y: glowY }}
        className="absolute right-[-160px] top-40 h-[420px] w-[420px] rounded-full bg-yellow-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
            Digital Architecture
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Arsitektur modular untuk sistem digital yang siap tumbuh.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            SIMTECH membangun sistem dengan pendekatan layer yang jelas agar aplikasi mudah
            dikembangkan, diintegrasikan, diamankan, dan dioperasikan.
          </p>
        </motion.div>

        <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 md:p-10">
          <div className="absolute left-1/2 top-16 hidden h-[calc(100%-8rem)] w-[2px] -translate-x-1/2 overflow-hidden rounded-full bg-white/10 md:block">
            <motion.div
              style={{ scaleY: lineScale, transformOrigin: 'top' }}
              className="h-full w-full rounded-full bg-gradient-to-b from-yellow-300 via-cyan-300 to-transparent"
            />
          </div>

          <div className="grid gap-8">
            {layers.map((layer, index) => (
              <ArchitectureLayer
                key={layer.title}
                layer={layer}
                index={index}
                total={layers.length}
              />
            ))}
          </div>

          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.72, 0.88], [0, 1]),
              y: useTransform(scrollYProgress, [0.72, 0.88], [30, 0]),
            }}
            className="mt-10 rounded-[1.5rem] border border-cyan-300/20 bg-cyan-300/5 p-6 text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Client → Application → API → Database → Cloud → Monitoring
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
