import { useTranslation } from "react-i18next";

import shinka from "../assets/clients/shinka.png";
import khaki from "../assets/clients/khaki.png";
import bit from "../assets/clients/bit.png";
import pdmi from "../assets/clients/pdmi.png";

const clients = [
    {
        name: "SHINKA",
        logo: shinka,
    },
    {
        name: "KHAKI",
        logo: khaki,
    },
    {
        name: "BIT",
        logo: bit,
    },
    {
        name: "PDMI",
        logo: pdmi,
    },
];

export default function ClientMarquee() {
    const { t } = useTranslation();

    const duplicatedClients = [...clients, ...clients, ...clients];

    return (
        <section className="relative overflow-hidden bg-white py-16 border-y border-slate-100">
            <div className="mx-auto max-w-7xl px-4">
                <div className="text-center mb-10">
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700 mb-3">
                        {t("clientMarquee.label")}
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                        {t("clientMarquee.title")}
                    </h2>
                </div>
            </div>

            <div className="relative">
                {/* Fade kiri */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-white to-transparent" />

                {/* Fade kanan */}
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-white to-transparent" />

                <div className="client-marquee-track flex w-max items-center gap-8">
                    {duplicatedClients.map((client, index) => (
                        <div
                            key={`${client.name}-${index}`}
                            className="group flex h-28 w-56 shrink-0 items-center justify-center rounded-3xl border border-slate-100 bg-white px-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="max-h-14 max-w-[160px] object-contain opacity-100 transition-all duration-300 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}