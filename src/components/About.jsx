import logo from "../assets/logo.png";

function Pillar({ title, text }) {
    return (
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-base font-bold text-brand-700 mb-2">{title}</div>
            <p className="text-sm leading-relaxed text-slate-600">{text}</p>
        </div>
    );
}

export default function About() {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                            </span>
                            <p className="text-xs font-bold tracking-wider uppercase text-brand-700">
                                Tentang SIMTECH
                            </p>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
                            Bukan Sekadar Software House.
                            <span className="text-gradient"> Kami Menyusun Solusi yang Bisa Dipakai di Lapangan.</span>
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed mb-5">
                            SIMTECH berangkat dari kebutuhan nyata organisasi: proses yang masih manual, sistem yang belum terhubung,
                            data yang sulit dipantau, dan aplikasi yang belum cukup mendukung keputusan manajerial.
                        </p>

                        <p className="text-base text-slate-600 leading-relaxed mb-8">
                            Karena itu, pendekatan kami tidak berhenti pada pengembangan aplikasi. Kami membantu memetakan kebutuhan,
                            menyusun rancangan solusi, membangun sistem, dan memastikan implementasinya relevan dengan proses bisnis klien —
                            khususnya di sektor kesehatan, layanan publik, dan enterprise.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-4">
                            <Pillar
                                title="Business-led"
                                text="Solusi berangkat dari proses dan kebutuhan operasional, bukan sekadar fitur."
                            />
                            <Pillar
                                title="Integrated"
                                text="Aplikasi, data, dashboard, dan infrastruktur dirancang saling terhubung."
                            />
                            <Pillar
                                title="Scalable"
                                text="Arsitektur disiapkan agar sistem tetap relevan saat organisasi tumbuh."
                            />
                        </div>
                    </div>

                    <div className="order-1 md:order-2 flex justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-accent-100 rounded-full blur-3xl opacity-50 animate-pulse" />
                        <div className="relative z-10 rounded-[2rem] border border-slate-100 bg-white/90 p-10 shadow-2xl shadow-slate-200/60 backdrop-blur">
                            <img
                                src={logo}
                                alt="Logo SIMTECH"
                                className="mx-auto h-56 w-56 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                            <div className="mt-8 text-center">
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">Simplify Technologies Indonesia</p>
                                <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
                                    Partner pengembangan sistem digital untuk organisasi yang membutuhkan solusi lebih tertata,
                                    lebih terlihat, dan lebih mudah dikendalikan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
