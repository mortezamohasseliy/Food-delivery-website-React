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
    <div className="mt-10 mb-10 w-full overflow-hidden">
      <div className="flex items-center justify-around">
        <h1
          className="w-60 h-6 top-131.75 left-5.25
        font-bold text-[16px] leading-[100%] tracking-normal"
        >
          Up to -40% Discount Offers 🎊{" "}
        </h1>
        <button>
          {" "}
          <p
            className="font-semibold text-[#03081F] w-33 h-9.5 top-130
                left-69.25 rounded-[120px] border border-[#03081F] flex items-center justify-evenly
               text-[10px] space-x-3 "
          >
            <span className="w-4.5 h-4.5 top-132.5 left-71.5 rotate-90">
              <img src="../src/assets/images/arrow-right.png" alt="" />
            </span>{" "}
            Pizza & Fast food
          </p>
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto px-5 pb-4 scrollbar-hide mt-10">
        {offers.map((offer, index) => (
          <OfferCard
            key={index}
            image={offer.image}
            restaurant={offer.restaurant}
          />
        ))}
      </div>
    </div>
  );
}

export default DiscountOfferMobile;
