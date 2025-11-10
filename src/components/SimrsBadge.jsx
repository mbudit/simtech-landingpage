export default function SimrsBadge({ className = "" }) {
    return (
        <div className={`inline-flex items-center gap-3 ${className}`}>
            <svg
                width="400" height="120" viewBox="0 0 256 64"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-700 dark:text-blue-400"
                aria-label="SIMRS Terintegrasi"
            >
                <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="currentColor" stopOpacity="1" />
                        <stop offset="1" stopColor="currentColor" stopOpacity="0.6" />
                    </linearGradient>
                </defs>

                <g transform="translate(8,8)" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M35 22a6 6 0 0 0-6-6 8 8 0 0 0-15.3 2.1A6.5 6.5 0 0 0 6 24a6 6 0 0 0 6 6h23a5 5 0 0 0 0-10h0" fill="url(#g)" />
                    <rect x="2" y="28" width="20" height="18" rx="2" />
                    <path d="M2 32h20M8 36h4M8 40h4M16 36h4M16 40h4" />
                    <path d="M12 28v-6h4v6" />
                    <path d="M10 22h8M14 18v4" />
                    <circle cx="26" cy="34" r="2" fill="currentColor" />
                    <circle cx="32" cy="30" r="2" fill="currentColor" />
                    <circle cx="38" cy="26" r="2" fill="currentColor" />
                    <path d="M22 34h2M28 34l2-2M34 30l2-2" />
                </g>

                <g transform="translate(72,14)" fill="currentColor">
                    <text x="0" y="18" fontFamily="Inter, system-ui" fontWeight="700" fontSize="20" letterSpacing="0.3px">SIMRS</text>
                    <text x="0" y="40" fontFamily="Inter, system-ui" fontWeight="500" fontSize="16" opacity="0.85">Terintegrasi</text>
                </g>
            </svg>
        </div>
    );
}
