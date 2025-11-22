import { cn } from "../utils/cn";

export default function Pricing() {
    const plans = [
        {
            name: "Starter Website",
            price: "5–15 Jt",
            features: ["Landing page modern", "Kontak & WhatsApp", "SEO dasar", "Deploy & SSL"],
        },
        {
            name: "WebApp Pro",
            price: "30–90 Jt",
            features: ["Auth + Role", "Form dinamis", "API & DB", "Logging & Backup"],
            popular: true,
        },
        {
            name: "SIMRS Rescue",
            price: "Custom",
            features: ["Modul inti RS", "Bridging BPJS/SATUSEHAT", "Pelatihan SDM", "SLA dukungan"],
        },
    ];
    return (
        <section id="pricing" className="py-24 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Paket & Estimasi</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Investasi terbaik untuk transformasi digital bisnis Anda. Transparan dan fleksibel.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((p) => (
                        <div
                            key={p.name}
                            className={cn(
                                "relative rounded-3xl p-8 flex flex-col transition-all duration-300",
                                p.popular
                                    ? "bg-white shadow-2xl shadow-brand-500/10 border-2 border-brand-500 scale-105 z-10"
                                    : "bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            )}
                        >
                            {p.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className={cn("text-lg font-bold mb-2", p.popular ? "text-brand-600" : "text-slate-900")}>
                                    {p.name}
                                </h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-extrabold text-slate-900">{p.price}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {p.features.map((f) => (
                                    <li key={f} className="flex items-start gap-3 text-slate-600 text-sm">
                                        <div className={cn("mt-0.5 p-0.5 rounded-full", p.popular ? "bg-brand-100 text-brand-600" : "bg-slate-100 text-slate-500")}>
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={cn(
                                    "w-full py-3.5 rounded-xl font-bold text-center transition-all",
                                    p.popular
                                        ? "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/25"
                                        : "bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200"
                                )}
                            >
                                Minta Penawaran
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
