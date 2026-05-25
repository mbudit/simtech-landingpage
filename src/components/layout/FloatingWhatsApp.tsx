import { MessageCircle } from 'lucide-react'

const whatsappNumber = '628559903070'
const message = encodeURIComponent(
  'Halo SIMTECH, saya ingin konsultasi terkait kebutuhan solusi digital.'
)

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-slate-950 shadow-2xl shadow-yellow-400/30 transition hover:-translate-y-1 hover:bg-yellow-300"
      aria-label="Contact SIMTECH via WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  )
}
