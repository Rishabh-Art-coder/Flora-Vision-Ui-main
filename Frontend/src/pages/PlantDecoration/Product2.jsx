import React from 'react';
import plantImage3 from '../.././assets/plant3.png';
import Button from '../../Components/Button/Button';

function Product2() {
  return (
    <>
      <div className="mt-20 sm:mt-28 md:mt-32 mx-4 sm:mx-6 mx-auto h-[400px]">
        {/* Added top padding on mobile (pt-24) to accommodate the floating asset safely */}
        <div className=" w-full h-full relative overflow-visible rounded-2xl sm:rounded-4xl md:rounded-[70px] border border-white/20 bg-transparent backdrop-blur-xl shadow-2xl px-6 py-10 pt-24 sm:p-8 md:p-10 lg:p-14 flex flex-col md:flex-row items-center justify-between  gap-8 md:gap-6">
          
          {/* Background Ambient Glow */}
          <div className="absolute right-0 md:right-10 top-0 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl -z-10"></div>
          
          {/* Content Block */}
          <div className="relative z-10 w-full font-25px  md:w-1/2 lg:max-w-[450px] text-white px-1 order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl  lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
              For Your Desks Decorations
            </h2>
            <p className="text-white/70 leading-relaxed mb-6 text-sm sm:text-base md:text-lg font-medium max-w-md">
              The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.
            </p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Rs. 399/-</h3>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
             
              <Button btName={"Explore"}/>
             <button className="w-10 h-10 sm:w-11 sm:h-11 md:w-[46px] md:h-[46px] rounded-lg sm:rounded-xl border border-white/40 bg-white/5 flex items-center justify-center text-lg md:text-xl hover:bg-white hover:text-black transition-all duration-300 active:scale-95 flex-shrink-0">
                <svg xmlns="w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Plant Image Container */}
          <div className="relative w-full md:w-1/2 h-[160px] sm:h-[220px] md:h-[360px] lg:h-[420px] flex items-center justify-center md:justify-end order-1 md:order-2 overflow-visible">
            <img
              src={plantImage3}
              alt="plant"
              className="absolute -top-[140px] sm:-top-[200px] md:-top-[160px] lg:-top-[200px] left-1/2 md:left-auto md:right-0 -translate-x-1/2 md:translate-x-0 w-[220px] sm:w-[300px] md:w-[420px] lg:w-[500px] max-w-none h-auto object-contain z-20 pointer-events-none"
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
