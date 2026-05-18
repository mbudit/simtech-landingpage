import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import { cn } from "../utils/cn";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ active }) {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const items = [
        { id: "home", label: t("header.nav.home") },
        { id: "about", label: t("header.nav.about") },
        { id: "products", label: t("header.nav.products") },
        { id: "services", label: t("header.nav.services") },
        { id: "portfolio", label: t("header.nav.portfolio") },
        { id: "pricing", label: t("header.nav.pricing") },
        { id: "faq", label: t("header.nav.faq") },
        { id: "contact", label: t("header.nav.contact") },
    ];

    return (
        <header
            className="sticky top-0 z-50 border-b border-white/10 glass"
            aria-label="Main header"
        >
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Brand */}
                    <a href="#home" className="group flex items-center gap-3">
                        <img
                            src={logo}
                            alt="SIMTECH"
                            className="h-9 w-9 transition-transform group-hover:scale-105"
                        />
                        <span className="text-xl font-bold tracking-wide text-brand-900 transition-colors group-hover:text-brand-700">
                            SIMTECH
                        </span>
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden items-center gap-1 md:flex">
                        {items.map((it) => (
                            <a
                                key={it.id}
                                href={`#${it.id}`}
                                className={cn(
                                    "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                                    active === it.id
                                        ? "bg-brand-50 font-semibold text-brand-700"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-brand-600"
                                )}
                            >
                                {it.label}
                            </a>
                        ))}

                        {/* Language Switcher */}
                        <div className="ml-3">
                            <LanguageSwitcher />
                        </div>

                        {/* CTA */}
                        <a
                            href="#contact"
                            className="ml-3 whitespace-nowrap rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-700 hover:shadow-brand-500/40 active:scale-95"
                        >
                            {t("header.cta")}
                        </a>
                    </nav>

                    {/* Mobile button */}
                    <button
                        className="p-2 text-slate-700 hover:text-brand-600 md:hidden"
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? t("header.closeMenu") : t("header.openMenu")}
                        aria-expanded={open}
                    >
                        {open ? (
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div className="animate-in slide-in-from-top-2 border-t border-slate-100 py-4 md:hidden">
                        <nav className="flex flex-col gap-1">
                            {items.map((it) => (
                                <a
                                    key={it.id}
                                    href={`#${it.id}`}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                                        active === it.id
                                            ? "bg-brand-50 text-brand-700"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-brand-600"
                                    )}
                                >
                                    {it.label}
                                </a>
                            ))}
                        </nav>

                        {/* Mobile language switcher + CTA */}
                        <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
                            <div className="px-1">
                                <LanguageSwitcher />
                            </div>

                            <a
                                href="#contact"
                                onClick={() => setOpen(false)}
                                className="inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-700 hover:shadow-brand-500/40"
                            >
                                {t("header.cta")}
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}