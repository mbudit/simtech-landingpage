import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  CheckCircle2,
  Cloud,
  Code2,
  Globe2,
  MessageCircle,
  RadioTower,
  ServerCog,
  ShoppingCart,
} from 'lucide-react'
import { useLanguageMode } from '../hooks/useLanguageMode'

const whatsappNumber = '628559903070'

const services = {
  'services-overview': {
    icon: ServerCog,
    id: {
      title: 'Ringkasan Layanan',
      label: 'Layanan SIMTECH',
      desc: 'SIMTECH menyediakan layanan pengembangan solusi digital end-to-end untuk kebutuhan healthcare, bisnis, enterprise, dan operasional instansi.',
      points: [
        'Analisis kebutuhan dan penyusunan alur proses bisnis.',
        'UI/UX, frontend, backend, database, API, dan deployment.',
        'Pengembangan sistem berbasis web, mobile, cloud, RFID, IoT, dan dashboard.',
        'Pendampingan dari prototype sampai production readiness.',
      ],
    },
    en: {
      title: 'Services Overview',
      label: 'SIMTECH Services',
      desc: 'SIMTECH provides end-to-end digital solution development for healthcare, business, enterprise, and institutional operations.',
      points: [
        'Requirement analysis and business process mapping.',
        'UI/UX, frontend, backend, database, API, and deployment.',
        'Web, mobile, cloud, RFID, IoT, and dashboard-based system development.',
        'Support from prototype to production readiness.',
      ],
    },
  },

  'project-inquiry': {
    icon: MessageCircle,
    id: {
      title: 'Project Inquiry',
      label: 'Mulai Diskusi Project',
      desc: 'Konsultasikan kebutuhan project digital Anda bersama SIMTECH agar ruang lingkup, estimasi, teknologi, dan roadmap pengembangan lebih jelas.',
      points: [
        'Diskusi kebutuhan bisnis, operasional, dan target user.',
        'Identifikasi modul, integrasi, data flow, dan output laporan.',
        'Rekomendasi pendekatan teknologi dan tahapan implementasi.',
        'Estimasi awal scope, timeline, dan kebutuhan resource.',
      ],
    },
    en: {
      title: 'Project Inquiry',
      label: 'Start Your Project',
      desc: 'Consult your digital project needs with SIMTECH to clarify scope, estimation, technology approach, and development roadmap.',
      points: [
        'Discussion of business needs, operations, and target users.',
        'Identification of modules, integrations, data flow, and reporting output.',
        'Technology approach and implementation phase recommendation.',
        'Initial scope, timeline, and resource estimation.',
      ],
    },
  },

  'website-development': {
    icon: Globe2,
    id: {
      title: 'Website Development',
      label: 'Solusi Website Perusahaan',
      desc: 'Layanan pembuatan website profesional untuk company profile, landing page, portfolio bisnis, katalog layanan, dan kebutuhan digital presence perusahaan. Harga mulai dari Rp1.250.000 sudah termasuk hosting 1 tahun.',
      points: [
        'Harga mulai dari Rp1.250.000.',
        'Sudah termasuk hosting 1 tahun.',
        'Cocok untuk usaha micro, kecil, menengah, hingga enterprise.',
        'Desain responsive untuk desktop, tablet, dan mobile.',
      ],
      packagesTitle: 'Pilihan paket website sesuai skala usaha.',
      packagesDesc: 'Paket dapat disesuaikan berdasarkan kebutuhan halaman, konten, fitur, integrasi, dan target implementasi.',
      packages: [
        {
          name: 'Micro',
          price: 'Mulai Rp1.250.000',
          desc: 'Untuk usaha baru, personal brand, UMKM, atau landing page sederhana.',
          features: ['1 halaman landing page', 'Desain responsive', 'Hosting 1 tahun', 'CTA WhatsApp', 'Basic SEO'],
        },
        {
          name: 'Kecil',
          price: 'Mulai Rp2.500.000',
          desc: 'Untuk usaha kecil yang membutuhkan company profile lebih lengkap.',
          features: ['3–5 halaman website', 'Company profile', 'Layanan / produk', 'Kontak dan Google Maps', 'Hosting 1 tahun'],
        },
        {
          name: 'Menengah',
          price: 'Mulai Rp5.000.000',
          desc: 'Untuk bisnis yang membutuhkan website lebih informatif dan siap dikembangkan.',
          features: ['5–10 halaman website', 'Portfolio / katalog layanan', 'Blog / artikel basic', 'Optimasi SEO dasar', 'Hosting 1 tahun'],
        },
        {
          name: 'Enterprise',
          price: 'Custom Quotation',
          desc: 'Untuk perusahaan, instansi, atau kebutuhan website dengan integrasi dan fitur khusus.',
          features: ['Custom UI/UX', 'Multi-page website', 'CMS / admin panel optional', 'Integrasi API optional', 'Deployment dan support teknis'],
        },
      ],
    },
    en: {
      title: 'Website Development',
      label: 'Company Website Solution',
      desc: 'Professional website development for company profiles, landing pages, business portfolios, service catalogs, and corporate digital presence. Starting from IDR 1,250,000 including 1 year hosting.',
      points: [
        'Starting from IDR 1,250,000.',
        'Includes 1 year hosting.',
        'Suitable for micro, small, medium, and enterprise businesses.',
        'Responsive design for desktop, tablet, and mobile.',
      ],
      packagesTitle: 'Website packages based on business scale.',
      packagesDesc: 'Packages can be adjusted based on pages, content, features, integrations, and implementation targets.',
      packages: [
        {
          name: 'Micro',
          price: 'From IDR 1,250,000',
          desc: 'For new businesses, personal brands, MSMEs, or simple landing pages.',
          features: ['1 landing page', 'Responsive design', '1 year hosting', 'WhatsApp CTA', 'Basic SEO'],
        },
        {
          name: 'Small',
          price: 'From IDR 2,500,000',
          desc: 'For small businesses that need a more complete company profile.',
          features: ['3–5 website pages', 'Company profile', 'Services / products', 'Contact and Google Maps', '1 year hosting'],
        },
        {
          name: 'Medium',
          price: 'From IDR 5,000,000',
          desc: 'For businesses that need a more informative and scalable website.',
          features: ['5–10 website pages', 'Portfolio / service catalog', 'Basic blog / article', 'Basic SEO optimization', '1 year hosting'],
        },
        {
          name: 'Enterprise',
          price: 'Custom Quotation',
          desc: 'For companies, institutions, or websites requiring special integrations and custom features.',
          features: ['Custom UI/UX', 'Multi-page website', 'Optional CMS / admin panel', 'Optional API integration', 'Deployment and technical support'],
        },
      ],
    },
  },

  'mini-ecommerce': {
    icon: ShoppingCart,
    id: {
      title: 'Mini E-Commerce',
      label: 'Solusi Commerce',
      desc: 'Solusi mini e-commerce untuk katalog produk, pemesanan, showcase layanan, inquiry pelanggan, dan kebutuhan bisnis skala kecil-menengah.',
      points: ['Katalog produk dan kategori.', 'Halaman detail produk atau layanan.', 'Form inquiry atau pemesanan.', 'Integrasi WhatsApp, email, dan dashboard admin sederhana.'],
    },
    en: {
      title: 'Mini E-Commerce',
      label: 'Commerce Solution',
      desc: 'Mini e-commerce solution for product catalogs, ordering flow, service showcase, customer inquiries, and small-medium business needs.',
      points: ['Product catalog and categories.', 'Product or service detail page.', 'Inquiry or order form.', 'WhatsApp, email, and simple admin dashboard integration.'],
    },
  },

  'web-application': {
    icon: Globe2,
    id: {
      title: 'Web Application',
      label: 'Sistem Web Custom',
      desc: 'Pengembangan aplikasi web custom untuk kebutuhan operasional perusahaan, rumah sakit, instansi, vendor, dan internal management.',
      points: ['Dashboard operasional dan management reporting.', 'Form transaksi dan approval workflow.', 'Role-based access control.', 'Integrasi database, API, dan sistem eksternal.'],
    },
    en: {
      title: 'Web Application',
      label: 'Custom Web System',
      desc: 'Custom web application development for company operations, hospitals, institutions, vendors, and internal management needs.',
      points: ['Operational dashboard and management reporting.', 'Transaction forms and approval workflows.', 'Role-based access control.', 'Database, API, and external system integration.'],
    },
  },

  'iot-solution': {
    icon: RadioTower,
    id: {
      title: 'IoT Solution',
      label: 'Connected Device & Monitoring',
      desc: 'Solusi IoT untuk monitoring perangkat, sensor, RFID, data operasional, dan integrasi perangkat lapangan ke dashboard digital.',
      points: ['Monitoring perangkat dan sensor.', 'RFID asset tracking dan linen tracking.', 'Dashboard data operasional.', 'Integrasi device, gateway, API, dan database.'],
    },
    en: {
      title: 'IoT Solution',
      label: 'Connected Device & Monitoring',
      desc: 'IoT solutions for device monitoring, sensors, RFID, operational data, and field device integration into digital dashboards.',
      points: ['Device and sensor monitoring.', 'RFID asset tracking and linen tracking.', 'Operational data dashboard.', 'Device, gateway, API, and database integration.'],
    },
  },

  'cloud-devops': {
    icon: Cloud,
    id: {
      title: 'Cloud & DevOps',
      label: 'Deployment & Infrastructure',
      desc: 'Layanan cloud dan DevOps untuk deployment aplikasi, server, NGINX, SSL, backup, domain, dan kesiapan production environment.',
      points: ['Setup cloud server dan Linux environment.', 'NGINX reverse proxy dan SSL.', 'Database deployment dan backup strategy.', 'Build, deployment, monitoring, dan maintenance dasar.'],
    },
    en: {
      title: 'Cloud & DevOps',
      label: 'Deployment & Infrastructure',
      desc: 'Cloud and DevOps services for application deployment, server setup, NGINX, SSL, backup, domains, and production environment readiness.',
      points: ['Cloud server and Linux environment setup.', 'NGINX reverse proxy and SSL.', 'Database deployment and backup strategy.', 'Build, deployment, monitoring, and basic maintenance.'],
    },
  },

  'custom-software': {
    icon: Code2,
    id: {
      title: 'Custom Software',
      label: 'Solusi Digital Custom',
      desc: 'Pengembangan software custom sesuai kebutuhan proses bisnis yang tidak dapat dipenuhi oleh aplikasi umum.',
      points: ['Analisis kebutuhan dan desain solusi.', 'Pengembangan modul sesuai workflow internal.', 'Integrasi dengan sistem existing.', 'Dokumentasi teknis dan support implementasi.'],
    },
    en: {
      title: 'Custom Software',
      label: 'Tailored Digital Solution',
      desc: 'Custom software development based on business processes that cannot be fulfilled by generic applications.',
      points: ['Requirement analysis and solution design.', 'Module development based on internal workflow.', 'Integration with existing systems.', 'Technical documentation and implementation support.'],
    },
  },

  'it-consulting': {
    icon: ServerCog,
    id: {
      title: 'IT Consulting',
      label: 'Konsultasi Teknologi',
      desc: 'Layanan konsultasi IT untuk membantu organisasi menyusun arah teknologi, arsitektur solusi, roadmap implementasi, dan strategi digitalisasi yang lebih terukur.',
      points: ['Assessment kebutuhan sistem dan kondisi teknologi existing.', 'Penyusunan rekomendasi arsitektur solusi dan roadmap implementasi.', 'Pendampingan pemilihan teknologi, integrasi, cloud, database, dan keamanan dasar.', 'Penyusunan dokumen teknis, scope of work, dan strategi pengembangan sistem.'],
    },
    en: {
      title: 'IT Consulting',
      label: 'Technology Advisory',
      desc: 'IT consulting services to help organizations define technology direction, solution architecture, implementation roadmap, and digitalization strategy.',
      points: ['Assessment of system needs and existing technology conditions.', 'Solution architecture and implementation roadmap recommendation.', 'Technology, integration, cloud, database, and basic security advisory.', 'Technical documentation, scope of work, and system development strategy.'],
    },
  },
}

