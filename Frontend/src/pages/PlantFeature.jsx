import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import plantImage from "../assets/plant1.png"
import Button from '../Components/Button/Button';
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
    <div className="flex bg-[#1b2b22] mx-auto  items-center justify-center w-full ">
      {/* Card Container */}
      <div className="relative w-full bg-[#1b2b22] text-[#e2e8f0] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border border-[#2e4236] p-6 sm:p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-6 md:gap-12 shadow-2xl  mx-auto  mr-10 ml-10">
        
        {/* Left Side: Image Presentation */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center min-h-48 sm:min-h-64 md:min-h-auto">
          {/* Decorative background glow */}
          <div className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-[#385e42] rounded-full blur-[80px] opacity-30 pointer-events-none"></div>
          
          {/* Plant Image */}
          <img 
            src={plantImage}
            alt="Dieffenbachia O2 Plant" 
            className="relative z-10 w-40 sm:w-56 md:w-64 lg:w-80 h-auto object-contain transform hover:scale-105 transition-transform duration-500 drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)]"
          />
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-2 sm:px-0">
          
          {/* Headline */}
          <h2 className="text-2xl  font-bold tracking-tight text-white leading-tight mb-4 sm:mb-6">
            We Have Small And Best O2 Plants <br className="hidden sm:inline" /> Collection's
          </h2>

          {/* Paragraph 1 */}
          <p className="text-xs sm:text-sm md:text-base text-white font-light leading-relaxed mb-3 sm:mb-5 opacity-90">
            Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
          </p>

          {/* Paragraph 2 */}
          <p className="text-xs sm:text-sm md:text-base text-white font-light leading-relaxed mb-6 sm:mb-8 opacity-90">
            Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
          </p>

          {/* Action Controls Row */}
          <div className="flex items-center justify-between flex-wrap gap-4 mt-auto pt-2">
            {/* Explore Button */}
           
            <Button btName = {"Explore"} />

            {/* Pagination Controls */}
            <div className="flex items-center gap-3 sm:gap-4 text-xs font-semibold tracking-widest text-gray-400 select-none">
              <button 
                onClick={handlePrev}
                className="hover:text-white transition-colors p-1" 
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} />
              </button>
              
              <span className="text-white text-xs sm:text-sm">
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
