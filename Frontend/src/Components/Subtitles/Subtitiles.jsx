export default function Subtitles({ text }) {
  return (
    <div className="flex items-center justify-center p-6 sm:p-8 md:p-12">

    <div className="relative px-6 sm:px-8 py-3 sm:py-4 text-[#e8d5a3] font-serif text-base sm:text-lg md:text-xl font-semibold tracking-widest bg-transparent">

      {/* <!-- Top Right --> */}
      <span className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 border-t-4 border-r-4 border-[#e8d5a3] rounded-tr-lg"></span>

      {/* <!-- Bottom Left --> */}
      <span className="absolute bottom-0 left-0 w-8 h-8 sm:w-10 sm:h-10 border-b-4 border-l-4 border-[#e8d5a3] rounded-bl-lg"></span>

      <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        {text}
      </h2>

    </div>
  </div>
  );
}