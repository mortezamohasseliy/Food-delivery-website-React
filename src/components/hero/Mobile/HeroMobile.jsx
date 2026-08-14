function HeroMobile() {
  return (
    <div className="w-full">
      <div className="w-[90%] h-72.5 top-53.75 left-2.75 rounded-[11px] pb-5  flex flex-col items-center justify-center mx-auto bg-[#E2E2E2] text-center">
        <p className="w-71.75 h-16.5 top-56.25 left-18 font-normal text-[12px] leading-16.5 tracking-normal text-[#03081F]">
          Order Restaurant food, takeaway and groceries.
        </p>
        <div className=" top-69.75 left-13.75 mb-10 text-center">
          <h2 className="w-80.25 h-18 font-semibold text-[34px]">
            Feast Your Senses,
            <br />
            <span className="font-semibold text-[34px] leading-9 text-[#FC8A06]">
              Fast and Fresh
            </span>
          </h2>
        </div>
        <p className="w-74.5 h-10.75 top-84.75 left-17.75 font-normal text-[13px] text-[#03081F]">
          Enter a postcode to see what we deliver
        </p>
        <div className="top-149 left-39.25 flex items-center justify-center">
          <input
            type="text"
            className="w-73.25 h-14.25 top-99.5 left-15.25 bg-[#FFFFFF] border rounded-[120px] placeholder:e.g. EC4R 3TE"
          />
          <button className="absolute flex items-center justify-center w-14.25 h-14.25 right-41 rounded-[120px] bg-[#FC8A06] text-white">
            <img
              className="w-8.5 h-8.5 top-102.25 left-79"
              src="../src/assets/images/arrow-right.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeroMobile;
