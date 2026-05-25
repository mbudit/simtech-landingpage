import { Mail, MessageCircle } from 'lucide-react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const instagramUrl = 'https://www.instagram.com/simtech.2024/'
const linkedinUrl = 'https://www.linkedin.com/in/simtechindo/'
const whatsappUrl = 'https://wa.me/628559903070?text=Halo%20SIMTECH%2C%20saya%20ingin%20konsultasi%20terkait%20kebutuhan%20solusi%20digital.'
const emailUrl = 'mailto:official@simtechindo.com'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-10 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo-simtech.svg"
              alt="SIMTECH Logo"
              className="h-11 w-auto"
            />
            <div>
              <p className="font-black text-white">SIMTECH</p>
              <p className="text-sm text-cyan-200">
                Simplify Technologies Indonesia
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Digital solution partner for healthcare, business operation,
            web application, mobile app, RFID, IoT Solution, cloud, and IT consulting.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-yellow-300/40 hover:bg-yellow-300 hover:text-slate-950"
            aria-label="SIMTECH Instagram"
            title="Instagram SIMTECH"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300 hover:text-slate-950"
            aria-label="SIMTECH LinkedIn"
            title="LinkedIn SIMTECH"
          >
            <FaLinkedinIn size={20} />
          </a>

          <a
            href={emailUrl}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-yellow-300/40 hover:bg-yellow-300 hover:text-slate-950"
            aria-label="Email SIMTECH"
            title="official@simtechindo.com"
          >
            <Mail size={20} />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300 hover:text-slate-950"
            aria-label="WhatsApp SIMTECH"
            title="WhatsApp SIMTECH"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2024 SIMTECH. All rights reserved.</p>
        <p>Built by Simplify Technologies Indonesia.</p>
      </div>
    </footer>
  )
}
