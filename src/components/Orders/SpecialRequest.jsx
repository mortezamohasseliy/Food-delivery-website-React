function SpecialRequest() {
  return (
    <div
      className="
        fixed
        inset-0
        z-50
        bg-black/70
        flex
        items-center
        justify-center
        p-4
      "
    >
      {/* MODAL  */}
      <section
        className="
          relative
          w-full
          max-w-118
          bg-white
          rounded-md
          overflow-hidden
        "
      >
        {/*  HERO IMAGE  */}
        <div className="relative w-full h-31.75">
          <img
            src="../src/assets/images/pizza-5.png"
            alt=""
            className="
              w-full
              h-full
              object-cover
            "
          />

          {/* CLOSE BUTTON */}
          <button
            className="
              absolute
              -top-2
              -right-2
              w-11
              h-11
              rounded-full
              bg-[#FC8A06]
              flex
              items-center
              justify-center
              z-20
            "
          >
            <img
              src="../src/assets/images/close.png"
              alt=""
              className="w-5 h-5"
            />
          </button>
        </div>

        {/*  CONTENT  */}
        <div className="px-[12%] pb-5">
          {/*  BREADCRUMB  */}
          <div
            className="
              flex
              items-center
              gap-2
              mt-3
              whitespace-nowrap
            "
          >
            <span className="font-bold text-[9px]">Special Offers</span>

            <span className="text-gray-400 text-[12px]">›</span>

            <span className="font-bold text-[9px]">Meal Deal 1</span>

            <span className="text-gray-400 text-[12px]">›</span>

            <span className="font-bold text-[9px]">Customise Pizza 1</span>

            <span className="text-gray-400 text-[12px]">›</span>

            <span className="font-bold text-[9px]">Instructions</span>
          </div>

          {/*  TITLE  */}
          <div className="mt-3">
            <h1 className="text-[13px] font-normal text-[#03081F]">
              Customise your chicken Pizza
            </h1>
          </div>

          {/*  PIZZA + REQUEST  */}
          <div
            className="
              flex
              items-center
              gap-4
              mt-3
            "
          >
            {/* Pizza */}
            <img
              src="../src/assets/images/Polo.png"
              alt=""
              className="
                w-14.5
                h-14.5
                rounded-full
                object-cover
                shrink-0
              "
            />

            {/* Divider */}
            <div className="w-px h-10 bg-gray-300 shrink-0" />

            {/* Text */}
            <p
              className="
                font-bold
                text-[16px]
                leading-4.5
                text-[#FC8A06]
              "
            >
              Add your special request
            </p>
          </div>

          {/*  TEXTAREA  */}
          <div className="mt-4">
            <textarea
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
              "
            />
          </div>

          {/*  TOTAL  */}
          <div
            className="
              flex
              items-center
              justify-between
              mt-3
            "
          >
            {/* Total */}
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
              "
            >
              <span className="font-bold text-[9px]">Total to pay</span>

              <span className="font-bold text-[14px]">£127.90</span>
            </div>

            {/* Delivery */}
            <p
              className="
                text-[6px]
                whitespace-nowrap
              "
            >
              Delivery & Tax will be calculated in the next step
            </p>
          </div>

          {/*  BOTTOM  */}
          <div
            className="
              flex
              items-center
              justify-between
              mt-4
            "
          >
            {/* Back */}
            <button
              className="
                font-bold
                text-[10px]
                underline
              "
            >
              Take me back
            </button>

            {/* Add */}
            <button
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
                "
              >
                →
              </span>
              Add
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpecialRequest;
