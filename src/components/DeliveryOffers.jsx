
import React from "react";

const offers = [
  {
    title: "EXPRESS",
    highlight: "DELIVERY",
    img: "truck.png",
  },
  {
    title: "SPECIAL",
    highlight: "DISCOUNT",
    img: "gift.png",
  },
];

const DeliveryOffers = () => {
  return (
    <div className="w-full px-4 md:px-10 py-6">

      {/* 🌟 MOBILE Different Layout + Same Background Color */}
      <div className="block md:hidden">
        <div
          className="rounded-[30px] p-6 text-white text-center shadow-lg"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 180, 160, 0.25), rgba(0, 180, 160, 0.1))",
          }}
        >
          <h3 className="text-gray-700 font-semibold text-[18px]">
            EXPRESS
          </h3>
          <h2 className="text-teal-600 font-bold text-[24px] mt-1">
            DELIVERY
          </h2>

          <img
            src="money.png"
            alt="delivery"
            className="w-28 mx-auto mt-3"
          />
        </div>
      </div>
<br />

       <div className="block md:hidden">
        <div
          className="rounded-[30px] p-6 text-white text-center shadow-lg"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 180, 160, 0.25), rgba(0, 180, 160, 0.1))",
          }}
        >
          <h3 className="text-gray-700 font-semibold text-[18px]">
          <img
            src="gift.png"
            alt="delivery"
            className="w-28 mx-auto mt-3"
          />
            EXPRESS
          </h3>
          <h2 className="text-teal-600 font-bold text-[24px] mt-1">
            DELIVERY
          </h2>

        </div>
      </div>

      {/* 💻 DESKTOP/TABLET Original Two Boxes */}
      <div className="hidden md:flex md:flex-row gap-6 mt-4">
        {offers.map((offer, i) => (
          <div
            key={i}
            className="flex justify-between items-center w-1/2 rounded-[30px] shadow-md px-6 py-6"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 180, 160, 0.25), rgba(255,255,255,1))",
            }}
          >
            <div>
              <h3 className="text-gray-600 font-semibold text-[18px]">
                {offer.title}
              </h3>
              <h2 className="text-teal-700 font-bold text-[24px]">
                {offer.highlight}
              </h2>
            </div>
            <img
              src={offer.img}
              alt={offer.highlight}
              className="w-28"
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default DeliveryOffers;
