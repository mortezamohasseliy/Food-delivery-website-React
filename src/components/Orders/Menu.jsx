import { useState } from "react";

const items = [
  "Pizzas",
  "Garlic Bread",
  "Calzone",
  "Kebabas",
  "Salads",
  "Cold drinks",
  "Happy Meal®",
  "Desserts",
  "Hot drinks",
  "Sauces",
  "Orbit®",
];

function Menu() {
  const [active, setActive] = useState("Pizzas");
  return (
    <section
      className="md:w-91.75 md:h-269.5 md:bg-[#FBFBFB]  md:rounded-xl
      md:shadow-lg md:gap-3"
    >
      {/* menu Header */}
      <div className="md:flex md:items-center md:justify-start md:gap-5 md:p-5">
        <p>
          <img
            className="md:w-13.75 md:h-13.75"
            src="../../src/assets/images/res-logo.png"
            alt=""
          />
        </p>
        <h1 className="md:font-semibold md:text-[32px] md:text-[#000000]">
          Menu
        </h1>
      </div>
      {/* Menu Lists */}
      <div className="">
        <ul className="">
          {items.map((item, index) => (
            <li
              key={index}
              className={`md:w-full md:h-16.75 md:text-[22px] md:leading-20.75 md:pl-2 md:font-bold
          md:flex md:items-center md:justify-start ${active === item ? "md:bg-[#03081F] md:text-[#FFFFFF]" : ""}`}
            >
              <button onClick={() => setActive(item)}>{item}</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Menu;
