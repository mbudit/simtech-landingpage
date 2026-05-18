import { useTranslation } from "react-i18next";
import { cn } from "../utils/cn";

export default function Pricing() {
    const { t } = useTranslation();

    const plans = t("pricing.plans", { returnObjects: true });

    return (
        <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 -left-20 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl" />
                <div className="absolute bottom-0 -right-20 h-80 w-80 rounded-full bg-accent-100/40 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-4 relative z-10">
                <div className="text-center mb-16">
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-600 mb-4">
                        {t("pricing.label")}
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
                        {t("pricing.title")}
                        <span className="text-gradient">
                            {" "}
                            {t("pricing.titleHighlight")}
                        </span>
                    </h2>

                    <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        {t("pricing.description")}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={cn(
                                "relative rounded-3xl p-8 flex flex-col transition-all duration-300",
                                plan.popular
                                    ? "bg-white shadow-2xl shadow-brand-500/10 border-2 border-brand-500 scale-105 z-10"
                                    : "bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                                    {plan.label}
                                </div>
                            )}

                            <div className="mb-6">
                                {!plan.popular && (
                                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-500 mb-3">
                                        {plan.label}
                                    </p>
                                )}

                                <h3
                                    className={cn(
                                        "text-xl font-bold mb-3 leading-tight",
                                        plan.popular ? "text-brand-700" : "text-slate-900"
                                    )}
                                >
                                    {plan.name}
                                </h3>

                                <div className="inline-flex rounded-full bg-slate-100 px-4 py-1.5 text-sm font-bold text-slate-700">
                                    {plan.price}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed"
                                    >
                                        <div
                                            className={cn(
                                                "mt-0.5 p-0.5 rounded-full",
                                                plan.popular
                                                    ? "bg-brand-100 text-brand-600"
                                                    : "bg-slate-100 text-slate-500"
                                            )}
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="3"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>

                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={cn(
                                    "w-full py-3.5 rounded-xl font-bold text-center transition-all",
                                    plan.popular
                                        ? "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/25"
                                        : "bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200"
                                )}
                            >
                                {t("pricing.cta")}
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-10 max-w-4xl mx-auto text-center">
                    <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                        {t("pricing.note")}
                    </p>
                </div>
            </div>
        </section>
    );
}