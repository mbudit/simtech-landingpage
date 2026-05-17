const audiences = [
    {
        title: "Rumah Sakit & Healthcare",
        text: "SIMRS, RME, RFID linen, integrasi operasional, dan penguatan proses layanan berbasis data.",
        points: ["Sistem klinis & non-klinis", "Monitoring linen dan aset", "Perbaikan proses operasional"],
    },
    {
        title: "Pemerintah & Layanan Publik",
        text: "Platform monitoring, integrasi data, dashboard eksekutif, dan aplikasi yang mendukung tata kelola layanan.",
        points: ["Dashboard manajerial", "Sistem lintas unit", "Digitalisasi proses kerja"],
    },
    {
        title: "Enterprise & Bisnis",
        text: "Web application, mobile app, sistem internal, dan otomasi proses untuk meningkatkan visibilitas operasional.",
        points: ["Custom application", "Workflow digitization", "Operational control"],
    },
];

export default function TargetAudience() {
    return (
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_32%)]" />
            <div className="mx-auto max-w-7xl px-4 relative z-10">
                <div className="max-w-3xl mb-12">
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-300 mb-4">Fokus Klien</p>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-white">
                        SIMTECH Dirancang untuk Organisasi yang Ingin Sistemnya Lebih Terkendali
                    </h2>
                    <p className="text-lg leading-relaxed text-slate-300">
                        Kami paling relevan ketika kebutuhan klien tidak cukup dijawab oleh template biasa,
                        tetapi memerlukan analisis proses, integrasi sistem, dan rancangan solusi yang tepat guna.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {audiences.map((audience) => (
                        <article key={audience.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur hover:-translate-y-1 hover:bg-white/[0.09] transition-all">
                            <h3 className="text-xl font-bold text-white mb-4">{audience.title}</h3>
                            <p className="text-slate-300 leading-relaxed mb-6">{audience.text}</p>
                            <ul className="space-y-3">
                                {audience.points.map((point) => (
                                    <li key={point} className="flex items-start gap-3 text-sm text-slate-200">
                                        <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-300 flex-shrink-0" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
