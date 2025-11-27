import { FaFemale, FaMale } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="w-full bg-[#fffaf4] py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-8 items-center">
        
        {/* Left Text */}
        <div>
          <h2 className="text-xl font-semibold text-[#00473E] tracking-wider">
            SIGN UP TO BE A GARNET LANEE INSIDER
          </h2>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            Get Promotions, inspirations and the latest news about brands 
            and jewellery items directly in your inbox
          </p>
        </div>

        {/* Right Form */}
        <form className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 border border-gray-300 rounded-md px-4 py-3 text-sm outline-none focus:border-[#00473E]"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#00473E] to-[#007960] text-white px-6 py-3 rounded-md font-medium text-sm hover:opacity-90"
            >
              SUBMIT
            </button>
          </div>

          {/* Gender Selection */}
          <div className="flex items-center gap-6 text-gray-600 text-sm">
            
            <label className="flex items-center gap-2 cursor-pointer">
              <FaFemale className="text-[#007960]" size={18} />
              <input type="radio" name="gender" className="accent-[#007960]" />
              <span>Female</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <FaMale className="text-[#007960]" size={18} />
              <input type="radio" name="gender" className="accent-[#007960]" />
              <span>Male</span>
            </label>

          </div>
        </form>

      </div>
    </section>
  );
};

export default Newsletter;
