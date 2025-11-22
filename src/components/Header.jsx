import { useState } from "react";
import logo from "../assets/logo.png";
import { cn } from "../utils/cn";

export default function Header({ active }) {
    const [open, setOpen] = useState(false);
    const items = [
        { id: "home", label: "Beranda" },
        { id: "about", label: "Tentang" },
        { id: "services", label: "Layanan" },
        { id: "portfolio", label: "Portofolio" },
        { id: "pricing", label: "Paket" },
        { id: "faq", label: "FAQ" },
        { id: "contact", label: "Kontak" },
    ];

    return (
        <header
            className="sticky top-0 z-50 border-b border-white/10 glass"
            aria-label="Main header"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <a href="#home" className="flex items-center gap-3 group">
                        <img src={logo} alt="SIMTECH" className="h-9 w-9 group-hover:scale-105 transition-transform" />
                        <span className="text-brand-900 font-bold text-xl tracking-wide group-hover:text-brand-700 transition-colors">SIMTECH</span>
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {items.map((it) => (
                            <a
                                key={it.id}
                                href={`#${it.id}`}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                                    active === it.id
                                        ? "bg-brand-50 text-brand-700 font-semibold"
                                        : "text-slate-600 hover:text-brand-600 hover:bg-slate-50"
                                )}
                            >
                                {it.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="ml-4 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 hover:bg-brand-700 hover:shadow-brand-500/40 transition-all active:scale-95"
                        >
                            Konsultasi Gratis
                        </a>
                    </nav>

                    {/* Mobile */}
                    <button
                        className="md:hidden text-slate-700 hover:text-brand-600 p-2"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Open menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                </div>

                {open && (
                    <div className="md:hidden py-4 border-t border-slate-100 animate-in slide-in-from-top-2">
                        <nav className="flex flex-col gap-1">
                            {items.map((it) => (
                                <a
                                    key={it.id}
                                    href={`#${it.id}`}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                                        active === it.id
                                            ? "bg-brand-50 text-brand-700"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-brand-600"
                                    )}
                                >
                                    {it.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
