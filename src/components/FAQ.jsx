import { useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "../utils/cn";

export default function FAQ() {
    const { t } = useTranslation();
    const [open, setOpen] = useState(0);

    const faqs = t("faq.items", { returnObjects: true });

    return (
        <section id="faq" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 -left-20 h-72 w-72 rounded-full bg-brand-50 blur-3xl" />
                <div className="absolute bottom-0 -right-20 h-80 w-80 rounded-full bg-accent-50 blur-3xl" />
            </div>

            <div className="mx-auto max-w-4xl px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
                        </span>

                        <p className="text-xs font-bold tracking-wider uppercase text-brand-700">
                            {t("faq.label")}
                        </p>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
                        {t("faq.title")}
                        <span className="text-gradient">
                            {" "}
                            {t("faq.titleHighlight")}
                        </span>
                    </h2>

                    <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        {t("faq.description")}
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <div
                            key={item.q}
                            className={cn(
                                "rounded-2xl border transition-all duration-300 overflow-hidden",
                                open === i
                                    ? "border-brand-200 bg-brand-50/50 shadow-lg shadow-brand-500/5"
                                    : "border-slate-200 bg-white hover:border-brand-200 hover:shadow-sm"
                            )}
                        >
                            <button
                                onClick={() => setOpen(open === i ? -1 : i)}
                                className="flex w-full items-center justify-between p-6 text-left"
                                aria-expanded={open === i}
                            >
                                <span
                                    className={cn(
                                        "font-bold text-base md:text-lg pr-8 leading-relaxed",
                                        open === i ? "text-brand-700" : "text-slate-800"
                                    )}
                                >
                                    {item.q}
                                </span>

                                <span
                                    className={cn(
                                        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300",
                                        open === i
                                            ? "bg-brand-200 text-brand-700"
                                            : "bg-slate-100 text-slate-500"
                                    )}
                                >
                                    <svg
                                        className={cn(
                                            "w-5 h-5 transition-transform duration-300",
                                            open === i ? "rotate-180" : ""
                                        )}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={cn(
                                    "grid transition-all duration-300 ease-in-out",
                                    open === i
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                )}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 rounded-3xl border border-brand-100 bg-brand-50/70 p-7 md:p-8 text-center shadow-sm">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                        {t("faq.ctaTitle")}
                    </h3>

                    <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
                        {t("faq.ctaDescription")}
                    </p>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full bg-brand-600 px-7 py-3.5 text-white font-bold shadow-lg shadow-brand-500/25 hover:bg-brand-700 hover:-translate-y-0.5 transition-all"
                    >
                        {t("faq.ctaButton")}
                    </a>
                </div>
            </div>
        </section>
    );
}