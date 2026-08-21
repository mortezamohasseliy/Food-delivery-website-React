import AboutCard from "./AboutCard";

function About() {
  return (
    <section
      className="
        mt-10
        w-full
        bg-[#D9D9D9]
        px-5 py-8

        md:min-h-220.5
        md:px-10
        md:py-10
      "
    >
      {/* Header */}
      <div
        className="
          flex flex-col items-center
          md:flex-row md:items-center md:justify-between
        "
      >
        <h1
          className="
            text-center
            text-[20px]
            font-bold

            md:text-left
            md:text-[32px]
          "
        >
          Know more about us!
        </h1>

        {/* Tabs */}
        <ul
          className="
            mt-5
            md:flex
            w-full
            justify-center
            gap-2
            overflow-x-auto
            text-[10px]
            hidden
            md:mt-0
            md:w-auto
            md:gap-10
            md:overflow-visible
            md:text-[16px]
          "
        >
          <li
            className="
              shrink-0
              rounded-[120px]
              bg-[#FC8A06]
              px-6 py-3
              font-bold
              text-[#03081F]

              md:border
              md:bg-transparent
              md:px-5
              md:py-5
            "
          >
            Frequent Questions
          </li>

          <li className="shrink-0 flex items-center">Who we are?</li>

          <li className="shrink-0 flex items-center">Partner Program</li>

          <li className="shrink-0 flex items-center">Help & Support</li>
        </ul>
      </div>

      {/* Main Box */}
      <div
        className="
          mx-auto
          mt-6
          flex
          w-[95%]
          flex-col
          rounded-xl
          bg-[#03081F]
          p-4

          md:mt-10
          md:min-h-131.5
          md:max-w-322.5
          md:bg-white
          md:p-8
        "
      >
        {/* Questions + Cards */}
        <div
          className="
            flex
            flex-col
            gap-5

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* Questions */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-5
              text-center
              text-white
              md:w-86.5
              md:gap-8
              md:text-[#03081F]
            "
          >
            <button
              className="
                w-full
                rounded-[120px]
                bg-[#FC8A06]
                px-4 py-3
                text-[10px]
                font-bold

                md:h-15.5
                md:text-[18px]
              "
            >
              How does Order.UK work?
            </button>

            <button
              className="
                w-full
                text-[10px]
                font-bold
                md:text-[18px]
              "
            >
              What payment methods are accepted?
            </button>

            <button
              className="
                w-full
                text-[10px]
                font-bold
                md:text-[18px]
              "
            >
              Can I track my order in real-time?
            </button>

            <button
              className="
                w-full
                text-[10px]
                font-bold
                md:text-[18px]
              "
            >
              Are there any special discounts or promotions available?
            </button>

            <button
              className="
                w-full
                text-[10px]
                font-bold
                md:text-[18px]
              "
            >
              Is Order.UK available in my area?
            </button>
          </div>

          {/* Cards */}
          <div
            className="
              w-full
              rounded-xl
              bg-[#03081F]
              p-4

              md:w-auto
              md:bg-transparent
              md:p-0
            "
          >
            <AboutCard />
          </div>
        </div>

        {/* Description */}
        <p
          className="
            mt-5
            w-full
            text-center
            text-[8px]
            leading-3
            text-white

            md:ml-auto
            md:mt-10
            md:w-156.25
            md:text-[16px]
            md:leading-[130%]
            md:text-[#03081F]
          "
        >
          Order.UK simplifies the food ordering process. Browse through our
          diverse menu, select your favorite dishes, and proceed to checkout.
          Your delicious meal will be on its way to your doorstep in no time!
        </p>
      </div>
    </section>
  );
}

export default About;
