import { ExternalLink, Mail, MapPin, MessageCircle, PhoneCall, Send } from 'lucide-react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { useLanguageMode } from '../../hooks/useLanguageMode'
import { translations } from '../../i18n/translations'

const whatsappNumber = '628559903070'
const instagramUrl = 'https://www.instagram.com/simtech.2024/'
const linkedinUrl = 'https://www.linkedin.com/in/simtechindo/'

const whatsappMessage = encodeURIComponent(
  'Halo SIMTECH, saya ingin konsultasi terkait kebutuhan solusi digital untuk perusahaan/instansi kami.'
)

const officeAddress =
  'Office 99, Gedung EduCenter Lt. 2 Unit VO-24110, Jl. Sekolah Foresta No. 8 BSD City, Kab. Tangerang - Banten 15331'

const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  officeAddress
)}`

const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  officeAddress
)}&output=embed`

const serviceOptions = [
  'SIMRS Development',
  'RFID Laundry',
  'Website Company Profile',
  'Website Development',
  'Mini E-Commerce',
  'Web Application',
  'Mobile App',
  'IoT Solution',
  'Dashboard Management',
  'API Integration',
  'Cloud & DevOps',
  'Custom Software',
  'Consulting & IT Support',
  'IT Consulting',
]

export default function ContactSection() {
  const { language } = useLanguageMode()
  const t = translations[language]

  return (
    <section
      id="contact"
      className="responsive-section relative overflow-hidden bg-gradient-to-br from-slate-950 via-yellow-950/20 to-slate-950 px-5 py-20 sm:px-6 md:py-24"
    >
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
            Contact SIMTECH
          </p>

          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            {t.contactTitle}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            {t.contactDesc}
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-yellow-300/20 bg-yellow-300/10 p-4 transition hover:border-yellow-300/40 hover:bg-yellow-300/15"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-slate-950">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="font-bold text-white">WhatsApp Consultation</p>
                <p className="text-sm text-slate-400">
                  Respon cepat untuk diskusi awal kebutuhan project.
                </p>
              </div>
            </a>

            <a
              href="mailto:official@simtechindo.com"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-bold text-white">Email</p>
                <p className="text-sm text-slate-400">official@simtechindo.com</p>
              </div>
            </a>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-yellow-300/30 hover:bg-yellow-300/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                <MapPin size={24} />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-white">Office</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">{officeAddress}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-yellow-300">
                  Open in Google Maps
                  <ExternalLink size={15} />
                </span>
              </div>
            </a>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-yellow-300/30 hover:bg-yellow-300/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-300/10 text-yellow-300">
                  <FaInstagram size={24} />
                </div>
                <div>
                  <p className="font-bold text-white">Instagram</p>
                  <p className="text-sm text-slate-400">@simtech.2024</p>
                </div>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/30 hover:bg-cyan-300/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                  <FaLinkedinIn size={24} />
                </div>
                <div>
                  <p className="font-bold text-white">LinkedIn</p>
                  <p className="text-sm text-slate-400">simtechindo</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/30 backdrop-blur sm:p-8">
          <div className="mb-8 flex items-start justify-between gap-5">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
                Project Inquiry
              </p>
              <h3 className="text-3xl font-black text-white">
                {t.projectInquiry}
              </h3>
            </div>

            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950 md:flex">
              <Send size={26} />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {serviceOptions.map((service) => (
              <a
                key={service}
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Halo SIMTECH, saya ingin konsultasi terkait ${service}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-bold text-slate-200 transition hover:-translate-y-1 hover:border-yellow-300/40 hover:bg-yellow-300/10 hover:text-yellow-100"
              >
                {service}
              </a>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-yellow-300/20 bg-white/[0.03]">
            <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
                  Office Location
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Klik peta untuk membuka lokasi SIMTECH di Google Maps.
                </p>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-5 py-2 text-sm font-black text-slate-950 transition hover:bg-yellow-300"
              >
                Open Maps
                <ExternalLink size={16} />
              </a>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="relative block h-[280px] overflow-hidden bg-slate-900"
            >
              <iframe
                title="SIMTECH Office Location"
                src={googleMapsEmbedUrl}
                className="h-full w-full border-0 opacity-80 grayscale invert"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/20" />
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur">
                <p className="font-bold text-white">Simplify Technologies Indonesia</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Office 99, EduCenter BSD City, Tangerang
                </p>
              </div>
            </a>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-cyan-300/20 bg-cyan-300/5 p-6">
            <div className="mb-4 flex items-center gap-3">
              <PhoneCall className="text-cyan-300" size={22} />
              <p className="font-black text-white">Rekomendasi Diskusi Awal</p>
            </div>

            <ul className="space-y-3 text-sm leading-6 text-slate-400">
              <li>• Ceritakan kebutuhan bisnis atau masalah operasional yang ingin diselesaikan.</li>
              <li>• Jelaskan target user, proses kerja, dan output laporan yang dibutuhkan.</li>
              <li>• Jika sudah ada sistem lama, sebutkan teknologi atau kendala integrasinya.</li>
              <li>• SIMTECH dapat membantu dari prototype sampai production deployment.</li>
            </ul>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-yellow-400 px-8 py-4 font-black text-slate-950 shadow-xl shadow-yellow-400/25 transition hover:bg-yellow-300"
          >
            {t.startConsultation}
            <MessageCircle size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}
