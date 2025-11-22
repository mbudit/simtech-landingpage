import activity1 from "../assets/activity/activity1.jpg";
import activity2 from "../assets/activity/activity2.jpg";
import activity3 from "../assets/activity/activity3.jpg";
import activity4 from "../assets/activity/activity4.jpg";
import activity5 from "../assets/activity/activity5.jpg";

export const SERVICES = [
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

export const PORTFOLIO = [
    {
        tag: "SIMRS",
        title: "Rescue SIMRS RSUD dr. Slamet",
        img: activity1,
        desc: "Stabilisasi dan optimalisasi sistem informasi manajemen rumah sakit yang sebelumnya mengalami kendala performa berat.",
        challenge: "Sistem sering down saat jam sibuk, antrian pasien menumpuk, dan data medis tidak sinkron antar unit.",
        solution: "Re-arsitektur database dengan clustering, optimasi query berat, dan implementasi caching layer (Redis).",
        goal: "Mencapai Zero Downtime dan mempercepat waktu pelayanan pasien hingga 50%."
    },
    {
        tag: "RFID",
        title: "RFID Linen – Depo Rajal",
        img: activity2,
        desc: "Sistem pelacakan aset linen otomatis menggunakan teknologi RFID untuk efisiensi operasional laundry rumah sakit.",
        challenge: "Kehilangan linen yang tinggi (loss ratio > 10%) dan proses stok opname yang memakan waktu berhari-hari.",
        solution: "Pemasangan tag RFID UHF pada setiap linen dan gate reader otomatis di pintu keluar-masuk laundry.",
        goal: "Akurasi stok 100%, tracking lokasi realtime, dan stok opname selesai dalam hitungan menit."
    },
    {
        tag: "Web",
        title: "Portal Komdigi – MFA",
        img: activity3,
        desc: "Pengembangan portal internal kementerian dengan standar keamanan tinggi menggunakan Multi-Factor Authentication.",
        challenge: "Resiko kebocoran data sensitif akibat serangan brute force dan akses tidak sah pada akun pegawai.",
        solution: "Implementasi MFA berbasis TOTP (Time-based One-Time Password) dan rate limiting pada endpoint login.",
        goal: "Menjamin keamanan data pengguna dan mematuhi standar keamanan siber nasional."
    },
    {
        tag: "Mobile",
        title: "Android Order Gordyn RS",
        img: activity4,
        desc: "Aplikasi mobile untuk manajemen pemesanan dan pergantian gorden di ruang rawat inap secara digital.",
        challenge: "Pencatatan manual pergantian gorden sering hilang, jadwal tidak teratur, dan sulit memantau kebersihan.",
        solution: "Aplikasi Android offline-first untuk petugas kebersihan dengan fitur scan QR code ruangan dan jadwal otomatis.",
        goal: "Efisiensi operasional tim housekeeping dan digitalisasi riwayat kebersihan ruangan."
    },
    {
        tag: "Database & Infra",
        title: "Data Analytics & ML Dashboard",
        img: activity5,
        desc: "Dashboard analitik komprehensif untuk visualisasi data operasional dan prediksi tren kunjungan pasien.",
        challenge: "Data tersebar di berbagai sistem (silo) sehingga manajemen sulit mengambil keputusan strategis berbasis data.",
        solution: "Pembangunan Data Warehouse terpusat dan dashboard interaktif dengan model Machine Learning untuk prediksi.",
        goal: "Keputusan manajemen yang lebih cepat dan akurat berbasis data (Data-Driven Decision Making)."
    },
];

export const FAQS = [
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
    {
        q: "Apakah ada biaya bulanan?",
        a: "Tergantung paket. Untuk SIMRS Rescue biasanya one-time fee dengan opsi maintenance tahunan. Untuk WebApp/SaaS bisa berlangganan.",
    },
];
