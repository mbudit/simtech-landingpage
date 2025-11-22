
import { PORTFOLIO } from "../data/constants";
import { cn } from "../utils/cn";

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-4">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Portofolio Kami</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Studi kasus nyata bagaimana kami membantu klien mengatasi tantangan teknis dan mencapai tujuan bisnis.
                    </p>
                </div>

                <div className="space-y-24">
                    {PORTFOLIO.map((p, idx) => (
                        <div
                            key={p.title}
                            className={cn(
                                "flex flex-col lg:flex-row gap-12 items-center",
                                idx % 2 === 1 && "lg:flex-row-reverse"
                            )}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 group">
                                    <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-6 left-6 z-20">
                                        <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur text-sm font-bold text-brand-700 shadow-sm">
                                            {p.tag}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{p.title}</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed">{p.desc}</p>
                                </div>

                                <div className="grid gap-6">
                                    <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                                        <h4 className="flex items-center gap-2 font-bold text-red-700 mb-2">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            Tantangan
                                        </h4>
                                        <p className="text-slate-700 text-sm leading-relaxed">{p.challenge}</p>
                                    </div>

                                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                                        <h4 className="flex items-center gap-2 font-bold text-blue-700 mb-2">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                            Solusi
                                        </h4>
                                        <p className="text-slate-700 text-sm leading-relaxed">{p.solution}</p>
                                    </div>

                                    <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                                        <h4 className="flex items-center gap-2 font-bold text-green-700 mb-2">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Hasil & Goal
                                        </h4>
                                        <p className="text-slate-700 text-sm leading-relaxed">{p.goal}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