type ServiceSlug = keyof typeof services

export default function ServiceDetailPage() {
  const params = useParams()
  const { language } = useLanguageMode()

  const slug = (params.slug || 'services-overview') as ServiceSlug
  const serviceConfig = services[slug] || services['services-overview']
  const service = serviceConfig[language]
  const Icon = serviceConfig.icon

  const whatsappText = encodeURIComponent(
    language === 'id'
      ? `Halo SIMTECH, saya ingin konsultasi terkait ${service.title}.`
      : `Hello SIMTECH, I would like to consult about ${service.title}.`
  )

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
            {language === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-yellow-300">
                {service.label}
              </p>

              <h1 className="max-w-4xl text-[clamp(2.8rem,7vw,5.4rem)] font-black leading-[0.95] tracking-tight">
                {service.title}
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
                {service.desc}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-yellow-400 px-7 py-4 font-black text-slate-950 shadow-xl shadow-yellow-400/25 transition hover:bg-yellow-300"
                >
                  {language === 'id' ? 'Konsultasi Layanan' : 'Consult This Service'}
                  <MessageCircle size={21} />
                </a>

                <Link
                  to="/"
                  className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-black text-white transition hover:border-cyan-300/40"
                >
                  {language === 'id' ? 'Lihat Company Profile' : 'View Company Profile'}
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/30">
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950">
                <Icon size={32} />
              </div>

              <h2 className="text-2xl font-black">
                {language === 'id' ? 'Highlight Scope' : 'Scope Highlights'}
              </h2>

              <div className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <div
                    key={point}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-4"
                  >
                    <CheckCircle2 className="mt-1 shrink-0 text-cyan-300" size={18} />
                    <p className="leading-7 text-slate-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {'packages' in service && service.packages && (
            <div className="mt-14">
              <div className="mb-8 max-w-3xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
                  Website Packages
                </p>
                <h2 className="text-3xl font-black text-white md:text-4xl">
                  {service.packagesTitle}
                </h2>
                <p className="mt-4 leading-8 text-slate-400">
                  {service.packagesDesc}
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {service.packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20"
                  >
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                      {pkg.name}
                    </p>

                    <h3 className="text-2xl font-black text-white">{pkg.price}</h3>

                    <p className="mt-4 min-h-[72px] leading-7 text-slate-400">
                      {pkg.desc}
                    </p>

                    <div className="mt-6 space-y-3">
                      {pkg.features.map((feature) => (
                        <div key={feature} className="flex gap-3">
                          <CheckCircle2 className="mt-1 shrink-0 text-yellow-300" size={17} />
                          <p className="text-sm leading-6 text-slate-300">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/5 p-7 text-center">
            <h3 className="text-2xl font-black text-white">
              {language === 'id' ? 'Butuh solusi yang lebih spesifik?' : 'Need a tailored solution?'}
            </h3>
            <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-400">
              {language === 'id'
                ? 'SIMTECH dapat menyesuaikan scope layanan berdasarkan kebutuhan bisnis, kondisi sistem existing, target implementasi, dan prioritas operasional.'
                : 'SIMTECH can tailor the service scope based on business needs, existing systems, implementation targets, and operational priorities.'}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
