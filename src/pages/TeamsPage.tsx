import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  BriefcaseBusiness,
  Code2,
  Cpu,
  LayoutDashboard,
  Rocket,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguageMode } from '../hooks/useLanguageMode'

const content = {
  id: {
    back: 'Kembali ke Beranda',
    label: 'Tim SIMTECH',
    title: 'Tim kecil, eksekusi fokus.',
    desc:
      'SIMTECH dibangun oleh tim inti yang fleksibel, kolaboratif, dan berfokus pada pengembangan solusi digital yang dapat digunakan secara nyata oleh client, mulai dari business process, UI/UX, engineering, IoT/RFID, deployment, hingga support implementasi.',
    leadershipLabel: 'Leadership',
    leadershipTitle: 'Arah strategis dan kepemimpinan teknologi.',
    deliveryLabel: 'Delivery Team',
    deliveryTitle: 'Tim lintas fungsi untuk delivery produk digital.',
    deliveryDesc:
      'Tim SIMTECH bekerja lintas fungsi agar solusi yang dikembangkan tidak hanya selesai secara teknis, tetapi juga sesuai kebutuhan operasional pengguna.',
    ctaTitle: 'Satu tim untuk strategi, teknologi, dan eksekusi.',
    ctaDesc:
      'SIMTECH siap membantu client membangun solusi digital dari ide awal, perancangan sistem, pengembangan aplikasi, deployment, sampai support implementasi.',
    ctaButton: 'Kembali ke Website Utama',
    leadership: [
      {
        name: 'Haris M Pratama',
        role: 'CEO / Founder',
        desc: 'Memimpin arah bisnis, strategi produk, partnership, dan pengembangan solusi digital SIMTECH.',
        icon: Rocket,
      },
      {
        name: 'Rama',
        role: 'Chief Technology Officer',
        desc: 'Mengawal arah teknologi, arsitektur sistem, kualitas engineering, dan delivery teknis.',
        icon: ShieldCheck,
      },
    ],
    teams: [
      {
        name: 'Budi M Triono',
        role: 'Software Engineering',
        desc: 'Pengembangan backend, frontend, integrasi API, database, dan kebutuhan aplikasi operasional.',
        icon: Code2,
      },
      {
        name: 'Bagaskara',
        role: 'UI/UX Design',
        desc: 'Perancangan tampilan, user experience, desain visual, dan kebutuhan interface aplikasi.',
        icon: LayoutDashboard,
      },
      {
        name: 'Akmal',
        role: 'IoT & RFID Engineering',
        desc: 'Pengembangan solusi IoT, RFID, device integration, dan monitoring perangkat lapangan.',
        icon: Cpu,
      },
      {
        name: 'Project Delivery & Support Team',
        role: 'Implementation Support',
        desc: 'Mendukung implementasi, koordinasi user, dokumentasi, testing, dan support operasional.',
        icon: BriefcaseBusiness,
      },
    ],
  },

  en: {
    back: 'Back to Home',
    label: 'SIMTECH Teams',
    title: 'Small team, focused execution.',
    desc:
      'SIMTECH is built by a flexible and collaborative core team focused on developing digital solutions that can be used in real client operations, from business process, UI/UX, engineering, IoT/RFID, deployment, to implementation support.',
    leadershipLabel: 'Leadership',
    leadershipTitle: 'Strategic direction and technology leadership.',
    deliveryLabel: 'Delivery Team',
    deliveryTitle: 'Cross-functional team for digital product delivery.',
    deliveryDesc:
      'SIMTECH team works across functions to ensure that the solutions are not only technically completed, but also aligned with user operational needs.',
    ctaTitle: 'One team for strategy, technology, and execution.',
    ctaDesc:
      'SIMTECH is ready to help clients build digital solutions from initial ideas, system design, application development, deployment, to implementation support.',
    ctaButton: 'Back to Main Website',
    leadership: [
      {
        name: 'Haris M Pratama',
        role: 'CEO / Founder',
        desc: 'Leads business direction, product strategy, partnerships, and SIMTECH digital solution development.',
        icon: Rocket,
      },
      {
        name: 'Rama',
        role: 'Chief Technology Officer',
        desc: 'Oversees technology direction, system architecture, engineering quality, and technical delivery.',
        icon: ShieldCheck,
      },
    ],
    teams: [
      {
        name: 'Budi M Triono',
        role: 'Software Engineering',
        desc: 'Develops backend, frontend, API integration, database, and operational application needs.',
        icon: Code2,
      },
      {
        name: 'Bagaskara',
        role: 'UI/UX Design',
        desc: 'Designs interface, user experience, visual design, and application interaction needs.',
        icon: LayoutDashboard,
      },
      {
        name: 'Akmal',
        role: 'IoT & RFID Engineering',
        desc: 'Develops IoT, RFID, device integration, and field device monitoring solutions.',
        icon: Cpu,
      },
      {
        name: 'Project Delivery & Support Team',
        role: 'Implementation Support',
        desc: 'Supports implementation, user coordination, documentation, testing, and operational support.',
        icon: BriefcaseBusiness,
      },
    ],
  },
}

export default function TeamsPage() {
  const { language } = useLanguageMode()
  const t = content[language]

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="responsive-section relative overflow-hidden px-5 pb-20 pt-32 sm:px-6 md:pb-24 md:pt-36">
        <div className="absolute right-[-180px] top-0 h-[520px] w-[520px] rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute left-[-180px] bottom-0 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-yellow-300/40 hover:text-yellow-300"
          >
            <ArrowLeft size={18} />
            {t.back}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-yellow-300">
              {t.label}
            </p>

            <h1 className="text-[clamp(2.8rem,7vw,5.4rem)] font-black leading-[0.95] tracking-tight">
              {t.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              {t.desc}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="responsive-section bg-slate-900 px-5 py-20 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              {t.leadershipLabel}
            </p>
            <h2 className="text-4xl font-black text-white md:text-5xl">
              {t.leadershipTitle}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {t.leadership.map((member, index) => {
              const Icon = member.icon

              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '-80px' }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-7 shadow-2xl shadow-black/20"
                >
                  <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950">
                    <Icon size={32} />
                  </div>

                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
                    {member.role}
                  </p>

                  <h3 className="text-3xl font-black text-white">{member.name}</h3>
                  <p className="mt-4 leading-8 text-slate-400">{member.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="responsive-section bg-slate-950 px-5 py-20 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
              {t.deliveryLabel}
            </p>
            <h2 className="text-4xl font-black text-white md:text-5xl">
              {t.deliveryTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              {t.deliveryDesc}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.teams.map((member, index) => {
              const Icon = member.icon

              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '-80px' }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/20"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-300/10 text-yellow-300">
                    <Icon size={28} />
                  </div>

                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                    {member.role}
                  </p>

                  <h3 className="text-2xl font-black text-white">{member.name}</h3>
                  <p className="mt-4 leading-8 text-slate-400">{member.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="responsive-section bg-gradient-to-br from-yellow-950/30 via-slate-950 to-slate-950 px-5 py-20 text-center sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-yellow-300/20 bg-white/[0.04] p-8 shadow-2xl shadow-black/30">
          <Users className="mx-auto mb-5 text-yellow-300" size={42} />
          <h2 className="text-3xl font-black text-white md:text-4xl">
            {t.ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            {t.ctaDesc}
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-yellow-400 px-8 py-4 font-black text-slate-950 shadow-xl shadow-yellow-400/25"
          >
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </main>
  )
}
