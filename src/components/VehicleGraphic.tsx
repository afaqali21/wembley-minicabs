import React from "react";

type VehicleType = "saloon" | "estate" | "executive" | "7seater" | "8seater";

interface VehicleGraphicProps {
  type: VehicleType;
  className?: string;
}

export default function VehicleGraphic({ type, className = "w-full h-48" }: VehicleGraphicProps) {
  switch (type) {
    case "saloon":
      return (
        <svg viewBox="0 0 600 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="saloonBody" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="saloonGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="brandAccent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7bc010" />
              <stop offset="100%" stopColor="#9ee325" />
            </linearGradient>
            <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0f172a" floodOpacity="0.25" />
            </filter>
          </defs>
          {/* Ground shadow */}
          <ellipse cx="300" cy="275" rx="260" ry="22" fill="#cbd5e1" opacity="0.6" />
          <ellipse cx="300" cy="275" rx="210" ry="14" fill="#64748b" opacity="0.35" />

          {/* Car Body Group with Shadow */}
          <g filter="url(#shadow)">
            {/* Main Silhouette */}
            <path
              d="M75 220 L95 185 C115 170 160 168 200 148 L270 102 C300 82 390 82 430 115 L490 165 C520 175 540 190 545 220 C540 238 520 242 490 242 L110 242 C85 242 75 235 75 220 Z"
              fill="url(#saloonBody)"
            />
            {/* Roof & Glass area */}
            <path
              d="M205 146 L272 104 C295 90 380 90 415 116 L465 152 C440 152 230 150 205 146 Z"
              fill="#090d16"
            />
            <path
              d="M215 144 L276 108 C295 96 345 96 350 96 L350 144 Z"
              fill="url(#saloonGlass)"
            />
            <path
              d="M360 96 C385 96 405 105 422 120 L455 144 L360 144 Z"
              fill="url(#saloonGlass)"
            />
            {/* Aerodynamic highlight curve */}
            <path
              d="M100 185 C180 175 360 170 525 185"
              stroke="#64748b"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Front Headlight LED strip */}
            <path
              d="M515 190 L542 205 C540 215 528 218 510 212 Z"
              fill="#e2e8f0"
              stroke="#38bdf8"
              strokeWidth="2"
            />
            {/* Rear Tail Light */}
            <path
              d="M80 200 L95 198 L92 215 L78 212 Z"
              fill="#ef4444"
            />
            {/* Door handles */}
            <rect x="270" y="172" width="22" height="4" rx="2" fill="#94a3b8" />
            <rect x="375" y="172" width="22" height="4" rx="2" fill="#94a3b8" />
            {/* Brand Accent Trim */}
            <path d="M165 236 L440 236" stroke="url(#brandAccent)" strokeWidth="3.5" strokeLinecap="round" />
          </g>

          {/* Rear Wheel Arch & Wheel */}
          <circle cx="160" cy="242" r="46" fill="#0f172a" />
          <circle cx="160" cy="242" r="38" fill="#1e293b" />
          <circle cx="160" cy="242" r="26" fill="#475569" stroke="#94a3b8" strokeWidth="5" />
          <circle cx="160" cy="242" r="9" fill="url(#brandAccent)" />
          {/* Wheel spokes */}
          <line x1="160" y1="216" x2="160" y2="268" stroke="#cbd5e1" strokeWidth="3" />
          <line x1="134" y1="242" x2="186" y2="242" stroke="#cbd5e1" strokeWidth="3" />
          <line x1="142" y1="224" x2="178" y2="260" stroke="#cbd5e1" strokeWidth="3" />
          <line x1="142" y1="260" x2="178" y2="224" stroke="#cbd5e1" strokeWidth="3" />

          {/* Front Wheel Arch & Wheel */}
          <circle cx="455" cy="242" r="46" fill="#0f172a" />
          <circle cx="455" cy="242" r="38" fill="#1e293b" />
          <circle cx="455" cy="242" r="26" fill="#475569" stroke="#94a3b8" strokeWidth="5" />
          <circle cx="455" cy="242" r="9" fill="url(#brandAccent)" />
          {/* Wheel spokes */}
          <line x1="455" y1="216" x2="455" y2="268" stroke="#cbd5e1" strokeWidth="3" />
          <line x1="429" y1="242" x2="481" y2="242" stroke="#cbd5e1" strokeWidth="3" />
          <line x1="437" y1="224" x2="473" y2="260" stroke="#cbd5e1" strokeWidth="3" />
          <line x1="437" y1="260" x2="473" y2="224" stroke="#cbd5e1" strokeWidth="3" />
        </svg>
      );

    case "estate":
      return (
        <svg viewBox="0 0 600 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="estateBody" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="60%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="estateGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="brandAccentEstate" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7bc010" />
              <stop offset="100%" stopColor="#9ee325" />
            </linearGradient>
          </defs>
          <ellipse cx="300" cy="275" rx="265" ry="22" fill="#cbd5e1" opacity="0.6" />
          <ellipse cx="300" cy="275" rx="215" ry="14" fill="#64748b" opacity="0.35" />

          {/* Car Body - Extended estate roofline */}
          <path
            d="M65 220 L75 160 C80 135 110 98 160 96 L400 96 C425 96 445 110 465 130 L505 168 C530 178 548 195 550 220 C545 238 525 244 495 244 L100 244 C75 244 65 235 65 220 Z"
            fill="url(#estateBody)"
          />
          {/* Roof rails for extra luggage styling */}
          <path d="M140 88 L380 88" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
          <line x1="160" y1="88" x2="160" y2="96" stroke="#94a3b8" strokeWidth="3" />
          <line x1="360" y1="88" x2="360" y2="96" stroke="#94a3b8" strokeWidth="3" />

          {/* Windows - Estate 3-pane glass */}
          <path d="M120 148 L128 108 C140 102 180 102 195 102 L195 148 Z" fill="url(#estateGlass)" />
          <path d="M205 102 L300 102 L300 148 L205 148 Z" fill="url(#estateGlass)" />
          <path d="M310 102 C340 102 385 104 410 120 L448 148 L310 148 Z" fill="url(#estateGlass)" />

          {/* Estate contour line */}
          <path d="M80 175 C180 168 360 165 530 180" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          {/* Door handles */}
          <rect x="230" y="170" width="22" height="4" rx="2" fill="#94a3b8" />
          <rect x="330" y="170" width="22" height="4" rx="2" fill="#94a3b8" />
          {/* Front Headlight */}
          <path d="M515 190 L545 205 C542 215 530 218 512 212 Z" fill="#f8fafc" stroke="#38bdf8" strokeWidth="2" />
          {/* Rear Tail Light */}
          <path d="M68 185 L85 180 L80 220 L66 215 Z" fill="#ef4444" />
          {/* Green accent runner */}
          <path d="M150 238 L440 238" stroke="url(#brandAccentEstate)" strokeWidth="3.5" strokeLinecap="round" />

          {/* Wheels */}
          <circle cx="150" cy="244" r="46" fill="#0f172a" />
          <circle cx="150" cy="244" r="38" fill="#1e293b" />
          <circle cx="150" cy="244" r="26" fill="#475569" stroke="#cbd5e1" strokeWidth="5" />
          <circle cx="150" cy="244" r="9" fill="url(#brandAccentEstate)" />
          <line x1="150" y1="218" x2="150" y2="270" stroke="#e2e8f0" strokeWidth="3" />
          <line x1="124" y1="244" x2="176" y2="244" stroke="#e2e8f0" strokeWidth="3" />
          <line x1="132" y1="226" x2="168" y2="262" stroke="#e2e8f0" strokeWidth="3" />
          <line x1="132" y1="262" x2="168" y2="226" stroke="#e2e8f0" strokeWidth="3" />

          <circle cx="455" cy="244" r="46" fill="#0f172a" />
          <circle cx="455" cy="244" r="38" fill="#1e293b" />
          <circle cx="455" cy="244" r="26" fill="#475569" stroke="#cbd5e1" strokeWidth="5" />
          <circle cx="455" cy="244" r="9" fill="url(#brandAccentEstate)" />
          <line x1="455" y1="218" x2="455" y2="270" stroke="#e2e8f0" strokeWidth="3" />
          <line x1="429" y1="244" x2="481" y2="244" stroke="#e2e8f0" strokeWidth="3" />
          <line x1="437" y1="226" x2="473" y2="262" stroke="#e2e8f0" strokeWidth="3" />
          <line x1="437" y1="262" x2="473" y2="226" stroke="#e2e8f0" strokeWidth="3" />
        </svg>
      );

    case "executive":
      return (
        <svg viewBox="0 0 600 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="execBody" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#1e1e24" />
              <stop offset="40%" stopColor="#0a0a0f" />
              <stop offset="100%" stopColor="#181820" />
            </linearGradient>
            <linearGradient id="execChrome" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            <linearGradient id="execGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <ellipse cx="300" cy="275" rx="265" ry="20" fill="#94a3b8" opacity="0.4" />
          <ellipse cx="300" cy="275" rx="220" ry="12" fill="#334155" opacity="0.4" />

          {/* Executive Sleek Long Wheelbase Sedan Body */}
          <path
            d="M70 215 L90 180 C110 162 165 158 210 138 L290 95 C320 80 405 80 445 110 L505 156 C535 168 555 186 560 215 C555 235 530 240 500 240 L105 240 C80 240 70 230 70 215 Z"
            fill="url(#execBody)"
          />
          {/* Premium Chrome Window Trim */}
          <path
            d="M208 140 L288 98 C318 84 398 84 438 114 L488 150 C440 148 235 146 208 140 Z"
            stroke="url(#execChrome)"
            strokeWidth="3"
            fill="#05070d"
          />
          {/* Glass */}
          <path d="M222 138 L294 104 C310 94 360 94 362 94 L362 138 Z" fill="url(#execGlass)" />
          <path d="M372 94 C395 94 416 102 432 116 L465 138 L372 138 Z" fill="url(#execGlass)" />

          {/* Sharp waistline crease */}
          <path d="M95 178 C200 164 380 162 535 176" stroke="url(#execChrome)" strokeWidth="2.5" strokeLinecap="round" />
          {/* Chrome side skirt */}
          <path d="M165 235 L445 235" stroke="url(#execChrome)" strokeWidth="4" strokeLinecap="round" />
          {/* Flush chrome door handles */}
          <rect x="280" y="165" width="26" height="5" rx="2.5" fill="url(#execChrome)" />
          <rect x="385" y="165" width="26" height="5" rx="2.5" fill="url(#execChrome)" />

          {/* High-tech Headlight */}
          <path d="M525 182 L558 198 C555 210 540 212 522 204 Z" fill="#ffffff" stroke="#38bdf8" strokeWidth="2.5" />
          {/* Executive Taillight */}
          <path d="M75 194 L90 192 L88 208 L72 205 Z" fill="#dc2626" />

          {/* Diamond-cut Luxury Wheels */}
          <circle cx="155" cy="238" r="48" fill="#05070d" />
          <circle cx="155" cy="238" r="40" fill="#181820" />
          <circle cx="155" cy="238" r="28" fill="#334155" stroke="url(#execChrome)" strokeWidth="6" />
          <circle cx="155" cy="238" r="10" fill="#7bc010" />
          <line x1="155" y1="210" x2="155" y2="266" stroke="#ffffff" strokeWidth="3.5" />
          <line x1="127" y1="238" x2="183" y2="238" stroke="#ffffff" strokeWidth="3.5" />
          <line x1="135" y1="218" x2="175" y2="258" stroke="#ffffff" strokeWidth="3.5" />
          <line x1="135" y1="258" x2="175" y2="218" stroke="#ffffff" strokeWidth="3.5" />

          <circle cx="465" cy="238" r="48" fill="#05070d" />
          <circle cx="465" cy="238" r="40" fill="#181820" />
          <circle cx="465" cy="238" r="28" fill="#334155" stroke="url(#execChrome)" strokeWidth="6" />
          <circle cx="465" cy="238" r="10" fill="#7bc010" />
          <line x1="465" y1="210" x2="465" y2="266" stroke="#ffffff" strokeWidth="3.5" />
          <line x1="437" y1="238" x2="493" y2="238" stroke="#ffffff" strokeWidth="3.5" />
          <line x1="445" y1="218" x2="485" y2="258" stroke="#ffffff" strokeWidth="3.5" />
          <line x1="445" y1="258" x2="485" y2="218" stroke="#ffffff" strokeWidth="3.5" />
        </svg>
      );

    case "7seater":
      return (
        <svg viewBox="0 0 600 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mpvBody" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="mpvGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <ellipse cx="300" cy="275" rx="265" ry="22" fill="#cbd5e1" opacity="0.6" />
          <ellipse cx="300" cy="275" rx="215" ry="14" fill="#64748b" opacity="0.35" />

          {/* 7-Seater Modern Aerodynamic MPV Body */}
          <path
            d="M75 220 L85 140 C92 110 130 85 180 82 L380 82 C415 82 445 98 475 130 L520 178 C545 190 555 205 555 224 C550 240 528 244 495 244 L110 244 C85 244 75 235 75 220 Z"
            fill="url(#mpvBody)"
          />
          {/* Panoramic High Windows */}
          <path d="M125 145 L135 98 C145 92 185 92 195 92 L195 145 Z" fill="url(#mpvGlass)" />
          <path d="M205 92 L300 92 L300 145 L205 145 Z" fill="url(#mpvGlass)" />
          <path d="M310 92 L390 92 L390 145 L310 145 Z" fill="url(#mpvGlass)" />
          <path d="M400 92 C425 92 450 102 470 120 L498 145 L400 145 Z" fill="url(#mpvGlass)" />

          {/* Body lines */}
          <path d="M90 170 C190 162 380 160 535 178" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="235" y="165" width="22" height="4" rx="2" fill="#cbd5e1" />
          <rect x="335" y="165" width="22" height="4" rx="2" fill="#cbd5e1" />
          {/* Accent trim */}
          <path d="M160 238 L435 238" stroke="#7bc010" strokeWidth="4" strokeLinecap="round" />

          {/* Lights */}
          <path d="M525 185 L552 200 C550 212 536 215 518 208 Z" fill="#ffffff" stroke="#38bdf8" strokeWidth="2" />
          <path d="M78 170 L92 165 L88 205 L76 200 Z" fill="#ef4444" />

          {/* Wheels */}
          <circle cx="155" cy="244" r="46" fill="#0f172a" />
          <circle cx="155" cy="244" r="38" fill="#1e293b" />
          <circle cx="155" cy="244" r="26" fill="#475569" stroke="#94a3b8" strokeWidth="5" />
          <circle cx="155" cy="244" r="9" fill="#7bc010" />
          <line x1="155" y1="218" x2="155" y2="270" stroke="#f1f5f9" strokeWidth="3" />
          <line x1="129" y1="244" x2="181" y2="244" stroke="#f1f5f9" strokeWidth="3" />
          <line x1="137" y1="226" x2="173" y2="262" stroke="#f1f5f9" strokeWidth="3" />
          <line x1="137" y1="262" x2="173" y2="226" stroke="#f1f5f9" strokeWidth="3" />

          <circle cx="455" cy="244" r="46" fill="#0f172a" />
          <circle cx="455" cy="244" r="38" fill="#1e293b" />
          <circle cx="455" cy="244" r="26" fill="#475569" stroke="#94a3b8" strokeWidth="5" />
          <circle cx="455" cy="244" r="9" fill="#7bc010" />
          <line x1="455" y1="218" x2="455" y2="270" stroke="#f1f5f9" strokeWidth="3" />
          <line x1="429" y1="244" x2="481" y2="244" stroke="#f1f5f9" strokeWidth="3" />
          <line x1="437" y1="226" x2="473" y2="262" stroke="#f1f5f9" strokeWidth="3" />
          <line x1="437" y1="262" x2="473" y2="226" stroke="#f1f5f9" strokeWidth="3" />
        </svg>
      );

    case "8seater":
      return (
        <svg viewBox="0 0 600 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="vanBody" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="vanGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <ellipse cx="300" cy="275" rx="270" ry="22" fill="#cbd5e1" opacity="0.6" />
          <ellipse cx="300" cy="275" rx="225" ry="14" fill="#64748b" opacity="0.35" />

          {/* 8-Seater Executive Passenger Van (V-Class / Custom Style) */}
          <path
            d="M55 220 L60 120 C64 88 95 72 140 70 L400 70 C435 70 460 85 490 122 L535 178 C555 190 565 208 565 226 C560 242 535 246 500 246 L95 246 C70 246 55 235 55 220 Z"
            fill="url(#vanBody)"
          />
          {/* Privacy Tint Passenger Glass */}
          <path d="M100 135 L106 82 C115 78 175 78 185 78 L185 135 Z" fill="url(#vanGlass)" />
          <path d="M195 78 L290 78 L290 135 L195 135 Z" fill="url(#vanGlass)" />
          <path d="M300 78 L395 78 L395 135 L300 135 Z" fill="url(#vanGlass)" />
          <path d="M405 78 C430 78 455 90 475 112 L508 135 L405 135 Z" fill="url(#vanGlass)" />

          {/* Sliding door rail & accents */}
          <path d="M180 155 L380 155" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M75 168 C180 162 380 160 545 175" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <rect x="220" y="162" width="24" height="5" rx="2.5" fill="#cbd5e1" />
          <rect x="340" y="162" width="24" height="5" rx="2.5" fill="#cbd5e1" />
          {/* Green accent runner */}
          <path d="M145 240 L445 240" stroke="#7bc010" strokeWidth="4" strokeLinecap="round" />

          {/* Modern Headlight & Taillight */}
          <path d="M532 182 L560 198 C558 212 542 216 525 208 Z" fill="#ffffff" stroke="#38bdf8" strokeWidth="2.5" />
          <path d="M58 130 L72 125 L68 200 L56 195 Z" fill="#ef4444" />

          {/* Wheels */}
          <circle cx="145" cy="246" r="48" fill="#0f172a" />
          <circle cx="145" cy="246" r="40" fill="#1e293b" />
          <circle cx="145" cy="246" r="28" fill="#475569" stroke="#94a3b8" strokeWidth="5" />
          <circle cx="145" cy="246" r="9" fill="#7bc010" />
          <line x1="145" y1="218" x2="145" y2="274" stroke="#e2e8f0" strokeWidth="3" />
          <line x1="117" y1="246" x2="173" y2="246" stroke="#e2e8f0" strokeWidth="3" />
          <line x1="125" y1="226" x2="165" y2="266" stroke="#e2e8f0" strokeWidth="3" />
          <line x1="125" y1="266" x2="165" y2="226" stroke="#e2e8f0" strokeWidth="3" />

          <circle cx="465" cy="246" r="48" fill="#0f172a" />
          <circle cx="465" cy="246" r="40" fill="#1e293b" />
          <circle cx="465" cy="246" r="28" fill="#475569" stroke="#94a3b8" strokeWidth="5" />
          <circle cx="465" cy="246" r="9" fill="#7bc010" />
          <line x1="465" y1="218" x2="465" y2="274" stroke="#e2e8f0" strokeWidth="3" />
          <line x1="437" y1="246" x2="493" y2="246" stroke="#e2e8f0" strokeWidth="3" />
          <line x1="445" y1="226" x2="485" y2="266" stroke="#e2e8f0" strokeWidth="3" />
          <line x1="445" y1="266" x2="485" y2="226" stroke="#e2e8f0" strokeWidth="3" />
        </svg>
      );

    default:
      return null;
  }
}
