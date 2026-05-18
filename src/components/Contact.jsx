import { useState } from "react";
import { useTranslation } from "react-i18next";

function Field({ label, name, type = "text", ...props }) {
    return (
        <div className="space-y-2">
            <label htmlFor={name} className="block text-sm font-semibold text-slate-700">
                {label}
            </label>

            {type === "textarea" ? (
                <textarea
                    id={name}
                    name={name}
                    rows={5}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                    {...props}
                />
            ) : type === "select" ? (
                <select
                    id={name}
                    name={name}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                    {...props}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                    {...props}
                />
            )}
        </div>
    );
}

export default function Contact() {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);

    const topicOptions = t("contact.form.topicOptions", { returnObjects: true });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const organization = formData.get("organization");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const topic = formData.get("topic");
        const message = formData.get("message");

        const whatsappMessage = `
${t("contact.whatsapp.greeting")}

${t("contact.whatsapp.intro")}

${t("contact.whatsapp.name")}: ${name}
${t("contact.whatsapp.organization")}: ${organization}
${t("contact.whatsapp.email")}: ${email}
${t("contact.whatsapp.phone")}: ${phone}
${t("contact.whatsapp.topic")}: ${topic}

${t("contact.whatsapp.summary")}:
${message}

${t("contact.whatsapp.closing")}
        `.trim();

        const whatsappUrl = `https://wa.me/628559903070?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");

        setLoading(false);
        e.currentTarget.reset();
    };

    return (
        <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 -left-20 h-80 w-80 rounded-full bg-brand-100/40 blur-3xl" />
                <div className="absolute bottom-0 -right-20 h-80 w-80 rounded-full bg-accent-100/40 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Information */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 mb-6 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
                            </span>

                            <p className="text-xs font-bold tracking-wider uppercase text-brand-700">
                                {t("contact.label")}
                            </p>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            {t("contact.title")}
                            <span className="text-gradient">
                                {" "}
                                {t("contact.titleHighlight")}
                            </span>
                        </h2>

                        <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                            {t("contact.description")}
                        </p>

                        <div className="space-y-8">
                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">
                                        {t("contact.addressLabel")}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed">
                                        Office 99, Gedung EduCenter Lt. 2 Unit VO-24110,
                                        <br />
                                        Jl. Sekolah Foresta No. 8 BSD City,
                                        <br />
                                        Kab. Tangerang, Banten 15331
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">
                                        {t("contact.emailLabel")}
                                    </h3>

                                    <a
                                        href="mailto:official@simtechindo.com"
                                        className="text-brand-600 hover:underline"
                                    >
                                        official@simtechindo.com
                                    </a>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">
                                        {t("contact.whatsappLabel")}
                                    </h3>

                                    <a
                                        href="https://wa.me/628559903070"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-brand-600 hover:underline"
                                    >
                                        +62 855-990-3070
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="mt-10 h-64 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                            <iframe
                                title={t("contact.mapTitle")}
                                src="https://www.google.com/maps?q=EduCenter%20BSD%20City&output=embed"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                        <div className="mb-7">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                                {t("contact.form.title")}
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                {t("contact.form.description")}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <Field
                                    label={t("contact.form.nameLabel")}
                                    name="name"
                                    placeholder={t("contact.form.namePlaceholder")}
                                    required
                                />

                                <Field
                                    label={t("contact.form.organizationLabel")}
                                    name="organization"
                                    placeholder={t("contact.form.organizationPlaceholder")}
                                    required
                                />
                            </div>

                            <div className="grid sm:grid-cols-2 gap-5">
                                <Field
                                    label={t("contact.form.emailLabel")}
                                    name="email"
                                    type="email"
                                    placeholder={t("contact.form.emailPlaceholder")}
                                    required
                                />

                                <Field
                                    label={t("contact.form.phoneLabel")}
                                    name="phone"
                                    type="tel"
                                    placeholder={t("contact.form.phonePlaceholder")}
                                    required
                                />
                            </div>

                            <Field
                                label={t("contact.form.topicLabel")}
                                name="topic"
                                type="select"
                                required
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    {t("contact.form.topicPlaceholder")}
                                </option>

                                {topicOptions.map((topic) => (
                                    <option key={topic.value} value={topic.value}>
                                        {topic.label}
                                    </option>
                                ))}
                            </Field>

                            <Field
                                label={t("contact.form.messageLabel")}
                                name="message"
                                type="textarea"
                                placeholder={t("contact.form.messagePlaceholder")}
                                required
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full rounded-xl bg-brand-600 px-8 py-4 text-white font-bold shadow-lg shadow-brand-500/25 hover:bg-brand-700 hover:shadow-brand-500/40 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading
                                    ? t("contact.form.loadingButton")
                                    : t("contact.form.submitButton")}
                            </button>

                            <p className="text-xs text-slate-500 leading-relaxed text-center">
                                {t("contact.form.disclaimer")}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}