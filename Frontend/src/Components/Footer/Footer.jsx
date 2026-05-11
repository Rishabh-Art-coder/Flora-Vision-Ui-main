import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1b2b22]  py-16 px-6 md:px-16  ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* Left Column: Brand & Socials */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            {/* Potted Plant Emoji Visual Anchor */}
            <span className="text-3xl" role="img" aria-label="potted plant">🪴</span>
            <span className="text-white text-2xl font-bold tracking-tight">FloraVision.</span>
          </div>
          
          <p className="text-gray-400 text-sm max-w-sm font-light leading-relaxed">
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
          </p>
          
          {/* Social Links matching image casing */}
          <div className="flex items-center gap-6 text-xs font-semibold tracking-wider text-gray-300 mt-4">
            <a href="#" className="hover:text-white transition-colors">FB</a>
            <a href="#" className="hover:text-white transition-colors">TW</a>
            <a href="#" className="hover:text-white transition-colors">LI</a>
          </div>
        </div>

        {/* Center Column: Quick Links */}
        <div className="flex flex-col md:pl-12">
          <h3 className="text-white font-bold text-base mb-6">Quick Link's</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li>
              <a href="#" className="underline decoration-gray-500 hover:text-white hover:decoration-white transition-colors">Home</a>
            </li>
            <li>
              <a href="#" className="underline decoration-gray-500 hover:text-white hover:decoration-white transition-colors">Type's Of plant's</a>
            </li>
            <li>
              <a href="#" className="underline decoration-gray-500 hover:text-white hover:decoration-white transition-colors">Contact</a>
            </li>
            <li>
              <a href="#" className="underline decoration-gray-500 hover:text-white hover:decoration-white transition-colors">Privacy</a>
            </li>
          </ul>
        </div>

        {/* Right Column: Newsletter & Copyright */}
        <div className="flex flex-col gap-8 md:items-end">
          <div className="w-full max-w-md">
            <h3 className="text-white font-bold text-base mb-6 md:text-left">For Every Update.</h3>
            
            {/* Newsletter Input Box Matching Image Design */}
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center w-full border border-gray-600 rounded-md p-1 bg-transparent focus-within:border-gray-400 transition-colors">
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="bg-transparent text-sm text-white pl-4 pr-2 py-2 w-full focus:outline-none placeholder-gray-500"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-black text-xs font-bold px-5 py-2.5 rounded-sm hover:bg-gray-200 active:scale-95 transition-all tracking-wider shrink-0 uppercase"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* Copyright line aligned under input row */}
          <p className="text-xs text-gray-500 font-light mt-auto md:text-right w-full max-w-md">
            FloraVision © all right reserve
          </p>
        </div>

      </div>
    </footer>
  );
}
