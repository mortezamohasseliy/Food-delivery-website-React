import { useState } from "react";
import { restaurantOffers } from "../../data/data";
import OfferCard from "../Home/discount-offers/OfferCard";
import MealDeals from "../Orders/MealDeals";

function RestaurantOfferCards() {
  const [isMealDealsOpen, setIsMealDealsOpen] = useState(false);

  function handleOfferClick() {
    setIsMealDealsOpen(true);
  }

  function handleClose() {
    setIsMealDealsOpen(false);
  }

  function handleNext() {
    // فعلاً برای مرحله بعد خالی است
    // بعداً اینجا Modal مرحله بعد را باز می‌کنیم
  }

  return (
    <>
      <section className="md:w-full">
        {/* ================= DESKTOP CARDS ================= */}

        <div className="md:w-full md:flex md:items-center md:gap-5 md:mt-10 hidden">
          {restaurantOffers.map((offer, index) => (
            <div
              key={index}
              onClick={handleOfferClick}
              className="
                relative
                h-81.25
                flex-1
                overflow-hidden
                rounded-xl
                cursor-pointer
              "
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
                  {offer.text}
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

        {/* ================= MOBILE ================= */}

        <div className="block md:hidden">
          <div className="overflow-hidden">
            <div className="flex w-max animate-offer-scroll gap-4 mt-10">
              {restaurantOffers.map((offer, index) => (
                <div
                  key={index}
                  onClick={handleOfferClick}
                  className="cursor-pointer"
                >
                  <OfferCard
                    image={offer.image}
                    restaurant={offer.restaurant}
                    text={offer.text}
                    discount={offer.discount}
                  />
                </div>
              ))}

              {/* Duplicate cards for infinite animation */}
              {restaurantOffers.map((offer, index) => (
                <div
                  key={`duplicate-${index}`}
                  onClick={handleOfferClick}
                  className="cursor-pointer"
                >
                  <OfferCard
                    image={offer.image}
                    restaurant={offer.restaurant}
                    text={offer.text}
                    discount={offer.discount}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MEAL DEAL MODAL ================= */}

      {isMealDealsOpen && (
        <MealDeals onClose={handleClose} onNext={handleNext} />
      )}
    </>
  );
}

export default RestaurantOfferCards;
