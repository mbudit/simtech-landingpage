const solutions = [
  'SIMRS untuk RS tipe D/C/B',
  'RFID Laundry Rumah Sakit',
  'Sistem Monitoring Operasional',
  'Website Company Profile',
  'Dashboard Management',
  'Mobile App Lapangan',
  'Cloud Infrastructure',
  'Integrasi API & Database',
]

export default function SolutionsSection() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-slate-900 px-6 py-24">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              Featured Solutions
            </p>
            <h2 className="text-4xl font-black text-white md:text-5xl">
              Dari ide bisnis menjadi sistem digital yang bisa digunakan.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              SIMTECH tidak hanya membuat tampilan aplikasi. Kami membantu menyusun alur kerja,
              struktur data, desain sistem, integrasi, deployment, dan kesiapan operasional.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {solutions.map((item, index) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-sm font-black text-slate-950">
                  {index + 1}
                </div>
                <p className="font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
