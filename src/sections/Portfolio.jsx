import ActivityGallery from "@/components/ActivityGallery";

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Portfolio & Aktivitas</h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                    Dokumentasi otomatis dari folder <code>/src/assets/activity</code>.
                </p>
                <ActivityGallery />
            </div>
        </section>
    );
}
