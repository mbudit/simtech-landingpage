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
        title: "SIMRS & Healthcare Digitalization",
        desc:
            "Pendampingan pengembangan, rescue, dan penguatan sistem rumah sakit agar proses layanan, data, dan modul operasional menjadi lebih tertata.",
        details: [
            "Perbaikan alur layanan klinis dan non-klinis",
            "Penguatan modul pendaftaran, poli, kasir, farmasi, dan RME",
            "Kesiapan integrasi dengan ekosistem layanan kesehatan",
            "Pemetaan kebutuhan teknis dan operasional rumah sakit",
        ],
    },
    {
        key: "rfid",
        title: "RFID Linen Tracking",
        desc:
            "Sistem pelacakan linen dan aktivitas laundry untuk membantu rumah sakit meningkatkan visibilitas aset, mempercepat stok opname, dan mengurangi proses manual.",
        details: [
            "Tag RFID dan perangkat pembacaan",
            "Monitoring perpindahan linen",
            "Dashboard stok, sirkulasi, dan aktivitas laundry",
            "Integrasi data ke sistem operasional terkait",
        ],
    },
    {
        key: "webapps",
        title: "Enterprise Web Applications",
        desc:
            "Pengembangan aplikasi web yang dibuat sesuai proses bisnis klien, mulai dari workflow internal, portal layanan, dashboard, hingga sistem manajemen operasional.",
        details: [
            "Custom workflow dan role-based access",
            "Dashboard operasional dan manajerial",
            "Integrasi API dan database",
            "Deployment yang rapi dan siap dikembangkan",
        ],
    },
    {
        key: "mobile",
        title: "Mobile Operational Apps",
        desc:
            "Aplikasi mobile untuk tim lapangan, operasional, produksi, dan monitoring pekerjaan agar pencatatan lebih cepat dan keputusan lebih mudah diambil.",
        details: [
            "Input data lapangan secara digital",
            "Approval dan tracking aktivitas",
            "Sinkronisasi data dengan backend",
            "Pengalaman pengguna yang sederhana dan terarah",
        ],
    },
    {
        key: "infra",
        title: "Data, Infrastructure & Reliability",
        desc:
            "Perancangan data dan infrastruktur pendukung agar aplikasi lebih stabil, mudah dimonitor, dan siap dikembangkan sesuai pertumbuhan kebutuhan.",
        details: [
            "Arsitektur database dan data flow",
            "Backup, monitoring, dan alerting",
            "Penataan server, deployment, dan integrasi",
            "Penguatan reliability untuk aplikasi kritikal",
        ],
    },
];

export const PORTFOLIO = [
    {
        tag: "SIMRS",
        title: "Rescue SIMRS RSUD dr. Slamet",
        img: activity5,
        desc: "Pendampingan perbaikan sistem informasi rumah sakit agar alur modul prioritas lebih stabil dan lebih selaras dengan kebutuhan operasional.",
        challenge: "Rumah sakit membutuhkan penanganan terhadap sistem existing yang perlu ditata kembali dari sisi alur, prioritas modul, dan efektivitas penggunaan.",
        solution: "SIMTECH masuk melalui pendekatan assessment, analisis kebutuhan, perbaikan titik kritis, serta penyusunan arah penguatan sistem secara bertahap.",
        goal: "Meningkatkan keterkendalian sistem, memperjelas prioritas improvement, dan membantu operasional rumah sakit bergerak lebih efektif."
    },
    {
        tag: "RFID",
        title: "RFID Linen & Laundry",
        img: rfid,
        desc: "Solusi monitoring linen untuk membantu organisasi rumah sakit mengurangi pencatatan manual dan meningkatkan visibilitas siklus aset.",
        challenge: "Linen bergerak lintas area operasional sehingga dibutuhkan cara pencatatan yang lebih cepat, terukur, dan mudah ditelusuri.",
        solution: "Penerapan tag RFID, perangkat pembacaan, dan dashboard pemantauan untuk mencatat perpindahan serta status linen secara lebih sistematis.",
        goal: "Meningkatkan akurasi inventaris, mempercepat proses monitoring, dan memperkuat kontrol terhadap sirkulasi linen."
    },
    {
        tag: "Mobile",
        title: "Gorden RS Production & Management Monitoring App",
        img: gorden,
        desc: "Aplikasi mobile untuk pencatatan kebutuhan pelanggan, approval pemesanan, dan monitoring progres produksi secara lebih terintegrasi.",
        challenge: "Proses lapangan dan produksi sebelumnya banyak bergantung pada pencatatan manual serta komunikasi yang tersebar.",
        solution: "Pengembangan aplikasi Android agar tim lapangan, admin, dan produksi memiliki alur input data, approval, dan monitoring yang lebih jelas.",
        goal: "Mendukung efisiensi proses kerja, mempercepat koordinasi, dan membentuk riwayat pemesanan yang lebih terdokumentasi."
    },
    {
        tag: "Database & Infra",
        title: "Operational Monitoring & Data Dashboard",
        img: activity4,
        desc: "Pendekatan dashboard untuk membantu pimpinan dan tim operasional melihat indikator penting secara lebih ringkas dan terstruktur.",
        challenge: "Data operasional yang tersebar menyulitkan manajemen melihat kondisi aktual dan menentukan prioritas tindak lanjut.",
        solution: "Perancangan dashboard ringkas berbasis kebutuhan pengguna, dengan fokus pada indikator, status pekerjaan, dan visibilitas progres.",
        goal: "Mendorong keputusan yang lebih cepat, komunikasi yang lebih jelas, dan kontrol operasional yang lebih baik."
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

