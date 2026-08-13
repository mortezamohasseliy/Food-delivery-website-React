function Landing() {
  return (
    <section className="relative w-[95%] h-152.5 top-20 left-25  rounded-xl border border-gray-200 flex items-center">
      {/* images */}
      <div className="top-70.75 left-105.75 flex items-center">
        <img
          className="absolute w-201.25 h-134.25 bottom-0 right-80 z-20"
          src="../src/assets/images/hero-1.png"
          alt=""
        />

        <div className="top-91.25 left-240">
          <img
            className="absolute w-94.25 h-113.75 bottom-0 right-60 z-10"
            src="../src/assets/images/hero-2.png"
            alt=""
          />
        </div>
      </div>
      {/* orange layout */}
      <div className="top-63.75 left-250.5">
        <div className="absolute w-156.5 h-141.25  rounded-tl-[282.5px] rounded-br-xl bg-[#FC8A06] bottom-0 right-0 z-0"></div>
      </div>

      {/* comments */}
      <div className="top-66.5 left-282.5 ">
        <div className="absolute w-80 h-30  bg-white rounded-2xl right-30 top-20 z-30 p-3">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between">
              <img
                className="w-14.5 h-3.75 top-87.5 left-290.75"
                src="../src/assets/images/logo.png"
                alt=""
              />
              <p className="text-gray-400">now</p>
            </div>
            <h2
              className="w-41.75 h-4.5 top-93.75 left-290.75
              font-semibold text-[12px] leading-[100%] tracking-normal"
            >
              We’ve Received your order!
            </h2>
            <p className="w-49.5 h-4.5 top-98.5 left-290.75 font-normal text-[12px] leading-[100%] tracking-normal text-[#000000CC]/80">
              Awaiting Restaurant acceptance
            </p>
          </div>
        </div>

        <div className="absolute w-80 h-30  bg-white rounded-2xl right-10 top-70 z-30 p-3">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between">
              <img
                className="w-14.5 h-3.75 top-87.5 left-290.75"
                src="../src/assets/images/logo.png"
                alt=""
              />
              <p className="text-gray-400">now</p>
            </div>
            <h2
              className="w-41.75 h-4.5 top-93.75 left-290.75
              font-semibold text-[12px] leading-[100%] tracking-normal flex items-center"
            >
              Order Accepted!
              <span>
                <img
                  className="w-4.25 h-4.25 top-136.25 left-347.5"
                  src="../src/assets/images/tick.png"
                  alt=""
                />
              </span>
            </h2>
            <p className="w-49.5 h-4.5 top-98.5 left-290.75 font-normal text-[12px] leading-[100%] tracking-normal text-[#000000CC]/80">
              Your order will be delivered shortly
            </p>
          </div>
        </div>

        <div className="absolute w-80 h-30  bg-white rounded-2xl right-20 top-110 z-30 p-3">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between">
              <img
                className="w-14.5 h-3.75 top-87.5 left-290.75"
                src="../src/assets/images/logo.png"
                alt=""
              />
              <p className="text-gray-400">now</p>
            </div>
            <h2
              className="w-41.75 h-4.5 top-93.75 left-290.75
              font-semibold text-[12px] leading-[100%] tracking-normal"
            >
              Your rider's nearby 🎉
            </h2>
            <p className="w-49.5 h-4.5 top-98.5 left-290.75 font-normal text-[12px] leading-[100%] tracking-normal text-[#000000CC]/80">
              They're almost there-get ready!
            </p>
          </div>
        </div>
      </div>

      {/* left side */}
      <div className="absolute left-5">
        <p className="w-95.75 h-16.5 top-86 left-39.25 font-normal text-[16px] leading-16.5 tracking-normal text-[#03081F]">
          Order Restaurant food, takeaway and groceries.
        </p>
        <h1 className="w-127.25 h-33 top-99.25 left-39.25 font-semibold text-[54px] leading-16.5 tracking-normal">
          Feast Your Senses,
          <br />
          <span className="text-[#FC8A06]">Fast and Fresh</span>
        </h1>
        <p className="w-74.5 h-10.75 top-135.25 left-39.25 font-normal text-[13px] leading-16.5 tracking-normal text-[#03081F] mb-5">
          Enter a postcode to see what we deliver
        </p>
        <div className="top-149 left-39.25">
          <input
            type="text"
            className="relative w-93.25 h-14.25  rounded-[120px] border placeholder:e.g. EC4R 3TE"
          />
          <button className="absolute w-47 h-14.25 right-30 rounded-[120px] bg-[#FC8A06] text-white">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default Landing;
