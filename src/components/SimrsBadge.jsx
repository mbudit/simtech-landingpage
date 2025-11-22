import { cn } from "../utils/cn";

export default function SimrsBadge({ className = "" }) {
    return (
        <div className={cn("inline-flex items-center gap-3", className)}>
            <svg
                viewBox="0 0 200 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-auto text-brand-600"
                aria-label="SIMRS Terintegrasi"
            >
                {/* Icon */}
                <g transform="translate(4, 4)">
                    <rect x="0" y="0" width="42" height="42" rx="8" fill="currentColor" fillOpacity="0.1" />
                    <path
                        d="M21 11V31M11 21H31"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>

                {/* Text */}
                <g transform="translate(56, 10)">
                    <text
                        x="0"
                        y="16"
                        fill="currentColor"
                        fontFamily="Plus Jakarta Sans, sans-serif"
                        fontWeight="800"
                        fontSize="20"
                    >
                        SIMRS
                    </text>
                    <text
                        x="0"
                        y="34"
                        fill="currentColor"
                        fontFamily="Plus Jakarta Sans, sans-serif"
                        fontWeight="500"
                        fontSize="14"
                        letterSpacing="0.05em"
                        opacity="0.8"
                    >
                        TERINTEGRASI
                    </text>
                </g>
            </svg>
        </div>
    );
}
