import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  HeartPulse,
  Hospital,
  Layers3,
  MonitorSmartphone,
  RadioTower,
  Rocket,
  ServerCog,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguageMode } from '../hooks/useLanguageMode'

const portfolioIcons = {
  emergency: HeartPulse,
  production: MonitorSmartphone,
  tasik: Workflow,
  indramayu: Layers3,
  simrs: Hospital,
  fullstack: ServerCog,
  architect: Building2,
  writer: ShieldCheck,
  devops: RadioTower,
}

const content = {
  id: {
    back: 'Kembali ke Beranda',
    label: 'Portfolio SIMTECH',
    title: 'Perjalanan project yang merepresentasikan kapabilitas digital kami.',
    desc:
      'Ringkasan portfolio SIMTECH dari tahun 2024 sampai 2025, mencakup aplikasi mobile, monitoring operasional, integrasi data kesehatan, rescue SIMRS, serta kontribusi tenaga ahli pada project SPLP Komdigi.',
    cardTitle: 'Simple, focused, and operational.',
    cardDesc:
      'Portfolio ini menampilkan pekerjaan yang merepresentasikan fokus SIMTECH: membangun sistem digital yang bisa digunakan, dipahami, dan dikembangkan.',
    summary: [
      { value: '2024', label: 'SIMTECH Established' },
      { value: '2024–2025', label: 'Project Journey' },
      { value: 'Healthcare', label: 'Domain Focus' },
      { value: 'GovTech', label: 'Expertise Track' },
    ],
    year2024Title: 'Foundation and early digital solutions',
    year2024Desc:
      'Tahun awal SIMTECH berfokus pada aplikasi mobile, monitoring operasional, dan konsep integrasi data kesehatan daerah.',
    year2025Title: 'Healthcare, government, and expert contribution',
    year2025Desc:
      'Tahun berikutnya SIMTECH memperkuat pengalaman pada SIMRS, GovTech, fullstack, solution architecture, technical writing, dan DevOps.',
    ctaTitle: 'Bangun portfolio berikutnya bersama SIMTECH.',
    ctaDesc:
      'SIMTECH siap membantu kebutuhan sistem digital, SIMRS, mini e-commerce, web application, mobile app, IoT Solution, dashboard management, cloud, DevOps, dan custom software.',
    ctaButton: 'Mulai Project Inquiry',
    projects: [
      {
        year: '2024',
        icon: 'emergency',
        title: 'Aplikasi Mobile Gawat Darurat Bencana',
        client: 'Dinas Kesehatan Kabupaten Garut',
        category: 'Healthcare Emergency',
        desc: 'Aplikasi mobile untuk mendukung kebutuhan pelaporan dan koordinasi awal pada kondisi gawat darurat bencana.',
        points: ['Mobile application', 'Emergency response support', 'Healthcare operation'],
      },
      {
        year: '2024',
        icon: 'production',
        title: 'Mobile Production Monitoring',
        client: 'Business Operation',
        category: 'Operational Monitoring',
        desc: 'Aplikasi mobile untuk membantu pencatatan, monitoring progres, dan pelaporan aktivitas produksi dari lapangan.',
        points: ['Production monitoring', 'Mobile field reporting', 'Operational dashboard'],
      },
      {
        year: '2024',
        icon: 'tasik',
        title: 'One Integration Dinkes Kota Tasikmalaya',
        client: 'Dinas Kesehatan Kota Tasikmalaya',
        category: 'Data Integration',
        desc: 'Konsep integrasi data layanan kesehatan dengan Dinas Kesehatan sebagai pusat data dan monitoring.',
        points: ['Health data integration', 'Centralized monitoring', 'Executive dashboard concept'],
      },
      {
        year: '2024',
        icon: 'indramayu',
        title: 'One Integration Dinkes Indramayu',
        client: 'Dinas Kesehatan Indramayu',
        category: 'Health Data Ecosystem',
        desc: 'Konsep integrasi ekosistem data kesehatan antara Dinas Kesehatan, RSUD, dan Puskesmas.',
        points: ['RSUD & Puskesmas integration', 'One data concept', 'Health service monitoring'],
      },
      {
        year: '2025',
        icon: 'simrs',
        title: 'Rescue SIMRS RSUD dr. Slamet Garut',
        client: 'RSUD dr. Slamet Garut',
        category: 'Hospital Information System',
        desc: 'Pendampingan dan perbaikan SIMRS untuk mendukung keberlanjutan operasional layanan rumah sakit.',
        points: ['SIMRS improvement', 'Hospital workflow analysis', 'Technical documentation'],
      },
      {
        year: '2025',
        icon: 'fullstack',
        title: 'Tenaga Ahli Fullstack Project SPLP Komdigi',
        client: 'Komdigi / SPLP',
        category: 'Fullstack Engineering',
        desc: 'Kontribusi tenaga ahli fullstack untuk mendukung pengembangan platform digital dan integrasi layanan.',
        points: ['Frontend & backend support', 'Service integration', 'Government platform'],
      },
      {
        year: '2025',
        icon: 'architect',
        title: 'Tenaga Ahli Solution Architect Project SPLP Komdigi',
        client: 'Komdigi / SPLP',
        category: 'Solution Architecture',
        desc: 'Kontribusi dalam perancangan arsitektur solusi, integrasi sistem, dan kesiapan platform.',
        points: ['Solution architecture', 'Integration design', 'Platform readiness'],
      },
      {
        year: '2025',
        icon: 'writer',
        title: 'Tenaga Ahli Technical Writer Project SPLP Komdigi',
        client: 'Komdigi / SPLP',
        category: 'Technical Documentation',
        desc: 'Penyusunan dokumentasi teknis, laporan, narasi arsitektur, dan evidence project.',
        points: ['Technical documentation', 'Report writing', 'Evidence preparation'],
      },
      {
        year: '2025',
        icon: 'devops',
        title: 'Tenaga Ahli DevOps Project SPLP Komdigi',
        client: 'Komdigi / SPLP',
        category: 'DevOps & Infrastructure',
        desc: 'Kontribusi pada deployment, environment readiness, automation, dan dukungan operasional platform.',
        points: ['Deployment support', 'Environment readiness', 'DevOps operation'],
      },
    ],
  },

  en: {
    back: 'Back to Home',
    label: 'SIMTECH Portfolio',
    title: 'Project journey that represents our digital capability.',
    desc:
      'A summary of SIMTECH portfolio from 2024 to 2025, covering mobile applications, operational monitoring, health data integration, SIMRS rescue, and expert contributions to the SPLP Komdigi project.',
    cardTitle: 'Simple, focused, and operational.',
    cardDesc:
      'This portfolio represents SIMTECH’s focus: building digital systems that are usable, understandable, and scalable.',
    summary: [
      { value: '2024', label: 'SIMTECH Established' },
      { value: '2024–2025', label: 'Project Journey' },
      { value: 'Healthcare', label: 'Domain Focus' },
      { value: 'GovTech', label: 'Expertise Track' },
    ],
    year2024Title: 'Foundation and early digital solutions',
    year2024Desc:
      'SIMTECH’s first year focused on mobile applications, operational monitoring, and regional health data integration concepts.',
    year2025Title: 'Healthcare, government, and expert contribution',
    year2025Desc:
      'In the following year, SIMTECH strengthened its experience in SIMRS, GovTech, fullstack, solution architecture, technical writing, and DevOps.',
    ctaTitle: 'Let’s build the next portfolio together.',
    ctaDesc:
      'SIMTECH is ready to support digital systems, SIMRS, mini e-commerce, web applications, mobile apps, IoT Solution, dashboard management, cloud, DevOps, and custom software.',
    ctaButton: 'Start Project Inquiry',
    projects: [
      {
        year: '2024',
        icon: 'emergency',
        title: 'Disaster Emergency Mobile Application',
        client: 'Garut Regency Health Office',
        category: 'Healthcare Emergency',
        desc: 'A mobile application to support early reporting and coordination needs during disaster emergency situations.',
        points: ['Mobile application', 'Emergency response support', 'Healthcare operation'],
      },
      {
        year: '2024',
        icon: 'production',
        title: 'Mobile Production Monitoring',
        client: 'Business Operation',
        category: 'Operational Monitoring',
        desc: 'A mobile application to support recording, progress monitoring, and production activity reporting from the field.',
        points: ['Production monitoring', 'Mobile field reporting', 'Operational dashboard'],
      },
      {
        year: '2024',
        icon: 'tasik',
        title: 'One Integration for Tasikmalaya City Health Office',
        client: 'Tasikmalaya City Health Office',
        category: 'Data Integration',
        desc: 'A health service data integration concept with the Health Office as the center for data and monitoring.',
        points: ['Health data integration', 'Centralized monitoring', 'Executive dashboard concept'],
      },
      {
        year: '2024',
        icon: 'indramayu',
        title: 'One Integration for Indramayu Health Office',
        client: 'Indramayu Health Office',
        category: 'Health Data Ecosystem',
        desc: 'A health data ecosystem integration concept connecting the Health Office, hospitals, and community health centers.',
        points: ['Hospital & Puskesmas integration', 'One data concept', 'Health service monitoring'],
      },
      {
        year: '2025',
        icon: 'simrs',
        title: 'SIMRS Rescue for RSUD dr. Slamet Garut',
        client: 'RSUD dr. Slamet Garut',
        category: 'Hospital Information System',
        desc: 'Assistance and improvement of SIMRS to support hospital service operational continuity.',
        points: ['SIMRS improvement', 'Hospital workflow analysis', 'Technical documentation'],
      },
      {
        year: '2025',
        icon: 'fullstack',
        title: 'Fullstack Expert for SPLP Komdigi Project',
        client: 'Komdigi / SPLP',
        category: 'Fullstack Engineering',
        desc: 'Fullstack expert contribution to support digital platform development and service integration.',
        points: ['Frontend & backend support', 'Service integration', 'Government platform'],
      },
      {
        year: '2025',
        icon: 'architect',
        title: 'Solution Architect Expert for SPLP Komdigi Project',
        client: 'Komdigi / SPLP',
        category: 'Solution Architecture',
        desc: 'Contribution in solution architecture design, system integration, and platform readiness.',
        points: ['Solution architecture', 'Integration design', 'Platform readiness'],
      },
      {
        year: '2025',
        icon: 'writer',
        title: 'Technical Writer Expert for SPLP Komdigi Project',
        client: 'Komdigi / SPLP',
        category: 'Technical Documentation',
        desc: 'Technical documentation, reports, architecture narratives, and project evidence preparation.',
        points: ['Technical documentation', 'Report writing', 'Evidence preparation'],
      },
      {
        year: '2025',
        icon: 'devops',
        title: 'DevOps Expert for SPLP Komdigi Project',
        client: 'Komdigi / SPLP',
        category: 'DevOps & Infrastructure',
        desc: 'Contribution to deployment, environment readiness, automation, and platform operational support.',
        points: ['Deployment support', 'Environment readiness', 'DevOps operation'],
      },
    ],
  },
}

