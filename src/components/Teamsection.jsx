import { useTranslation } from "react-i18next";

import haris from "../assets/team/haris.png";
import budi from "../assets/team/budi.png";
import bagas from "../assets/team/bagas.png";
import akmal from "../assets/team/akmal.png";

const teamImages = [
    {
        key: "haris",
        image: haris,
    },
    {
        key: "budi",
        image: budi,
    },
    {
        key: "bagas",
        image: bagas,
    },
    {
        key: "akmal",
        image: akmal,
    },
];

export default function TeamSection() {
    const { t } = useTranslation();

    const translatedMembers = t("team.members", { returnObjects: true });

    const teamMembers = translatedMembers.map((member, index) => ({
        ...member,
        image: teamImages[index]?.image,
    }));

    return (
        <section id="team" className="relative bg-slate-950 py-24 overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-300">
                        {t("team.label")}
                    </span>

                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        {t("team.title")}
                    </h2>

                    <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
                        {t("team.description")}
                    </p>
                </div>

                {/* Team Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member) => (
                        <article
                            key={member.name}
                            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.07]"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white">
                                    {member.name}
                                </h3>

                                <p className="mt-2 text-sm font-semibold text-cyan-300">
                                    {member.role}
                                </p>

                                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                                    {member.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}