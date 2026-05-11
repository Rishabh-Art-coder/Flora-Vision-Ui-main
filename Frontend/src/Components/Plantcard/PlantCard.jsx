export default function PlantCard() {
  return (<>
    <div class="flex justify-center -mt-20 mx-20 overflow-visible">

      {/* <!-- Main Card --> */}
      <div class="
    relative
    rounded-[60px]
    border border-white/20
    bg-white/5
    backdrop-blur-[40px]
    flex items-center
    px-14
    w-[80%]
    h-[340px]
    mx-10
    overflow-visible
    ">

        {/* <!-- Left Plant --> */}
        <div class="relative w-1/2 h-full overflow-visible">

          <img src="/b48312dbddc890f7f35ef3964ae1e7900b89782c.png" alt="plant" class="
        absolute
        -top-[400px] 
        -left-20
        w-[760px]
        h-[980px]
        object-contain
        z-20
        pointer-events-none
        " style="
          filter: drop-shadow(0px 27px 80px rgba(0,0,0,0.35));
        " />

        </div>

        {/* <!-- Right Content --> */}
        <div class="w-1/2 text-white relative z-30">

          {/* <!-- Heading --> */}
          <h2 class="text-[38px] font-semibold leading-[100%] tracking-[0%] font-[Inter]">
            For Your Desks Decorations
          </h2>

          {/* <!-- Description --> */}
          <p class="
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
          <h3 class="mt-7 text-[28px] font-semibold">
            Rs. 599/-
          </h3>

          {/* <!-- Buttons --> */}  
          <div class="flex items-center gap-4 mt-7">

            {/* <!-- Explore --> */}
            <button class="
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
            <button class="
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