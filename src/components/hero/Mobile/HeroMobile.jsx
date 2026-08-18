function HeroMobile() {
  return (
    <div className="w-full px-4">
      <div className="mx-auto flex min-h-72.5 w-full max-w-125 flex-col items-center justify-center rounded-[11px] bg-[#E2E2E2] px-4 py-8 text-center">
        <p className="text-[12px] font-normal leading-4 text-[#03081F]">
          Order Restaurant food, takeaway and groceries.
        </p>

        <h2 className="mt-6 text-[34px] font-semibold leading-9">
          Feast Your Senses,
          <br />
          <span className="text-[#FC8A06]">Fast and Fresh</span>
        </h2>

        <p className="mt-5 text-[13px] font-normal text-[#03081F]">
          Enter a postcode to see what we deliver
        </p>

        <div className="relative mt-6 w-full max-w-73.25">
          <input
            type="text"
            placeholder="e.g. EC4R 3TE"
            className="h-14.25 w-full rounded-[120px] border bg-white px-5 pr-16 outline-none"
          />

          <button className="absolute right-0 top-0 flex h-14.25 w-14.25 items-center justify-center rounded-[120px] bg-[#FC8A06]">
            <img
              className="h-8.5 w-8.5"
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
