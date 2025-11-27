import { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const sections = {
  services: [
    "Gold Rates",
    "Digital Gold",
    "Payment Method",
    "Financing Options",
    "Garnet Lanee Assurance",
    "Franchise Enquiry"
  ],
  policies: [
    "15-Day Returns",
    "Free Shipping",
    "Lifetime Exchange Policy",
    "Return and Refund Policy",
    "Terms & Conditions on Offers"
  ],
  knowledge: [
    "Gold Guide",
    "Diamond Guide",
    "Jewellery Guide",
    "Solitaire Guide",
    "Gemstone Guide",
    "Certification Guide",
    "Jewellery Gifting"
  ],
  about: [
    "Our Vision",
    "Why Garnet",
    "Blog",
    "Our Story",
    "Our Process",
    "Our Team",
    "Reviews & Ratings",
    "Press Release"
  ]
};

export default function Footer() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <footer className="bg-[#F6FFFC] text-gray-700 pt-8">
      
      {/* 📱 MOBILE VIEW ONLY */}
      <div className="md:hidden px-6 space-y-3">
        
        {Object.entries(sections).map(([key, list]) => (
          <div key={key} className="border-b border-gray-300 pb-3">
            <button 
              onClick={() => toggle(key)}
              className="w-full flex justify-between items-center text-sm font-semibold"
            >
              {key.replace(/^\w/, c => c.toUpperCase()).split("_").join(" ") }
              <FiChevronDown className={`transition ${open === key && "rotate-180"}`} />
            </button>

            {open === key && (
              <ul className="mt-2 space-y-1 text-xs pl-4">
                {list.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
          </div>
        ))}

        {/* GET IN TOUCH SECTION */}
        <div className="border-b border-gray-300 pb-3">
          <button onClick={() => toggle("contact")}
            className="w-full flex justify-between items-center text-sm font-semibold"
          >
            GET IN TOUCH
            <FiChevronDown className={`transition ${open === "contact" && "rotate-180"}`} />
          </button>

          {open === "contact" && (
            <ul className="mt-2 text-xs space-y-2 pl-4">
              <li className="flex gap-2 items-center"><FaPhoneAlt /> 99888-89856</li>
              <li className="flex gap-2 items-center"><FaEnvelope /> info@garnetlanee.com</li>
              <li className="flex gap-2 items-center"><FaMapMarkerAlt /> Sco.19,Sector 32, Mohali</li>
            </ul>
          )}
        </div>

        {/* Bottom Links */}
        <div className="text-center text-[10px] mt-3 space-x-1">
          <span>SITE MAP</span> |
          <span>PRIVACY POLICY</span> |
          <span>TERMS</span> |
          <span>FAQs</span>
        </div>

        {/* App buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <img src="google1.png" className="w-28" />
          <img src="app1.png" className="w-28" />
        </div>
      </div>

      {/* 🖥 DESKTOP VIEW ONLY */}
      <div className="hidden md:grid grid-cols-5 gap-10 max-w-7xl mx-auto px-6 pt-10">
        {Object.entries(sections).map(([key, list]) => (
          <div key={key}>
            <h3 className="text-sm font-semibold mb-3">
              {key.replace(/^\w/, c => c.toUpperCase()).split("_").join(" ") }
            </h3>
            <ul className="space-y-2 text-xs">
              {list.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        ))}

        {/* Contact Desktop */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Get In Touch</h3>
          <ul className="text-xs space-y-2">
            <li className="flex items-center gap-2"><FaPhoneAlt /> 99888-89856</li>
            <li className="flex items-center gap-2"><FaEnvelope /> info@garnetlanee.com</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> Mohali, Punjab</li>
          </ul>
          <div className="flex gap-3 mt-4 text-lg">
            <FaFacebookF /> <FaInstagram /> <FaYoutube />
          </div>
          <div className="flex gap-3 mt-4">
            <img src="google1.png" className="w-24" />
            <img src="app1.png" className="w-24" />
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <p className="text-center text-[10px] mt-8 py-4 border-t border-gray-300">
        COPYRIGHT © GARNET LANEE 2022
      </p>
    </footer>
  );
}
