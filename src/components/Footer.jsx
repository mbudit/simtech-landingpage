import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    const productLinks = t("footer.products.items", { returnObjects: true });
    const navigationLinks = t("footer.navigation.items", { returnObjects: true });

    return (
        <footer className="bg-slate-900 text-slate-400 py-14 border-t border-slate-800">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img src={logo} alt="SIMTECH" className="h-11 w-11" />
                            <span className="text-white font-bold text-2xl tracking-wide">
                                SIMTECH
                            </span>
                        </div>

                        <p className="leading-relaxed text-sm mb-6">
                            {t("footer.brandDescription")}
                        </p>

                        <a
                            href="#contact"
                            className="inline-flex items-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-700 transition-colors"
                        >
                            {t("footer.brandCta")}
                        </a>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-white font-bold mb-6">
                            {t("footer.products.title")}
                        </h4>

                        <ul className="space-y-3 text-sm">
                            {productLinks.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="hover:text-brand-400 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-bold mb-6">
                            {t("footer.navigation.title")}
                        </h4>

                        <ul className="space-y-3 text-sm">
                            {navigationLinks.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="hover:text-brand-400 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">
                            {t("footer.contact.title")}
                        </h4>

                        <ul className="space-y-4 text-sm">
                            <li>
                                <p className="text-slate-300 font-semibold mb-1">
                                    {t("footer.contact.emailLabel")}
                                </p>

                                <a
                                    href="mailto:official@simtechindo.com"
                                    className="hover:text-brand-400 transition-colors"
                                >
                                    official@simtechindo.com
                                </a>
                            </li>

                            <li>
                                <p className="text-slate-300 font-semibold mb-1">
                                    {t("footer.contact.whatsappLabel")}
                                </p>

                                <a
                                    href="https://wa.me/628559903070"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-brand-400 transition-colors"
                                >
                                    +62 855-990-3070
                                </a>
                            </li>

                            <li>
                                <p className="text-slate-300 font-semibold mb-1">
                                    {t("footer.contact.addressLabel")}
                                </p>

                                <p className="leading-relaxed">
                                    Office 99, Gedung EduCenter Lt. 2 Unit VO-24110,
                                    <br />
                                    Jl. Sekolah Foresta No. 8 BSD City,
                                    <br />
                                    Kab. Tangerang, Banten 15331
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p className="text-center md:text-left">
                        © {new Date().getFullYear()} PT Simplify Technologies Indonesia.{" "}
                        {t("footer.copyright")}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="#home" className="hover:text-white transition-colors">
                            {t("footer.backToTop")}
                        </a>

                        <a href="#contact" className="hover:text-white transition-colors">
                            {t("footer.contactUs")}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}