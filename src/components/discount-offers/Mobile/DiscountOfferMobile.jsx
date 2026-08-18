import OfferCard from "../OfferCard";

function DiscountOfferMobile() {
  const offers = [
    {
      image: "../src/assets/images/food-1.png",
      restaurant: "Butterbrot Caf’e London",
    },
    {
      image: "../src/assets/images/food-2.png",
      restaurant: "Grand Caf’e",
    },
    {
      image: "../src/assets/images/food-1.png",
      restaurant: "Butterbrot Caf’e London",
    },
  ];

  return (
    <section className="mt-10 mb-10 w-full overflow-hidden">
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

      {/* Offers */}
      <div className="overflow-hidden">
        <div className="flex w-max animate-offer-scroll gap-4 mt-10">
          {offers.map((offer, index) => (
            <OfferCard
              key={index}
              image={offer.image}
              restaurant={offer.restaurant}
            />
          ))}

          {offers.map((offer, index) => (
            <OfferCard
              key={`duplicate-${index}`}
              image={offer.image}
              restaurant={offer.restaurant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DiscountOfferMobile;
