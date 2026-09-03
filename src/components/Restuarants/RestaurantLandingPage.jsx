function RestaurantLandingPage({ text, title, cover }) {
  return (
    <section
      className="
        md:relative md:w-382 md:h-119.25
        md:mt-10.25 md:rounded-xl
        md:bg-[url('../../assets/images/burger.png')]
        md:bg-cover

        relative w-[90%] min-h-90
        mt-5 rounded-xl
        bg-[url('../../assets/images/burger.png')]
        bg-cover
        flex flex-col items-center
        justify-center
        gap-4
        px-4 py-8
        mx-auto
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 rounded-xl bg-[#F4F4F4E5]/90" />

      {/* Text */}
      <p
        className="
          md:absolute md:top-42.75 md:bottom-60 md:left-14.25
          md:font-normal md:text-[20px]

          relative z-10
          font-normal
          text-[18px]
          leading-6
          tracking-normal
          text-center
          md:text-left
        "
      >
        {text}
      </p>

      {/* Title */}
      <h1
        className="
          md:absolute md:top-56.75 md:left-14.25 md:bottom-46
          md:font-semibold md:text-[54px]
          md:text-[#FC8A06]

          relative z-10
          font-semibold
          text-[20px]
          leading-7
          tracking-normal
          text-[#03081F]
          text-center
          md:text-left
          max-w-full
        "
      >
        {title}
      </h1>

      {/* Minimum Order */}
      <button
        className="
          md:absolute md:top-81 md:left-14.25 md:bottom-22.5
          md:w-82.5 md:h-15.75

          relative z-10
          w-60 h-10
          rounded-[120px]
          bg-[#03081F]
          flex items-center justify-center
          gap-3.5
          text-white
          shrink-0
        "
      >
        <span>
          <img
            className="md:w-8.5 md:h-8.5 w-5 h-5"
            src="../../assets/images/list.png"
            alt=""
          />
        </span>

        <span
          className="
            md:font-semibold md:text-[18px]
            font-semibold
            text-[12px]
            leading-4
            tracking-normal
          "
        >
          Minimum Order: 12 GBP
        </span>
      </button>

      {/* Delivery */}
      <button
        className="
          md:absolute md:top-81 md:left-101 md:bottom-22.5
          md:w-82.5 md:h-15.75

          relative z-10
          w-60 h-10
          rounded-[120px]
          bg-[#03081F]
          flex items-center justify-center
          gap-3.5
          text-white
          shrink-0
        "
      >
        <span>
          <img
            className="md:w-8.5 md:h-8.5 w-5 h-5"
            src="../../assets/images/bike.png"
            alt=""
          />
        </span>

        <span
          className="
            md:font-semibold md:text-[18px]
            font-semibold
            text-[12px]
            leading-4
            tracking-normal
          "
        >
          Delivery in 20-25 Minutes
        </span>
      </button>

      {/* Open until */}
      <button
        className="
          md:absolute md:top-111.25 md:left-0 md:bottom-7.25
          md:w-82.5 md:h-15.75
          md:rounded-tr-xl md:rounded-br-xl
          md:bg-[#FC8A06]
          md:flex md:items-center md:justify-center
          md:text-white md:gap-4.25
          hidden
        "
      >
        <span>
          <img
            className="md:w-7.25 md:h-7.25"
            src="../../assets/images/clock.png"
            alt=""
          />
        </span>

        <span className="md:font-semibold md:text-[18px] leading-16.5 tracking-normal">
          Open until 3:00 AM
        </span>
      </button>

      {/* Cover */}
      <img
        className="
          md:absolute md:right-15.5 md:top-14.25
          md:bottom-14.75
          md:w-145.25 md:h-90.25
          md:rounded-xl
          hidden md:block
        "
        src={cover}
        alt=""
      />

      {/* Rating */}
      <img
        className="
          md:absolute
          md:w-34 md:h-39.5
          md:rounded-xl
          md:top-67 md:right-140.75
          md:bottom-12.75
          hidden md:block
        "
        src="../../assets/images/rate.png"
        alt=""
      />
    </section>
  );
}

export default RestaurantLandingPage;
