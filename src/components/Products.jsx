import { useTranslation } from "react-i18next";

function ProductCard({ product }) {
    return (
        <div className="group relative rounded-3xl border border-slate-100 bg-white p-6 md:p-7 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-brand-50 opacity-0 blur-2xl group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                        <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 border border-brand-100">
                            {product.category}
                        </span>
                    </div>

                    <span className="text-3xl font-black text-slate-100 group-hover:text-brand-100 transition-colors">
                        {product.number}
                    </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                    {product.title}
                </h3>

                <p className="text-sm md:text-base leading-relaxed text-slate-600 mb-5">
                    {product.description}
                </p>

                <div className="space-y-3">
                    {product.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3">
                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                                <svg
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-3.5 w-3.5"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.314a1 1 0 0 1-1.42 0L3.29 9.27a1 1 0 1 1 1.42-1.414l4.04 4.06 6.54-6.62a1 1 0 0 1 1.414-.006Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>

                            <p className="text-sm leading-relaxed text-slate-600">
                                {benefit}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Products() {
    const { t } = useTranslation();

    const products = t("products.items", { returnObjects: true });

    return (
        <section id="products" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-0 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-100/40 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 mb-6 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                        </span>

                        <p className="text-xs font-bold tracking-wider uppercase text-brand-700">
                            {t("products.label")}
                        </p>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                        {t("products.title")}
                        <span className="text-gradient">
                            {" "}
                            {t("products.titleHighlight")}
                        </span>
                    </h2>

                    <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        {t("products.description")}
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {products.map((product) => (
                        <ProductCard key={product.title} product={product} />
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-4 text-white font-bold shadow-lg shadow-brand-500/30 hover:bg-brand-700 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all"
                    >
                        {t("products.cta")}
                    </a>
                </div>
            </div>
        </section>
    );
}