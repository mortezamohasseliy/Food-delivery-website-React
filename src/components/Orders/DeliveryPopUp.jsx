import { useState } from "react";

function DeliveryPopUp() {
  const [postCode, setPostCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(true);

  if (!isOpenModal) return null;

  function handleFind(e) {
    e.preventDefault();
    if (!postCode) {
      setError("Sorry, we don’t do delivery to your area.");
      return;
    }

    setSuccess("We deliver to your area.");
    setPostCode("");
    setError("");
  }
  return (
    <div
      className="
        fixed
        inset-0
        z-9999

        bg-black/70

        flex
        items-center
        justify-center

        p-0
        sm:p-4
        md:p-6
      "
    >
      {/* MODAL */}

      <div
        className="
          relative

          w-full
          max-w-225

          bg-white

          rounded-none
          sm:rounded-xl

          shadow-2xl

          overflow-y-auto
          overflow-x-hidden

          max-h-screen

          flex
          flex-col

          md:flex-row
          md:h-155
          md:max-h-[90vh]

          md:overflow-visible
          md:rounded-xl
        "
      >
        {/* CLOSE BUTTON  */}

        <button
          onClick={() => setIsOpenModal(false)}
          type="button"
          className="
            absolute

            top-3
            right-3

            z-100

            w-10
            h-10

            rounded-full

            bg-[#03081F]

            flex
            items-center
            justify-center

            cursor-pointer

            shadow-lg

            sm:top-4
            sm:right-4

            sm:w-11
            sm:h-11

            md:w-12
            md:h-12

            md:-top-5
            md:-right-5
          "
        >
          <img
            className="
              w-5
              h-5

              md:w-6
              md:h-6

              object-contain
            "
            src="/images/Close.png"
            alt="Close"
          />
        </button>

        {/* DELIVERY IMAGE  */}

        <div
          className="
    relative
    w-full
    aspect-396/251

    shrink-0
    overflow-hidden

    md:w-[38%]
    md:h-full
    md:aspect-auto

    md:rounded-l-xl
    md:rounded-tr-none
  "
        >
          <img
            src={`${error ? "/images/delivery-2.png" : `${success ? "/images/delivery-3.png" : "/images/delivery-1.png"}`}`}
            alt="Delivery"
            className="
      block
      w-full
      h-full

      object-cover

      md:w-full
      md:h-full
      md:object-cover
    "
          />
        </div>

        {/* RIGHT CONTENT  */}

        <div
          className="
            w-full
            flex-1

            bg-white

            flex
            items-center
            justify-center

            px-6
            py-10

            sm:px-10
            sm:py-12

            md:w-[62%]
            md:h-full

            md:px-10
            md:py-10
          "
        >
          {/* CONTENT CONTAINER  */}

          <div
            className="
              w-full
              max-w-100

              flex
              flex-col

              items-center
              justify-center

              text-center
            "
          >
            {/* TITLE  */}

            {!success ? (
              <h2
                className="
                w-full

                font-bold

                text-[#03081F]

                text-[24px]
                leading-7

                sm:text-[28px]
                sm:leading-8

                md:text-[32px]
                md:leading-9

                text-left
              "
              >
                Please Enter Your
                <br />
                <span className={`underline ${error ? "text-[#E12B25]" : ""}`}>
                  Post Code
                </span>
              </h2>
            ) : (
              <h2
                className="
                w-full

                font-bold

                text-[#03081F]

                text-[24px]
                leading-7

                sm:text-[28px]
                sm:leading-8

                md:text-[32px]
                md:leading-9

                text-left
              "
              >
                You’re All Set!
                <br />
                <span
                  className={`underline ${error ? "text-[#E12B25]" : ""} : 
                ${success ? "text-[#049801]" : ""}`}
                >
                  Post Code{" "}
                </span>
                Submitted
              </h2>
            )}

            {/* DESCRIPTION   */}

            <p
              className="
                w-full

                mt-5

                font-normal

                text-[#03081F]

                text-[13px]
                leading-5

                sm:text-[14px]
                sm:leading-6

                text-left
              "
            >
              To start placing delivery order, please
              <br className="hidden sm:block" />
              enter your full postcode here
            </p>

            {/* POST CODE INPUT  */}

            <div
              className="
                w-full

                mt-6

                flex
                items-center

                rounded-full

                bg-[#EEEEEE]

                overflow-hidden
              "
            >
              <input
                onChange={(e) => setPostCode(e.target.value)}
                value={postCode}
                type="text"
                placeholder="eg. AA1 1BB"
                className="
                  min-w-0
                  flex-1

                  h-11

                  px-5

                  bg-[#EEEEEE]

                  outline-none

                  text-[#03081F]

                  text-[13px]

                  placeholder:text-gray-500

                  sm:h-12
                  sm:px-6
                "
              />

              <button
                onClick={handleFind}
                type="button"
                className={`
                  h-11

                  px-6

                  shrink-0

                  rounded-full

              ${!error && !success ? "bg-[#FC8A06]" : "bg-[#03081F]"}

                  text-white

                  font-bold

                  text-[16px]

                  flex
                  items-center
                  justify-center

                  sm:h-12
                  sm:px-8
                  sm:text-[17px]
                `}
              >
                {!success ? "Find" : "Change"}
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <p className="font-bold text-[18px] leading-10 text-[#E12B25] mt-5">
                {error}
              </p>
            )}

            {/* Success Message */}
            {success && (
              <p className="font-bold text-[18px] leading-10 text-[#049801] mt-5">
                {success}
              </p>
            )}

            {/* OR DIVIDER   */}
            <div
              className="
                w-full

                flex
                items-center
                justify-center

                gap-4

                mt-5
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

                  text-[13px]

                  text-[#03081F]
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

            {/* COLLECTION LINK */}

            <button
              type="button"
              className="
                mt-3

                font-bold

                text-[#03081F]

                text-[11px]

                underline

                cursor-pointer
              "
            >
              I want to come and collect
            </button>

            {/* MAP ICON  */}

            <div
              className="
                mt-5

                flex
                items-center
                justify-center

                w-full
              "
            >
              <img
                src="/images/map-2.png"
                alt=""
                className="
                  w-32
                  h-32

                  sm:w-36
                  sm:h-36

                  md:w-41.5
                  md:h-41.5

                  object-contain
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryPopUp;
