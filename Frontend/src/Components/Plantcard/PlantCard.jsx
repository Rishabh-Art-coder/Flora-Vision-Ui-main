import React from 'react';
import plantImage from "../../assets/plant1.png"; 
import "./plant.css";

export default function PlantCard({title , subtitle, price, image}) {
  return (
    <div className="plant-card-container">
      {/* Background shape layer */}
      <div className="plant-card-bg"></div>

      {/* Content Layer */}
      <div className="plant-card-content">
        
        <div className="absolute -top-23 left-30 -translate-x-1/2 w-[180px] h-[180px] z-20 pointer-events-none">
          <img 
            src={image} 
            alt={title} 
            className=" object-contain font-size-2xl" 
          />
        </div>

        {/* 2. Text Details Area */}
        <div className="mt-10 text-left">
          <h3 className="font-medium text-2xl tracking-wide text-stone-200 mb-2">
            {title}
          </h3>
          <p className="text-stone-400 text-[20px] leading-relaxed font-normal mb-6">
            {subtitle}
          </p>
        </div>

        {/* 3. Price and Bag Button Layout */}
        <div className="flex justify-between items-center mt-auto">
          <span className="text-white text-lg font-medium">Rs.{price} /-</span>
          <button className="w-10 h-10 border border-stone-600 rounded-xl flex items-center justify-center hover:bg-stone-800 transition-colors  mr-5">
            {/* Bag Icon */}
            <svg xmlns="w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-stone-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}
