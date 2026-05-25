const metrics = [
  {
    value: 'Healthcare',
    label: 'SIMRS, RME, Farmasi, Kasir, dan integrasi layanan rumah sakit.',
  },
  {
    value: 'RFID & IoT',
    label: 'Solusi monitoring aset, linen, perangkat, dan data operasional.',
  },
  {
    value: 'Web & Mobile',
    label: 'Aplikasi custom untuk bisnis, operasional lapangan, dan dashboard.',
  },
  {
    value: 'Cloud Ready',
    label: 'Deployment, server, domain, SSL, backup, dan monitoring.',
  },
]

export default function MetricsSection() {
  return (
    <section className="bg-slate-950 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
        {metrics.map((item) => (
          <div
            key={item.value}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-7"
          >
            <h3 className="text-2xl font-black text-cyan-300">{item.value}</h3>
            <p className="mt-4 leading-7 text-slate-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
