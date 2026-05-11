import React from 'react';
import plantImage from "../.././assets/plant1.png";

function HeroBanner() {
  return (
    <main class="flex flex-col justify-between  relative   md:mx-[50px] ">
      <section class="w-full flex items-center  md:px-10 pt-10">

        {/* <!-- Fixed Size Box --> */}
        <div class="w-[802px] h-[280px] ">

          {/* <!-- Heading --> */}
          <h2 class="text-white text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold tracking-tight">
            Earth’s Exhale
          </h2>

          {/* <!-- Paragraph --> */}
          <p class="text-white/60 text-[14px] md:text-[17px] leading-[22px] md:leading-[30px] mt-3 max-w-[540px]">
            “Earth Exhale” symbolizes the purity and vitality of the Earth’s natural
            environment and its essential role in sustaining life.
          </p>

          {/* <!-- Buttons --> */}
          <div class="flex items-center gap-5 mt-7">

            <button class="px-8 py-3 border border-white rounded-xl text-white text-[16px] f">
              Buy Now
            </button>

            <button class="flex items-center gap-3 text-white">
              <span class="w-12 h-12 border border-white rounded-full flex items-center justify-center text-sm">
                ▶
              </span>

              <span class="text-[15px] md:text-[16px]">
                Live Demo...
              </span>
            </button>

          </div>

        </div>


        {/* <!-- Right Setion --> */}
        {/* <!-- Main Card --> */}
        <div class=" w-[320px] h-[430px] absolute top-0 right-0 
    rounded-[40px]
    border border-white/10
    bg-white/5 backdrop-blur-[20px]
    p-6 pt-32 text-white  mt-7">

          <div class="absolute -top-12 left-1/2 -translate-x-1/2 w-[240px] h-[240px]">
            <img src={plantImage} alt="plant" class="w-full h-full object-contain" />


          </div>

          {/* <!-- Content Area --> */}
          <div class="mt-12 text-white">
            {/* <!-- Small Text --> */}
            <p class="text-[14px] text-white font-light">
              Indoor Plant
            </p>

            {/* <!-- Title + Arrow --> */}
            <div class="flex items-center justify-between mt-1 text-white">
              <h3 class="text-[30px] font-light leading-[36px] tracking-wide text-white">
                Aglaonema plant
              </h3>
              <span class="text-[28px] text-white font-extralight">
                ›
              </span>
            </div>

            {/* <!-- Buy Button --> */}
            <button class="mt-6 w-[120px] h-[40px]
            border border-white/30
            rounded-xl
            text-white text-[16px]
            font-light hover:bg-white
            hover:text-black transition-all duration-300">
              Buy Now
            </button>
          </div>

          {/* <!-- Bottom Dots --> */}
          <div class="absolute bottom-6 left-1/2 -translate-x-1/2
        flex items-center gap-1.5">
            <span class="w-5 h-[3px] bg-white rounded-full"></span>
            <span class="w-1.5 h-1.5 bg-white/30 rounded-full"></span>
            <span class="w-1.5 h-1.5 bg-white/30 rounded-full"></span>
          </div>
        </div>


      </section>

      <section class="flex justify-start px-6 py-10 mt-10">

        {/* <!-- Review Card --> */}
        <div class="w-[260px] h-[150px]
    rounded-[28px]
    border border-white/10
    bg-white/5
    backdrop-blur-[20px]
    p-4 text-white">

          {/* <!-- Top --> */}
          <div class="flex items-center gap-3">

            {/* <!-- User Image --> */}
            <img src="https://i.pravatar.cc/60" alt="user" class="w-[42px] h-[42px]
        rounded-full object-cover
        border border-white/20" />

            {/* <!-- Name + Stars --> */}
            <div>

              <h4 class="text-[16px] font-medium leading-none text-white">
                Ronnie Hamill
              </h4>

              <div class="flex items-center gap-1
          mt-2 text-yellow-400 text-[10px]">

                ★ ★ ★ ★ ★

              </div>

            </div>

          </div>

          {/* <!-- Review Text --> */}
          <p class="mt-4 text-[13px]
      leading-[18px] text-white">

            I can’t express how thrilled I am with my
            new natural plant! They bring such a
            fresh and vibrant energy to my home.

          </p>

        </div>

      </section>

    </main>
  );
}

export default HeroBanner;