const reasons = [
    {
        title: "Memahami Masalah Operasional",
        text: "Kami menerjemahkan kebutuhan bisnis dan proses lapangan menjadi rancangan sistem yang lebih relevan dan mudah dijalankan.",
    },
    {
        title: "Tidak Hanya Membangun Aplikasi",
        text: "Fokus kami mencakup alur kerja, data, integrasi, implementasi, dan kesiapan sistem digunakan oleh organisasi.",
    },
    {
        title: "Cocok untuk Kebutuhan Kompleks",
        text: "SIMTECH terbiasa menangani kebutuhan yang tidak seragam, memerlukan penyesuaian, dan perlu disusun secara bertahap.",
    },
    {
        title: "Pendekatan Lebih Terukur",
        text: "Kami membantu memecah kebutuhan besar menjadi prioritas yang lebih jelas, sehingga pengembangan tidak berjalan tanpa arah.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="mx-auto max-w-7xl px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-200 mb-4">Mengapa SIMTECH</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-5">Partner Teknologi yang Berpikir dari Sisi Bisnis dan Implementasi</h2>
                    <p className="text-lg leading-relaxed text-brand-100/90">
                        Website yang kuat tidak hanya menyebut “kami profesional”, tetapi menjelaskan cara kerja dan nilai nyata yang dibawa.
                        Ini adalah karakter yang ingin kami tonjolkan pada SIMTECH.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {reasons.map((reason, idx) => (
                        <article key={reason.title} className="rounded-3xl border border-white/10 bg-white/[0.08] p-7 backdrop-blur hover:bg-white/[0.11] hover:-translate-y-1 transition-all">
                            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-brand-100">
                                {String(idx + 1).padStart(2, "0")}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                            <p className="text-brand-100/90 leading-relaxed">{reason.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
