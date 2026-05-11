export default function TestimonialCard({img  ,name , text , length}) {
  return (
    <div className="min-h-screen bg-[#0f1a12] flex items-center justify-center p-6">
      <div className="relative  w-[360px] rounded-[50px] bg-[#222a22] p-6 shadow-2xl overflow-hidden border border-[#2e3a2e]">
        {/* Glow border accents */}

        {/* Floating avatars */}
       

        <div className="absolute top-10 left-12">
          <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-br from-yellow-400 to-lime-400 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
              alt="avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="pt-14 pl-16">
          <h2 className="text-[28px] font-semibold text-[#f5f3e8] leading-none tracking-tight">
            Lula Rolfson
          </h2>

          <div className="flex gap-1 mt-2 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm">
                ★
              </span>
            ))}
          </div>

          <p className="text-[#d5d2c7] text-[15px] leading-6 max-w-[250px] font-light">
            Each one has its own unique charm and personality, and they've
            already started brightening up my space. The vibrant colors and
            fresh greenery make such a huge difference in my home.
          </p>
        </div>

        {/* Decorative radial glow */}
        <div className="absolute -bottom-20 -right-10 w-40 h-40 bg-lime-400/10 blur-3xl rounded-full" />
      </div>
    </div>
  );
}
