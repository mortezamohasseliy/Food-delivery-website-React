function SignUp() {
  return (
    <section className="mt-10 w-full">
      <div className="flex flex-col gap-5 px-5 md:flex-row">
        {/* Business */}
        <div
          className="
            relative
            h-55
            w-full
            overflow-hidden
            rounded-xl

            md:h-106.25
            md:w-188.5
          "
        >
          <img
            className="
              h-full
              w-full
              object-cover
              rounded-xl
            "
            src="../src/assets/images/chef.png"
            alt=""
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-gray-900/70 to-transparent" />

          {/* Top Label */}
          <div
            className="
              absolute
              left-30
              top-0
              flex
              h-12
              w-[50%]
              -translate-x-1/2
              items-center
              justify-center
              rounded-bl-xl
              rounded-br-xl
              bg-white
              text-center
              font-bold
              text-[14px]
              text-[#03081F]

              md:left-10
              md:h-15.75
              md:w-[288px]
              md:translate-x-0
              md:text-[18px]
            "
          >
            Earn more with lower fees
          </div>

          {/* Text */}
          <div
            className="
              absolute
              bottom-16
              left-5
              w-[90%]

              md:bottom-40
              md:left-20
              md:w-121.25
            "
          >
            <h2
              className="
                font-medium
                text-[14px]
                text-[#FC8A06]

                md:w-65.75
                md:text-[18px]
              "
            >
              Signup as a business
            </h2>

            <h1
              className="
                font-bold
                text-[28px]
                text-white

                md:w-121.25
                md:text-[44px]
              "
            >
              Partner with us
            </h1>
          </div>

          {/* Button */}
          <button
            className="
              absolute
              bottom-4
              left-5
              h-8
              w-40
              rounded-[120px]
              bg-[#FC8A06]
              font-medium
              text-[14px]
              text-white

              md:bottom-10
              md:left-20
              md:h-13
              md:w-51.25
              md:text-[18px]
            "
          >
            Get Started
          </button>
        </div>

        {/* Rider */}
        <div
          className="
            relative
            h-55
            w-full
            overflow-hidden
            rounded-xl

            md:h-106.25
            md:w-188.5
          "
        >
          <img
            className="
              h-full
              w-full
              rounded-xl
              object-cover
            "
            src="../src/assets/images/chef-1.png"
            alt=""
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-gray-900/70 to-transparent" />

          {/* Top Label */}
          <div
            className="
              absolute
              left-30
              top-0
              flex
              h-8
              w-[50%]
              -translate-x-1/2
              items-center
              justify-center
              rounded-bl-xl
              rounded-br-xl
              bg-white
              text-center
              font-bold
              text-[14px]
              text-[#03081F]

              md:left-10
              md:h-15.75
              md:w-[288px]
              md:translate-x-0
              md:text-[18px]
            "
          >
            Avail exclusive perks
          </div>

          {/* Text */}
          <div
            className="
              absolute
              bottom-16
              left-5
              w-[90%]

              md:bottom-40
              md:left-20
              md:w-121.25
            "
          >
            <h2
              className="
                font-medium
                text-[14px]
                text-[#FC8A06]

                md:w-65.75
                md:text-[18px]
              "
            >
              Signup as a rider
            </h2>

            <h1
              className="
                font-bold
                text-[28px]
                text-white

                md:w-121.25
                md:text-[44px]
              "
            >
              Ride with us
            </h1>
          </div>

          {/* Button */}
          <button
            className="
              absolute
              bottom-4
              left-5
              h-11
              w-40
              rounded-[120px]
              bg-[#FC8A06]
              font-medium
              text-[14px]
              text-white

              md:bottom-10
              md:left-20
              md:h-13
              md:w-51.25
              md:text-[18px]
            "
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
