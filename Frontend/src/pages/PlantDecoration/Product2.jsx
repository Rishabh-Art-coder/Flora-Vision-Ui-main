import React from 'react';
import plantImage3 from '../.././assets/plant3.png';

function Product2() {
  return (
    <>
      <div className="mt-12 md:mt-20 mx-4 sm:mx-6 md:mx-9 max-w-7xl mx-auto">
        <div className="relative overflow-visible rounded-2xl sm:rounded-4xl md:rounded-[70px] border border-white/20 bg-transparent backdrop-blur-xl shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between min-h-fit md:min-h-[300px] gap-6 md:gap-0">
          <div className="absolute right-0 md:right-20 top-0 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl -z-10"></div>
          <div className="relative z-10 w-full md:max-w-[420px] text-white px-2 sm:px-4 md:px-0 order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">For Your Desks Decorations</h2>
            <p className="text-white/70 leading-relaxed mb-6 text-sm sm:text-base md:text-lg">The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.</p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Rs. 399/-</h3>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition active:scale-95 text-sm sm:text-base">Explore</button>
              <button className="h-11 sm:h-12 w-11 sm:w-12 rounded-lg sm:rounded-xl border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition flex items-center justify-center text-lg flex-shrink-0">🔒</button>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 h-[280px] sm:h-[340px] md:h-[420px] flex items-center justify-center order-1 md:order-2 overflow-visible">
            <img
              src={plantImage3}
              alt="plant"
              className="absolute -top-24 sm:-top-36 md:-top-[220px] left-1/2 md:left-auto md:right-0 -translate-x-1/2 md:translate-x-0 w-[220px] sm:w-[300px] md:w-[420px] lg:w-[520px] max-w-full h-auto object-contain z-20 pointer-events-none"
              style={{
                filter: 'drop-shadow(0px 27px 80px rgba(0,0,0,0.35))',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product2;