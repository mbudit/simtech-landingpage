// Ambil semua gambar dari /src/assets/activity dengan Vite import.meta.glob
const images = Object.values(
    import.meta.glob("/src/assets/activity/*.{jpg,jpeg,png,webp}", {
        eager: true,
        as: "url",
    })
).sort(); // urut berdasar nama file

export default function ActivityGallery() {
    return (
        <section className="py-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-300">
                Dokumentasi Aktivitas
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {images.map((src, i) => (
                    <figure
                        key={i}
                        className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 bg-white/40 dark:bg-white/5"
                    >
                        <img
                            src={src}
                            alt={`Activity ${i + 1}`}
                            loading="lazy"
                            className="w-full h-36 md:h-40 object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </figure>
                ))}
            </div>
        </section>
    );
}
