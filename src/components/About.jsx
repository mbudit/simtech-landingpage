import logo from "../assets/logo.png";
import { cn } from "../utils/cn";

function Stat({ k, v }) {
    return (
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-extrabold text-brand-600 mb-1">{k}</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{v}</div>
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
                                Tentang Kami
                            </p>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
                            Solusi Teknologi untuk <br />
                            <span className="text-gradient">Masa Depan Kesehatan</span>
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Didirikan Mei 2024, SIMTECH fokus pada solusi digital kesehatan & enterprise.
                            Kami menghadirkan SIMRS terintegrasi, sistem RFID linen, dan aplikasi mobile
                            yang mengutamakan keamanan data (CSP/CSRF) dan kepatuhan regulasi (Permenkes 24/2022, SATUSEHAT).
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            <Stat k="7+" v="Engineer" />
                            <Stat k="10+" v="Project" />
                            <Stat k="99%" v="SLA" />
                        </div>
                    </div>

                    <div className="order-1 md:order-2 flex justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-accent-100 rounded-full blur-3xl opacity-50 animate-pulse" />
                        <img
                            src={logo}
                            alt="Logo SIMTECH"
                            className="relative z-10 h-64 w-64 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
