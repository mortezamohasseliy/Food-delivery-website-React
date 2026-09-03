import Logo from "../logo/Logo";

function Download() {
  return (
    <section
      className="
        relative mx-auto mt-10
        flex min-h-162.5 w-[90%] flex-col
        overflow-hidden rounded-lg
        bg-linear-to-r from-[#E0E1DC] to-[#EEEEEE]
        px-5 py-8

        sm:min-h-175

        md:block
        md:h-152.75
        md:min-h-0
        md:w-full
        md:px-0
        md:py-0
       
      "
    >
      {/* Logo + Text */}
      <div
        className="
          relative z-20
          flex w-full items-center justify-center
          text-center

          md:absolute
          md:right-10
          md:top-35
          md:w-auto
          md:justify-start
        "
      >
        <Logo />

        <span
          className="
            font-bold text-[32px] tracking-[-6%]
            md:w-26
            md:text-[68px]
          "
        >
          ing
        </span>

        <span
          className="
            ml-1 font-bold text-[32px] tracking-[-6%]
            md:w-57.75
            md:text-[68px]
          "
        >
          is more
        </span>
      </div>

      {/* Personalised & Instant */}
      <div
        className="
          relative z-10
          mt-8 flex w-full justify-center

          md:absolute
          md:right-0
          md:top-58
          md:mt-0
          md:h-22.5
          md:w-219.5
          md:items-center
          md:rounded-[120px]
          md:bg-[#03081F]
        "
      >
        <h2
          className="
            w-full text-center
            font-medium text-[24px]
            leading-tight tracking-[-6%]

            md:absolute
            md:right-0
            md:w-135
            md:text-left
            md:text-[54px]
            md:text-white
          "
        >
          <span className="text-[#FC8A06] underline">Personalised</span> &
          Instant
        </h2>
      </div>

      {/* Description */}
      <h2
        className="
          relative z-20
          mt-8 w-full
          text-center
          font-normal text-[16px]
          leading-6 tracking-[-3%]

          md:absolute
          md:right-10
          md:bottom-50
          md:mt-0
          md:w-122
          md:text-left
          md:text-[24px]
          md:tracking-[-6%]
        "
      >
        Download the Order.uk app for faster ordering
      </h2>

      {/* App Store */}
      <div
        className="
          relative z-20
          mt-6 flex w-full justify-center

          md:absolute
          md:right-25
          md:bottom-10
          md:mt-0
          md:w-103
        "
      >
        <img
          className="
            h-auto
            w-45
            object-contain

            sm:w-50

            md:w-[203.15px]
          "
          src="/images/store.png"
          alt="Download on the App Store"
        />
      </div>

      {/* Phone Image */}
      <img
        className="
    absolute
    bottom-0
    left-1/2
    z-10
    -translate-x-1/2

    w-[75%]
    max-w-75
    object-contain

    sm:w-[65%]
    sm:max-w-82.5

    md:left-0
    md:translate-x-0
    md:w-208
    md:max-w-none
  "
        src="/images/use-mobile.png"
        alt=""
      />
    </section>
  );
}

export default Download;
