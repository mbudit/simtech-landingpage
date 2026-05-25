import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import {
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  HardDrive,
  RadioTower,
  Server,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Terminal,
  LayoutDashboard,
  PlugZap,
  Wrench,
  Headphones,
} from 'lucide-react'
import { useRef } from 'react'

const stackRows = [
  [
    {
      name: 'React',
      category: 'Frontend',
      desc: 'Modern web interface',
      icon: Code2,
    },
    {
      name: 'TypeScript',
      category: 'Language',
      desc: 'Typed development',
      icon: Braces,
    },
    {
      name: 'Three.js',
      category: '3D Web',
      desc: 'Interactive 3D visual',
      icon: Globe2,
    },
    {
      name: 'PHP',
      category: 'Backend',
      desc: 'Web application logic',
      icon: Terminal,
    },
  ],
  [
    {
      name: 'PostgreSQL',
      category: 'Database',
      desc: 'Reliable relational data',
      icon: Database,
    },
    {
      name: 'MySQL',
      category: 'Database',
      desc: 'Operational database',
      icon: HardDrive,
    },
    {
      name: 'NGINX',
      category: 'Web Server',
      desc: 'Reverse proxy & static hosting',
      icon: Server,
    },
    {
      name: 'Ubuntu Server',
      category: 'Infrastructure',
      desc: 'Linux production server',
      icon: Terminal,
    },
  ],
  [
    {
      name: 'Cloud Server',
      category: 'Cloud',
      desc: 'Scalable deployment',
      icon: Cloud,
    },
    {
      name: 'REST API',
      category: 'Integration',
      desc: 'System communication',
      icon: GitBranch,
    },
    {
      name: 'RFID',
      category: 'IoT Solution',
      desc: 'Asset tracking solution',
      icon: RadioTower,
    },
    {
      name: 'Mobile App',
      category: 'Application',
      desc: 'Android field operation',
      icon: Smartphone,
    },
  ],
  [
    {
      name: 'Website Development',
      category: 'Website',
      desc: 'Company profile & landing page',
      icon: Globe2,
    },
    {
      name: 'Mini E-Commerce',
      category: 'Commerce',
      desc: 'Online catalog & order flow',
      icon: ShoppingCart,
    },
    {
      name: 'Web Application',
      category: 'Custom System',
      desc: 'Business workflow platform',
      icon: Globe2,
    },
    {
      name: 'Dashboard Management',
      category: 'Analytics',
      desc: 'Operational insight & report',
      icon: LayoutDashboard,
    },
    {
      name: 'API Integration',
      category: 'Connectivity',
      desc: 'Bridge between systems',
      icon: PlugZap,
    },
  ],
  [
    {
      name: 'Custom Software',
      category: 'Solution',
      desc: 'Tailored digital system',
      icon: Wrench,
    },
    {
      name: 'IT Consulting',
      category: 'Advisory',
      desc: 'Technology roadmap & advisory',
      icon: Headphones,
    },
    {
      name: 'Cloud & DevOps',
      category: 'Operation',
      desc: 'Deployment and automation',
      icon: Cloud,
    },
    {
      name: 'Security Ready',
      category: 'Best Practice',
      desc: 'Basic hardening approach',
      icon: ShieldCheck,
    },
  ],
]

function StackCard({
  stack,
}: {
  stack: (typeof stackRows)[number][number]
}) {
  const Icon = stack.icon

  return (
    <div className="relative min-h-[190px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/75 p-5 shadow-2xl shadow-black/20 sm:min-h-[210px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.14),transparent_40%)]" />

      <div className="relative flex h-full flex-col justify-between">
        <div>
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-300/10 text-yellow-300">
            <Icon size={26} />
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
            {stack.category}
          </p>

          <h3 className="text-xl font-black text-white">{stack.name}</h3>
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-400">{stack.desc}</p>
      </div>
    </div>
  )
}

function StackRow({
  row,
  rowIndex,
  progress,
}: {
  row: (typeof stackRows)[number]
  rowIndex: number
  progress: MotionValue<number>
}) {
  const fromRight = rowIndex % 2 === 0

  /**
   * Pola animasi:
   * row 1: kanan → kiri
   * row 2: kiri → kanan
   * row 3: kanan → kiri
   * row 4: kiri → kanan
   * row 5: kanan → kiri
   *
   * Saat scroll up, progress turun dan row kembali ke posisi awal.
   */
  const ranges = [
    [0.08, 0.28],
    [0.16, 0.36],
    [0.24, 0.44],
    [0.32, 0.52],
    [0.40, 0.60],
  ]

  const [start, end] = ranges[rowIndex]

  const x = useTransform(
    progress,
    [start, end],
    [fromRight ? 140 : -140, 0]
  )

  const opacity = useTransform(progress, [start, start + 0.06, end], [0, 0.55, 1])
  const scale = useTransform(progress, [start, end], [0.98, 1])
  const blur = useTransform(progress, [start, end], ['blur(5px)', 'blur(0px)'])

  return (
    <motion.div
      style={{
        x,
        opacity,
        scale,
        filter: blur,
      }}
      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {row.map((stack) => (
        <StackCard key={stack.name} stack={stack} />
      ))}
    </motion.div>
  )
}

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const headerOpacity = useTransform(scrollYProgress, [0.02, 0.14], [0, 1])
  const headerY = useTransform(scrollYProgress, [0.02, 0.14], [44, 0])

  const glowY = useTransform(scrollYProgress, [0, 1], ['120px', '-220px'])
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.15, 1])

  const summaryOpacity = useTransform(scrollYProgress, [0.66, 0.82], [0, 1])
  const summaryY = useTransform(scrollYProgress, [0.66, 0.82], [36, 0])

  return (
    <section
      ref={sectionRef}
      className="responsive-section relative overflow-hidden bg-slate-900 px-5 py-20 sm:px-6 md:py-24 lg:py-28"
    >
      <motion.div
        style={{ y: glowY, scale: glowScale }}
        className="absolute left-[-160px] top-24 h-[460px] w-[460px] rounded-full bg-yellow-400/10 blur-3xl"
      />

      <motion.div
        style={{ y: glowY, scale: glowScale }}
        className="absolute right-[-160px] bottom-24 h-[460px] w-[460px] rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
            Technology Stack
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Teknologi dan kapabilitas untuk solusi digital end-to-end.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            SIMTECH menggunakan pendekatan teknologi yang praktis, modular, dan mudah
            dikembangkan untuk kebutuhan website, mini e-commerce, web application,
            mobile app, API integration, cloud, RFID, IoT solution, dashboard management,
            dan custom software.
          </p>
        </motion.div>

        <div className="space-y-5">
          {stackRows.map((row, rowIndex) => (
            <StackRow
              key={rowIndex}
              row={row}
              rowIndex={rowIndex}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <motion.div
          style={{ opacity: summaryOpacity, y: summaryY }}
          className="mt-12 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/5 p-7 text-center"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-300/10 text-yellow-300">
            <ShieldCheck size={28} />
          </div>

          <h3 className="text-2xl font-black text-white">
            Built for maintainability, integration, and operational readiness.
          </h3>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-400">
            Pemilihan teknologi disesuaikan dengan kebutuhan project: cepat untuk prototype,
            kuat untuk production, mudah diintegrasikan, dan tetap mudah dikelola oleh tim teknis.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
