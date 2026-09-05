import { useState } from "react";
import DeliveryPopUp from "./DeliveryPopUp";

function SpecialRequest({ onClose, onBack, selectedPizza, total }) {
  const [specialRequest, setSpecialRequest] = useState("");
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);

  function handleAdd() {
    setIsDeliveryOpen(true);

    const finalOrder = {
      ...selectedPizza,
      specialRequest,
    };
  }

  if (isDeliveryOpen) {
    return <DeliveryPopUp />;
  }

  return (
    <div
      className="
        fixed
        inset-0
       ` z-9999`
        bg-black/60

        flex
        items-center
        justify-center

        p-0
        md:p-6
      "
    >
      {/* MODAL */}
      <section
        className="
          relative

          w-full
          h-full

          bg-white
          overflow-hidden

          md:w-275
          md:max-w-[95vw]
          md:h-[95vh]

          md:rounded-2xl
          md:shadow-2xl
        "
      >
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            top-3
            right-3

            `z-100`

            w-10
            h-10

            rounded-full
            bg-[#FC8A06]

            flex
            items-center
            justify-center

            cursor-pointer
            shadow-md

            md:w-12
            md:h-12
            md:top-5
            md:right-5
          "
        >
          <img
            src="/images/Close.webp"
            alt="Close"
            className="
              w-5
              h-5
              object-contain
            "
          />
        </button>

        {/* SCROLLABLE CONTENT */}
        <div
          className="
            w-full
            h-full

            overflow-y-auto
            overflow-x-hidden
          "
        >
          {/* HERO IMAGE */}
          <div
            className="
              relative
              w-full
              h-31.75

              md:h-70
            "
          >
            <img
              src="/images/pizza-5.webp"
              alt=""
              className="
                w-full
                h-full
                object-cover
              "
            />
          </div>

          {/* CONTENT */}
          <div
            className="
              px-4
              pb-8

              md:px-12
              md:pb-10
            "
          >
            {/* BREADCRUMB */}
            <div
              className="
                flex
                items-center
                gap-2

                mt-4
                whitespace-nowrap

                md:pl-5
                md:mt-6
              "
            >
              <span className="font-bold text-[9px] md:text-[20px]">
                Special Offers
              </span>

              <span className="text-gray-400 text-[12px] md:text-[20px]">
                ›
              </span>

              <span className="font-bold text-[9px] md:text-[20px]">
                Meal Deal 1
              </span>

              <span className="text-gray-400 text-[12px] md:text-[20px]">
                ›
              </span>

              <span className="font-bold text-[9px] md:text-[20px]">
                Customise Pizza 1
              </span>

              <span className="text-gray-400 text-[12px] md:text-[20px]">
                ›
              </span>

              <span className="font-bold text-[9px] md:text-[20px]">
                Instructions
              </span>
            </div>

            {/* TITLE */}
            <div className="mt-4 md:mt-5 md:pl-5">
              <h1
                className="
                  text-[13px]
                  font-normal
                  text-[#03081F]

                  md:text-[32px]
                "
              >
                Customise your chicken Pizza
              </h1>
            </div>

            {/* PIZZA + REQUEST */}
            <div
              className="
                flex
                items-center
                gap-4

                mt-3

                md:gap-5
                md:mt-5
                md:pl-5
              "
            >
              <img
                src="/images/Polo.webp"
                alt=""
                className="
                  w-14.5
                  h-14.5

                  rounded-full
                  object-cover
                  shrink-0

                  md:w-24
                  md:h-24
                "
              />

              <div
                className="
                  w-px
                  h-10
                  bg-gray-300
                  shrink-0

                  md:h-20
                "
              />

              <p
                className="
                  font-bold
                  text-[16px]
                  leading-4.5
                  text-[#FC8A06]

                  md:text-[32px]
                  md:leading-10
                "
              >
                Add your special request
              </p>
            </div>

            {/* TEXTAREA */}
            <div
              className="
                mt-4

                md:mt-6
                md:px-5
              "
            >
              <textarea
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                placeholder="Write your special instructions here..."
                className="
                  w-full
                  h-26.25

                  resize-none
                  rounded-md

                  border
                  border-[#D9D9D9]

                  bg-[#F8F8F8]

                  px-4
                  py-3

                  text-[9px]
                  text-[#03081F]

                  outline-none

                  focus:border-[#FC8A06]

                  md:h-40
                  md:text-[14px]
                "
              />
            </div>

            {/* TOTAL */}
            <div
              className="
                flex
                items-center
                justify-between

                mt-3

                md:mt-6
                md:px-5
              "
            >
              <div
                className="
                  h-7
                  px-3

                  bg-[#FFA638]
                  rounded-sm

                  flex
                  items-center
                  gap-5

                  text-white

                  md:w-85.5
                  md:h-12
                  md:px-4
                "
              >
                <span
                  className="
                    font-bold
                    text-[9px]

                    md:text-[14px]
                  "
                >
                  Total to pay
                </span>

                <span
                  className="
                    font-bold
                    text-[14px]

                    md:text-[20px]
                  "
                >
                  £{total.toFixed(2)}
                </span>
              </div>

              <p
                className="
                  text-[6px]
                  whitespace-nowrap

                  md:text-[15px]
                "
              >
                Delivery & Tax will be calculated in the next step
              </p>
            </div>

            {/* BOTTOM */}
            <div
              className="
                flex
                items-center
                justify-between

                mt-4

                md:mt-5
                md:px-5
              "
            >
              <button
                type="button"
                onClick={onBack}
                className="
                  font-bold
                  text-[10px]
                  underline

                  md:text-[16px]
                "
              >
                Take me back
              </button>

              <button
                type="button"
                onClick={handleAdd}
                className="
                  w-31.75
                  h-7

                  rounded-sm
                  bg-[#008C45]

                  text-white
                  font-bold
                  text-[10px]

                  flex
                  items-center
                  justify-center
                  gap-3

                  md:w-auto
                  md:h-12
                  md:px-8
                  md:text-[14px]
                "
              >
                <span
                  className="
                    w-4
                    h-4

                    rounded-full
                    bg-white
                    text-[#008C45]

                    flex
                    items-center
                    justify-center

                    text-[9px]

                    md:w-6
                    md:h-6
                  "
                >
                  →
                </span>
                Add
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpecialRequest;
