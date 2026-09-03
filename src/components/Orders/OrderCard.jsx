import { useState } from "react";
import { pizzaSizes } from "../../data/data";

function OrderCard({ image, title, details, setCart }) {
  const [isSelected, setIsSelected] = useState("Small");

  const selectedPizza = pizzaSizes.find((pizza) => pizza.size === isSelected);

  function addToCart() {
    const newItem = {
      id: `${image}-${selectedPizza.size}`,
      name: title,
      size: selectedPizza.size,
      price: selectedPizza.price,
      image: image,
      quantity: 1,
    };

    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === newItem.id,
      );

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === newItem.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem,
        );
      }

      return [...currentCart, newItem];
    });
  }

  return (
    <div
      className="
        w-full
        h-auto
        shadow-2xl
        p-3

        md:w-188.5
        md:h-100.75
        md:shadow-2xl
        md:p-3
      "
    >
      {/* Card Header */}
      <div
        className="
          flex
          items-center
          justify-between
          p-3

          md:p-5
        "
      >
        {/* Information */}
        <div className="flex-1 pr-3">
          <h1
            className="
              font-semibold
              text-[18px]
              mb-2

              md:text-[24px]
              md:mb-2
            "
          >
            {title}
          </h1>

          {/* Chilli icons */}
          <div className="flex">
            <img
              className="w-4 h-4 md:w-[20.64px] md:h-[20.64px]"
              src="../../src/assets/images/chilli.png"
              alt=""
            />

            <img
              className="w-4 h-4 md:w-[20.64px] md:h-[20.64px]"
              src="../../src/assets/images/chilli.png"
              alt=""
            />

            <img
              className="w-4 h-4 md:w-[20.64px] md:h-[20.64px]"
              src="../../src/assets/images/chilli.png"
              alt=""
            />

            <img
              className="w-4 h-4 md:w-[20.64px] md:h-[20.64px]"
              src="../../src/assets/images/chilli.png"
              alt=""
            />

            <img
              className="w-4 h-4 md:w-[20.64px] md:h-[20.64px]"
              src="../../src/assets/images/chilli.png"
              alt=""
            />
          </div>

          {/* Details */}
          <p
            className="
              w-full
              mt-4
              font-normal
              text-[12px]
              leading-5

              md:w-78.75
              md:h-19.75
              md:text-[14px]
              md:leading-6.25
              md:mt-8
            "
          >
            1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
            French Fries, 3 cold drinks
          </p>
        </div>

        {/* Pizza image */}
        <div className="shrink-0">
          <img
            className="
              w-28
              h-28
              rounded-full
              object-cover

              md:w-47.75
              md:h-47.75
              md:rounded-[120px]
              md:bg-cover
            "
            src={image}
            alt=""
          />
        </div>
      </div>

      {/* Price section */}
      <div
        className="
    flex
    flex-wrap
    gap-2
    mt-3

    md:gap-3
    md:mt-0
  "
      >
        {pizzaSizes.map((pizza) => (
          <button
            onClick={() => setIsSelected(pizza.size)}
            key={pizza.size}
            className={`
        ${
          pizza.size === "XL Large with Sauces"
            ? "w-69.75 md:w-69.75"
            : "w-[calc(50%-4px)] md:w-45.5"
        }

        h-12
        md:h-14.5

        rounded-sm
        border

        flex
        items-center
        justify-around

        ${
          isSelected === pizza.size
            ? "bg-[#03081F] text-white"
            : "bg-white text-black"
        }
      `}
          >
            <p
              className="
          font-bold
          text-[12px]
          leading-5

          md:text-[14px]
          md:leading-6.25
        "
            >
              {pizza.size}
            </p>

            <p
              className="
          w-20
          h-8

          md:w-22.5
          md:h-9.75

          rounded-sm
          bg-[#028643]
          text-white

          font-bold
          text-[12px]

          md:text-[14px]
          md:leading-6.25

          flex
          items-center
          justify-center
          shrink-0
        "
            >
              {pizza.price}
            </p>
          </button>
        ))}
        <button
          type="button"
          onClick={addToCart}
          className="bg-[#FC8A06] px-5 py-2 rounded-lg text-white font-semibold"
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default OrderCard;
