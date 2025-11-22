import { useState } from "react";
import { FAQS } from "../data/constants";
import { cn } from "../utils/cn";

export default function FAQ() {
    const [open, setOpen] = useState(0);

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="mx-auto max-w-3xl px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pertanyaan Umum</h2>
                    <p className="text-lg text-slate-600">
                        Jawaban untuk pertanyaan yang sering diajukan oleh klien kami.
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((item, i) => (
                        <div
                            key={i}
                            className={cn(
                                "rounded-2xl border transition-all duration-300 overflow-hidden",
                                open === i
                                    ? "border-brand-200 bg-brand-50/50 shadow-lg shadow-brand-500/5"
                                    : "border-slate-200 bg-white hover:border-brand-200"
                            )}
                        >
                            <button
                                onClick={() => setOpen(open === i ? -1 : i)}
                                className="flex w-full items-center justify-between p-6 text-left"
                            >
                                <span className={cn("font-bold text-lg pr-8", open === i ? "text-brand-700" : "text-slate-800")}>
                                    {item.q}
                                </span>
                                <span className={cn(
                                    "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300",
                                    open === i ? "bg-brand-200 text-brand-700" : "bg-slate-100 text-slate-500"
                                )}>
                                    <svg
                                        className={cn("w-5 h-5 transition-transform duration-300", open === i ? "rotate-180" : "")}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={cn(
                                    "grid transition-all duration-300 ease-in-out",
                                    open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                )}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
