import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Building2,
  Handshake,
  Hospital,
  Landmark,
  Users,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguageMode } from '../hooks/useLanguageMode'

const clients = [
  {
    name: 'BIT',
    categoryId: 'Technology Partner',
    categoryEn: 'Technology Partner',
    logo: '/clients/bit.png',
    descId: 'Kolaborasi dan referensi ekosistem solusi digital.',
    descEn: 'Collaboration and reference within the digital solution ecosystem.',
  },
  {
    name: 'Dinkes Kota Tasikmalaya',
    categoryId: 'Government / Healthcare',
    categoryEn: 'Government / Healthcare',
    logo: '/clients/dinkeskotatasik.png',
    descId: 'Konsep One Integration untuk ekosistem data kesehatan daerah.',
    descEn: 'One Integration concept for regional health data ecosystem.',
  },
  {
    name: 'Rumah Sakit Dewi Sartika',
    categoryId: 'Healthcare',
    categoryEn: 'Healthcare',
    logo: '/clients/Icon.PNG',
    descId: 'Referensi kebutuhan sistem dan layanan digital healthcare.',
    descEn: 'Reference for healthcare digital system and service requirements.',
  },
  {
    name: 'PT KHAKI',
    categoryId: 'Business Operation',
    categoryEn: 'Business Operation',
    logo: '/clients/khaki.png',
    descId: 'Kebutuhan sistem monitoring bisnis dan operasional.',
    descEn: 'Business and operational monitoring system needs.',
  },
  {
    name: 'MESIND',
    categoryId: 'Business / Digital Catalog',
    categoryEn: 'Business / Digital Catalog',
    logo: '/clients/mesind.png',
    descId: 'Kebutuhan digital presence dan katalog layanan.',
    descEn: 'Digital presence and service catalog needs.',
  },
  {
    name: 'PDMI',
    categoryId: 'Medical / Healthcare',
    categoryEn: 'Medical / Healthcare',
    logo: '/clients/pdmi.png',
    descId: 'Ekosistem layanan kesehatan dan digitalisasi operasional.',
    descEn: 'Healthcare service ecosystem and operational digitalization.',
  },
  {
    name: 'RSUD dr. Slamet Garut',
    categoryId: 'Hospital / SIMRS',
    categoryEn: 'Hospital / SIMRS',
    logo: '/clients/rsudgarut.png',
    descId: 'Rescue dan pendampingan penguatan SIMRS.',
    descEn: 'SIMRS rescue and strengthening assistance.',
  },
  {
    name: 'RSUD TNT',
    categoryId: 'Hospital / Healthcare',
    categoryEn: 'Hospital / Healthcare',
    logo: '/clients/rsudtnt.png',
    descId: 'Referensi kebutuhan SIMRS dan digitalisasi rumah sakit.',
    descEn: 'Reference for SIMRS and hospital digitalization needs.',
  },
  {
    name: 'SHINKA',
    categoryId: 'RFID / Technology Partner',
    categoryEn: 'RFID / Technology Partner',
    logo: '/clients/shinka.png',
    descId: 'Kolaborasi solusi RFID laundry dan monitoring linen.',
    descEn: 'Collaboration on RFID laundry and linen monitoring solutions.',
  },
]

