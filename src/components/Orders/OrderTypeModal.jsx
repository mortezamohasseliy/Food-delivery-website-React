function OrderTypeModal({ onClose, onDelivery, onCollection }) {
  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        bg-black/70
        flex
        items-center
        justify-center
        p-4
      "
    >
      {/* MODAL */}
      <section
        className="
          relative
          w-full
          max-w-[830px]
          h-auto
          min-h-[576px]
          bg-white
          rounded-none
          shadow-2xl
          flex
          flex-col
          items-center
          px-6
          py-12

          sm:px-10
          sm:py-14

          md:px-20
          md:py-20
          md:rounded-[2px]
        "
      >
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            -top-8
            -right-8

            w-16
            h-16

            rounded-full
            bg-[#03081F]

            flex
            items-center
            justify-center

            cursor-pointer
            z-50
          "
        >
          <img
            src="/images/close.png"
            alt="Close"
            className="
              w-7
              h-7
              object-contain
            "
          />
        </button>

        {/* TITLE */}
        <div className="text-center">
          <h1
            className="
              font-bold
              text-[#03081F]
              text-[38px]
              leading-[1.1]

              sm:text-[44px]
              md:text-[52px]
            "
          >
            Order Now
          </h1>

          <p
            className="
              mt-2
              text-[#03081F]
              font-normal
              text-[16px]
              leading-5

              sm:text-[17px]
            "
          >
            Minimum Delivery is <span className="font-bold">£10</span>
          </p>
        </div>

        {/* OPTIONS */}
        <div
          className="
            w-full
            max-w-[367px]
            mt-16

            flex
            flex-col
            gap-9
          "
        >
          {/* DELIVERY */}
          <button
            type="button"
            onClick={onDelivery}
            className="
              w-full
              h-20

              rounded-full
              bg-[#03081F]

              flex
              items-center
              px-8
              gap-8

              text-white
              cursor-pointer
            "
          >
            {/* SCOOTER ICON */}
            <svg
              width="42"
              height="42"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M14 37C16.7614 37 19 34.7614 19 32C19 29.2386 16.7614 27 14 27C11.2386 27 9 29.2386 9 32C9 34.7614 11.2386 37 14 37Z"
                stroke="#39B900"
                strokeWidth="3"
              />
              <path
                d="M37 37C39.7614 37 42 34.7614 42 32C42 29.2386 39.7614 27 37 27C34.2386 27 32 29.2386 32 32C32 34.7614 34.2386 37 37 37Z"
                stroke="#39B900"
                strokeWidth="3"
              />
              <path
                d="M14 27H29L34 19H39"
                stroke="#39B900"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M29 27L25 14H20"
                stroke="#39B900"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M18 14H25"
                stroke="#39B900"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M39 19L43 19"
                stroke="#39B900"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            <span
              className="
                font-bold
                text-[16px]
                sm:text-[18px]
                md:text-[17px]
                whitespace-nowrap
              "
            >
              Delivery my order
            </span>
          </button>

          {/* COLLECTION */}
          <button
            type="button"
            onClick={onCollection}
            className="
              w-full
              h-20

              rounded-full
              bg-[#FC8A06]

              flex
              items-center
              px-8
              gap-8

              text-[#03081F]
              cursor-pointer
            "
          >
            {/* COLLECTION ICON */}
            <svg
              width="42"
              height="42"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M10 20H38L35 12H13L10 20Z"
                stroke="#03081F"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path d="M12 20V36H36V20" stroke="#03081F" strokeWidth="3" />
              <path
                d="M18 20V27"
                stroke="#03081F"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M30 20V27"
                stroke="#03081F"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle
                cx="35"
                cy="34"
                r="6"
                fill="#FC8A06"
                stroke="#03081F"
                strokeWidth="3"
              />
              <path
                d="M35 31V37"
                stroke="#03081F"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M32 34H38"
                stroke="#03081F"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            <span
              className="
                font-bold
                text-[16px]
                sm:text-[18px]
                md:text-[17px]
                whitespace-nowrap
              "
            >
              I will come & Collect
            </span>
          </button>
        </div>

        {/* OR */}
        <div
          className="
            w-full
            max-w-[320px]
            mt-12

            flex
            items-center
            gap-7
          "
        >
          <div className="h-[2px] flex-1 bg-[#FC8A06]" />

          <span
            className="
              font-bold
              text-[16px]
              text-[#03081F]
            "
          >
            or
          </span>

          <div className="h-[2px] flex-1 bg-[#FC8A06]" />
        </div>

        {/* CANCEL */}
        <button
          type="button"
          onClick={onClose}
          className="
            mt-4

            font-bold
            text-[#03081F]
            text-[15px]

            underline
            cursor-pointer
          "
        >
          Cancel & Go back
        </button>
      </section>
    </div>
  );
}

export default OrderTypeModal;
