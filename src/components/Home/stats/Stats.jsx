function Stats() {
  return (
    <section
      className="
        mt-5
        flex flex-col
        items-center
        gap-8
        rounded-xl
        bg-[#FC8A06]
        py-8
        w-[90%]
        mx-auto
        md:w-full
        md:h-39.5
        md:flex-row
        md:items-center
        md:justify-around
        md:gap-0
        md:py-0
      "
    >
      {/* Registered Riders */}
      <div className="flex flex-col items-center text-center text-white md:w-54 md:space-y-5">
        <h2 className="font-light text-[40px] leading-none md:text-[64px] md:leading-9.5">
          546+
        </h2>
        <p className="mt-2 text-[16px] font-bold md:mt-0 md:text-[24px] md:leading-9.5">
          Registered Riders
        </p>
      </div>

      {/* Orders Delivered */}
      <div className="flex flex-col items-center text-center text-white md:w-54 md:space-y-5">
        <h2 className="font-light text-[40px] leading-none md:text-[64px] md:leading-9.5">
          789,900+
        </h2>
        <p className="mt-2 text-[16px] font-bold md:mt-0 md:text-[24px] md:leading-9.5">
          Orders Delivered
        </p>
      </div>

      {/* Restaurants Partnered */}
      <div className="flex flex-col items-center text-center text-white md:w-54 md:space-y-5">
        <h2 className="font-light text-[40px] leading-none md:text-[64px] md:leading-9.5">
          690+
        </h2>
        <p className="mt-2 whitespace-nowrap text-[16px] font-bold md:mt-0 md:text-[24px] md:leading-9.5">
          Restaurants Partnered
        </p>
      </div>

      {/* Food Items */}
      <div className="flex flex-col items-center text-center text-white md:w-54 md:space-y-5">
        <h2 className="font-light text-[40px] leading-none md:text-[64px] md:leading-9.5">
          17,457+
        </h2>
        <p className="mt-2 text-[16px] font-bold md:mt-0 md:text-[24px] md:leading-9.5">
          Food items
        </p>
      </div>
    </section>
  );
}

export default Stats;
