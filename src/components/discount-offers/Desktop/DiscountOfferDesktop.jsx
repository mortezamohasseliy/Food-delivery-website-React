function DiscountOfferDesktop() {
  return (
    <section className="w-full h-107 top-218.25 left-25  mt-10 p-5">
      {/* header */}
      <div className="flex items-center justify-between">
        <h1 className="w-157.5 h-12 top-218.5 left-30.25 flex items-center font-bold text-[32px] leading-[100%] tracking-normal">
          Up to -40% 🎊 Order.uk exclusive deals
        </h1>
        <div className="w-134.25 h-6 top-223 left-267.25 font-normal text-[16px] leading-[100%]">
          <ul className="flex items-center justify-around">
            <li>Vegan</li>
            <li>Sushi</li>
            <li
              className="font-semibold text-[#FC8A06] w-54.75 h-15.25 top-218.25
                left-323 rounded-[120px] border border-[#FC8A06] flex items-center justify-center"
            >
              Pizza & Fast food
            </li>
            <li>others</li>
          </ul>
        </div>
      </div>
      {/* categories */}

      <div className="w-full flex items-center mt-10 gap-5">
        <div className="relative h-81.25 w-124 overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover"
            src="../src/assets/images/food-1.png"
            alt=""
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-6 left-8">
            <h3 className="text-[18px] font-medium leading-[100%] tracking-normal text-[#FC8A06]">
              Restaurant
            </h3>

            <h2 className="text-[24px] font-bold text-white">
              Chef Burgers London
            </h2>
          </div>
          <span className="text-white absolute top-0 right-10 w-22 h-16.5 rounded-br-xl rounded-bl-xl bg-[#03081F] flex items-center justify-center">
            <p
              className="w-12.75 h-6.75 top-249.25 left-126.25
                font-bold text-[18px]"
            >
              {" "}
              -40%
            </p>
          </span>
        </div>

        <div className="relative h-81.25 w-124 overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover"
            src="../src/assets/images/food-2.png"
            alt=""
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-6 left-8">
            <h3 className="text-[18px] font-medium leading-[100%] tracking-normal text-[#FC8A06]">
              Restaurant
            </h3>

            <h2 className="text-[24px] font-bold text-white">
              Grand Ai Cafe London
            </h2>
          </div>
          <span className="text-white absolute top-0 right-10 w-22 h-16.5 rounded-br-xl rounded-bl-xl bg-[#03081F] flex items-center justify-center">
            <p
              className="w-12.75 h-6.75 top-249.25 left-126.25
                font-bold text-[18px]"
            >
              {" "}
              -20%
            </p>
          </span>
        </div>

        <div className="relative h-81.25 w-124 overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover"
            src="../src/assets/images/food-1.png"
            alt=""
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-6 left-8">
            <h3 className="text-[18px] font-medium leading-[100%] tracking-normal text-[#FC8A06]">
              Restaurant
            </h3>

            <h2 className="text-[24px] font-bold text-white">
              Butterbrot Caf’e London
            </h2>
          </div>
          <span className="text-white absolute top-0 right-10 w-22 h-16.5 rounded-br-xl rounded-bl-xl bg-[#03081F] flex items-center justify-center">
            <p
              className="w-12.75 h-6.75 top-249.25 left-126.25
                font-bold text-[18px]"
            >
              {" "}
              -17%
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}
export default DiscountOfferDesktop;
