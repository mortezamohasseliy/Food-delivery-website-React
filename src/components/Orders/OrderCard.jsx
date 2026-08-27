import { useState } from "react";
import { pizzaSizes } from "../../data/data";

function OrderCard() {
  const [isSelected, setIsSelected] = useState("Small");
  return (
    <div className="md:w-188.5 md:h-100.75 md:shadow-2xl md:mx-auto md:mt-40 md:p-5">
      {/* Card Header */}
      <div className="md:flex md:items-center md:justify-between md:p-5">
        <div>
          <h1 className="md:font-semibold md:text-[24px] md:mb-2">
            Farm House Xtreme Pizza
          </h1>
          <div className="md:flex">
            <img
              className="md:w-[20.64px] md:h-[20.64px] rotate-[22.82 deg]"
              src="../../src/assets/images/chilli.png"
              alt=""
            />

            <img
              className="md:w-[20.64px] md:h-[20.64px] rotate-[22.82 deg]"
              src="../../src/assets/images/chilli.png"
              alt=""
            />

            <img
              className="md:w-[20.64px] md:h-[20.64px] rotate-[22.82 deg]"
              src="../../src/assets/images/chilli.png"
              alt=""
            />

            <img
              className="md:w-[20.64px] md:h-[20.64px] rotate-[22.82 deg]"
              src="../../src/assets/images/chilli.png"
              alt=""
            />

            <img
              className="md:w-[20.64px] md:h-[20.64px] rotate-[22.82 deg]"
              src="../../src/assets/images/chilli.png"
              alt=""
            />
          </div>
          <p className="md:w-78.75 md:h-19.75 md:font-normal md:text-[14px] md:leading-6.25 md:mt-8">
            1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
            French Fries , 3 cold drinks
          </p>
        </div>
        <div>
          <img
            className="md:w-47.75 md:h-47.75 md:rounded-[120px] md:bg-cover"
            src="../../src/assets/images/pizza-1.png"
            alt=""
          />
        </div>
      </div>

      {/* Price section */}
      <div className="md:flex md:flex-wrap md:gap-3">
        {/* small pizzas */}
        {pizzaSizes.map((pizza) => (
          <button
            onClick={() => setIsSelected(pizza.size)}
            key={pizza}
            className={`${pizza.size === "XL Large with Sauces" ? "md:w-69.75 md:h-14.5" : "md:w-45.5 md:h-14.5"} md:rounded-sm md:border md:flex md:items-center
        md:justify-around ${isSelected === pizza.size ? "md:bg-[#03081F] md:text-[#ffff]" : "md:bg-[#fffff] md:text-[#000000]"} `}
          >
            <p className="md:font-bold md:text-[14px] md:leading-6.25">
              {pizza.size}
            </p>
            <p
              className="md:w-22.5 md:h-9.75 md:rounded-sm md:bg-[#028643] md:text-[#FFFFFF] md:font-bold md:text-[14px] md:leading-6.25
          md:flex md:items-center md:justify-center"
            >
              {pizza.price}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
export default OrderCard;
