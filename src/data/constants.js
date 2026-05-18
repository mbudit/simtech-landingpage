import activity1 from "../assets/activity/activity1.jpg";
import activity2 from "../assets/activity/activity2.jpg";
import activity3 from "../assets/activity/activity3.jpg";
import activity4 from "../assets/activity/activity4.jpg";
import activity5 from "../assets/activity/activity5.jpg";
import rfid from "../assets/projects/rfid.png";
import gorden from "../assets/projects/gorden.png";
import produk1 from "../assets/activity/produk1.png";
import rfidkit from "../assets/projects/rfidkit.png";

export const SERVICES = [
  {
    key: "discovery",
    title: "Discovery & Business Assessment",
    desc: "Tahap awal untuk memahami kebutuhan klien secara utuh, mulai dari tantangan operasional, proses bisnis, kesiapan sistem, hingga prioritas digitalisasi yang paling relevan.",
    details: [
      "Analisis kebutuhan bisnis dan operasional",
      "Pemetaan proses kerja, pain point, dan gap sistem",
      "Identifikasi prioritas solusi dan peluang improvement",
      "Dasar penyusunan scope, roadmap, dan rekomendasi awal",
    ],
    outputs: [
      "Business Need Summary",
      "Initial Scope & Priority Map",
      "Problem–Solution Framing",
    ],
    value:
      "Membantu organisasi memulai proyek teknologi dari persoalan yang benar, bukan sekadar dari permintaan fitur.",
  },
  {
    key: "architecture",
    title: "Solution Architecture & Product Blueprint",
    desc: "Perancangan struktur solusi digital agar aplikasi, integrasi, data, dan kebutuhan operasional tersusun dalam arsitektur yang jelas, realistis, dan siap dikembangkan.",
    details: [
      "Perancangan modul, user flow, dan struktur sistem",
      "Arsitektur aplikasi, integrasi, dan alur data",
      "Penyusunan pendekatan teknologi sesuai kebutuhan",
      "Blueprint implementasi sebagai acuan tim pengembangan",
    ],
    outputs: [
      "Solution Blueprint",
      "Architecture & Data Flow",
      "Module and Feature Mapping",
    ],
    value:
      "Mengurangi risiko proyek salah arah dan memastikan pembangunan sistem memiliki desain yang kuat sejak awal.",
  },
  {
    key: "development",
    title: "Custom Software Development",
    desc: "Pengembangan aplikasi web, mobile, dashboard, dan sistem operasional yang disesuaikan dengan kebutuhan organisasi serta alur kerja pengguna di lapangan.",
    details: [
      "Pengembangan frontend, backend, dan database",
      "Workflow berbasis peran dan kebutuhan operasional",
      "Dashboard manajerial dan pemantauan aktivitas",
      "Testing, validation, dan penyempurnaan bersama pengguna",
    ],
    outputs: [
      "Web or Mobile Application",
      "Operational Dashboard",
      "Tested Functional Modules",
    ],
    value:
      "Menghasilkan sistem yang bukan hanya berjalan secara teknis, tetapi benar-benar mendukung aktivitas pengguna.",
  },
  {
    key: "integration",
    title: "System Integration & Data Platform",
    desc: "Layanan integrasi antarsistem dan penguatan alur data agar informasi tidak terfragmentasi, proses lebih terkoneksi, dan manajemen memperoleh visibilitas yang lebih baik.",
    details: [
      "Integrasi API dan sinkronisasi data",
      "Penataan alur pertukaran informasi antaraplikasi",
      "Pengelolaan data untuk dashboard dan pelaporan",
      "Penyederhanaan proses lintas fungsi dan unit kerja",
    ],
    outputs: [
      "API Integration Layer",
      "Data Synchronization Flow",
      "Management Reporting View",
    ],
    value:
      "Membantu organisasi bergerak dari sistem yang berdiri sendiri menuju ekosistem digital yang saling terhubung.",
  },
  {
    key: "infrastructure",
    title: "Infrastructure, Cloud & DevSecOps",
    desc: "Penguatan fondasi teknis aplikasi melalui rancangan infrastruktur, deployment, monitoring, keamanan dasar, dan kesiapan operasional untuk sistem yang lebih stabil.",
    details: [
      "Perancangan environment aplikasi dan database",
      "Deployment flow, backup, monitoring, dan alerting",
      "Pendekatan DevSecOps untuk delivery yang lebih terkendali",
      "Peningkatan reliability, observability, dan kesiapan scale-up",
    ],
    outputs: [
      "Infrastructure Baseline",
      "Monitoring & Deployment Flow",
      "Operational Reliability Setup",
    ],
    value:
      "Memastikan solusi digital memiliki fondasi teknis yang lebih aman, terukur, dan tidak mudah rapuh saat digunakan.",
  },
  {
    key: "cybersecurity",
    title: "Cybersecurity Assessment, Hardening & Monitoring",
    desc: "Layanan penguatan keamanan sistem digital melalui assessment risiko, evaluasi celah keamanan, hardening konfigurasi, dan rekomendasi peningkatan kontrol keamanan secara terarah.",
    details: [
      "Security assessment pada aplikasi, server, dan lingkungan infrastruktur",
      "Identifikasi kerentanan dasar, misconfiguration, dan risiko akses",
      "Rekomendasi hardening, penguatan kontrol akses, dan secure configuration",
      "Penyusunan langkah tindak lanjut keamanan untuk peningkatan bertahap",
    ],
    outputs: [
      "Security Assessment Summary",
      "Vulnerability & Risk Findings",
      "Hardening Recommendation",
      "Security Improvement Roadmap",
    ],
    value:
      "Membantu organisasi meningkatkan kesiapan keamanan sistem secara lebih terukur, mengurangi risiko operasional, dan membangun fondasi perlindungan digital yang lebih kuat.",
  },
  {
    key: "support",
    title: "Implementation Support & Continuous Improvement",
    desc: "Pendampingan implementasi, stabilisasi, dan pengembangan bertahap agar solusi yang dibangun dapat diterima pengguna serta terus menyesuaikan kebutuhan organisasi.",
    details: [
      "Dukungan go-live dan pendampingan awal penggunaan",
      "Pencatatan isu, feedback, dan backlog perbaikan",
      "Penyempurnaan proses berdasarkan evaluasi lapangan",
      "Rekomendasi improvement untuk fase lanjutan",
    ],
    outputs: [
      "Go-Live Support",
      "Issue & Improvement Backlog",
      "Next Phase Recommendation",
    ],
    value:
      "Mendorong keberlanjutan implementasi agar sistem tidak berhenti pada peluncuran, tetapi terus memberi nilai.",
  },
];