const content = {
  id: {
    back: 'Kembali ke Beranda',
    label: 'Klien & Partner',
    title: 'Dipercaya dalam ekosistem healthcare, bisnis, dan digital.',
    desc:
      'SIMTECH membangun dan mendukung solusi digital untuk kebutuhan healthcare, government, business operation, RFID, website, mobile app, dan integrasi sistem.',
    cardTitle: 'Client-centered delivery.',
    cardDesc:
      'Kami berfokus pada kebutuhan nyata client: sistem yang mudah digunakan, integrasi yang jelas, dan solusi yang dapat dikembangkan secara bertahap.',
    segmentLabel: 'Client Segments',
    segmentTitle: 'Area client yang pernah bersinggungan dengan SIMTECH.',
    logoLabel: 'Logo Showcase',
    logoTitle: 'Clients, partners, and project references.',
    logoDesc:
      'Berikut adalah beberapa logo yang merepresentasikan client, partner, dan referensi project yang pernah bersinggungan dengan perjalanan SIMTECH.',
    ctaTitle: 'Butuh solusi digital untuk organisasi Anda?',
    ctaDesc:
      'SIMTECH siap membantu kebutuhan website, SIMRS, RFID, IoT Solution, dashboard management, web application, mobile app, cloud, dan IT consulting.',
    ctaButton: 'Mulai Project Inquiry',
    segments: [
      {
        title: 'Healthcare',
        desc: 'Rumah sakit, layanan kesehatan, dan kebutuhan digitalisasi operasional healthcare.',
        icon: Hospital,
      },
      {
        title: 'Government',
        desc: 'Dinas Kesehatan dan kebutuhan integrasi data layanan publik.',
        icon: Landmark,
      },
      {
        title: 'Business Operation',
        desc: 'Perusahaan, vendor, dan kebutuhan sistem monitoring bisnis.',
        icon: Building2,
      },
      {
        title: 'Technology Partner',
        desc: 'Kolaborasi solusi digital, RFID, integrasi, dan platform teknologi.',
        icon: Handshake,
      },
    ],
  },

  en: {
    back: 'Back to Home',
    label: 'Clients & Partners',
    title: 'Trusted across healthcare, business, and digital ecosystems.',
    desc:
      'SIMTECH builds and supports digital solutions for healthcare, government, business operations, RFID, websites, mobile apps, and system integration needs.',
    cardTitle: 'Client-centered delivery.',
    cardDesc:
      'We focus on real client needs: usable systems, clear integrations, and solutions that can be developed gradually.',
    segmentLabel: 'Client Segments',
    segmentTitle: 'Client areas connected to SIMTECH’s journey.',
    logoLabel: 'Logo Showcase',
    logoTitle: 'Clients, partners, and project references.',
    logoDesc:
      'The following logos represent clients, partners, and project references connected to SIMTECH’s journey.',
    ctaTitle: 'Need a digital solution for your organization?',
    ctaDesc:
      'SIMTECH is ready to support website, SIMRS, RFID, IoT Solution, dashboard management, web application, mobile app, cloud, and IT consulting needs.',
    ctaButton: 'Start Project Inquiry',
    segments: [
      {
        title: 'Healthcare',
        desc: 'Hospitals, healthcare services, and operational digitalization needs.',
        icon: Hospital,
      },
      {
        title: 'Government',
        desc: 'Health Offices and public service data integration needs.',
        icon: Landmark,
      },
      {
        title: 'Business Operation',
        desc: 'Companies, vendors, and business monitoring system needs.',
        icon: Building2,
      },
      {
        title: 'Technology Partner',
        desc: 'Collaboration in digital solutions, RFID, integration, and technology platforms.',
        icon: Handshake,
      },
    ],
  },
}

export default function OurClientsPage() {
  const { language } = useLanguageMode()
  const t = content[language]

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
                <Users size={32} />
              </div>

              <h2 className="text-2xl font-black">{t.cardTitle}</h2>

              <p className="mt-4 leading-8 text-slate-400">{t.cardDesc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="responsive-section bg-slate-900 px-5 py-20 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              {t.segmentLabel}
            </p>
            <h2 className="text-4xl font-black text-white md:text-5xl">
              {t.segmentTitle}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.segments.map((segment, index) => {
              const Icon = segment.icon

              return (
                <motion.div
                  key={segment.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-300/10 text-yellow-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-black text-white">{segment.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{segment.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="responsive-section bg-slate-950 px-5 py-20 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
              {t.logoLabel}
            </p>
            <h2 className="text-4xl font-black text-white md:text-5xl">
              {t.logoTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">{t.logoDesc}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, index) => (
              <motion.article
                key={client.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 transition hover:border-yellow-300/35"
              >
                <div className="mb-6 flex h-24 items-center justify-center rounded-[1.5rem] border border-white/10 bg-white p-4">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-16 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>

                <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                  {language === 'id' ? client.categoryId : client.categoryEn}
                </p>

                <h3 className="text-2xl font-black text-white">{client.name}</h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {language === 'id' ? client.descId : client.descEn}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/5 p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-black text-white">{t.ctaTitle}</h3>
                <p className="mt-3 max-w-3xl leading-8 text-slate-400">{t.ctaDesc}</p>
              </div>

              <Link
                to="/services/project-inquiry"
                className="inline-flex shrink-0 rounded-full bg-yellow-400 px-7 py-4 font-black text-slate-950 shadow-xl shadow-yellow-400/25"
              >
                {t.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