type Project = (typeof content)['id']['projects'][number]

export default function PortfolioPage() {
  const { language } = useLanguageMode()
  const t = content[language]

  const portfolio2024 = t.projects.filter((item) => item.year === '2024')
  const portfolio2025 = t.projects.filter((item) => item.year === '2025')

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="responsive-section relative overflow-hidden px-5 pb-16 pt-32 sm:px-6 md:pb-20 md:pt-36">
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

          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-yellow-300">
                {t.label}
              </p>

              <h1 className="max-w-5xl text-[clamp(2.7rem,7vw,5.2rem)] font-black leading-[0.95] tracking-tight">
                {t.title}
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
                {t.desc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/30"
            >
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950">
                <Rocket size={32} />
              </div>

              <h2 className="text-2xl font-black">{t.cardTitle}</h2>

              <p className="mt-4 leading-8 text-slate-400">{t.cardDesc}</p>
            </motion.div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.summary.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.07 }}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-2xl font-black text-yellow-300">{item.value}</p>
                <p className="mt-2 text-sm text-slate-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioYearSection
        year="2024"
        title={t.year2024Title}
        description={t.year2024Desc}
        items={portfolio2024}
        dark={false}
      />

      <PortfolioYearSection
        year="2025"
        title={t.year2025Title}
        description={t.year2025Desc}
        items={portfolio2025}
        dark
      />

      <section className="responsive-section bg-gradient-to-br from-yellow-950/30 via-slate-950 to-slate-950 px-5 py-20 text-center sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-yellow-300/20 bg-white/[0.04] p-8 shadow-2xl shadow-black/30">
          <Rocket className="mx-auto mb-5 text-yellow-300" size={42} />
          <h2 className="text-3xl font-black text-white md:text-4xl">{t.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">{t.ctaDesc}</p>

          <Link
            to="/services/project-inquiry"
            className="mt-8 inline-flex rounded-full bg-yellow-400 px-8 py-4 font-black text-slate-950 shadow-xl shadow-yellow-400/25"
          >
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </main>
  )
}

