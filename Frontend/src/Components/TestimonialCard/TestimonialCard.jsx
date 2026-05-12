export default function TestimonialCard({ img, name, text, length = 5 }) {
  return (
    <div className="w-full flex items-center justify-center p-4 relative">
      {/* SVG ClipPath Definition */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <clipPath id="responsive-card-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0 0.12 Q 0.5 0.02 1 0.12 L 1 0.88 C 1 0.95 0.95 1 0.88 1 L 0.12 1 C 0.05 1 0 0.95 0 0.88 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Outer Border Wrapper */}
      <div 
        className="relative w-full max-w-[340px] h-[300px] p-[1px]  shadow-2xl overflow-visible"
        style={{ clipPath: "url(#responsive-card-clip)" }}
      >
        {/* Main Card Body with Backdrop Blur */}
        {/* bg-[#1e251c]/70 से बैकग्राउंड थोड़ा पारदर्शी होगा और backdrop-blur-md से पीछे की चीज़ें ब्लर होंगी */}
        <div 
          className="w-full h-full flex flex-col bg-[#22281D] px-6 pt-10 pb-6 overflow-visible"
          style={{ clipPath: "url(#responsive-card-clip)" }}
        >
          {/* Floating Background Avatar Accent */}

          {/* Avatar, Name and Rating Header */}
          <div className="flex items-center gap-4 mt-2 flex-shrink-0">
            <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-br from-yellow-400/30 to-transparent shadow-lg flex-shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#1e251c]">
                <img
                  src={img || "unsplash.com"}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col min-w-0">
              <h2 className="text-lg font-medium text-[#f5f3e8] tracking-wide truncate">
                {name || "Lula Rolfson"}
              </h2>

              <div className="flex gap-0.5 mt-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-xs ${i < length ? "text-yellow-400" : "text-zinc-600"}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Text Area */}
          <div className="mt-4 flex-grow overflow-y-auto pr-1 text-area-scroll">
            <p className="text-[#a4b3a2] text-[14px] leading-relaxed font-normal break-words">
              {text || "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home."}
            </p>
          </div>

          {/* Decorative Internal Radial Glow */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-lime-500/5 blur-2xl rounded-full pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
