import SimrsBadge from "@/components/SimrsBadge";
import SimrsBanner from "@/components/SimrsBanner";

function Hero() {
    return (
        <section id="home" className="relative min-h-[88vh] grid place-items-center bg-gradient-to-b from-blue-50 to-white px-4">
            <div className="mx-auto max-w-5xl text-center">
                <p className="text-base md:text-lg uppercase tracking-[0.25em] font-semibold mb-3 bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400 text-transparent bg-clip-text">
                    Software House • Healthtech • IoT • Data Scientist
                </p>

                {/* Badge kecil di atas judul */}
                <div className="flex justify-center mb-8">
                    <SimrsBadge className="text-blue-700 dark:text-blue-300" />
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight">
                    Bangun Sistem yang <span className="text-blue-600">Aman</span>,
                    <span className="text-blue-600"> Terukur</span>, dan <span className="text-blue-600">Terintegrasi</span>
                </h1>

                <p className="mt-4 text-lg md:text-2xl text-blue-800/80">
                    PT Simplify Technologies Indonesia — partner Anda untuk SIMRS, RFID Linen, Web/Mobile Apps,
                    dan Database Arsitektur.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#contact" className="rounded-lg bg-blue-700 px-6 py-3 text-white font-semibold hover:bg-blue-800">
                        Diskusikan Kebutuhan
                    </a>
                    <a href="#services" className="rounded-lg border border-blue-700 px-6 py-3 text-blue-700 font-semibold hover:bg-blue-50">
                        Lihat Layanan
                    </a>
                </div>
            </div>

            {/* Hero banner SVG lebar */}
            <div className="absolute inset-x-0 bottom-0 translate-y-1/3 md:translate-y-1/4 pointer-events-none">
                <div className="mx-auto max-w-6xl px-4">
                    <SimrsBanner />
                </div>
            </div>

            {/* Floating WhatsApp CTA (biarkan seperti aslinya) */}
            ...
        </section>
    );
}
