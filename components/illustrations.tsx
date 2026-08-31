// Hand-drawn SVG artwork shared by all three designs. Every illustration
// takes an ink/accent/soft palette so it inherits each design's colors.

export type Palette = {
  ink: string;
  accent: string;
  soft: string;
};

// Parent and child walking hand-in-hand beneath a tree — the hero scene.
export function FamilyScene({ ink, accent, soft }: Palette) {
  return (
    <svg
      viewBox="0 0 520 360"
      role="img"
      aria-label="A parent and child holding hands beneath a tree"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <circle cx="415" cy="72" r="38" fill={accent} opacity="0.85" />
      <ellipse cx="260" cy="330" rx="240" ry="18" fill={soft} />
      {/* tree */}
      <path
        d="M96 318 C 92 250, 88 210, 92 168"
        stroke={ink}
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M92 190 C 60 176, 48 150, 58 128"
        stroke={ink}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="96" cy="112" r="52" fill={soft} />
      <circle cx="52" cy="132" r="34" fill={soft} />
      <circle cx="142" cy="136" r="36" fill={soft} />
      {/* parent */}
      <circle cx="300" cy="132" r="26" fill={ink} />
      <path
        d="M300 158 C 268 168, 262 216, 268 258 L 292 258 L 288 318 L 304 318 L 308 258 L 330 258 C 336 216, 332 168, 300 158 Z"
        fill={ink}
      />
      <path
        d="M272 196 C 296 224, 324 240, 352 250"
        stroke={ink}
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
      />
      {/* child */}
      <circle cx="382" cy="222" r="18" fill={ink} />
      <path
        d="M382 240 C 362 248, 358 276, 362 300 L 376 300 L 374 318 L 390 318 L 388 300 L 402 300 C 406 276, 402 248, 382 240 Z"
        fill={ink}
      />
      <path
        d="M366 258 L 352 250"
        stroke={ink}
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      {/* joined hands highlight */}
      <circle cx="352" cy="250" r="8" fill={accent} />
    </svg>
  );
}

// Shield with a heart — safety.
export function ShieldHeart({ ink, accent }: Palette) {
  return (
    <svg viewBox="0 0 80 80" role="img" aria-label="Shield with heart" style={{ width: 64, height: 64 }}>
      <path
        d="M40 8 L68 18 C68 46 58 62 40 72 C22 62 12 46 12 18 Z"
        fill="none"
        stroke={ink}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M40 52 C 30 44, 26 38, 26 32 C 26 26, 31 23, 35 25 C 37 26, 39 28, 40 30 C 41 28, 43 26, 45 25 C 49 23, 54 26, 54 32 C 54 38, 50 44, 40 52 Z"
        fill={accent}
      />
    </svg>
  );
}

// Balanced scales — neutrality.
export function Scales({ ink, accent }: Palette) {
  return (
    <svg viewBox="0 0 80 80" role="img" aria-label="Balanced scales" style={{ width: 64, height: 64 }}>
      <line x1="40" y1="14" x2="40" y2="62" stroke={ink} strokeWidth="4" strokeLinecap="round" />
      <line x1="14" y1="24" x2="66" y2="24" stroke={ink} strokeWidth="4" strokeLinecap="round" />
      <circle cx="40" cy="12" r="5" fill={accent} />
      <path d="M6 44 A 12 12 0 0 0 30 44" fill="none" stroke={ink} strokeWidth="4" strokeLinecap="round" />
      <line x1="18" y1="24" x2="8" y2="42" stroke={ink} strokeWidth="3" />
      <line x1="18" y1="24" x2="28" y2="42" stroke={ink} strokeWidth="3" />
      <path d="M50 44 A 12 12 0 0 0 74 44" fill="none" stroke={ink} strokeWidth="4" strokeLinecap="round" />
      <line x1="62" y1="24" x2="52" y2="42" stroke={ink} strokeWidth="3" />
      <line x1="62" y1="24" x2="72" y2="42" stroke={ink} strokeWidth="3" />
      <line x1="28" y1="66" x2="52" y2="66" stroke={ink} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

// Envelope sealed with a ribbon — confidentiality.
export function SealedLetter({ ink, accent }: Palette) {
  return (
    <svg viewBox="0 0 80 80" role="img" aria-label="Sealed letter" style={{ width: 64, height: 64 }}>
      <rect x="12" y="22" width="56" height="40" rx="4" fill="none" stroke={ink} strokeWidth="4" />
      <path d="M12 26 L40 46 L68 26" fill="none" stroke={ink} strokeWidth="4" strokeLinejoin="round" />
      <circle cx="40" cy="46" r="7" fill={accent} />
    </svg>
  );
}

// A winding path with waypoints — the "how it works" journey.
export function JourneyPath({ ink, accent, soft }: Palette) {
  return (
    <svg
      viewBox="0 0 520 120"
      role="img"
      aria-label="A path with four waypoints"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <path
        d="M20 90 C 120 20, 180 130, 270 60 S 430 90, 500 40"
        fill="none"
        stroke={soft}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="1 18"
      />
      {[
        [20, 90],
        [175, 78],
        [330, 62],
        [500, 40],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="16" fill={i === 3 ? accent : ink} />
          <text
            x={x}
            y={y + 5}
            textAnchor="middle"
            fontSize="15"
            fontFamily="inherit"
            fill="#fff"
            fontWeight="700"
          >
            {i + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}

// Two hands cradling a heart — commitment.
export function CradledHeart({ ink, accent }: Palette) {
  return (
    <svg viewBox="0 0 120 100" role="img" aria-label="Hands cradling a heart" style={{ width: 96, height: 80 }}>
      <path
        d="M60 62 C 44 50, 38 41, 38 32 C 38 23, 46 18, 53 21 C 56 23, 58 26, 60 29 C 62 26, 64 23, 67 21 C 74 18, 82 23, 82 32 C 82 41, 76 50, 60 62 Z"
        fill={accent}
      />
      <path
        d="M18 66 C 30 78, 44 86, 60 86 C 76 86, 90 78, 102 66"
        fill="none"
        stroke={ink}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M18 66 C 14 60, 14 54, 20 52" fill="none" stroke={ink} strokeWidth="5" strokeLinecap="round" />
      <path d="M102 66 C 106 60, 106 54, 100 52" fill="none" stroke={ink} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

// Sun over rolling hills — areas we serve.
export function Region({ ink, accent, soft }: Palette) {
  return (
    <svg
      viewBox="0 0 520 160"
      role="img"
      aria-label="Sun over rolling hills"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <circle cx="430" cy="52" r="30" fill={accent} />
      <path d="M0 140 C 90 90, 180 110, 260 130 C 340 150, 430 100, 520 128 L 520 160 L 0 160 Z" fill={soft} />
      <path
        d="M0 152 C 110 116, 240 140, 340 146 C 410 150, 470 134, 520 144"
        fill="none"
        stroke={ink}
        strokeWidth="3"
        opacity="0.35"
      />
      {/* location pin */}
      <path
        d="M150 60 C 138 60, 130 69, 130 79 C 130 92, 150 112, 150 112 C 150 112, 170 92, 170 79 C 170 69, 162 60, 150 60 Z"
        fill={ink}
      />
      <circle cx="150" cy="79" r="7" fill="#fff" />
    </svg>
  );
}
