import { useState } from "react";

function OrderPopUp() {
  const [isOpenModal, setIsOpenModal] = useState(true);

  if (!isOpenModal) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-9999

        bg-black/80

        flex
        items-center
        justify-center

        p-3
        sm:p-5
        md:p-8

        overflow-y-auto
      "
    >
      {/* MODAL */}
      <div
        className="
          relative

          w-full
          max-w-[830px]

          bg-white

          rounded-xl

          shadow-2xl

          px-5
          py-10

          sm:px-8
          sm:py-12

          md:px-16
          md:py-14

          lg:px-20
          lg:py-16
        "
      >
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpenModal(false)}
          className="
            absolute

            top-2
            right-2

            w-12
            h-12

            sm:top-3
            sm:right-3
            sm:w-14
            sm:h-14

            md:-top-5
            md:-right-5
            md:w-16
            md:h-16

            rounded-full

            bg-[#03081F]

            flex
            items-center
            justify-center

            cursor-pointer

            z-10
          "
        >
          <img
            src="/images/close.png"
            alt="Close"
            className="
              w-5
              h-5

              sm:w-6
              sm:h-6

              md:w-7
              md:h-7

              object-contain
            "
          />
        </button>

        {/* CONTENT */}
        <div
          className="
            flex
            flex-col
            items-center

            text-center
          "
        >
          {/* TITLE */}
          <h1
            className="
              font-bold
              text-[#03081F]

              text-[32px]
              leading-tight

              sm:text-[40px]

              md:text-[48px]

              lg:text-[54px]
            "
          >
            Order Now
          </h1>

          {/* SUBTITLE */}
          <p
            className="
              mt-2

              text-[#03081F]

              text-[14px]
              leading-5

              sm:text-[15px]

              md:text-[16px]
            "
          >
            Minimum Delivery is <span className="font-bold">£10</span>
          </p>

          {/* OPTIONS */}
          <div
            className="
              w-full
              max-w-[368px]

              mt-10

              sm:mt-12

              md:mt-16

              flex
              flex-col

              gap-5

              sm:gap-7

              md:gap-9
            "
          >
            {/* DELIVERY */}
            <button
              type="button"
              className="
                w-full

                h-16

                sm:h-18

                md:h-20

                rounded-full

                bg-[#03081F]

                flex
                items-center

                px-5

                sm:px-7

                md:px-8

                text-white

                cursor-pointer
              "
            >
              <div
                className="
                  w-10
                  shrink-0

                  sm:w-11

                  md:w-12

                  flex
                  justify-center
                "
              >
                <img
                  src="/images/scooter.png"
                  alt=""
                  className="
                    w-7
                    h-7

                    sm:w-8
                    sm:h-8

                    md:w-9
                    md:h-9

                    object-contain
                  "
                />
              </div>

              <span
                className="
                  flex-1

                  font-bold

                  text-[14px]

                  sm:text-[16px]

                  md:text-[17px]

                  text-center

                  mr-10
                  sm:mr-11
                  md:mr-12
                "
              >
                Delivery my order
              </span>
            </button>

            {/* COLLECTION */}
            <button
              type="button"
              className="
                w-full

                h-16

                sm:h-18

                md:h-20

                rounded-full

                bg-[#FC8A06]

                flex
                items-center

                px-5

                sm:px-7

                md:px-8

                text-[#03081F]

                cursor-pointer
              "
            >
              <div
                className="
                  w-10
                  shrink-0

                  sm:w-11

                  md:w-12

                  flex
                  justify-center
                "
              >
                <img
                  src="/images/store-2.png"
                  alt=""
                  className="
                    w-7
                    h-7
                
                    sm:w-8
                    sm:h-8

                    md:w-9
                    md:h-9

                    object-contain
                  "
                />
              </div>

              <span
                className="
                  flex-1

                  font-bold

                  text-[14px]

                  sm:text-[16px]

                  md:text-[17px]

                  text-center

                  mr-10
                  sm:mr-11
                  md:mr-12
                "
              >
                I will come & Collect
              </span>
            </button>
          </div>

          {/* OR DIVIDER */}
          <div
            className="
              w-full
              max-w-[320px]

              mt-8

              sm:mt-10

              md:mt-12

              flex
              items-center
              justify-center

              gap-4

              sm:gap-6

              md:gap-7
            "
          >
            <div
              className="
                h-px
                flex-1
                bg-[#FC8A06]
              "
            />

            <span
              className="
                shrink-0

                font-bold

                text-[#03081F]

                text-[14px]

                sm:text-[15px]

                md:text-[16px]
              "
            >
              or
            </span>

            <div
              className="
                h-px
                flex-1
                bg-[#FC8A06]
              "
            />
          </div>

          {/* CANCEL */}
          <button
            type="button"
            onClick={() => setIsOpenModal(false)}
            className="
              mt-2

              sm:mt-3

              font-bold

              text-[#03081F]

              text-[12px]

              sm:text-[13px]

              md:text-[14px]

              underline

              cursor-pointer
            "
          >
            Cancel & Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderPopUp;
