import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "../utils/cn";

export default function Services() {
    const { t } = useTranslation();

    const services = t("services.items", { returnObjects: true });

    const [active, setActive] = useState("discovery");

    const current = useMemo(() => {
        return services.find((service) => service.key === active) || services[0];
    }, [active, services]);

    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-brand-100/30 rounded-full blur-3xl" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-accent-100/30 rounded-full blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
                        </span>

                        <p className="text-xs font-bold tracking-wider uppercase text-brand-700">
                            {t("services.label")}
                        </p>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                        {t("services.title")}
                        <span className="text-gradient">
                            {" "}
                            {t("services.titleHighlight")}
                        </span>
                    </h2>

                    <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        {t("services.description")}
                    </p>
                </div>

                {/* Service Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {services.map((service) => (
                        <button
                            key={service.key}
                            onClick={() => setActive(service.key)}
                            className={cn(
                                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border",
                                active === service.key
                                    ? "bg-brand-600 text-white border-brand-600 shadow-lg shadow-brand-500/25 transform scale-105"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50"
                            )}
                        >
                            {service.title}
                        </button>
                    ))}
                </div>

                {current && (
                    <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-stretch animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Left: Service Description */}
                        <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full">
                            <div className="mb-6">
                                <h3 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">
                                    {current.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed">
                                    {current.desc}
                                </p>
                            </div>

                            <ul className="space-y-3 mb-8 flex-1">
                                {current.details.map((detail) => (
                                    <li
                                        key={detail}
                                        className="flex items-start gap-3 text-slate-700"
                                    >
                                        <svg
                                            className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>

                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className="w-full inline-flex justify-center items-center rounded-xl bg-brand-600 px-6 py-3.5 text-white font-semibold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/20 group"
                            >
                                {t("services.cta")}
                                <svg
                                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </a>
                        </div>

                        {/* Right: Outputs and Value */}
                        <div className="rounded-3xl bg-gradient-to-br from-brand-50 via-white to-accent-50 border border-brand-100 p-8 shadow-xl shadow-slate-200/40 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(#dbeafe_1px,transparent_1px)] [background-size:18px_18px] opacity-50" />

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="mb-7">
                                    <p className="text-xs font-bold tracking-[0.22em] uppercase text-brand-700 mb-3">
                                        {t("services.outputsLabel")}
                                    </p>

                                    <h4 className="text-2xl font-bold text-slate-900">
                                        {t("services.outputsTitle")}
                                    </h4>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {current.outputs.map((output, index) => (
                                        <div
                                            key={output}
                                            className="flex items-center gap-4 rounded-2xl border border-white/80 bg-white/85 backdrop-blur p-4 shadow-sm"
                                        >
                                            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-600 text-white text-sm font-bold">
                                                {String(index + 1).padStart(2, "0")}
                                            </div>

                                            <p className="font-semibold text-slate-800">
                                                {output}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto rounded-2xl border border-brand-100 bg-white/90 p-5 shadow-sm">
                                    <p className="text-xs font-bold tracking-[0.22em] uppercase text-brand-700 mb-3">
                                        {t("services.valueLabel")}
                                    </p>

                                    <p className="text-slate-700 leading-relaxed">
                                        {current.value}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}