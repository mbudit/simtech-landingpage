import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

const pillarIcons = [
    (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 13l4-4 4 4 8-8M14 5h5v5" />
        </svg>
    ),
    (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h8m-8 10h8M7 8l-3 4 3 4m10-8 3 4-3 4" />
        </svg>
    ),
    (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3l7 4v5c0 4.418-2.985 8.138-7 9-4.015-.862-7-4.582-7-9V7l7-4z" />
        </svg>
    ),
];

function PillarCard({ title, text, icon }) {
    return (
        <div className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-xl hover:shadow-slate-200/70">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    {icon}
                </div>

                <h3 className="mb-3 text-lg font-bold text-slate-900">
                    {title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default function About() {
    const { t } = useTranslation();

    const capabilities = t("about.capabilities", { returnObjects: true });
    const sectors = t("about.sectors", { returnObjects: true });
    const pillars = t("about.pillars", { returnObjects: true });
    const solutionMap = t("about.solutionMap", { returnObjects: true });

    return (
        <section id="about" className="relative overflow-hidden bg-white py-24">
            {/* Decorative background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 top-24 h-96 w-96 rounded-full bg-brand-100/45 blur-3xl" />
                <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-accent-100/45 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4">
                {/* Main About */}
                <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
                    {/* Left Content */}
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
                            </span>

                            <p className="text-xs font-bold uppercase tracking-wider text-brand-700">
                                {t("about.label")}
                            </p>
                        </div>

                        <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl xl:text-[46px]">
                            {t("about.headline")}
                            <span className="text-gradient mt-2 block">
                                {t("about.headlineHighlight")}
                            </span>
                        </h2>

                        <p className="mb-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
                            {t("about.descriptionPrimary")}
                        </p>

                        <p className="mb-8 max-w-3xl text-base leading-relaxed text-slate-600">
                            {t("about.descriptionSecondary")}
                        </p>

                        {/* Capability Tags */}
                        <div className="mb-8 flex flex-wrap gap-3">
                            {capabilities.map((capability) => (
                                <span
                                    key={capability}
                                    className="inline-flex items-center rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50"
                                >
                                    {capability}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#portfolio"
                                className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-brand-500/40"
                            >
                                {t("about.ctaPrimary")}
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 font-bold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-700"
                            >
                                {t("about.ctaSecondary")}
                            </a>
                        </div>
                    </div>

                    {/* Right Visual Panel */}
                    <div className="relative">
                        <div className="absolute inset-0 scale-95 rounded-[2.75rem] bg-gradient-to-br from-brand-200/60 via-cyan-100/50 to-accent-100/60 blur-3xl" />

                        <div className="relative rounded-[2.75rem] border border-slate-100 bg-white/90 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur md:p-8">
                            {/* Panel Header */}
                            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                                <span className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
                                    {t("about.partnerLabel")}
                                </span>

                                <div className="flex gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-accent-400" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                                </div>
                            </div>

                            {/* Logo + Brand */}
                            <div className="rounded-[2rem] border border-slate-100 bg-gradient-to-br from-white via-brand-50/50 to-accent-50/50 p-7 text-center">
                                <img
                                    src={logo}
                                    alt="Logo SIMTECH"
                                    className="mx-auto h-40 w-40 object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105 md:h-48 md:w-48"
                                />

                                <p className="mt-5 text-xs font-bold uppercase tracking-[0.28em] text-brand-700">
                                    SIMTECH
                                </p>

                                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
                                    {t("about.brandStatement")}
                                </p>
                            </div>

                            {/* Capability Matrix */}
                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                {solutionMap.map((item) => (
                                    <div
                                        key={item.title}
                                        className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-md"
                                    >
                                        <p className="text-sm font-bold text-slate-900">
                                            {item.title}
                                        </p>
                                        <p className="mt-1 text-xs text-slate-500">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Sectors */}
                            <div className="mt-5 grid gap-3 md:grid-cols-3">
                                {sectors.map((sector) => (
                                    <div
                                        key={sector.title}
                                        className="rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm"
                                    >
                                        <p className="text-sm font-bold text-brand-700">
                                            {sector.title}
                                        </p>
                                        <p className="mt-1 text-xs leading-relaxed text-slate-600">
                                            {sector.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Pillars */}
                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {pillars.map((pillar, index) => (
                        <PillarCard
                            key={pillar.title}
                            title={pillar.title}
                            text={pillar.text}
                            icon={pillarIcons[index]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}