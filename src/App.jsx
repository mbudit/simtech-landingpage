import { useEffect, useMemo, useRef, useState } from "react";
import logo from "./assets/logo.png";
import activity1 from "./assets/activity/activity1.jpg";
import activity2 from "./assets/activity/activity2.jpg";
import activity3 from "./assets/activity/activity3.jpg";
import activity4 from "./assets/activity/activity4.jpg";
import activity5 from "./assets/activity/activity5.jpg";
import SimrsBadge from "./components/SimrsBadge";
import SimrsBanner from "./components/SimrsBanner";
import "./App.css";



// ---- Utility hooks
function useScrollSpy(ids, offset = 100) {
  const [active, setActive] = useState(ids?.[0] || "");
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: `-${offset}px 0px -60% 0px`, threshold: 0.1 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, offset]);
  return active;
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ---- Data (can be moved to a CMS/API later)
const SERVICES = [
  {
    key: "simrs",
    title: "SIMRS Terintegrasi",
    desc:
      "Implementasi dan rescue SIMRS (C, D, dan B) selaras Permenkes 24/2022, integrasi SATUSEHAT & JKN, keamanan & audit.",
    details: [
      "Bridging SATUSEHAT & BPJS",
      "RME & e‑Resep",
      "Kasir, Farmasi, Gudang, IGD/Rawat Jalan/Rawat Inap",
      "Pelaporan SP2TP, INA‑CBGs",
    ],
  },
  {
    key: "rfid",
    title: "RFID Linen & Laundry (SIMTECH)",
    desc:
      "Pelacakan linen end‑to‑end dengan tag RFID, portal gate, dan dashboard OEE. Integrasi ke gudang & depo RS.",
    details: ["Tag UHF EPC Gen2", "Portal/Handheld", "Dashboard KPI", "API ke SIMRS"],
  },
  {
    key: "webapps",
    title: "Website & WebApps",
    desc:
      "Pembuatan website cepat & aman (CSP/CSRF), webapp React + API Node/PHP, serta integrasi pembayaran.",
    details: ["React/Tailwind", "CodeIgniter 3/4 & PHP 7.4+", "NGINX/Ubuntu", "Hardening & CSP Nonce"],
  },
  {
    key: "mobile",
    title: "Mobile Apps Android",
    desc:
      "Aplikasi Android untuk operasional lapangan (gordyn RS, order entry, inventory, survey) dengan offline‑first.",
    details: ["Room/SQLite", "Camera & GPS", "Sync ke Backend", "Play Store ready"],
  },

  {
    key: "infra",
    title: "Database & Infrastructure",
    desc:
      "Desain dan implementasi infrastruktur database serta server untuk memastikan sistem berjalan cepat, aman, dan tinggi ketersediaan (high availability). Kami menyiapkan replikasi DC1–DC2 aktif-aktif, monitoring, dan backup otomatis.",
    details: [
      "PostgreSQL / MySQL Cluster (HA & failover)",
      "Load Balancer (HAProxy / NGINX)",
      "Backup & Snapshot otomatis",
      "Monitoring & Alerting (Grafana / Prometheus)",
    ],
  },

];

const PORTFOLIO = [
  { tag: "SIMRS", title: "Rescue SIMRS RSUD dr. Slamet", img: activity1 },
  { tag: "RFID", title: "RFID Linen – Depo Rajal", img: activity2 },
  { tag: "Web", title: "Portal Komdigi – MFA", img: activity3 },
  { tag: "Mobile", title: "Android Order Gordyn RS", img: activity4 },
  { tag: "Database & Infra", title: "Data Analytics, Data Scientis, Machine learning", img: activity5 },
];

const FAQS = [
  {
    q: "Berapa lama implementasi SIMRS Rescue?",
    a: "Umumnya 6–12 minggu untuk stabilisasi modul awal (pendaftaran, poli, kasir, farmasi, bridging BPJS, RME dasar).",
  },
  {
    q: "Apakah bisa host di cloud lokal?",
    a: "Bisa. Biasa kami gunakan IDCloudHost (managed Ubuntu + NGINX/PostgreSQL) atau on-prem DC1–DC2.",
  },
  {
    q: "Apakah mendukung audit & keamanan?",
    a: "Ya. CSP nonce, CSRF aktif, hardening server, backup terjadwal, serta log terpusat. Untuk tanda tangan digital mengikuti BSrE.",
  },
  {
    q: "Apakah layanan bisa dikustom?",
    a: "Bisa. Semua modul dan SLA dukungan dapat disesuaikan dengan kebutuhan RS/instansi.",
  },
];


