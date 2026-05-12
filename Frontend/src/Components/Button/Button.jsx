function Button({ btName }) {
  return (
    <button class=" w-[120px] h-[44px]
                 border border-white/30
                 rounded-xl
                 text-white text-[16px]
                 font-light hover:bg-white
                 hover:text-black transition-all duration-300">
      {btName}
    </button>
  );
}

export default Button