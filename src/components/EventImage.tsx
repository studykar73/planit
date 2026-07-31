export function EventImage() {
  return (
    <div className="relative h-[420px] w-[420px] lg:h-[500px] lg:w-[500px]">
      {/* Dashed orbit ring */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 500 500"
        fill="none"
      >
        <ellipse
          cx="250"
          cy="250"
          rx="200"
          ry="180"
          stroke="#c4b5fd"
          strokeWidth="1.5"
          strokeDasharray="8 6"
          opacity="0.5"
        />
      </svg>

      {/* Main stage setup illustration */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 500 500"
        fill="none"
      >
        {/* Stage platform - curved steps */}
        <ellipse cx="250" cy="380" rx="160" ry="30" fill="#e8e0f7" />
        <ellipse cx="250" cy="370" rx="145" ry="25" fill="#f0ebff" />
        <ellipse cx="250" cy="360" rx="130" ry="20" fill="#f8f5ff" />

        {/* Purple carpet / aisle */}
        <rect x="230" y="380" width="40" height="80" rx="4" fill="#6C3CE1" opacity="0.15" />
        <rect x="235" y="385" width="30" height="70" rx="3" fill="#6C3CE1" opacity="0.1" />

        {/* Circular arch frame */}
        <circle cx="250" cy="240" r="110" stroke="#6C3CE1" strokeWidth="3" opacity="0.3" />

        {/* Draped fabric on arch - left */}
        <path
          d="M160 200 Q180 180 200 190 Q220 200 230 230 Q235 250 240 280"
          stroke="#c4b5fd"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />

        {/* Draped fabric on arch - right */}
        <path
          d="M340 200 Q320 180 300 190 Q280 200 270 230 Q265 250 260 280"
          stroke="#c4b5fd"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />

        {/* Top drape */}
        <path
          d="M200 160 Q250 140 300 160"
          stroke="#c4b5fd"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />

        {/* Flowers - left cluster */}
        <circle cx="170" cy="210" r="12" fill="#d8b4fe" opacity="0.8" />
        <circle cx="185" cy="200" r="10" fill="#c084fc" opacity="0.7" />
        <circle cx="160" cy="220" r="9" fill="#e9d5ff" opacity="0.9" />
        <circle cx="178" cy="225" r="8" fill="#a855f7" opacity="0.5" />

        {/* Flowers - right cluster */}
        <circle cx="330" cy="210" r="12" fill="#d8b4fe" opacity="0.8" />
        <circle cx="315" cy="200" r="10" fill="#c084fc" opacity="0.7" />
        <circle cx="340" cy="220" r="9" fill="#e9d5ff" opacity="0.9" />
        <circle cx="322" cy="225" r="8" fill="#a855f7" opacity="0.5" />

        {/* Flowers - top center */}
        <circle cx="240" cy="155" r="8" fill="#d8b4fe" opacity="0.7" />
        <circle cx="255" cy="150" r="10" fill="#c084fc" opacity="0.6" />
        <circle cx="265" cy="158" r="7" fill="#e9d5ff" opacity="0.8" />

        {/* White sofa */}
        <rect x="205" y="300" width="90" height="45" rx="10" fill="#f0ebff" stroke="#e8e0f7" strokeWidth="1" />
        <rect x="210" y="295" width="80" height="15" rx="6" fill="#f8f5ff" stroke="#e8e0f7" strokeWidth="1" />
        {/* Sofa arms */}
        <rect x="195" y="305" width="15" height="35" rx="6" fill="#f0ebff" stroke="#e8e0f7" strokeWidth="1" />
        <rect x="290" y="305" width="15" height="35" rx="6" fill="#f0ebff" stroke="#e8e0f7" strokeWidth="1" />
        {/* Sofa legs */}
        <rect x="210" y="345" width="4" height="10" rx="2" fill="#c4b5fd" />
        <rect x="286" y="345" width="4" height="10" rx="2" fill="#c4b5fd" />

        {/* Table left */}
        <ellipse cx="170" cy="370" rx="30" ry="10" fill="#f0ebff" stroke="#e8e0f7" strokeWidth="1" />
        <rect x="165" y="350" width="10" height="20" rx="2" fill="#e8e0f7" />

        {/* Table right - small */}
        <ellipse cx="330" cy="372" rx="22" ry="8" fill="#f0ebff" stroke="#e8e0f7" strokeWidth="1" />

        {/* Speaker left */}
        <rect x="155" y="310" width="20" height="35" rx="4" fill="#4a4a68" opacity="0.3" />
        <circle cx="165" cy="325" r="5" fill="#6C3CE1" opacity="0.4" />

        {/* Speaker right - larger */}
        <rect x="345" y="320" width="28" height="45" rx="5" fill="#4a4a68" opacity="0.3" />
        <circle cx="359" cy="338" r="7" fill="#6C3CE1" opacity="0.4" />
        <circle cx="359" cy="355" r="5" fill="#6C3CE1" opacity="0.3" />

        {/* Spotlight / light */}
        <polygon points="380,370 395,340 410,370" fill="#6C3CE1" opacity="0.2" />
        <circle cx="395" cy="345" r="6" fill="#6C3CE1" opacity="0.3" />
      </svg>
    </div>
  );
}
