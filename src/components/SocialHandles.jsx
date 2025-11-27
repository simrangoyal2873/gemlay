import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialHandles = () => {
  return (
    <section className="py-10 text-center">
      {/* Heading */}
      <h2 className="text-gray-700 font-semibold tracking-wide text-sm md:text-base">
        WE WOULD LOVE TO MEET YOU ON OUR HANDLES
      </h2>

      {/* Icons */}
      <div className="flex items-center justify-center gap-6 mt-4">
        {/* Facebook */}
        <a href="https://facebook.com/gemlay" className="text-blue-600 text-3xl hover:scale-110 transition-transform">
          <FaFacebookF />
        </a>

        {/* Instagram */}
        <a href="https://instagram.com/gemlay" className="text-3xl hover:scale-110 transition-transform"
           style={{ color: "#E1306C" }}>
          <FaInstagram />
        </a>

        {/* YouTube */}
        <a href="https://utube.com/gemlay" className="text-red-600 text-3xl hover:scale-110 transition-transform">
          <FaYoutube />
        </a>
      </div>
    </section>
  );
};

export default SocialHandles;
