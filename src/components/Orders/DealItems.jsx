import { useState } from "react";

function DealItems({ pizzaImage, pizzaName }) {
  const [count, setCount] = useState(1);

  function increaseBtn() {
    setCount(count + 1);
  }

  function decreaseBtn() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <div className="md:w-261.25 md:h-42.25 bg-[#D9D9D999] rounded-xl mx-auto flex items-center justify-between p-6">
      <div className="flex items-center gap-5">
        <img
          className="md:w-28.25 md:h-28.25 rounded-full"
          src={pizzaImage}
          alt=""
        />
        <p className="w-0.5 h-20 bg-gray-400"></p>
        <p className="font-bold md:text-[32px] md:leading-14.5">{pizzaName}</p>
      </div>
      <div className="flex items-center gap-5">
        {/* Minus Button */}
        <button onClick={decreaseBtn}>
          <img
            className="w-11.25 h-11.25"
            src="../src/assets/images/minus.png"
            alt=""
          />
        </button>
        <input
          onChange={(e) => setCount(e.target.value)}
          className="md:w-21.5 md:h-23 md:rounded-lg bg-[#FFFFFF] outline-none
              font-bold md:text-[32px] text-center"
          type="number"
          min={1}
          value={count}
        />
        {/* Plus Button */}
        <button onClick={increaseBtn}>
          <img
            className="w-11.25 h-11.25"
            src="../src/assets/images/plus.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
export default DealItems;
