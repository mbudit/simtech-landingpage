import activity1 from "../assets/activity/activity1.jpg";
import activity2 from "../assets/activity/activity2.jpg";
import activity3 from "../assets/activity/activity3.jpg";
import activity4 from "../assets/activity/activity4.jpg";
import activity5 from "../assets/activity/activity5.jpg";
import rfid from "../assets/projects/rfid.png";
import gorden from "../assets/projects/gorden.png"

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
            "Layanan pembuatan website dan webapp custom dengan desain modern, fitur lengkap, serta performa optimal untuk mendukung kebutuhan bisnis Anda.",
        details: ["React/NextJS/ExpressJS/CodeIgniter", "NGINX/Ubuntu/Docker", "Hardening & CSP Nonce", "SSL/TLS", "AWS/GCP"],
    },
    {
        key: "mobile",
        title: "Mobile Apps Android",
        desc:
            "Layanan pengembangan aplikasi Android berbasis Kotlin/Java dengan arsitektur modern, integrasi API, database, dan fitur-fitur khusus sesuai kebutuhan. Kami memastikan performa optimal dan pengalaman pengguna yang maksimal.",
        details: ["Room/SQLite", "ExpressJS/MySQL", "AWS/GCP", "Play Store ready"],
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
        img: activity5,
        desc: "Stabilisasi dan optimalisasi sistem informasi manajemen rumah sakit yang sebelumnya mengalami kendala performa berat.",
        challenge: "Sistem sering down saat jam sibuk, manajemen farmasi berantakan, dan data depo tidak sinkron antar unit.",
        solution: "Re-arsitektur database dengan clustering, optimasi query berat, dan implementasi caching layer (Redis).",
        goal: "Mencapai Zero Downtime dan mempercepat waktu pelayanan pasien hingga 50%."
    },
    {
        tag: "RFID",
        title: "RFID Linen & Laundry",
        img: rfid,
        desc: "Sistem pelacakan aset linen otomatis menggunakan teknologi RFID untuk efisiensi operasional laundry rumah sakit.",
        challenge: "Kehilangan linen yang tinggi (loss ratio > 10%) dan proses stok opname yang memakan waktu berhari-hari.",
        solution: "Pemasangan tag RFID UHF pada setiap linen dan gate reader otomatis di pintu keluar-masuk laundry.",
        goal: "Akurasi stok 100%, tracking lokasi realtime, dan stok opname selesai dalam hitungan menit."
    },
    // {
    //     tag: "Web",
    //     title: "Portal Komdigi – MFA",
    //     img: activity3,
    //     desc: "Pengembangan portal internal kementerian dengan standar keamanan tinggi menggunakan Multi-Factor Authentication.",
    //     challenge: "Resiko kebocoran data sensitif akibat serangan brute force dan akses tidak sah pada akun pegawai.",
    //     solution: "Implementasi MFA berbasis TOTP (Time-based One-Time Password) dan rate limiting pada endpoint login.",
    //     goal: "Menjamin keamanan data pengguna dan mematuhi standar keamanan siber nasional."
    // },
    {
        tag: "Mobile",
        title: "Gorden RS Production and Management Monitoring App",
        img: gorden,
        desc: "Aplikasi mobile untuk manajemen pemesanan dan pergantian gorden rumah sakit secara digital.",
        challenge: "Pencatatan manual tim lapangan untuk pemesanan gorden, approval pemesanan manual lewat WhatsApp, dan sulit memantau produksi gorden yang ongoing dan yang sudah selesai.",
        solution: "Aplikasi Android untuk petugas lapangan dan produksi gorden agar dengan mudah input data pemesanan, permintaan approval, dan monitoring produksi gorden.",
        goal: "Efisiensi operasional tim lapangan dan produksi gorden dan digitalisasi riwayat pemesanan gorden beserta dashboard produksi gorden."
    },
    {
        tag: "Database & Infra",
        title: "Data Analytics & ML Dashboard",
        img: activity4,
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
