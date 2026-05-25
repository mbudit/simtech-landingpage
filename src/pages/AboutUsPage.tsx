import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Building2,
  Calendar,
  CheckCircle2,
  Compass,
  Rocket,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguageMode } from '../hooks/useLanguageMode'

const content = {
  id: {
    back: 'Kembali ke Beranda',
    label: 'Tentang SIMTECH',
    title: 'Simplify Technologies Indonesia.',
    desc:
      'SIMTECH berdiri sejak tahun 2024 sebagai software house yang berfokus pada pengembangan solusi digital untuk healthcare, business operation, enterprise, dan kebutuhan integrasi sistem. SIMTECH membantu organisasi membangun aplikasi yang tidak hanya menarik secara tampilan, tetapi juga kuat dari sisi proses, data, arsitektur, deployment, dan kesiapan operasional.',
    establishedTitle: 'Berdiri sejak 2024',
    establishedDesc:
      'Dari awal berdiri, SIMTECH bergerak pada project yang dekat dengan kebutuhan operasional nyata: aplikasi mobile, production monitoring, integrasi data Dinas Kesehatan, rescue SIMRS, serta kontribusi tenaga ahli untuk project nasional SPLP Komdigi.',
    journeyLabel: 'Company Journey',
    journeyTitle: 'Perjalanan SIMTECH dari 2024 sampai 2026.',
    journeyDesc:
      'Perjalanan ini menunjukkan fokus SIMTECH dalam membangun solusi digital yang relevan dengan kebutuhan lapangan, healthcare, government, dan enterprise.',
    strengthLabel: 'Our Strength',
    strengthTitle: 'Fokus pada solusi yang bisa digunakan dan dikembangkan.',
    ctaTitle: 'Bangun solusi digital bersama SIMTECH.',
    ctaDesc:
      'Kami siap membantu kebutuhan sistem digital, SIMRS, RFID, IoT Solution, mini e-commerce, web application, mobile app, dashboard management, API integration, cloud, dan custom software.',
    ctaButton: 'Kembali ke Website Utama',
    journey: [
      {
        year: '2024',
        title: 'Foundation & Early Digital Solutions',
        items: [
          'Aplikasi mobile gawat darurat bencana untuk Dinkes Kabupaten Garut.',
          'Aplikasi mobile production monitoring.',
          'Konsep One Integration Dinkes Kota Tasikmalaya.',
          'Konsep One Integration Dinkes Indramayu.',
        ],
      },
      {
        year: '2025',
        title: 'Healthcare, Government, and National-Scale Expertise',
        items: [
          'Rescue project SIMRS RSUD dr. Slamet Garut.',
          'Tenaga Ahli Fullstack Project SPLP Komdigi.',
          'Tenaga Ahli Solution Architect Project SPLP Komdigi.',
          'Tenaga Ahli Technical Writer Project SPLP Komdigi.',
          'Tenaga Ahli DevOps Project SPLP Komdigi.',
        ],
      },
      {
        year: '2026',
        title: 'Next Growth & Coming Soon Projects',
        items: [
          'Project coming soon.',
          'Pengembangan solusi digital yang lebih modular untuk healthcare, enterprise, dan government ecosystem.',
        ],
      },
    ],
    strengths: [
      {
        title: 'Healthcare Digital System',
        desc: 'Berpengalaman dalam konteks SIMRS, RME, integrasi layanan rumah sakit, dan kebutuhan operasional RSUD.',
        icon: ShieldCheck,
      },
      {
        title: 'Government & Enterprise Project',
        desc: 'Memiliki pengalaman dalam project skala pemerintah, integrasi sistem, arsitektur solusi, technical writing, dan DevOps.',
        icon: Building2,
      },
      {
        title: 'End-to-End Delivery',
        desc: 'Mendampingi dari analisis kebutuhan, UI/UX, development, deployment, dokumentasi, sampai support operasional.',
        icon: Compass,
      },
    ],
  },

  en: {
    back: 'Back to Home',
    label: 'About SIMTECH',
    title: 'Simplify Technologies Indonesia.',
    desc:
      'SIMTECH was established in 2024 as a software house focused on developing digital solutions for healthcare, business operations, enterprise needs, and system integration. SIMTECH helps organizations build applications that are not only visually engaging, but also strong in process, data, architecture, deployment, and operational readiness.',
    establishedTitle: 'Established in 2024',
    establishedDesc:
      'Since its establishment, SIMTECH has focused on projects closely related to real operational needs: mobile applications, production monitoring, Health Office data integration, SIMRS rescue, and expert contributions to the national SPLP Komdigi project.',
    journeyLabel: 'Company Journey',
    journeyTitle: 'SIMTECH journey from 2024 to 2026.',
    journeyDesc:
      'This journey reflects SIMTECH’s focus on building digital solutions relevant to field operations, healthcare, government, and enterprise needs.',
    strengthLabel: 'Our Strength',
    strengthTitle: 'Focused on solutions that can be used and continuously developed.',
    ctaTitle: 'Build digital solutions with SIMTECH.',
    ctaDesc:
      'We are ready to support digital system needs, SIMRS, RFID, IoT Solution, mini e-commerce, web application, mobile app, dashboard management, API integration, cloud, and custom software.',
    ctaButton: 'Back to Main Website',
    journey: [
      {
        year: '2024',
        title: 'Foundation & Early Digital Solutions',
        items: [
          'Disaster emergency mobile application for Garut Regency Health Office.',
          'Mobile production monitoring application.',
          'One Integration concept for Tasikmalaya City Health Office.',
          'One Integration concept for Indramayu Health Office.',
        ],
      },
      {
        year: '2025',
        title: 'Healthcare, Government, and National-Scale Expertise',
        items: [
          'SIMRS rescue project at RSUD dr. Slamet Garut.',
          'Fullstack Expert for SPLP Komdigi Project.',
          'Solution Architect Expert for SPLP Komdigi Project.',
          'Technical Writer Expert for SPLP Komdigi Project.',
          'DevOps Expert for SPLP Komdigi Project.',
        ],
      },
      {
        year: '2026',
        title: 'Next Growth & Coming Soon Projects',
        items: [
          'Coming soon projects.',
          'Development of more modular digital solutions for healthcare, enterprise, and government ecosystems.',
        ],
      },
    ],
    strengths: [
      {
        title: 'Healthcare Digital System',
        desc: 'Experienced in SIMRS, RME, hospital service integration, and RSUD operational needs.',
        icon: ShieldCheck,
      },
      {
        title: 'Government & Enterprise Project',
        desc: 'Experienced in government-scale projects, system integration, solution architecture, technical writing, and DevOps.',
        icon: Building2,
      },
      {
        title: 'End-to-End Delivery',
        desc: 'Supporting from requirement analysis, UI/UX, development, deployment, documentation, to operational support.',
        icon: Compass,
      },
    ],
  },
}

