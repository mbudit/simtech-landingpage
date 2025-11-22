import { useState } from "react";
import { cn } from "../utils/cn";

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
                    rows={4}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
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
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulasi submit
        setTimeout(() => {
            alert("Pesan terkirim! Kami akan segera menghubungi Anda.");
            setLoading(false);
            e.target.reset();
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Info Kiri */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Hubungi Kami
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            Siap mentransformasi bisnis Anda? Diskusikan kebutuhan teknologi Anda bersama tim ahli kami.
                            Konsultasi gratis!
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Alamat Kantor</h3>
                                    <p className="text-slate-600">
                                        Perumahan Griya Shanta Eksekutif Blok P 319,<br />
                                        Kec. Lowokwaru, Kota Malang, Jawa Timur 65141
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                                    <a href="mailto:admin@simplify.co.id" className="text-brand-600 hover:underline">
                                        admin@simplify.co.id
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">WhatsApp</h3>
                                    <a href="https://wa.me/628559903070" target="_blank" rel="noreferrer" className="text-brand-600 hover:underline">
                                        +62 855-9903-070
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="mt-10 h-64 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                            <iframe
                                title="Map Simtech"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.504434657264!2d112.61347967413632!3d-7.946699092077689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78827687d272e7%3A0x789ce9a636cd3aa2!2sPT%20Simplify%20Technologies%20Indonesia!5e0!3m2!1sid!2sid!4v1708500000000!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Form Kanan */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <Field label="Nama Lengkap" name="name" placeholder="John Doe" required />
                                <Field label="Email" name="email" type="email" placeholder="john@company.com" required />
                            </div>
                            <Field label="Nomor WhatsApp" name="phone" type="tel" placeholder="+62..." required />
                            <Field label="Topik / Layanan" name="subject" placeholder="Misal: Pembuatan Website RS" />
                            <Field label="Pesan Anda" name="message" type="textarea" placeholder="Ceritakan kebutuhan project Anda..." required />

                            <button
                                type="submit"
                                disabled={loading}
                                className={cn(
                                    "w-full rounded-xl bg-brand-600 px-8 py-4 text-white font-bold shadow-lg shadow-brand-500/25 hover:bg-brand-700 hover:shadow-brand-500/40 transition-all active:scale-95",
                                    loading && "opacity-70 cursor-not-allowed"
                                )}
                            >
                                {loading ? "Mengirim..." : "Kirim Pesan"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
