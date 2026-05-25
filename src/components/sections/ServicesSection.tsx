import { motion } from 'framer-motion'
import { Cloud, Code2, Cpu, Globe2, Hospital, RadioTower } from 'lucide-react'
import { useLanguageMode } from '../../hooks/useLanguageMode'
import { translations } from '../../i18n/translations'

const services = [
  {
    title: 'SIMRS Development',
    desc: 'Pengembangan sistem informasi manajemen rumah sakit untuk RS tipe D, C, dan B.',
    icon: Hospital,
  },
  {
    title: 'RFID Laundry',
    desc: 'Monitoring linen rumah sakit berbasis RFID untuk pelacakan, distribusi, dan kontrol aset.',
    icon: RadioTower,
  },
  {
    title: 'Web Development',
    desc: 'Website company profile, e-catalog, dashboard, portal bisnis, dan sistem operasional.',
    icon: Globe2,
  },
  {
    title: 'Mobile App',
    desc: 'Aplikasi Android untuk teknisi lapangan, operasional internal, dan pelayanan digital.',
    icon: Code2,
  },
  {
    title: 'IoT Dashboard',
    desc: 'Monitoring perangkat, sensor, data produksi, dan integrasi perangkat cerdas.',
    icon: Cpu,
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Deployment server, NGINX, database, backup, SSL, observability, dan automation.',
    icon: Cloud,
  },
]

export default function ServicesSection() {
  const { language } = useLanguageMode()
  const t = translations[language]

  return (
    <section id="services" className="relative overflow-hidden bg-slate-950 px-6 py-24">
      <div className="absolute left-[-160px] top-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute right-[-160px] bottom-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
            {t.servicesLabel}
          </p>
          <h2 className="text-4xl font-black text-white md:text-5xl">
            {t.servicesTitle}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            {t.servicesDesc}
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, rotateX: 8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  rotateX: 3,
                  rotateY: -3,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/20 transition hover:border-yellow-300/40 hover:bg-yellow-300/[0.055]"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000,
                }}
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-yellow-300/10 blur-2xl transition group-hover:bg-yellow-300/20" />

                <div className="relative">
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.25,
                    }}
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-300/10 text-yellow-300"
                  >
                    <Icon size={28} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{service.desc}</p>

                  <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: index * 0.08 }}
                      className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-cyan-300"
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