export const PORTFOLIO = [
  {
    tag: "SIMRS",
    title: "Rescue SIMRS RSUD dr. Slamet",
    img: activity5,
    desc: "Pendampingan perbaikan sistem informasi rumah sakit agar alur modul prioritas lebih stabil dan lebih selaras dengan kebutuhan operasional.",
    challenge:
      "Rumah sakit membutuhkan penanganan terhadap sistem existing yang perlu ditata kembali dari sisi alur, prioritas modul, dan efektivitas penggunaan.",
    solution:
      "SIMTECH masuk melalui pendekatan assessment, analisis kebutuhan, perbaikan titik kritis, serta penyusunan arah penguatan sistem secara bertahap.",
    goal: "Meningkatkan keterkendalian sistem, memperjelas prioritas improvement, dan membantu operasional rumah sakit bergerak lebih efektif.",
  },
  {
    tag: "RFID",
    title: "RFID Linen & Laundry",
    img: rfid,
    productImg: rfidkit,
    productLabel: "RFID Haardware Kit",
    desc: "Solusi monitoring linen untuk membantu organisasi rumah sakit mengurangi pencatatan manual dan meningkatkan visibilitas siklus aset.",
    challenge:
      "Linen bergerak lintas area operasional sehingga dibutuhkan cara pencatatan yang lebih cepat, terukur, dan mudah ditelusuri.",
    solution:
      "Penerapan tag RFID, perangkat pembacaan, dan dashboard pemantauan untuk mencatat perpindahan serta status linen secara lebih sistematis.",
    goal: "Meningkatkan akurasi inventaris, mempercepat proses monitoring, dan memperkuat kontrol terhadap sirkulasi linen.",
  },
  {
    tag: "Mobile",
    title: "Mobile Manufacturing App untuk Akselerasi Produksi Tirai",
    img: gorden,
    desc: "Aplikasi mobile yang menghubungkan tim lapangan, admin, dan produksi dalam satu alur kerja terintegrasi—mulai dari input kebutuhan pelanggan, pembuatan order, approval, hingga pemantauan progres produksi.",
    challenge:
      "Proses pemesanan tirai sebelumnya berjalan terpisah antara tim lapangan dan produksi, bergantung pada komunikasi manual, pencatatan yang tersebar, serta minimnya visibilitas terhadap status setiap order.",
    solution:
      "SIMTECH mengembangkan aplikasi Android berbasis alur kerja terstruktur untuk mempercepat pengiriman data dari lapangan ke bagian produksi, mendukung approval pemesanan, pelacakan status batch order, dan monitoring progres pekerjaan secara real-time.",
    goal: "Mempercepat siklus order-to-production, meningkatkan akurasi data kebutuhan pelanggan, memperkuat koordinasi lintas tim, serta menciptakan proses produksi yang lebih terdokumentasi, terukur, dan responsif.",
  },
  {
    tag: "Database & Infra",
    title: "Operational Monitoring & Data Dashboard",
    img: activity4,
    productImg: produk1,
    productLabel: "Operational Dashboard",
    desc: "Pendekatan dashboard untuk membantu pimpinan dan tim operasional melihat indikator penting secara lebih ringkas dan terstruktur.",
    challenge:
      "Data operasional yang tersebar menyulitkan manajemen melihat kondisi aktual dan menentukan prioritas tindak lanjut.",
    solution:
      "Perancangan dashboard ringkas berbasis kebutuhan pengguna, dengan fokus pada indikator, status pekerjaan, dan visibilitas progres.",
    goal: "Mendorong keputusan yang lebih cepat, komunikasi yang lebih jelas, dan kontrol operasional yang lebih baik.",
  },
];

