function Landing() {
  return (
    <section className="w-full">
      {/* ================= MOBILE ================= */}
      <div className="px-4 md:hidden">
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
                src="/images/arrow-right.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div
        className="
          relative mx-auto mt-10 hidden
          h-152.5 w-[95%]
          items-center
          overflow-hidden
          rounded-xl border border-gray-200
          md:flex
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="absolute left-10 top-1/2 z-30 -translate-y-1/2">
          <p className="text-[16px] font-normal text-[#03081F]">
            Order Restaurant food, takeaway and groceries.
          </p>

          <h1 className="mt-5 text-[54px] font-semibold leading-[1.05]">
            Feast Your Senses,
            <br />
            <span className="text-[#FC8A06]">Fast and Fresh</span>
          </h1>

          <p className="mt-6 text-[13px] text-[#03081F]">
            Enter a postcode to see what we deliver
          </p>

          {/* Search */}
          <div className="relative mt-4 w-93.25">
            <input
              type="text"
              placeholder="e.g. EC4R 3TE"
              className="
                h-14.25 w-full
                rounded-[120px]
                border
                bg-white
                px-5
                pr-48
                outline-none
              "
            />

            <button
              className="
                absolute right-0 top-0
                h-14.25 w-47
                rounded-[120px]
                bg-[#FC8A06]
                text-white
              "
            >
              Search
            </button>
          </div>
        </div>

        {/* ================= ORANGE SHAPE ================= */}
        <div
          className="
            absolute bottom-0 right-0 z-0
            h-141.25 w-156.5
            rounded-tl-[282.5px]
            rounded-br-xl
            bg-[#FC8A06]
          "
        />

        {/* ================= HERO IMAGE 1 ================= */}
        <img
          className="
            absolute bottom-0 right-80 z-20
            h-134.25 w-201.25
            object-contain
          "
          src="/images/hero-1.webp"
          alt=""
        />

        {/* ================= HERO IMAGE 2 ================= */}
        <img
          className="
            absolute bottom-0 right-60 z-10
            h-113.75 w-94.25
            object-contain
          "
          src="/images/hero-2.png"
          alt=""
        />

        {/* ================= NOTIFICATIONS ================= */}

        {/* Notification 1 */}
        <div
          className="
            absolute right-30 top-20 z-30
            h-30 w-80
            rounded-2xl
            bg-white
            p-3
            shadow-lg
          "
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <img className="h-3.75 w-14.5" src="/images/logo.png" alt="" />

              <p className="text-gray-400">now</p>
            </div>

            <h2 className="text-[12px] font-semibold">
              We’ve Received your order!
            </h2>

            <p className="text-[12px] text-black/60">
              Awaiting Restaurant acceptance
            </p>
          </div>
        </div>

        {/* Notification 2 */}
        <div
          className="
            absolute right-10 top-70 z-30
            h-30 w-80
            rounded-2xl
            bg-white
            p-3
            shadow-lg
          "
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <img className="h-3.75 w-14.5" src="/images/logo.png" alt="" />

              <p className="text-gray-400">now</p>
            </div>

            <h2 className="flex items-center gap-2 text-[12px] font-semibold">
              Order Accepted!
              <img className="h-4.25 w-4.25" src="/images/tick.png" alt="" />
            </h2>

            <p className="text-[12px] text-black/60">
              Your order will be delivered shortly
            </p>
          </div>
        </div>

        {/* Notification 3 */}
        <div
          className="
            absolute right-20 top-110 z-30
            h-30 w-80
            rounded-2xl
            bg-white
            p-3
            shadow-lg
          "
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <img className="h-3.75 w-14.5" src="/images/logo.png" alt="" />

              <p className="text-gray-400">now</p>
            </div>

            <h2 className="text-[12px] font-semibold">
              Your rider's nearby 🎉
            </h2>

            <p className="text-[12px] text-black/60">
              They're almost there-get ready!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
