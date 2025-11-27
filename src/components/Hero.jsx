const Hero = () => {
  return (
    <section className="pt-20 w-full bg-[#001f29] text-white">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center gap-6">

        {/* Left Content */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h4 className="text-sm tracking-wide uppercase">Unlock Prosperity This</h4>
          <h1 className="text-3xl md:text-5xl font-bold text-[#ddc076]">
            Akshaya Tritiya
          </h1>
          <p className="text-sm md:text-base">
            Up To <span className="font-bold">100% OFF</span> On Making Charges
          </p>
          <button className="mt-4 px-6 py-3 bg-[#ddc076] text-black rounded-lg font-semibold">
            Shop Now
          </button>
        </div>

        {/* Right Product Image */}
        <div className="flex-1 flex justify-center">
          <img src="/butterfly.png" alt="Jewellery" className="w-64 md:w-96" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
