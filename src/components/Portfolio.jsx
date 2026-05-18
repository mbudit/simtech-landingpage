import { useTranslation } from "react-i18next";
import { PORTFOLIO } from "../data/constants";
import { cn } from "../utils/cn";

export default function Portfolio() {
    const { t } = useTranslation();

    const translatedPortfolio = t("portfolio.items", { returnObjects: true });
    const experiences = t("portfolio.experiences", { returnObjects: true });

    const portfolioItems = translatedPortfolio.map((item, index) => ({
        ...PORTFOLIO[index],
        ...item,
    }));

    return (
        <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-brand-50 blur-3xl" />
                <div className="absolute bottom-20 -right-20 h-80 w-80 rounded-full bg-accent-50 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-4 relative z-10">
                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
                        </span>

                        <p className="text-xs font-bold tracking-wider uppercase text-brand-700">
                            {t("portfolio.label")}
                        </p>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        {t("portfolio.title")}
                        <span className="text-gradient">
                            {" "}
                            {t("portfolio.titleHighlight")}
                        </span>
                    </h2>

                    <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        {t("portfolio.description")}
                    </p>
                </div>

                {/* Featured Portfolio */}
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                        <div>
                            <p className="text-sm font-bold tracking-[0.22em] uppercase text-brand-700 mb-3">
                                {t("portfolio.featuredLabel")}
                            </p>

                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                                {t("portfolio.featuredTitle")}
                            </h3>
                        </div>
                    </div>

                    <div className="space-y-24">
                        {portfolioItems.map((p, idx) => (
                            <div
                                key={p.title}
                                className={cn(
                                    "flex flex-col lg:flex-row gap-12 items-start",
                                    idx % 2 === 1 && "lg:flex-row-reverse"
                                )}
                            >
                                {/* Image Side */}
                                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                                    {/* Main Portfolio Image */}
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

                                    {/* Optional Product Preview */}
                                    {p.productImg && (
                                        <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100 bg-white group">
                                            <div className="absolute inset-0 bg-brand-900/[0.02] group-hover:bg-transparent transition-colors z-10" />

                                            <img
                                                src={p.productImg}
                                                alt={`${p.title} product preview`}
                                                className="w-full aspect-[16/10] object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                                            />

                                            <div className="absolute top-5 left-5 z-20">
                                                <span className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur text-sm font-bold text-brand-700 shadow-sm">
                                                    {p.productLabel || t("portfolio.defaultProductLabel")}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2 space-y-8">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                            {p.title}
                                        </h3>

                                        <p className="text-lg text-slate-600 leading-relaxed">
                                            {p.desc}
                                        </p>
                                    </div>

                                    <div className="grid gap-6">
                                        {/* Challenge */}
                                        <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                                            <h4 className="flex items-center gap-2 font-bold text-red-700 mb-2">
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                                    />
                                                </svg>

                                                {t("portfolio.challengeLabel")}
                                            </h4>

                                            <p className="text-slate-700 text-sm leading-relaxed">
                                                {p.challenge}
                                            </p>
                                        </div>

                                        {/* Solution */}
                                        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                                            <h4 className="flex items-center gap-2 font-bold text-blue-700 mb-2">
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                                    />
                                                </svg>

                                                {t("portfolio.solutionLabel")}
                                            </h4>

                                            <p className="text-slate-700 text-sm leading-relaxed">
                                                {p.solution}
                                            </p>
                                        </div>

                                        {/* Goal */}
                                        <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                                            <h4 className="flex items-center gap-2 font-bold text-green-700 mb-2">
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>

                                                {t("portfolio.goalLabel")}
                                            </h4>

                                            <p className="text-slate-700 text-sm leading-relaxed">
                                                {p.goal}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Strategic Experience */}
                <div className="mt-24">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <p className="text-sm font-bold tracking-[0.22em] uppercase text-brand-700 mb-3">
                            {t("portfolio.experienceLabel")}
                        </p>

                        <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-5">
                            {t("portfolio.experienceTitle")}
                            <span className="text-gradient">
                                {" "}
                                {t("portfolio.experienceTitleHighlight")}
                            </span>
                        </h3>

                        <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                            {t("portfolio.experienceDescription")}
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {experiences.map((experience) => (
                            <div
                                key={experience.title}
                                className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300"
                            >
                                <span className="inline-flex rounded-full bg-brand-50 border border-brand-100 px-3 py-1 text-xs font-bold text-brand-700 mb-5">
                                    {experience.tag}
                                </span>

                                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3 leading-snug">
                                    {experience.title}
                                </h4>

                                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                                    {experience.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 rounded-3xl bg-brand-900 px-6 py-10 md:px-10 md:py-12 text-center shadow-2xl shadow-brand-900/20">
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                        {t("portfolio.ctaTitle")}
                    </h3>

                    <p className="max-w-3xl mx-auto text-base md:text-lg text-brand-100 leading-relaxed mb-8">
                        {t("portfolio.ctaDescription")}
                    </p>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-brand-800 hover:bg-brand-50 transition-all hover:-translate-y-0.5"
                    >
                        {t("portfolio.ctaButton")}
                    </a>
                </div>
            </div>
        </section>
    );
}