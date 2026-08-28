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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="
        md:w-91.75 md:h-269.5 md:bg-[#FBFBFB]
        md:rounded-xl md:shadow-lg md:gap-3

        w-full
        bg-[#FBFBFB]
        rounded-xl
        shadow-lg mt-5
      "
    >
      {/*  HEADER  */}
      <div
        className="
          md:flex md:items-center md:justify-start
          md:gap-5 md:p-5

          flex
          items-center
          justify-between
          px-4
          py-4
        "
      >
        {/* Logo + Menu */}
        <div className="flex items-center gap-3">
          <img
            className="
              w-9 h-9

              md:w-13.75
              md:h-13.75
            "
            src="../../src/assets/images/res-logo.png"
            alt=""
          />

          <h1
            className="
              font-semibold
              text-[22px]

              md:text-[32px]
              md:text-[#000000]
            "
          >
            Menu
          </h1>
        </div>

        {/* Mobile Arrow */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            w-9
            h-9
            flex
            items-center
            justify-center
            text-[24px]
            font-bold
          "
        >
          <span
            className={`
              transition-transform
              duration-300
              ${isOpen ? "rotate-180" : ""}
            `}
          >
            <img
              className="h-6.5 w-6.5 "
              src="../../src/assets/images/arrow-bottom-2.png"
              alt=""
            />
          </span>
        </button>
      </div>

      {/*  MENU LIST */}
      <div
        className={`
          md:mt-3
          md:block

          overflow-hidden
          transition-all
          duration-300

          ${isOpen ? "max-h-200" : "max-h-0"}

          md:max-h-none
        `}
      >
        <ul className="md:space-y-5">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setActive(item);
                setIsOpen(false);
              }}
              className={`
                md:w-full
                md:h-16.75
                md:text-[22px]
                md:leading-20.75
                md:pl-2
                md:font-bold
                md:flex
                md:items-center
                md:justify-start

                w-full
                h-12
                px-5
                text-left
                font-semibold
                text-[16px]
                flex
                items-center

                ${
                  active === item
                    ? "md:bg-[#03081F] md:text-white bg-[#03081F] text-white"
                    : "text-[#03081F]"
                }
              `}
            >
              <li>{item}</li>
            </button>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Menu;
