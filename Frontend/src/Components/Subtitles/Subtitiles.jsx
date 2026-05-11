export default function Subtitles({ text }) {
  return (
    <div class="flex items-center justify-center p-12">

    <div class="relative px-8 py-4 text-[#e8d5a3] font-serif text-lg font-semibold tracking-widest bg-transparent">

      {/* <!-- Top Right --> */}
      <span class="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-[#e8d5a3] rounded-tr-lg"></span>

      {/* <!-- Bottom Left --> */}
      <span class="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-[#e8d5a3] rounded-bl-lg"></span>

      <h2 class="text-white text-[24px]">
        {text}
      </h2>

    </div>
  </div>
  );
}