export default function AboutUsPage() {
  const { language } = useLanguageMode()
  const t = content[language]

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="responsive-section relative overflow-hidden px-5 pb-20 pt-28 sm:px-6 md:pb-24 md:pt-32">
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

          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-yellow-300">
                {t.label}
              </p>

              <h1 className="max-w-4xl text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight">
                {t.title}
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
                {t.desc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/30"
            >
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950">
                <Rocket size={32} />
              </div>

              <h2 className="text-2xl font-black">{t.establishedTitle}</h2>

              <p className="mt-4 leading-8 text-slate-400">{t.establishedDesc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="responsive-section bg-slate-900 px-5 py-20 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              {t.journeyLabel}
            </p>
            <h2 className="text-4xl font-black text-white md:text-5xl">{t.journeyTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">{t.journeyDesc}</p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 hidden h-full w-[2px] bg-gradient-to-b from-yellow-300 via-cyan-300 to-transparent md:block" />

            <div className="space-y-8">
              {t.journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className="relative grid gap-5 md:grid-cols-[80px_1fr]"
                >
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-300/30 bg-slate-950 text-yellow-300">
                    <Calendar size={24} />
                  </div>

                  <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-7 shadow-2xl shadow-black/20">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
                      {item.year}
                    </p>
                    <h3 className="mt-3 text-2xl font-black text-white">{item.title}</h3>

                    <div className="mt-6 grid gap-3">
                      {item.items.map((point) => (
                        <div
                          key={point}
                          className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                        >
                          <CheckCircle2 className="mt-1 shrink-0 text-cyan-300" size={18} />
                          <p className="leading-7 text-slate-300">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="responsive-section bg-slate-950 px-5 py-20 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
              {t.strengthLabel}
            </p>
            <h2 className="text-4xl font-black text-white md:text-5xl">
              {t.strengthTitle}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {t.strengths.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '-80px' }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-300/10 text-yellow-300">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-4 leading-8 text-slate-400">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="responsive-section bg-gradient-to-br from-yellow-950/30 via-slate-950 to-slate-950 px-5 py-20 text-center sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-yellow-300/20 bg-white/[0.04] p-8 shadow-2xl shadow-black/30">
          <Users className="mx-auto mb-5 text-yellow-300" size={42} />
          <h2 className="text-3xl font-black text-white md:text-4xl">{t.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">{t.ctaDesc}</p>

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
