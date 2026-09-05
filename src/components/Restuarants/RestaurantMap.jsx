function RestaurantMap() {
  return (
    <section
      className="
    relative w-full h-105 mt-5
    bg-[url('/images/map.webp')] bg-cover bg-center
    md:relative md:w-full md:h-164.75 md:mt-10
  "
    >
      <div
        className="
      absolute
      w-[85%] min-h-75
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      rounded-xl
      bg-[#03081FF7]
      p-6
      text-white
      flex flex-col justify-center

      md:absolute md:w-116.5 md:h-134.75 md:bg-[#03081FF7]
      md:rounded-xl md:top-12.25 md:left-32.25
      md:translate-x-0 md:translate-y-0
      md:text-white md:p-10
      md:flex md:flex-col md:items-start md:justify-center
    "
      >
        <h1 className="font-bold text-[24px] leading-7 md:font-bold md:text-[32px] md:leading-9.5">
          McDonald’s <br />
          <span className="font-semibold text-[17px] leading-7 text-[#FC8A06] md:font-semibold md:text-[22px] md:leading-9.5">
            South London
          </span>
        </h1>

        <p className="mt-4 font-normal text-[13px] leading-6 md:mt-0 md:font-normal md:text-[18px] md:leading-7.75">
          Tooley St, London Bridge, London SE1 2TF,
          <br />
          United Kingdom
          <br />
          <span className="font-bold text-[14px] leading-8 md:font-bold md:text-[18px] md:leading-11.5">
            Phone number
          </span>
          <br />
          <span className="text-[14px] text-[#FC8A06] md:text-[18px]">
            +934443-43
          </span>
          <br />
          <span className="font-bold text-[14px] leading-8 md:font-bold md:text-[18px] md:leading-11.5">
            Website
          </span>
          <br />
          <span className="text-[14px] text-[#FC8A06] md:text-[18px]">
            http://mcdonalds.uk/
          </span>
        </p>
      </div>
    </section>
  );
}
export default RestaurantMap;
