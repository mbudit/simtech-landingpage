import { cn } from "../utils/cn";

export default function SimrsBanner({ className = "" }) {
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
                    <linearGradient id="grad_bg" x1="0" y1="0" x2="800" y2="300" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="currentColor" stopOpacity="0.05" />
                        <stop offset="1" stopColor="currentColor" stopOpacity="0.02" />
                    </linearGradient>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="currentColor" opacity="0.4" />
                    </marker>
                </defs>

                {/* Background */}
                <rect width="800" height="300" rx="24" fill="url(#grad_bg)" />

                {/* Central Hub (Cloud) */}
                <g transform="translate(350, 100)">
                    <circle cx="50" cy="50" r="60" fill="currentColor" fillOpacity="0.1" />
                    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.5">
                        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="20s" repeatCount="indefinite" />
                    </circle>
                    <path
                        d="M35 50L65 50M50 35L50 65"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                    <text x="50" y="130" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                        CORE SERVER
                    </text>
                </g>

                {/* Nodes */}
                {[
                    { x: 100, y: 60, label: "Pendaftaran" },
                    { x: 100, y: 200, label: "IGD & Poli" },
                    { x: 600, y: 60, label: "Farmasi" },
                    { x: 600, y: 200, label: "Kasir & Keuangan" },
                ].map((node, i) => (
                    <g key={i} transform={`translate(${node.x}, ${node.y})`}>
                        <rect x="0" y="0" width="120" height="50" rx="12" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
                        <text x="60" y="30" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                            {node.label}
                        </text>
                    </g>
                ))}

                {/* Connections */}
                <g stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" markerEnd="url(#arrow)">
                    <path d="M220 85 C 280 85, 300 120, 350 140" fill="none" />
                    <path d="M220 225 C 280 225, 300 180, 350 160" fill="none" />
                    <path d="M450 140 C 500 120, 520 85, 600 85" fill="none" />
                    <path d="M450 160 C 500 180, 520 225, 600 225" fill="none" />
                </g>

                {/* Data Flow Particles */}
                <circle r="3" fill="currentColor" fillOpacity="0.8">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M220 85 C 280 85, 300 120, 350 140" />
                </circle>
                <circle r="3" fill="currentColor" fillOpacity="0.8">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M450 140 C 500 120, 520 85, 600 85" />
                </circle>
            </svg>
        </div>
    );
}
