import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const reviews = [
  {
    name: "Himesh",
    date: "May 25, 2022",
    review:
      "Talk about a range of elements, including customer service. Be detailed, specific, and honest. Leave out links and personal information.",
    rating: 1,
  },
  {
    name: "Himesh",
    date: "May 25, 2022",
    review:
      "Talk about a range of elements, including customer service. Be detailed, specific, and honest. Leave out links and personal information.",
    rating: 1,
  },
  {
    name: "Himesh",
    date: "May 25, 2022",
    review:
      "Talk about a range of elements, including customer service. Be detailed, specific, and honest. Leave out links and personal information.",
    rating: 1,
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-16 bg-[#faf7ef]">

      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-lg md:text-xl font-bold tracking-wide">
          CUSTOMER REVIEWS
        </h2>
        <p className="text-xs text-green-700 mt-1 tracking-wide">
          KNOW ABOUT WHAT OTHERS THINK
        </p>
        <div className="w-40 h-[2px] bg-green-700 mx-auto mt-2"></div>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">

        {reviews.map((rev, i) => (
          <div
            key={i}
            className="relative bg-white rounded-2xl shadow-lg p-6 border border-gray-200
                       flex flex-col gap-3"
          >
            {/* Name & Date */}
            <div>
              <h3 className="font-semibold text-gray-800 text-sm">{rev.name}</h3>
              <p className="text-xs text-gray-500">{rev.date}</p>
            </div>

            {/* Quote Icon */}
            <FaQuoteRight className="absolute text-teal-500 text-3xl top-6 right-6" />

            {/* Review Content */}
            <p className="text-xs text-gray-600 leading-relaxed">
              {rev.review}
            </p>

            {/* Bottom Section */}
            <div className="flex justify-between items-center mt-auto">
              <FaGoogle className="text-xl text-[#4285F4]" />
              <div className="flex items-center gap-1 text-[10px] text-teal-600">
                <FaStar />
                <span className="text-gray-400">☆ ☆ ☆ ☆</span>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Read More Button */}
      <div className="text-center mt-10">
        <button className="bg-white border border-green-700 rounded-full px-6 py-2 text-xs font-medium text-green-700 shadow-md hover:bg-green-700 hover:text-white transition">
          READ MORE →
        </button>
      </div>

    </section>
  );
};

export default CustomerReviews;
