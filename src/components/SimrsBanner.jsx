// src/components/SimrsBanner.jsx
export default function SimrsBanner(props = {}) {
    const { className = "", fit = "contain", variant = "wide" } = props;
    // const h = "h-[clamp(180px,26vw,340px)]";
    const preserve = fit === "cover" ? "xMidYMid slice" : "xMidYMid meet";

    const aspectByVariant = {
        ultra: "aspect-[5/1]",
        comfy: "aspect-[3/1]",
        wide: "aspect-[5/1]",
    };

    const wrapper = aspectByVariant[variant] || "aspect-[5/1]";

    return (
        <div className={`relative w-full ${wrapper} ${className}`}>
            <svg
                viewBox="0 0 1200 240"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full text-blue-700/80 dark:text-blue-300"
                preserveAspectRatio={preserve}
                aria-label="SIMRS Terintegrasi — Hero Banner"
                transform="scale(1.30)"
            >
                <defs>
                    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="240" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="currentColor" stopOpacity="0.10" />
                        <stop offset="1" stopColor="currentColor" stopOpacity="0.04" />
                    </linearGradient>
                    <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="currentColor" stopOpacity="0.9" />
                        <stop offset="1" stopColor="currentColor" stopOpacity="0.4" />
                    </linearGradient>
                </defs>

                <rect x="0" y="0" width="1200" height="240" fill="url(#bg)" rx="24" />

                <g transform="translate(860,64)" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M180 60a28 28 0 0 0-28-28 37 37 0 0 0-70.6 9.8A30 30 0 0 0 60 92h112a20 20 0 0 0 8-38z" fill="none" />
                    <text x="79" y="72" fill="currentColor" fontFamily="Inter, system-ui" fontSize="20" fontWeight="600">Cloud Hub</text>
                </g>

                <g transform="translate(420,96)" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="0" y="0" width="140" height="88" rx="8" fill="none" />
                    <path d="M0 28h140M24 44h16M24 60h16M52 44h16M52 60h16M80 44h16M80 60h16M108 44h16M108 60h16" />
                    <path d="M64 0v-18h12V0M58 -8h24M70 -18v10" />
                    <text x="70" y="84" textAnchor="middle" fill="currentColor" fontFamily="Inter, system-ui" fontSize="20" fontWeight="600" dy="18">Rumah Sakit</text>
                </g>

                <g fill="none" stroke="url(#line)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M560 140 C 700 140, 760 120, 880 120" />
                    <path d="M560 140 C 640 100, 700 90, 760 72" />
                    <path d="M560 140 C 640 160, 740 180, 820 188" />
                </g>

                <g fill="currentColor">
                    <circle cx="560" cy="140" r="5">
                        <animateTransform attributeName="transform" type="scale" values="1;1.3;1" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="880" cy="120" r="4">
                        <animateTransform attributeName="transform" type="scale" values="1;1.25;1" dur="2.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="760" cy="72" r="4">
                        <animateTransform attributeName="transform" type="scale" values="1;1.25;1" dur="1.9s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="820" cy="188" r="4">
                        <animateTransform attributeName="transform" type="scale" values="1;1.25;1" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                </g>

                <g transform="translate(740,40)" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="0" y="0" width="64" height="40" rx="6" fill="none" />
                    <path d="M12 20h40M20 14h24M20 26h24" />
                    <text x="32" y="56" fill="currentColor" fontFamily="Inter, system-ui" fontSize="20" textAnchor="middle">Bridging BPJS</text>
                </g>

                <g transform="translate(800,156)" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="0" y="0" width="64" height="40" rx="6" fill="none" />
                    <path d="M16 14h32M16 20h28M16 26h24" />
                    <text x="32" y="56" fill="currentColor" fontFamily="Inter, system-ui" fontSize="20" textAnchor="middle">RME</text>
                </g>

                <g transform="translate(1008,156)" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="0" y="0" width="64" height="40" rx="6" fill="none" />
                    <path d="M18 26c0-10 12-10 12 0 0 10 12 10 12 0" />
                    <text x="32" y="56" fill="currentColor" fontFamily="Inter, system-ui" fontSize="20" textAnchor="middle">Farmasi</text>
                </g>

                <g transform="translate(1088,84)" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="0" y="0" width="64" height="40" rx="6" fill="none" />
                    <path d="M16 16h24M16 24h32M42 12v24" />
                    <text x="32" y="56" fill="currentColor" fontFamily="Inter, system-ui" fontSize="20" textAnchor="middle">Kasir</text>
                </g>

                <g transform="translate(664,96)" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="0" y="0" width="64" height="40" rx="6" fill="none" />
                    <path d="M16 16h32M16 24h24" />
                    <text x="32" y="56" fill="currentColor" fontFamily="Inter, system-ui" fontSize="20" textAnchor="middle">Pendaftaran</text>
                </g>
            </svg>
        </div>

    );
}
