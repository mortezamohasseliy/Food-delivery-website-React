import { useState } from "react";

function DealItems({ pizzaImage, pizzaName }) {
  const [count, setCount] = useState(1);

  function increaseBtn() {
    setCount((prev) => prev + 1);
  }

  function decreaseBtn() {
    setCount((prev) => {
      if (prev > 1) return prev - 1;
      return prev;
    });
  }

  function handleChange(e) {
    const value = Number(e.target.value);

    if (value >= 1) {
      setCount(value);
    }
  }

  return (
    <div
      className="
        w-full
        min-h-25

        bg-[#D9D9D999]

        rounded-xl

        px-3
        py-3

        flex
        items-center
        justify-between

        gap-3

        sm:px-4
        sm:py-4

        md:w-261.25
        md:h-42.25
        md:min-h-0

        md:px-6
        md:py-6

        md:gap-5
      "
    >
      {/* ================================================== */}
      {/* LEFT SIDE                                          */}
      {/* ================================================== */}

      <div
        className="
          flex
          items-center

          gap-3

          min-w-0

          sm:gap-4

          md:gap-5
        "
      >
        {/* ================= PIZZA IMAGE ================= */}

        <img
          className="
            w-16
            h-16

            shrink-0

            rounded-full

            object-cover

            sm:w-20
            sm:h-20

            md:w-28.25
            md:h-28.25
          "
          src={pizzaImage}
          alt={pizzaName}
        />

        {/* ================= VERTICAL LINE ================= */}

        <div
          className="
            w-0.5
            h-12

            shrink-0

            bg-gray-400

            sm:h-16

            md:h-20
          "
        />

        {/* ================= PIZZA NAME ================= */}

        <p
          className="
            min-w-0

            font-bold

            text-[16px]
            leading-5

            truncate

            sm:text-[20px]
            sm:leading-6

            md:text-[32px]
            md:leading-14.5

            md:truncate-none
          "
        >
          {pizzaName}
        </p>
      </div>

      {/* ================================================== */}
      {/* RIGHT SIDE                                         */}
      {/* ================================================== */}

      <div
        className="
          flex
          items-center

          gap-1

          shrink-0

          sm:gap-2

          md:gap-5
        "
      >
        {/* ================= MINUS ================= */}

        <button
          type="button"
          onClick={decreaseBtn}
          className="
            w-8
            h-8

            shrink-0

            flex
            items-center
            justify-center

            cursor-pointer

            sm:w-9
            sm:h-9

            md:w-11.25
            md:h-11.25
          "
        >
          <img
            className="
              w-full
              h-full

              object-contain
            "
            src="../src/assets/images/minus.png"
            alt="Decrease"
          />
        </button>

        {/* ================= COUNT ================= */}

        <input
          type="number"
          min="1"
          value={count}
          onChange={handleChange}
          className="
            w-11
            h-10

            rounded-md

            bg-white

            outline-none

            text-center

            font-bold

            text-[16px]

            appearance-none

            sm:w-14
            sm:h-12
            sm:text-[20px]

            md:w-21.5
            md:h-23
            md:rounded-lg

            md:text-[32px]
          "
        />

        {/* ================= PLUS ================= */}

        <button
          type="button"
          onClick={increaseBtn}
          className="
            w-8
            h-8

            shrink-0

            flex
            items-center
            justify-center

            cursor-pointer

            sm:w-9
            sm:h-9

            md:w-11.25
            md:h-11.25
          "
        >
          <img
            className="
              w-full
              h-full

              object-contain
            "
            src="../src/assets/images/plus.png"
            alt="Increase"
          />
        </button>
      </div>
    </div>
  );
}

export default DealItems;
