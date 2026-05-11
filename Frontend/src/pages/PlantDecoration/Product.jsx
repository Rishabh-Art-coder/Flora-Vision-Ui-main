import React from 'react';
import plantImage1 from '../../assets/plant2.png';
import Subtitles from '../../Components/Subtitles/Subtitiles';

export default function Description() {
  return (
    <>
      <Subtitles text="Our Trendy Plants" />
      <div className="flex justify-center mt-12 md:mt-20 overflow-visible w-full px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="w-full relative rounded-2xl sm:rounded-4xl md:rounded-[60px] border border-white/20 bg-white/5 backdrop-blur-[40px] flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-10 lg:px-14 py-10 sm:py-12 md:py-0 overflow-visible gap-6 md:gap-0">
          <div className="relative w-full md:w-1/2 h-[280px] sm:h-[340px] md:h-[420px] overflow-visible flex items-center justify-center">
            <img
              src={plantImage1}
              alt="plant"
              className="absolute -top-16 sm:-top-24 md:-top-[120px] left-1/2 md:left-auto md:-left-10 -translate-x-1/2 md:translate-x-0 w-[240px] sm:w-[320px] md:w-[420px] lg:w-[520px] max-w-full h-auto object-contain z-10 pointer-events-none"
              style={{
                filter: 'drop-shadow(0px 27px 80px rgba(0,0,0,0.35))',
              }}
            />
          </div>

          <div className="w-full md:w-1/2 text-white relative z-30 px-2 sm:px-4 md:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
              For Your Desks Decorations
            </h2>
            <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed font-medium text-white/80 max-w-md md:max-w-[420px]">
              I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
            </p>
            <h3 className="mt-5 md:mt-7 text-2xl sm:text-3xl md:text-4xl font-semibold">Rs. 599/-</h3>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 md:mt-7">
              <button className="px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl md:rounded-[12px] border border-white/40 bg-white/5 backdrop-blur-md text-sm sm:text-base md:text-lg text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95">
                Explore
              </button>
              <button className="w-10 h-10 sm:w-11 sm:h-11 md:w-[46px] md:h-[46px] rounded-lg sm:rounded-xl border border-white/40 bg-white/5 flex items-center justify-center text-lg md:text-xl hover:bg-white hover:text-black transition-all duration-300 active:scale-95 flex-shrink-0">
                👜
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}