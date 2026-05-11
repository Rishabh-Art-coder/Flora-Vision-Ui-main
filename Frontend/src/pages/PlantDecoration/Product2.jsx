import React from 'react';
import plantImage3 from '../.././assets/plant3.png';

function Product2() {
  return (
    <>
      <div className="mt-20 mx-9">
        <div
          className="relative overflow-visible rounded-[70px] border border-white/20 bg-transparent backdrop-blur-xl shadow-2xl p-10 flex items-center justify-between min-h-[300px]">

          {/* <!-- Glow Effect --> */}
          <div className="absolute right-20 top-0 h-[300px] w-[300px] rounded-full bg-emerald-400/20 blur-3xl"></div>

          {/* <!-- Content --> */}
          <div className="relative z-10 max-w-[420px] text-white">
            <h2 className="text-3xl font-bold mb-4">
              For Your Desks Decorations
            </h2>

            <p className="text-white/70 leading-relaxed mb-6">
              The greenery adds a touch of nature and serenity to my desk,
              making it feel more inviting and calming.
            </p>

            <h3 className="text-5xl font-bold mb-6">
              Rs. 399/-
            </h3>

            <div className="flex gap-4">
              <button
                className="px-6 py-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
                Explore
              </button>

              <button
                className="h-12 w-12 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition flex items-center justify-center">
                🔒
              </button>
            </div>
          </div>

          {/* <!-- Plant Image --> */}
          <div className="relative w-1/2 h-full flex items-center justify-center">

            <img src={plantImage3} alt="plant" className="
          absolute
          -top-[300px]
          right-0
          w-[620px]
          h-auto
          object-contain
          z-20
          pointer-events-none
        "
              style={{
                filter: "drop-shadow(0px 27px 80px rgba(0,0,0,0.35))"
              }}
            />

          </div>
        </div>
      </div>
    </>
  );
}

export default Product2;