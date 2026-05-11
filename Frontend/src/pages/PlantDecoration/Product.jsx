import React from 'react';
import plantImage1 from '../../assets/plant2.png';
import Subtitles from '../../Components/Subtitles/Subtitiles';

export default function Description() {
  return (
    <>
      <Subtitles text="Our Trendy Plants" />
      <div className="flex justify-center mt-12 md:mt-20 overflow-visible w-full px-4 sm:px-6 mx-auto  h-[350px]">
        <div className="w-full relative rounded-2xl sm:rounded-4xl md:rounded-[60px] border border-white/20 bg-white/5 backdrop-blur-[40px] flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-10 lg:px-14 pt-20 pb-10 sm:pt-24 sm:pb-12 md:py-16 overflow-visible gap-6 md:gap-0">
          
          {/* Image Container Section */}
          <div className="relative w-full md:w-1/2 h-[180px] sm:h-[240px] md:h-[380px] lg:h-[44px] overflow-visible flex items-center justify-center md:justify-start">
            <img
              src={plantImage1}
              alt="plant"
              className="absolute -top-[300px]  left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-[240px] sm:w-[320px] md:w-[420px] lg:w-[520px] max-w-none h-auto object-contain z-10 pointer-events-none"
              style={{
                filter: 'drop-shadow(0px 27px 80px rgba(0,0,0,0.35))',
              }}
            />
          </div>

          {/* Text & Controls Content Section */}
          <div className="w-full md:w-1/2 text-white relative z-30 px-2 sm:px-4 md:px-0 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
              For Your Desks Decorations
            </h2>
            <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed font-medium text-white/80 max-w-md md:max-w-[420px]">
              I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
            </p>
            <h3 className="mt-5 md:mt-7 text-2xl sm:text-3xl md:text-4xl font-semibold">Rs. 599/-</h3>
            
            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 md:mt-7">
              <button className="px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl md:rounded-[12px] border border-white/40 bg-white/5 backdrop-blur-md text-sm sm:text-base md:text-lg text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95">
                Explore
              </button>
              <button className="w-10 h-10 sm:w-11 sm:h-11 md:w-[46px] md:h-[46px] rounded-lg sm:rounded-xl border border-white/40 bg-white/5 flex items-center justify-center text-lg md:text-xl hover:bg-white hover:text-black transition-all duration-300 active:scale-95 flex-shrink-0">
                <svg xmlns="w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