// ---- Components
function Header({ active }) {
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
      className="sticky top-0 z-50 border-b backdrop-blur bg-[#293856]/90"
      aria-label="Main header"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="SIMTECH" className="h-9 w-9" />
            <span className="text-white font-bold text-xl tracking-wide">SIMTECH</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-white">
            {items.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                className={cn(
                  "px-2 py-1 hover:underline underline-offset-4",
                  active === it.id && "font-semibold text-blue-200"
                )}
              >
                {it.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-500"
            >
              Konsultasi Gratis
            </a>
          </nav>

          {/* Mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-3">
            <nav className="flex flex-col gap-2 text-white">
              {items.map((it) => (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded px-3 py-2 hover:bg-white/10",
                    active === it.id && "bg-white/10"
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

function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] grid place-items-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-base md:text-lg uppercase tracking-[0.25em] font-semibold mb-3 bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400 text-transparent bg-clip-text">
          Software House • Healthtech • IoT • Data Scientist
        </p>
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

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/628559903070?text=Halo%20SIMTECH%2C%20saya%20ingin%20konsultasi%20project."
        target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 grid place-items-center h-14 w-14 rounded-full bg-green-500 text-white shadow-xl hover:scale-105 transition"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M20.52 3.48A11.91 11.91 0 0 0 12.07 0C5.44 0 0 5.44 0 12.07c0 2.13.56 4.15 1.62 5.95L0 24l6.12-1.6a12 12 0 0 0 5.95 1.54h.01c6.63 0 12.07-5.44 12.07-12.06 0-3.23-1.26-6.26-3.53-8.4zM12.08 22.1h-.01a9.98 9.98 0 0 1-5.1-1.4l-.37-.22-3.63.95.97-3.54-.24-.36a10.02 10.02 0 1 1 8.38 4.57zm5.49-7.49c-.3-.15-1.79-.88-2.06-.98-.27-.1-.46-.15-.66.15-.2.3-.76.98-.93 1.18-.17.2-.34.22-.64.07-.3-.15-1.28-.47-2.44-1.51-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.34.46-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.23 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.79-.73 2.05-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.36z" /></svg>
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img src={logo} alt="Logo SIMTECH" className="h-40 w-40 object-contain drop-shadow" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-3 text-blue-900">Tentang SIMTECH</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Didirikan Mei 2024, kami fokus pada solusi digital kesehatan & enterprise: SIMRS terintegrasi,
            RFID linen, website/webapp, mobile Android, dan arsitektur EDA/log analytics. Kami mengedepankan
            keamanan (CSP/CSRF), kepatuhan regulasi (Permenkes 24/2022, SATUSEHAT/JKN), dan implementasi yang cepat.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-center">
            <Stat k="7+" v="Engineer" />
            <Stat k="10+" v="Project berjalan" />
            <Stat k=">95%" v="SLA Dukungan" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }) {
  return (
    <div className="rounded-xl border p-4">
      <div className="text-2xl font-extrabold text-blue-700">{k}</div>
      <div className="text-sm text-slate-600">{v}</div>
    </div>
  );
}

function Services() {
  const [active, setActive] = useState(SERVICES[0].key);
  const current = useMemo(() => SERVICES.find((s) => s.key === active), [active]);
  return (
    <section id="services" className="py-16 bg-blue-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">Layanan Kami</h2>
        <p className="text-center max-w-3xl mx-auto text-slate-700">
          Pilih kategori untuk melihat fokus layanan kami. Semua paket dapat dikustom sesuai kebutuhan RS/instansi.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {SERVICES.map((s) => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold",
                active === s.key
                  ? "bg-blue-700 text-white border-blue-700"
                  : "bg-white text-blue-700 border-blue-300 hover:border-blue-500"
              )}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Active service card */}
        {current && (
          <div className="mt-8 grid md:grid-cols-[1.05fr_1.35fr] gap-6 items-stretch">
            {/* Kartu deskripsi kiri */}
            <div className="rounded-2xl bg-white p-6 shadow h-full">
              <h3 className="text-xl font-semibold text-blue-900">{current.title}</h3>
              <p className="mt-2 text-slate-700">{current.desc}</p>
              <ul className="mt-4 list-disc pl-5 space-y-1 text-slate-700">
                {current.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-block rounded-lg bg-blue-700 px-5 py-2 text-white font-semibold hover:bg-blue-800"
              >
                Minta Estimasi
              </a>
            </div>

            {/* Kanan: kalau SIMRS → tampilkan SVG, selain itu → grid gambar */}
            {active === "simrs" ? (
              <div className="rounded-2xl bg-blue-50/60 ring-1 ring-inset ring-blue-200 p-8 h-full flex flex-col items-center justify-center">
                <SimrsBadge className="text-blue-700 dark:text-blue-300 mb-12" />
                <SimrsBanner variant="wide" className="w-full h-auto" />
                <div className="mt-8 grid md:grid-cols-[1.05fr_1.35fr] gap-6 items-stretch">
                </div>

              </div>
            ) : (
              <div className="rounded-2xl border grid sm:grid-cols-2 gap-4 p-4 bg-white h-full">
                {PORTFOLIO.slice(0, 4).map((p) => (
                  <figure key={p.title} className="group">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-40 w-full object-cover rounded-xl group-hover:opacity-90"
                    />
                    <figcaption className="mt-2 text-sm font-medium text-slate-700">
                      {p.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}

          </div>
        )}
      </div>
    </section>
  );
}

function Portfolio() {
  const tags = ["Semua", ...new Set(PORTFOLIO.map((p) => p.tag))];
  const [filter, setFilter] = useState("Semua");
  const list = useMemo(
    () => (filter === "Semua" ? PORTFOLIO : PORTFOLIO.filter((p) => p.tag === filter)),
    [filter]
  );
  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Portofolio</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={cn(
                "rounded-full px-4 py-2 text-sm border",
                filter === t ? "bg-blue-700 text-white border-blue-700" : "bg-white text-blue-700 border-blue-300"
              )}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <div key={p.title} className="rounded-xl overflow-hidden border group">
              <img src={p.img} alt={p.title} className="h-48 w-full object-cover group-hover:scale-[1.02] transition" />
              <div className="p-4">
                <div className="text-xs font-semibold text-blue-700">{p.tag}</div>
                <div className="font-bold">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter Website",
      price: "5–15 Jt",
      features: ["Landing page modern", "Kontak & WhatsApp", "SEO dasar", "Deploy & SSL"],
    },
    {
      name: "WebApp Pro",
      price: "30–90 Jt",
      features: ["Auth + Role", "Form dinamis", "API & DB", "Logging & Backup"],
      popular: true,
    },
    {
      name: "SIMRS Rescue",
      price: "Custom (To be disscussed)",
      features: ["Modul inti RS", "Bridging BPJS/SATUSEHAT", "Pelatihan SDM", "SLA dukungan"],
    },
  ];
  return (
    <section id="pricing" className="py-16 bg-blue-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Paket & Estimasi</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={cn(
                "rounded-2xl border bg-white p-6 shadow",
                p.popular && "ring-2 ring-blue-600"
              )}
            >
              <div className="text-sm text-blue-700 font-semibold mb-1">{p.name}</div>
              <div className="text-3xl font-extrabold text-blue-900">{p.price}</div>
              <ul className="mt-4 space-y-2 text-slate-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-block rounded-lg bg-blue-700 px-5 py-2 text-white font-semibold hover:bg-blue-800">
                Minta Penawaran
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      name: "Direktur RSUD X",
      text:
        "Tim SIMTECH gerak cepat. Modul pendaftaran, poli, kasir, dan farmasi stabil dalam 8 minggu, bridging berjalan baik.",
    },
    {
      name: "Manajer Laundry RS",
      text:
        "RFID linen membuat kehilangan berkurang signifikan. Dashboard membantu kami mengatur rotasi dan stok.",
    },
    { name: "Kepala Dinkes", text: "One‑Integration memudahkan pelaporan. Tim responsif saat uji sistem." },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [items.length]);
  const it = items[idx];
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Apa kata klien</h2>
        <blockquote className="text-xl text-slate-800 leading-relaxed">“{it.text}”</blockquote>
        <div className="mt-4 text-sm text-slate-600">— {it.name}</div>
        <div className="mt-3 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={cn("h-2 w-2 rounded-full", i === idx ? "bg-blue-700" : "bg-blue-200")}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-16 bg-blue-50">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">FAQ</h2>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="rounded-lg border bg-white">
              <button
                className="w-full text-left px-4 py-3 font-semibold flex items-center justify-between"
                onClick={() => setOpen((o) => (o === i ? -1 : i))}
              >
                <span>{f.q}</span>
                <span className="text-blue-700">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="px-4 pb-4 text-slate-700">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(formRef.current);
    const name = fd.get("name");
    const email = fd.get("email");
    const phone = fd.get("phone");
    const message = fd.get("message");

    // Simple validation
    if (!name || !email || !message) {
      setOk("Mohon lengkapi nama, email, dan pesan.");
      return;
    }

    // Fallback: open mail client. Replace with your backend/API later.
    setSending(true);
    const subject = encodeURIComponent(`[SIMTECH] Pesan dari ${name}`);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\nTelepon: ${phone}\n\nPesan:\n${message}`);
    window.location.href = `mailto:official@simtechindo.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      setOk("Terima kasih! Kami sudah menyiapkan email Anda. Jika klien mail tidak terbuka, hubungi via WhatsApp.");
      formRef.current?.reset();
    }, 600);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Hubungi Kami</h2>
          <p className="text-slate-700 mb-4">
            Siap memulai project atau butuh audit sistem? Kirimkan detail singkat di bawah ini.
          </p>
          <div className="rounded-xl border p-4 text-sm text-slate-700">
            <div className="font-semibold">Kantor</div>
            <div>Office 99, Gedung EduCenter Lt.2 Unit VO‑24110, BSD City, Kab. Tangerang, Banten 15331</div>
            <div className="mt-2"><span className="font-semibold">Email:</span> official@simtechindo.com</div>
            <div><span className="font-semibold">Telepon/WA:</span> +62 855‑990‑3070</div>
          </div>
          <iframe
            title="Map BSD"
            className="mt-4 w-full h-56 rounded-xl border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=EduCenter%20BSD%20City&output=embed"
          />
        </div>
        <form ref={formRef} onSubmit={onSubmit} className="rounded-2xl border p-6 shadow bg-blue-50/60">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Nama" name="name" placeholder="Nama Anda" required />
            <Field label="Email" name="email" type="email" placeholder="nama@email.com" required />
          </div>
          <div className="mt-4">
            <Field label="Telepon/WA" name="phone" placeholder="08xxxx" />
          </div>
          <div className="mt-4">
            <Field label="Pesan" name="message" textarea placeholder="Ceritakan kebutuhan Anda" required />
          </div>
          {ok && <div className="mt-3 text-sm text-blue-700">{ok}</div>}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button type="submit" disabled={sending} className="rounded-lg bg-blue-700 px-6 py-3 text-white font-semibold hover:bg-blue-800 disabled:opacity-60">
              {sending ? "Menyiapkan…" : "Kirim via Email"}
            </button>
            <a
              className="rounded-lg border border-blue-700 px-6 py-3 text-blue-700 font-semibold hover:bg-blue-50 text-center"
              href="https://wa.me/628559903070?text=Halo%20SIMTECH%2C%20saya%20ingin%20konsultasi%20project."
              target="_blank" rel="noreferrer"
            >
              Chat WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", textarea = false, required, placeholder }) {
  return (
    <label className="block text-sm">
      <span className="font-semibold text-slate-700">{label}{required && <span className="text-red-600">*</span>}</span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-600 focus:ring-blue-600 min-h-[120px]"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-600 focus:ring-blue-600"
        />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="py-8 text-center text-slate-500 text-sm bg-blue-50 border-t">
      © {new Date().getFullYear()} PT Simplify Technologies Indonesia. All rights reserved.
    </footer>
  );
}

export default function App() {
  const sectionIds = ["home", "about", "services", "portfolio", "pricing", "faq", "contact"];
  const active = useScrollSpy(sectionIds, 120);
  return (
    <div className="min-h-screen flex flex-col">
      <Header active={active} />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