function PortfolioYearSection({
  year,
  title,
  description,
  items,
  dark,
}: {
  year: string
  title: string
  description: string
  items: Project[]
  dark: boolean
}) {
  return (
    <section
      className={`responsive-section px-5 py-20 sm:px-6 md:py-24 ${
        dark ? 'bg-slate-950' : 'bg-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.35fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-300">
              {year}
            </p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
              {title}
            </h2>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-slate-400">{description}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {items.map((project, index) => {
            const Icon = portfolioIcons[project.icon as keyof typeof portfolioIcons]

            return (
              <motion.article
                key={`${project.year}-${project.title}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20"
              >
                <div className="grid gap-0 md:grid-cols-[180px_1fr]">
                  <div className="relative flex min-h-[180px] items-center justify-center overflow-hidden bg-slate-950 p-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.22),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.18),transparent_36%)]" />
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-[1.5rem] border border-yellow-300/20 bg-yellow-300/10 text-yellow-300">
                      <Icon size={42} />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-yellow-300 px-3 py-1 text-xs font-black text-slate-950">
                        {project.year}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-cyan-200">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white">{project.title}</h3>

                    <p className="mt-2 text-sm font-bold text-yellow-200">
                      {project.client}
                    </p>

                    <p className="mt-4 leading-7 text-slate-400">{project.desc}</p>

                    <div className="mt-6 grid gap-3">
                      {project.points.map((point) => (
                        <div key={point} className="flex gap-3">
                          <CheckCircle2 className="mt-1 shrink-0 text-cyan-300" size={17} />
                          <p className="text-sm leading-6 text-slate-300">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
