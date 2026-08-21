import OfferCard from "./OfferCard";

function DiscountOffer() {
  const offers = [
    {
      image: "../src/assets/images/food-1.png",
      restaurant: "Chef Burgers London",
      discount: "-40%",
    },
    {
      image: "../src/assets/images/food-2.png",
      restaurant: "Grand Ai Cafe London",
      discount: "-20%",
    },
    {
      image: "../src/assets/images/food-1.png",
      restaurant: "Butterbrot Caf’e London",
      discount: "-17%",
    },
  ];

  return (
    <section className="w-full mt-10 mb-10 overflow-hidden">
      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block px-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-[32px] leading-[100%]">
            Up to -40% 🎊 Order.uk exclusive deals
          </h1>

          <ul className="flex items-center gap-8 font-normal text-[16px]">
            <li>Vegan</li>
            <li>Sushi</li>

            <li className="h-15.25 px-8 rounded-full border border-[#FC8A06] flex items-center justify-center font-semibold text-[#FC8A06]">
              Pizza & Fast food
            </li>

            <li>others</li>
          </ul>
        </div>

        {/* Desktop Cards */}
        <div className="w-full flex items-center gap-5 mt-10">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative h-81.25 flex-1 overflow-hidden rounded-xl"
            >
              {/* Image */}
              <img
                className="h-full w-full object-cover"
                src={offer.image}
                alt={offer.restaurant}
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-6 left-8">
                <h3 className="text-[18px] font-medium leading-[100%] text-[#FC8A06]">
                  Restaurant
                </h3>

                <h2 className="text-[24px] font-bold text-white">
                  {offer.restaurant}
                </h2>
              </div>

              {/* Discount */}
              <span className="absolute top-0 right-10 w-22 h-16.5 rounded-b-xl bg-[#03081F] text-white flex items-center justify-center">
                <p className="font-bold text-[18px]">{offer.discount}</p>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="block lg:hidden">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 px-5">
          <h1 className="flex-1 text-[16px] font-bold leading-[100%]">
            Up to -40% Discount Offers 🎊
          </h1>

          <button className="shrink-0">
            <div className="flex h-9.5 items-center gap-2 rounded-[120px] border border-[#03081F] px-3 text-[10px] font-semibold text-[#03081F]">
              <span className="h-4.5 w-4.5 rotate-90">
                <img
                  src="../src/assets/images/arrow-right.png"
                  alt=""
                  className="h-full w-full"
                />
              </span>

              <span>Pizza & Fast food</span>
            </div>
          </button>
        </div>

        {/* Mobile Offers */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-offer-scroll gap-4 mt-10">
            {offers.map((offer, index) => (
              <OfferCard
                key={index}
                image={offer.image}
                restaurant={offer.restaurant}
              />
            ))}

            {/* Duplicate cards for infinite animation */}
            {offers.map((offer, index) => (
              <OfferCard
                key={`duplicate-${index}`}
                image={offer.image}
                restaurant={offer.restaurant}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiscountOffer;
