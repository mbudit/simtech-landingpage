import { cn } from "../utils/cn";

export default function RfidBanner({ className = "" }) {
    return (
        <div className={cn("w-full aspect-[2/1] md:aspect-[3/1] relative", className)}>
            <svg
                viewBox="0 0 800 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-brand-600"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <linearGradient id="rfid_grad_bg" x1="0" y1="0" x2="800" y2="300" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="currentColor" stopOpacity="0.05" />
                        <stop offset="1" stopColor="currentColor" stopOpacity="0.02" />
                    </linearGradient>
                    <marker id="rfid_arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="currentColor" opacity="0.4" />
                    </marker>
                </defs>

                {/* Background */}
                <rect width="800" height="300" rx="24" fill="url(#rfid_grad_bg)" />

                {/* Flow Path - Split and Merge */}
                <path
                    d="M100 150 L 200 150 C 250 150, 250 100, 300 100 L 350 100 C 400 100, 400 150, 450 150 L 550 150 L 700 150"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    strokeOpacity="0.2"
                    fill="none"
                />
                <path
                    d="M200 150 C 250 150, 250 200, 300 200 L 350 200 C 400 200, 400 150, 450 150"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    strokeOpacity="0.2"
                    fill="none"
                />

                {/* Step 1: Dirty Linen */}
                <g transform="translate(100, 150)">
                    <circle cx="0" cy="0" r="40" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <path d="M-15 -10 H15 V15 H-15 Z" fill="currentColor" fillOpacity="0.1" />
                    <path d="M-15 -10 L0 -20 L15 -10" fill="none" stroke="currentColor" strokeWidth="2" />
                    <text x="0" y="60" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                        Linen Kotor
                    </text>
                </g>

                {/* Step 2a: RFID Portal */}
                <g transform="translate(300, 100)">
                    <rect x="-25" y="-35" width="50" height="70" rx="4" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
                    <path d="M-15 -25 H15 M-15 -10 H15 M-15 5 H15 M-15 20 H15" stroke="currentColor" strokeWidth="2" strokeOpacity="0.1" />

                    {/* Signal Waves */}
                    <path d="M30 -15 A 20 20 0 0 1 30 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6">
                        <animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" repeatCount="indefinite" />
                    </path>

                    <text x="0" y="60" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                        RFID Portal
                    </text>
                </g>

                {/* Step 2b: RFID Gun */}
                <g transform="translate(300, 200)">
                    <circle cx="0" cy="0" r="30" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    {/* Gun Icon */}
                    <path d="M-10 10 L-10 -5 L10 -5 L10 0 L0 0 L0 10 Z" fill="currentColor" fillOpacity="0.1" />
                    <path d="M10 -5 L15 -10" stroke="currentColor" strokeWidth="2" />

                    {/* Signal Waves */}
                    <path d="M20 -10 A 15 15 0 0 1 20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6">
                        <animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
                    </path>

                    <text x="0" y="60" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                        RFID Gun
                    </text>
                </g>

                {/* Step 3: Washing */}
                <g transform="translate(500, 150)">
                    <circle cx="0" cy="0" r="40" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <path d="M-20 0 A 20 20 0 0 1 20 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="3s" repeatCount="indefinite" />
                    </path>
                    <circle cx="0" cy="0" r="25" fill="currentColor" fillOpacity="0.1" />
                    <text x="0" y="60" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                        Pencucian
                    </text>
                </g>

                {/* Step 4: Distribution */}
                <g transform="translate(700, 150)">
                    <rect x="-30" y="-25" width="60" height="50" rx="4" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <path d="M-30 0 H30 M0 -25 V25" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
                    <text x="0" y="60" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                        Distribusi
                    </text>
                </g>

                {/* Moving Tag Particles */}
                <circle r="4" fill="currentColor" fillOpacity="1">
                    <animateMotion dur="5s" repeatCount="indefinite" path="M100 150 L 200 150 C 250 150, 250 100, 300 100 L 350 100 C 400 100, 400 150, 450 150 L 550 150 L 700 150" />
                </circle>
                <circle r="4" fill="currentColor" fillOpacity="1">
                    <animateMotion dur="5s" begin="2.5s" repeatCount="indefinite" path="M100 150 L 200 150 C 250 150, 250 200, 300 200 L 350 200 C 400 200, 400 150, 450 150 L 550 150 L 700 150" />
                </circle>
            </svg>
        </div>
    );
}
