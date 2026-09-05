import { useState } from "react";
import { boxes } from "../../data/data";
import SpecialRequest from "./SpecialRequest";

const meatBoxes = [
  "Chicken",
  "Beef",
  "Salami",
  "Pepperoni",
  "Chicken Tikka",
  "Fish",
];

const seafoodBoxes = ["Tuna", "Anchovies", "Prawns"];

// TOPPING BOX

function ToppingBox({ title, icon, items, selectedToppings, onToppingChange }) {
  return (
    <div
      className="
        relative
        w-full
        border
        border-gray-300
        rounded-xl

        mt-14
        px-5
        pt-10
        pb-7

        md:mt-9
        md:px-3
        md:pt-10
        md:pb-5
      "
    >
      {/* TOPPING HEADER */}

      <div
        className="
          absolute
          -top-5
          left-0
          z-20

          flex
          items-center

          md:-top-5
          md:left-10
        "
      >
        {/* ICON */}

        <div
          className="
            relative
            z-20

            w-12
            h-12
            shrink-0

            rounded-full
            bg-[#FC8A06]

            flex
            items-center
            justify-center

            md:w-9
            md:h-9
          "
        >
          <img
            src={icon}
            alt=""
            className="
              w-7
              h-7
              object-contain

              md:w-5
              md:h-5
            "
          />
        </div>

        {/* BLACK HEADER */}

        <div
          className="
            relative
            -ml-3

            h-10
            bg-[#03081F]
            rounded-r-md

            flex
            items-center

            pl-9
            pr-6

            md:h-8
            md:pl-7
            md:pr-5
          "
        >
          <p
            className="
              font-bold
              text-[14px]
              text-white
              whitespace-nowrap

              md:text-[12px]
            "
          >
            {title}
          </p>
        </div>
      </div>

      {/* OPTIONS */}

      <div
        className="
          grid
          grid-cols-2
          gap-y-6
          gap-x-4

          md:grid-cols-3
          md:gap-y-5
          md:gap-x-0
        "
      >
        {items.map((item, index) => {
          const isChecked = selectedToppings.includes(item);

          const isDisabled = selectedToppings.length >= 4 && !isChecked;

          return (
            <label
              key={index}
              className={`
                flex
                items-center
                gap-3
                min-w-0

                md:w-45
                md:justify-start

                ${
                  isDisabled
                    ? "cursor-not-allowed opacity-40"
                    : "cursor-pointer"
                }
              `}
            >
              <input
                type="checkbox"
                checked={isChecked}
                disabled={isDisabled}
                onChange={() => onToppingChange(item)}
                className="
                  w-5
                  h-5
                  shrink-0
                  accent-[#028643]
                "
              />

              <span
                className="
                  font-bold
                  text-[13px]
                  leading-5
                  whitespace-nowrap

                  md:text-[18px]
                "
              >
                {item}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

// CUSTOMIZE PIZZA MODAL

function CustomizePizza({ onClose, onBack, selectedPizza, total }) {
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [isSpecialRequestOpen, setIsSpecialRequestOpen] = useState(false);

  const pizzaWithToppings = {
    ...selectedPizza,
    toppings: selectedToppings,
  };

  const MAX_TOPPINGS = 4;

  const selectedCount = selectedToppings.length;

  const remainingItems = MAX_TOPPINGS - selectedCount;

  function handleToppingChange(item) {
    setSelectedToppings((currentToppings) => {
      if (currentToppings.includes(item)) {
        return currentToppings.filter((topping) => topping !== item);
      }

      if (currentToppings.length >= MAX_TOPPINGS) {
        return currentToppings;
      }

      return [...currentToppings, item];
    });
  }

  function handleNext() {
    setIsSpecialRequestOpen(true);
  }

  function handleBackFromRequest() {
    setIsSpecialRequestOpen(false);
  }

  if (isSpecialRequestOpen) {
    return (
      <SpecialRequest
        onClose={onClose}
        onBack={handleBackFromRequest}
        total={total}
        selectedPizza={{
          ...selectedPizza,
          toppings: selectedToppings,
        }}
      />
    );
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]

        bg-black/60

        flex
        items-center
        justify-center

        p-0

        md:p-6
      "
    >
      {/* MODAL */}

      <div
        className="
          relative

          w-full
          h-full

          bg-white

          overflow-hidden

          md:w-275
          md:max-w-[95vw]
          md:h-[95vh]

          md:rounded-2xl
          md:shadow-2xl
        "
      >
        {/* CLOSE BUTTON */}

        <button
          onClick={onClose}
          type="button"
          className="
            absolute
            top-3
            right-3
            z-[100]

            w-10
            h-10

            rounded-full
            bg-[#FC8A06]

            flex
            items-center
            justify-center

            cursor-pointer

            md:w-12
            md:h-12
            md:top-5
            md:right-5
          "
        >
          <img
            className="
              w-5
              h-5
              object-contain
            "
            src="/images/Close.webp"
            alt="Close"
          />
        </button>

        {/* SCROLLABLE MODAL CONTENT */}

        <div
          className="
            w-full
            h-full

            overflow-y-auto
            overflow-x-hidden
          "
        >
          {/* CONTENT */}

          <section
            className="
              w-full
              h-auto

              px-4
              pt-5
              pb-8

              md:px-12
              md:pt-10
              md:pb-10
            "
          >
            {/* PIZZA IMAGE */}

            <div className="relative">
              <img
                className="
                  w-full
                  h-40

                  object-cover
                  rounded-xl

                  md:h-70
                  md:rounded-xl
                "
                src="/images/pizza-5.webp"
                alt="Pizza"
              />
            </div>

            {/* BREADCRUMB */}

            <div
              className="
                flex
                items-center
                gap-1

                mt-4

                whitespace-nowrap

                md:pl-5
                md:mt-6
              "
            >
              <h4
                className="
                  font-bold
                  text-[13px]
                  text-[#03081F]

                  md:text-[20px]
                "
              >
                Special Offers
              </h4>

              <img
                className="
                  w-5
                  h-5

                  md:w-6
                  md:h-6
                "
                src="/images/Forward.webp"
                alt=""
              />

              <h4
                className="
                  hidden

                  md:block
                  md:font-bold
                  md:text-[20px]
                  md:text-[#03081F]
                "
              >
                Meal Deal 1
              </h4>

              <img
                className="
                  hidden

                  md:block
                  md:w-6
                  md:h-6
                "
                src="/images/Forward.webp"
                alt=""
              />

              <h4
                className="
                  hidden

                  md:block
                  md:font-bold
                  md:text-[20px]
                  md:text-[#03081F]
                "
              >
                Customise Pizza 1
              </h4>
            </div>

            {/* TITLE */}

            <div
              className="
                mt-4

                md:flex
                md:items-center
                md:justify-between
              "
            >
              {/* MOBILE TITLE */}

              <p
                className="
                  font-normal
                  text-[24px]
                  leading-8

                  md:hidden
                "
              >
                Customise Pizza
              </p>

              {/* DESKTOP TITLE */}

              <p
                className="
                  hidden

                  md:block
                  md:font-normal
                  md:text-[32px]
                  md:leading-10
                  md:pl-5
                  md:mt-5
                  md:mb-10
                "
              >
                Customise your chicken Pizza
              </p>

              {/* SELECTED */}

              <p
                className="
                  hidden

                  md:block
                  md:font-bold
                  md:text-[20px]
                "
              >
                {selectedCount}/{MAX_TOPPINGS} Selected
              </p>
            </div>

            {/* PIZZA + MESSAGE */}

            <div
              className="
                flex
                items-center
                gap-4

                mt-3

                md:gap-5
              "
            >
              <img
                className="
                  w-16
                  h-16

                  rounded-full
                  object-cover
                  shrink-0

                  md:w-24
                  md:h-24
                "
                src="/images/Polo.webp"
                alt=""
              />

              {/* VERTICAL LINE */}

              <div
                className="
                  w-0.5
                  h-14

                  bg-gray-300
                  shrink-0

                  md:h-20
                "
              />

              {/* MESSAGE */}

              <div>
                <p
                  className="
                    font-bold
                    text-[16px]
                    leading-5
                    text-[#FC8A06]

                    md:text-[32px]
                    md:leading-10
                  "
                >
                  Please select up to 4 options free!
                </p>

                {/* REMAINING ITEMS MESSAGE */}

                {remainingItems > 0 && (
                  <p
                    className="
                      mt-2
                      font-semibold
                      text-[13px]
                      leading-5
                      text-[#008C45]

                      md:text-[17px]
                      md:leading-6
                    "
                  >
                    You can still add {remainingItems}{" "}
                    {remainingItems === 1 ? "more item" : "more items"}
                  </p>
                )}
              </div>
            </div>

            {/* VEGETABLE TOPPINGS */}

            <ToppingBox
              title="Vegitable Toppings"
              icon="/images/carrot.webp"
              items={boxes}
              selectedToppings={selectedToppings}
              onToppingChange={handleToppingChange}
            />

            {/* MEAT TOPPINGS */}

            <ToppingBox
              title="Meat Toppings"
              icon="/images/meat.webp"
              items={meatBoxes}
              selectedToppings={selectedToppings}
              onToppingChange={handleToppingChange}
            />

            {/* SEAFOOD TOPPINGS */}

            <ToppingBox
              title="Seafood Toppings"
              icon="/images/fish.webp"
              items={seafoodBoxes}
              selectedToppings={selectedToppings}
              onToppingChange={handleToppingChange}
            />

            {/* FOOTER */}

            <div className="mt-5">
              {/* TOTAL */}

              <div
                className="
                  w-full
                  h-12

                  px-4
                  rounded-md

                  bg-[#FFA638]

                  flex
                  items-center
                  justify-between

                  text-white

                  md:w-85.5
                  md:h-12
                "
              >
                <span
                  className="
                    font-bold
                    text-[14px]
                    whitespace-nowrap
                  "
                >
                  Total to pay
                </span>

                <span
                  className="
                    font-bold
                    text-[20px]
                    whitespace-nowrap
                  "
                >
                  £{total.toFixed(2)}
                </span>
              </div>

              {/* DELIVERY */}

              <p
                className="
                  text-center
                  text-[11px]
                  leading-4

                  mt-3

                  md:text-right
                  md:text-[15px]
                  md:mt-2
                "
              >
                Delivery & Tax will be calculated in the next step
              </p>

              {/* BUTTONS */}

              <div
                className="
                  flex
                  items-center
                  justify-between

                  mt-4
                "
              >
                {/* BACK */}

                <button
                  onClick={onBack}
                  type="button"
                  className="
                    font-bold
                    text-[13px]
                    underline

                    md:text-[16px]
                  "
                >
                  Take me back
                </button>

                {/* NEXT */}

                <button
                  type="button"
                  onClick={handleNext}
                  className="
                    h-11
                    px-6

                    rounded-md

                    bg-[#008C45]
                    text-white

                    font-bold
                    text-[14px]

                    flex
                    items-center
                    justify-center
                    gap-3

                    md:h-12
                    md:px-8
                  "
                >
                  <span
                    className="
                      w-6
                      h-6

                      rounded-full

                      bg-white
                      text-[#008C45]

                      flex
                      items-center
                      justify-center
                    "
                  >
                    →
                  </span>
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

export default CustomizePizza;
