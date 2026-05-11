import React from 'react';
import plantImage from "../../assets/plant1.png"; 
import "./plant.css";

export default function PlantCard({title , subtitle, price, image}) {
  return (
    <div className="plant-card-container">
      {/* Hidden SVG Definition for Responsive Clipping */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <clipPath id="responsive-card-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.154 0 Q 0.5 0.097 0.846 0 Q 1 0 1 0.111 L 1 0.889 Q 1 1 0.846 1 L 0.154 1 Q 0 1 0 0.889 L 0 0.111 Q 0 0 0.154 0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Background shape layer */}
      <div className="plant-card-bg"></div>

      {/* Content Layer */}
      <div className="plant-card-content">
        
        <div className="absolute -top-20 sm:-top-24 left-1/2 -translate-x-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 z-20 pointer-events-none">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-contain" 
          />
        </div>

        {/* 2. Text Details Area */}
        <div className="mt-6 sm:mt-8 text-left">
          <h3 className="font-medium text-lg sm:text-xl md:text-2xl tracking-wide text-stone-200 mb-2">
            {title}
          </h3>
          <p className="text-stone-400 text-base sm:text-lg md:text-xl leading-relaxed font-normal mb-4 sm:mb-6">
            {subtitle}
          </p>
        </div>

        {/* 3. Price and Bag Button Layout */}
        <div className="flex justify-between items-center mt-auto gap-3 sm:gap-4">
          <span className="text-white text-base sm:text-lg font-medium">Rs.{price} /-</span>
          <button className="w-10 h-10 sm:w-12 sm:h-12 border border-stone-600 rounded-xl flex items-center justify-center hover:bg-stone-800 transition-colors flex-shrink-0">
            {/* Bag Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-stone-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}