export const FAQS = [
  {
    q: "Apakah SIMTECH hanya membuat website?",
    a: "Tidak. SIMTECH berfokus pada pengembangan solusi digital yang lebih luas: aplikasi web, mobile, dashboard, sistem monitoring, RFID, hingga pendampingan penguatan sistem existing.",
  },
  {
    q: "Apakah bisa membantu sistem yang sudah berjalan tetapi perlu diperbaiki?",
    a: "Bisa. Kami dapat masuk melalui assessment, identifikasi masalah prioritas, penyusunan roadmap improvement, lalu dilanjutkan dengan perbaikan bertahap.",
  },
  {
    q: "Apakah solusi harus dibuat dari nol?",
    a: "Tidak selalu. Kami akan menilai apakah kebutuhan lebih tepat dibangun baru, dikembangkan dari sistem existing, atau disusun secara bertahap agar investasi lebih efektif.",
  },
  {
    q: "Apakah SIMTECH cocok untuk rumah sakit dan instansi?",
    a: "Ya. Fokus kami memang kuat pada kebutuhan yang memiliki proses operasional kompleks, banyak aktor, dan membutuhkan integrasi data serta kontrol yang lebih baik.",
  },
  {
    q: "Bagaimana cara memulai diskusi kebutuhan?",
    a: "Calon klien dapat menghubungi SIMTECH melalui formulir kontak atau WhatsApp. Dari sana kami akan membantu memetakan kebutuhan awal dan menentukan bentuk tindak lanjut yang paling tepat.",
  },
];

export const EXPERIENCES = [
  {
    tag: "Government",
    title: "Solution Architect – SPLP Komdigi",
    desc: "Keterlibatan dalam perancangan arsitektur solusi digital berskala nasional, penyelarasan proses bisnis, dan penguatan arah implementasi platform layanan pemerintah.",
  },
  {
    tag: "Advisory",
    title: "IT Consultant for PDMI",
    desc: "Pendampingan konsultatif untuk kebutuhan teknologi, arah pengembangan digital, dan dukungan peningkatan kapabilitas organisasi.",
  },
  {
    tag: "Engineering",
    title: "Infrastructure & Backend Engineering",
    desc: "Penguatan fondasi aplikasi melalui perancangan backend, struktur data, integrasi layanan, dan kesiapan operasional sistem.",
  },
  {
    tag: "Platform",
    title: "Kubernetes & Modern Platform Deployment",
    desc: "Penerapan pendekatan platform modern untuk deployment aplikasi yang lebih scalable, terstruktur, dan siap dikelola secara berkelanjutan.",
  },
  {
    tag: "Documentation",
    title: "Technical Writer & Formal Deliverables",
    desc: "Penyusunan dokumen teknis, laporan implementasi, matriks analisis, evidence register, dan deliverable formal untuk proyek kompleks.",
  },
  {
    tag: "Business Process",
    title: "Business Process Analysis – National Scale",
    desc: "Pemetaan proses bisnis dan penyelarasan kebutuhan layanan digital agar transformasi sistem tetap relevan dengan tata kelola organisasi.",
  },
  {
    tag: "Infrastructure",
    title: "National Server & Digital Infrastructure Support",
    desc: "Dukungan pada lingkungan infrastruktur digital tingkat nasional, termasuk kebutuhan server, platform, koordinasi teknis, dan kesiapan implementasi.",
  },
];
