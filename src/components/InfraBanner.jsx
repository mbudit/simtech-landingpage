import { cn } from "../utils/cn";

export default function InfraBanner({ className = "" }) {
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
                    <linearGradient id="infra_grad_bg" x1="0" y1="0" x2="800" y2="300" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="currentColor" stopOpacity="0.05" />
                        <stop offset="1" stopColor="currentColor" stopOpacity="0.02" />
                    </linearGradient>
                </defs>

                {/* Background */}
                <rect width="800" height="300" rx="24" fill="url(#infra_grad_bg)" />

                {/* Connections */}
                <path d="M180 150 H 280" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.3" />
                <path d="M380 150 H 480" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.3" />
                <path d="M580 150 H 680" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.3" />

                {/* Node 1: Load Balancer */}
                <g transform="translate(130, 150)">
                    <circle cx="0" cy="0" r="40" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <path d="M-20 0 H 0 M 0 0 L 15 -15 M 0 0 L 15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <text x="0" y="60" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                        Load Balancer
                    </text>
                </g>

                {/* Node 2: App Cluster */}
                <g transform="translate(330, 150)">
                    <rect x="-10" y="-45" width="60" height="70" rx="4" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <rect x="-20" y="-35" width="60" height="70" rx="4" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <rect x="-30" y="-25" width="60" height="70" rx="4" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />

                    <path d="M-20 -10 H 20 M-20 5 H 20 M-20 20 H 20" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />

                    <text x="0" y="70" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                        App Cluster
                    </text>
                </g>

                {/* Node 3: DB Cluster */}
                <g transform="translate(530, 150)">
                    <path d="M10 -35 C 10 -45 50 -45 50 -35 V 15 C 50 25 10 25 10 15 Z" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <path d="M-10 -25 C -10 -35 30 -35 30 -25 V 25 C 30 35 -10 35 -10 25 Z" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <path d="M-30 -15 C -30 -25 10 -25 10 -15 V 35 C 10 45 -30 45 -30 35 Z" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />

                    <path d="M-30 -15 C -30 -5 10 -5 10 -15" stroke="currentColor" strokeWidth="2" strokeOpacity="0.1" />
                    <path d="M-30 10 C -30 20 10 20 10 10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.1" />

                    <text x="10" y="70" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                        DB Cluster
                    </text>
                </g>

                {/* Node 4: Backup */}
                <g transform="translate(730, 150)">
                    <path d="M0 -30 L 30 0 L 0 30 L -30 0 Z" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <circle cx="0" cy="0" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M-5 0 H 5" stroke="currentColor" strokeWidth="2" />

                    <text x="0" y="60" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                        Backup
                    </text>
                </g>

            </svg>
        </div>
    );
}
