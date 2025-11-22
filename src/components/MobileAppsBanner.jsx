import { cn } from "../utils/cn";

export default function MobileAppsBanner({ className = "" }) {
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
                    <linearGradient id="mobile_grad_bg" x1="0" y1="0" x2="800" y2="300" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="currentColor" stopOpacity="0.05" />
                        <stop offset="1" stopColor="currentColor" stopOpacity="0.02" />
                    </linearGradient>
                </defs>

                {/* Background */}
                <rect width="800" height="300" rx="24" fill="url(#mobile_grad_bg)" />

                {/* Connections */}
                <path d="M200 120 C 250 120, 250 150, 350 150" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.3" />
                <path d="M200 180 C 250 180, 250 150, 350 150" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.3" />
                <path d="M450 150 H 550" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.3" />

                {/* Node 1: iOS */}
                <g transform="translate(150, 120)">
                    <rect x="-25" y="-35" width="50" height="70" rx="8" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <path d="M-25 -25 H 25 M-25 25 H 25" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
                    <circle cx="0" cy="28" r="3" fill="currentColor" fillOpacity="0.2" />
                    <text x="0" y="55" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                        iOS
                    </text>
                </g>

                {/* Node 2: Android */}
                <g transform="translate(150, 220)">
                    <rect x="-25" y="-35" width="50" height="70" rx="4" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <path d="M-25 -25 H 25 M-25 25 H 25" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
                    <text x="0" y="55" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                        Android
                    </text>
                </g>

                {/* Node 3: API Gateway */}
                <g transform="translate(400, 150)">
                    <path d="M0 -40 L 35 -20 V 20 L 0 40 L -35 20 V -20 Z" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <path d="M-15 -10 L 0 10 L 15 -10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="0" y="65" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                        API Gateway
                    </text>
                </g>

                {/* Node 4: Cloud Services */}
                <g transform="translate(650, 150)">
                    <path d="M-40 10 A 20 20 0 0 1 -20 -10 A 30 30 0 0 1 40 0 A 25 25 0 0 1 40 40 H -40 A 15 15 0 0 1 -40 10 Z" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                    <circle cx="-10" cy="15" r="4" fill="currentColor" fillOpacity="0.1" />
                    <circle cx="15" cy="20" r="6" fill="currentColor" fillOpacity="0.1" />
                    <circle cx="25" cy="5" r="3" fill="currentColor" fillOpacity="0.1" />
                    <text x="0" y="65" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                        Cloud Services
                    </text>
                </g>

            </svg>
        </div>
    );
}
