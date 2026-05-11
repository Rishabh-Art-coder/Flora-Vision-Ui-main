import React from 'react';
import plantImage1 from '../../assets/plant2.png'; // Ensure you have the correct path to your plant image1
import Subtitles from '../../Components/Subtitles/Subtitiles';

export default function Description() {
  return (<>

   <Subtitles text="Our Trendy Plants" />
    <div className="flex justify-center mt-20 overflow-visible w-[95%]  mx-auto">

      {/* <!-- Main Card --> */}
      <div className=" w-full
    relative
    rounded-[60px]
    border border-white/20
    bg-white/5
    backdrop-blur-[40px]
    flex items-center
    px-14
    
    h-[340px]
  
    overflow-visible
    ">

        {/* <!-- Left Plant --> */}
        <div className="relative w-1/2 h-full overflow-visible">

          <img src={plantImage1} alt="plant" className="
        absolute
        -top-[150px] 
        -left-20
        w-[700px]
        h-[500px]
        object-contain
        z-10
        pointer-events-none
        "
            style={{
              filter: "drop-shadow(0px 27px 80px rgba(0,0,0,0.35))"
            }}
          />

        </div>

        {/* <!-- Right Content --> */}
        <div className="w-1/2 text-white relative z-30">

          {/* <!-- Heading --> */}
          <h2 className="text-[38px] font-semibold leading-[100%] tracking-[0%] font-[Inter]">
            For Your Desks Decorations
          </h2>

          {/* <!-- Description --> */}
          <p className="
        mt-5
        text-[17px]
        leading-[160%]
        tracking-[0%]
        font-medium
        font-[Inter]
        text-white/80
        max-w-[420px]
        ">
            I recently added a beautiful desk decoration
            plant to my workspace, and it has made
            such a positive difference!
          </p>

          {/* <!-- Price --> */}
          <h3 className="mt-7 text-[28px] font-semibold">
            Rs. 599/-
          </h3>

          {/* <!-- Buttons --> */}
          <div className="flex items-center gap-4 mt-7">

            {/* <!-- Explore --> */}
            <button className="
          w-[150px]
          h-[46px]
          rounded-[12px]
          border border-white/40
          bg-white/5
          backdrop-blur-md
          text-[18px]
          text-white
          hover:bg-white
          hover:text-black
          transition-all
          duration-300
          ">
              Explore
            </button>

            {/* <!-- Bag -->   */}
            <button className="
          w-[46px]
          h-[46px]
          rounded-[12px]
          border border-white/40
          bg-white/5
          flex items-center
          justify-center
          text-[20px]
          hover:bg-white
          hover:text-black
          transition-all
          duration-300
          ">
              👜
            </button>

          </div>

        </div>

      </div>

    </div></>);
}