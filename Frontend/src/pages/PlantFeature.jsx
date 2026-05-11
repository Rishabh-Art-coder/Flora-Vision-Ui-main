import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import plantImage from "../assets/plant1.png"
export default function PlantFeatureCard() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
  };

  return (
    <div className="flex items-center justify-center w-full p-4">
      {/* Card Container */}
      <div className="relative w-full max-w-4xl bg-[#1b2b22] text-[#e2e8f0] rounded-[2.5rem] border border-[#2e4236] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-2xl">
        
        {/* Left Side: Image Presentation */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          {/* Decorative background glow */}
          <div className="absolute w-64 h-64 bg-[#385e42] rounded-full blur-[80px] opacity-30 pointer-events-none"></div>
          
          {/* Plant Image */}
          <img 
            src={plantImage}
            alt="Dieffenbachia O2 Plant" 
            className="relative z-10 w-64 md:w-80 h-auto object-contain transform hover:scale-105 transition-transform duration-500 drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)]"
          />
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          
          {/* Headline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-6">
            We Have Small And Best <br className="hidden sm:inline" />O2 Plants Collection's
          </h2>

          {/* Paragraph 1 */}
          <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed mb-5 opacity-90">
            Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
          </p>

          {/* Paragraph 2 */}
          <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed mb-8 opacity-90">
            Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
          </p>

          {/* Action Controls Row */}
          <div className="flex items-center justify-between mt-auto pt-2">
            {/* Explore Button */}
            <button className="px-6 py-2.5 border border-gray-400 hover:border-white text-sm font-medium tracking-wide rounded-full text-white transition-all duration-300 hover:bg-white/5 active:scale-95">
              Explore
            </button>

            {/* Pagination Controls */}
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-gray-400 select-none">
              <button 
                onClick={handlePrev}
                className="hover:text-white transition-colors p-1" 
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} />
              </button>
              
              <span className="text-white">
                0{currentSlide}
                <span className="text-gray-500 font-normal">/0{totalSlides}</span>
              </span>
              
              <button 
                onClick={handleNext}
                className="hover:text-white transition-colors p-1" 
                aria-label="Next slide"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
