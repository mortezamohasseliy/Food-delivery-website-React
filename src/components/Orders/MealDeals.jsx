import { useState } from "react";
import DealItems from "./DealItems";
import CustomizePizza from "./CustomizePizza";
import { pizzaPrices } from "../../data/data";

function MealDeals({ onClose }) {
  const [currentStep, setCurrentStep] = useState("meal-deals");
  const [selectedPizza, setSelectedPizza] = useState(null);

  const total = selectedPizza ? selectedPizza.price * selectedPizza.count : 0;

  function handleNext() {
    if (!selectedPizza) {
      return;
    }

    setCurrentStep("customize-pizza");
  }

  function handleBack() {
    setCurrentStep("meal-deals");
  }

  if (currentStep === "customize-pizza") {
    return (
      <CustomizePizza
        onClose={onClose}
        onBack={handleBack}
        selectedPizza={selectedPizza}
        total={total}
      />
    );
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-9999
        bg-black/60
        flex
        items-center
        justify-center
        p-0
        sm:p-4
        md:p-6
      "
    >
      <div
        className="
          relative
          w-full
          h-full
          bg-white
          overflow-hidden
          sm:h-[96vh]
          md:w-[1100px]
          md:max-w-[95vw]
          md:h-[95vh]
          md:rounded-2xl
          md:shadow-2xl
        "
      >
        {/* CLOSE */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            top-3
            right-3
            sm:top-4
            sm:right-4
            md:top-5
            md:right-5
            z-[100]
            w-10
            h-10
            sm:w-11
            sm:h-11
            md:w-12
            md:h-12
            rounded-full
            bg-[#FC8A06]
            flex
            items-center
            justify-center
            cursor-pointer
            shadow-md
          "
        >
          <img
            className="
              w-5
              h-5
              sm:w-5.5
              sm:h-5.5
              object-contain
            "
            src="../src/assets/images/close.png"
            alt="Close"
          />
        </button>

        {/* SCROLLABLE CONTENT */}
        <div
          className="
            w-full
            h-full
            overflow-y-auto
            overflow-x-hidden
            overscroll-contain
          "
        >
          <section
            className="
              w-full
              px-4
              py-5
              sm:px-6
              sm:py-6
              md:px-12
              md:py-10
            "
          >
            {/* HEADER IMAGE */}
            <div className="relative w-full">
              <img
                className="
                  w-full
                  h-40
                  sm:h-48
                  md:h-70
                  object-cover
                  rounded-xl
                "
                src="../src/assets/images/pizza-4.png"
                alt="Meal Deal"
              />
            </div>

            {/* BREADCRUMB */}
            <div
              className="
                flex
                items-center
                gap-1
                mt-4
                overflow-hidden
                whitespace-nowrap
                sm:mt-5
                md:mt-6
                md:pl-5
              "
            >
              <h4
                className="
                  shrink-0
                  font-bold
                  text-[13px]
                  leading-5
                  text-[#03081F]
                  sm:text-[15px]
                  md:text-[20px]
                  md:leading-8
                "
              >
                Special Offers
              </h4>

              <img
                className="
                  shrink-0
                  w-4
                  h-4
                  sm:w-5
                  sm:h-5
                  md:w-6
                  md:h-6
                "
                src="../src/assets/images/Forward.png"
                alt=""
              />

              <h4
                className="
                  shrink-0
                  font-bold
                  text-[13px]
                  leading-5
                  text-[#03081F]
                  sm:text-[15px]
                  md:text-[20px]
                  md:leading-8
                "
              >
                Meal Deal 1
              </h4>
            </div>

            {/* TITLE */}
            <h2
              className="
                font-normal
                text-[24px]
                leading-8
                mt-5
                sm:text-[27px]
                sm:leading-9
                md:text-[32px]
                md:leading-10
                md:pl-5
                md:mt-5
                md:mb-10
              "
            >
              Please select your first Pizza
            </h2>

            {/* PIZZA ITEMS */}
            <div
              className="
                w-full
                space-y-4
                sm:space-y-5
                md:space-y-5
              "
            >
              <DealItems
                pizzaImage="../src/assets/images/Margherita.png"
                pizzaName="Margherita"
                price={pizzaPrices.Margherita}
                isSelected={selectedPizza?.name === "Margherita"}
                onSelect={setSelectedPizza}
              />

              <DealItems
                pizzaImage="../src/assets/images/Polo.png"
                pizzaName="Polo"
                price={pizzaPrices.Polo}
                isSelected={selectedPizza?.name === "Polo"}
                onSelect={setSelectedPizza}
              />

              <DealItems
                pizzaImage="../src/assets/images/Meat Fiest.png"
                pizzaName="MeatFiest"
                price={pizzaPrices["MeatFiest"]}
                isSelected={selectedPizza?.name === "MeatFiest"}
                onSelect={setSelectedPizza}
              />

              <DealItems
                pizzaImage="../src/assets/images/Hawaiian.png"
                pizzaName="Hawaiian"
                price={pizzaPrices.Hawaiian}
                isSelected={selectedPizza?.name === "Hawaiian"}
                onSelect={setSelectedPizza}
              />

              <DealItems
                pizzaImage="../src/assets/images/Margherita.png"
                pizzaName="Toscana"
                price={pizzaPrices.Toscana}
                isSelected={selectedPizza?.name === "Toscana"}
                onSelect={setSelectedPizza}
              />
            </div>

            {/* TOTAL / DELIVERY */}
            <div
              className="
                w-full
                mt-6
                flex
                flex-col
                gap-3
                sm:mt-7
                md:flex-row
                md:items-center
                md:gap-5
                md:mt-8
              "
            >
              <div
                className="
                  w-full
                  min-h-14
                  px-4
                  py-2
                  rounded-lg
                  bg-[#FC8A06CC]
                  flex
                  items-center
                  justify-between
                  text-white
                  sm:min-h-16
                  sm:px-6
                  md:w-85.5
                  md:h-17.5
                  md:min-h-0
                  md:shrink-0
                  md:justify-center
                  md:gap-8
                "
              >
                <p
                  className="
                    font-semibold
                    text-[16px]
                    sm:text-[18px]
                    md:text-[20px]
                  "
                >
                  Total to pay
                </p>

                <p
                  className="
                    font-semibold
                    text-[24px]
                    sm:text-[28px]
                    md:text-[36px]
                  "
                >
                  £{total.toFixed(2)}
                </p>
              </div>

              <p
                className="
                  font-normal
                  text-[11px]
                  leading-4
                  text-center
                  sm:text-[12px]
                  md:text-[17px]
                  md:leading-6
                  md:text-left
                "
              >
                Delivery & Tax will be calculated in the next step
              </p>
            </div>

            {/* FOOTER */}
            <div
              className="
                w-full
                mt-6
                flex
                flex-col
                gap-4
                sm:mt-7
                md:flex-row
                md:items-center
                md:justify-center
                md:gap-10
                md:mt-10
              "
            >
              {/* BACK */}
              <button
                type="button"
                onClick={onClose}
                className="
                  font-semibold
                  text-[16px]
                  underline
                  text-center
                  sm:text-[18px]
                  md:text-[24px]
                  md:whitespace-nowrap
                "
              >
                Take me back
              </button>

              {/* NEXT */}
              <div
                className="
                  relative
                  w-full
                  sm:w-[92%]
                  md:w-86
                  mx-auto
                  md:mx-0
                "
              >
                <img
                  className="
                    absolute
                    left-4
                    sm:left-5
                    top-1/2
                    w-6
                    h-6
                    sm:w-7
                    sm:h-7
                    md:w-8.75
                    md:h-8.75
                    -translate-y-1/2
                    z-10
                    object-contain
                  "
                  src="../src/assets/images/arrow.png"
                  alt=""
                />

                <button
                  type="button"
                  onClick={handleNext}
                  className="
                    w-full
                    h-14
                    sm:h-16
                    md:h-17.5
                    rounded-lg
                    bg-[#028643]
                    text-white
                    font-semibold
                    text-[18px]
                    sm:text-[20px]
                    md:text-[24px]
                  "
                >
                  Next Step
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MealDeals;
