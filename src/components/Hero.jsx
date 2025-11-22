export default function Hero() {
    return (
        <section id="home" className="relative min-h-[90vh] grid place-items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-50 via-white to-white px-4 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-accent-200/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="mx-auto max-w-5xl text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                    </span>
                    <p className="text-xs md:text-sm font-semibold tracking-wider uppercase text-brand-700">
                        Software House • Healthtech • IoT
                    </p>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
                    Bangun Sistem yang <span className="text-gradient">Aman</span>,
                    <span className="text-gradient"> Terukur</span>, dan <span className="text-gradient">Terintegrasi</span>
                </h1>

                <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    PT Simplify Technologies Indonesia — partner Anda untuk SIMRS, RFID Linen, Web/Mobile Apps,
                    dan Database Arsitektur.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#contact" className="w-full sm:w-auto rounded-full bg-brand-600 px-8 py-4 text-white font-bold shadow-lg shadow-brand-500/30 hover:bg-brand-700 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all">
                        Diskusikan Kebutuhan
                    </a>
                    <a href="#services" className="w-full sm:w-auto rounded-full bg-white border border-slate-200 px-8 py-4 text-slate-700 font-bold hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50/50 transition-all">
                        Lihat Layanan
                    </a>
                </div>
            </div>

            {/* Floating WhatsApp CTA */}
            <a
                href="https://wa.me/628559903070?text=Halo%20SIMTECH%2C%20saya%20ingin%20konsultasi%20project."
                target="_blank" rel="noreferrer"
                className="fixed bottom-6 right-6 grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all z-50"
                aria-label="WhatsApp"
            >
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M20.52 3.48A11.91 11.91 0 0 0 12.07 0C5.44 0 0 5.44 0 12.07c0 2.13.56 4.15 1.62 5.95L0 24l6.12-1.6a12 12 0 0 0 5.95 1.54h.01c6.63 0 12.07-5.44 12.07-12.06 0-3.23-1.26-6.26-3.53-8.4zM12.08 22.1h-.01a9.98 9.98 0 0 1-5.1-1.4l-.37-.22-3.63.95.97-3.54-.24-.36a10.02 10.02 0 1 1 8.38 4.57zm5.49-7.49c-.3-.15-1.79-.88-2.06-.98-.27-.1-.46-.15-.66.15-.2.3-.76.98-.93 1.18-.17.2-.34.22-.64.07-.3-.15-1.28-.47-2.44-1.51-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.34.46-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.23 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.79-.73 2.05-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.36z" /></svg>
            </a>
        </section>
    );
}
