import { useState, useEffect } from "react";
import { cn } from "../utils/cn";

export default function Testimonials() {
    const items = [
        {
            text: "SIMTECH membantu kami migrasi ke SIMRS berbasis web dengan sangat mulus. Pelayanan support-nya juara!",
            author: "Dr. Rina, Direktur RS Swasta",
        },
        {
            text: "Aplikasi IoT untuk monitoring aset linen sangat akurat. Efisiensi meningkat 40% sejak pakai sistem ini.",
            author: "Bpk. Hendra, Kepala Logistik",
        },
        {
            text: "Website company profile kami jadi jauh lebih profesional dan cepat diakses. Recommended!",
            author: "Ibu Sarah, CEO Startup",
        },
    ];
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const t = setInterval(() => {
            setIdx((c) => (c + 1) % items.length);
        }, 5000);
        return () => clearInterval(t);
    }, [items.length]);

    return (
        <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Apa Kata Klien Kami</h2>

                <div className="min-h-[200px] flex flex-col justify-center items-center">
                    <svg className="w-12 h-12 text-brand-400 mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                    </svg>

                    <blockquote className="text-xl md:text-3xl font-medium leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500 key={idx}">
                        "{items[idx].text}"
                    </blockquote>

                    <cite className="not-italic font-semibold text-brand-200 text-lg">
                        — {items[idx].author}
                    </cite>
                </div>

                <div className="flex justify-center gap-3 mt-12">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIdx(i)}
                            className={cn(
                                "h-2 rounded-full transition-all duration-300",
                                idx === i ? "w-8 bg-accent-400" : "w-2 bg-brand-700 hover:bg-brand-600"
                            )}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
