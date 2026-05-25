import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Cpu, Database, Hospital, RadioTower } from 'lucide-react'
import { useLanguageMode } from '../../hooks/useLanguageMode'
import { translations } from '../../i18n/translations'

const HeroCanvas = lazy(() => import('../three/HeroCanvas'))

const badges = [
  { label: 'SIMRS', icon: Hospital },
  { label: 'RFID', icon: RadioTower },
  { label: 'IoT', icon: Cpu },
  { label: 'Cloud System', icon: Database },
]

export default function HeroSection() {
  const { language } = useLanguageMode()
  const t = translations[language]

  return (
    <section className="responsive-section relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,#713f12_0%,#020617_38%,#020617_100%)]">
      <div className="absolute inset-0 opacity-80">
        <Suspense
          fallback={
            <div className="h-full w-full bg-[radial-gradient(circle_at_70%_40%,rgba(250,204,21,0.18),transparent_40%)]" />
          }
        >
          <HeroCanvas />
        </Suspense>
      </div>

      <div className="pointer-events-none absolute right-[-4%] top-[18%] z-[1] hidden aspect-square w-[clamp(320px,38vw,540px)] items-center justify-center md:flex lg:right-[2%] xl:right-[5%]">
        <div className="simtech-logo-3d relative flex h-full w-full items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-3xl" />

          <img
            src="/logo-simtech-mark.png"
            alt="SIMTECH Logo Mark"
            className="relative h-full w-full object-contain drop-shadow-[0_0_38px_rgba(250,204,21,0.75)]"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
              const fallback = event.currentTarget.nextElementSibling as HTMLElement | null
              if (fallback) fallback.style.display = 'flex'
            }}
          />

          <div
            className="relative hidden h-full w-full items-center justify-center text-[320px] font-black leading-none text-yellow-400 drop-shadow-[0_0_45px_rgba(250,204,21,0.85)]"
            style={{
              transform: 'skewX(-8deg)',
            }}
          >
            S
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/20" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-sm text-yellow-100 backdrop-blur"
          >
            {t.heroBadge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="max-w-[13ch] text-[clamp(2.6rem,7vw,4.8rem)] font-black leading-[0.98] tracking-tight text-white"
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg md:leading-8"
          >
            {t.heroDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-3 font-bold text-slate-950 shadow-xl shadow-yellow-400/25"
            >
              {t.exploreServices}
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3 font-bold text-white backdrop-blur hover:border-yellow-300/50"
            >
              {t.contactSimtech}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48 }}
            className="mt-10 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4"
          >
            {badges.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                >
                  <Icon className="mb-3 text-yellow-300" size={24} />
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
