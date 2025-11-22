import { cn } from "../utils/cn";

export default function WebAppsBanner({ className = "" }) {
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
                    <linearGradient id="web_grad_bg" x1="0" y1="0" x2="800" y2="300" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="currentColor" stopOpacity="0.05" />
                        <stop offset="1" stopColor="currentColor" stopOpacity="0.02" />
                    </linearGradient>
                </defs>

                {/* Background */}
                <rect width="800" height="300" rx="24" fill="url(#web_grad_bg)" />

                {/* Connections */}
                <path d="M160 150 H 280" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.3" />
                <path d="M380 150 H 500" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.3" />
                <path d="M620 150 H 680" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.3" />

                {/* Node 1: Multi-Platform Devices */}
                <g transform="translate(100, 150)">
                    <circle cx="0" cy="0" r="50" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    {/* Laptop Icon */}
                    <rect x="-25" y="-15" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M-30 5 H 10 L 5 -5 H -25 Z" fill="currentColor" fillOpacity="0.1" />
                    {/* Mobile Icon */}
                    <rect x="15" y="-5" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="white" />

                    <text x="0" y="70" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                        Multi-Platform
                    </text>
                </g>

                {/* Node 2: Secure Gateway */}
                <g transform="translate(330, 150)">
                    <path d="M0 -40 L 35 -20 V 15 C 35 35 0 50 0 50 C 0 50 -35 35 -35 15 V -20 Z" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
                    <path d="M-15 -5 L 0 10 L 15 -15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                    <text x="0" y="70" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                        Secure Gateway
                    </text>
                </g>

                {/* Node 3: Backend API */}
                <g transform="translate(560, 150)">
                    <rect x="-40" y="-40" width="80" height="80" rx="8" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <path d="M-30 -20 H 30 M-30 0 H 30 M-30 20 H 30" stroke="currentColor" strokeWidth="2" strokeOpacity="0.1" />
                    <circle cx="20" cy="-20" r="3" fill="currentColor" />
                    <circle cx="20" cy="0" r="3" fill="currentColor" />
                    <circle cx="20" cy="20" r="3" fill="currentColor" />

                    <text x="0" y="70" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                        Backend API
                    </text>
                </g>

                {/* Node 4: Database */}
                <g transform="translate(730, 150)">
                    <path d="M-30 -25 C -30 -35 30 -35 30 -25 V 25 C 30 35 -30 35 -30 25 Z" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <path d="M-30 -25 C -30 -15 30 -15 30 -25" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <path d="M-30 0 C -30 10 30 10 30 0" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />

                    <text x="0" y="70" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                        Database
                    </text>
                </g>

            </svg>
        </div>
    );
}
