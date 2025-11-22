import { useState, useMemo } from "react";
import { SERVICES, PORTFOLIO } from "../data/constants";
import { cn } from "../utils/cn";
import SimrsBadge from "./SimrsBadge";
import SimrsBanner from "./SimrsBanner";
import RfidBanner from "./RfidBanner";

const TAG_MAP = {
    simrs: "SIMRS",
    rfid: "RFID",
    webapps: "Web",
    mobile: "Mobile",
    infra: "Database & Infra",
};

export default function Services() {
    const [active, setActive] = useState(SERVICES[0].key);
    const current = useMemo(() => SERVICES.find((s) => s.key === active), [active]);

    const activeImage = useMemo(() => {
        const tag = TAG_MAP[active];
        return PORTFOLIO.find((p) => p.tag === tag)?.img || PORTFOLIO[0].img;
    }, [active]);

    return (
        <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-brand-100/40 rounded-full blur-3xl" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-accent-100/40 rounded-full blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Layanan Unggulan</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Solusi teknologi komprehensif yang dirancang untuk efisiensi dan pertumbuhan bisnis Anda.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {SERVICES.map((s) => (
                        <button
                            key={s.key}
                            onClick={() => setActive(s.key)}
                            className={cn(
                                "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border",
                                active === s.key
                                    ? "bg-brand-600 text-white border-brand-600 shadow-lg shadow-brand-500/25 transform scale-105"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50"
                            )}
                        >
                            {s.title}
                        </button>
                    ))}
                </div>

                {/* Active service card */}
                {current && (
                    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-stretch animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Kartu deskripsi kiri */}
                        <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-brand-900 mb-3">{current.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{current.desc}</p>
                            </div>

                            <ul className="space-y-3 mb-8 flex-1">
                                {current.details.map((d) => (
                                    <li key={d} className="flex items-start gap-3 text-slate-700">
                                        <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{d}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className="w-full inline-flex justify-center items-center rounded-xl bg-brand-600 px-6 py-3.5 text-white font-semibold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/20 group"
                            >
                                Minta Estimasi
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>

                        {/* Kanan: Visualisasi */}
                        <div className="h-full min-h-[400px]">
                            {active === "simrs" ? (
                                <div className="rounded-3xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-8 h-full flex flex-col items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-[radial-gradient(#e0f2fe_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
                                    <SimrsBadge className="text-brand-600 relative z-10 mb-8 transform group-hover:scale-110 transition-transform duration-500" />
                                    <div className="relative z-10 w-full transform group-hover:translate-y-2 transition-transform duration-500">
                                        <SimrsBanner variant="wide" className="w-full h-auto drop-shadow-2xl" />
                                    </div>
                                </div>
                            ) : active === "rfid" ? (
                                <div className="rounded-3xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-8 h-full flex flex-col items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-[radial-gradient(#e0f2fe_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
                                    <div className="relative z-10 w-full transform group-hover:translate-y-2 transition-transform duration-500">
                                        <RfidBanner className="w-full h-auto drop-shadow-2xl" />
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full min-h-[400px] rounded-3xl overflow-hidden relative group shadow-xl shadow-slate-200/50 border border-slate-100">
                                    <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={activeImage}
                                        alt={current.title}
                                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="font-semibold text-lg">{current.title}</p>
                                        <p className="text-sm text-slate-200">Visualisasi Project</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
