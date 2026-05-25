import { motion } from 'framer-motion'
import { Layers3, ShieldCheck, Workflow, ServerCog, Users, Rocket } from 'lucide-react'
import { useLanguageMode } from '../../hooks/useLanguageMode'
import { translations } from '../../i18n/translations'

const reasons = [
  {
    title: 'Business-Driven Development',
    desc: 'Kami tidak hanya membuat tampilan aplikasi, tetapi membantu menyusun alur kerja, data flow, dan kebutuhan operasional bisnis.',
    icon: Workflow,
  },
  {
    title: 'Modular & Scalable',
    desc: 'Sistem dirancang modular agar mudah dikembangkan bertahap sesuai pertumbuhan kebutuhan organisasi.',
    icon: Layers3,
  },
  {
    title: 'Healthcare & Enterprise Ready',
    desc: 'Berpengalaman pada konteks SIMRS, RFID, dashboard operasional, integrasi data, dan kebutuhan sistem enterprise.',
    icon: ShieldCheck,
  },
  {
    title: 'Cloud & Deployment Support',
    desc: 'Mendukung deployment server, NGINX, domain, SSL, database, backup, dan monitoring aplikasi.',
    icon: ServerCog,
  },
  {
    title: 'Collaborative Delivery',
    desc: 'Pendekatan kerja kolaboratif bersama owner, user operasional, dan tim teknis agar solusi benar-benar digunakan.',
    icon: Users,
  },
  {
    title: 'Fast Prototype to Production',
    desc: 'Membantu mempercepat ide menjadi prototype, lalu dikembangkan menjadi sistem yang siap digunakan.',
    icon: Rocket,
  },
]

export default function WhySimtechSection() {
  const { language } = useLanguageMode()
  const t = translations[language]

  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24">
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
            {t.whyLabel}
          </p>
          <h2 className="text-4xl font-black text-white md:text-5xl">
            {t.whyTitle}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            {t.whyDesc}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-yellow-300/40 hover:bg-yellow-300/[0.05]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-300/10 text-yellow-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
