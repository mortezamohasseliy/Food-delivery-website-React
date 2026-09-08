import { useState } from "react";

function getPrice(price) {
  return Number(String(price).replace(/[^\d.]/g, ""));
}

function Basket({ cart, setCart }) {
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  function applyCoupon() {
    if (coupon.trim().toUpperCase() === "SAVE3") {
      setDiscount(3);
    } else {
      setDiscount(0);
    }
  }

  const subTotal = cart.reduce((total, item) => {
    return total + getPrice(item.price) * (item.quantity || 1);
  }, 0);

  const deliveryFee = deliveryMethod === "delivery" ? 2.5 : 0;

  const total = subTotal - discount + deliveryFee;

  return (
    <section
      className="
        md:w-91.75
        md:h-auto
        md:rounded-tl-xl
        md:rounded-tr-xl
        md:mx-auto
        md:bg-[#F7F8FA]
        md:shadow-xl

        w-full
        bg-[#F7F8FA]
        rounded-t-xl
        overflow-hidden
        shadow-lg
      "
    >
      {/* HEADER */}
      <div
        className="
          md:h-29.25
          md:bg-[#03081F]
          md:text-white
          md:flex
          md:justify-evenly
          md:items-center
          md:rounded-tl-xl
          md:rounded-tr-xl

          h-20
          bg-[#03081F]
          text-white
          flex
          items-center
          justify-center
          gap-4
        "
      >
        <div
          className="
            md:w-14.5
            md:h-14.5

            w-10
            h-10

            rounded-full
            bg-[#FC8A06]

            flex
            items-center
            justify-center

            shadow-lg
          "
        >
          <img
            className="md:w-10 md:h-10 w-7 h-7 object-contain"
            src="/images/pucket.webp"
            alt=""
          />
        </div>

        <h2 className="font-semibold md:text-[32px] text-[24px]">My Basket</h2>
      </div>

      {/* ITEMS */}
      <div className="px-3 md:px-0">
        {cart.length === 0 ? (
          <div
            className="
              py-10
              flex
              flex-col
              items-center
              justify-center
              text-center
            "
          >
            <div
              className="
                w-16
                h-16
                rounded-full
                bg-[#FFF1DF]
                flex
                items-center
                justify-center
                mb-3
              "
            >
              <img
                src="/images/pucket.webp"
                alt=""
                className="w-9 h-9 object-contain"
              />
            </div>

            <p className="font-semibold text-[16px] text-[#03081F]">
              Your basket is empty
            </p>

            <p className="text-[13px] text-gray-500 mt-1">
              Add something delicious!
            </p>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="
                md:min-h-30.25
                md:flex
                md:items-center
                md:justify-around
                md:mt-6

                min-h-27
                border
                border-[#E5E7EB]
                bg-white
                rounded-xl
                flex
                items-center
                justify-between
                gap-3
                px-3
                py-3
                mt-3

                shadow-sm
                transition-all
                duration-200

                hover:border-[#FC8A06]
                hover:shadow-md
              "
            >
              {/* Quantity */}
              <p
                className="
                  md:w-11.25
                  md:h-11.25
                  md:bg-[#FC8A06]
                  md:rounded-full
                  md:flex
                  md:items-center
                  md:justify-center
                  md:font-bold
                  md:text-[24px]
                  md:text-white

                  w-10
                  h-10
                  shrink-0
                  bg-[#FC8A06]
                  rounded-full
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-[18px]
                  text-white

                  shadow-md
                "
              >
                {item.quantity || 1}x
              </p>

              {/* Information */}
              <div
                className="
                  min-w-0
                  flex-1
                  space-y-1
                  md:space-y-2
                "
              >
                {/* Price */}
                <p
                  className="
                    font-bold
                    text-[17px]
                    md:text-[20px]
                    text-[#028643]
                  "
                >
                  £{(getPrice(item.price) * (item.quantity || 1)).toFixed(2)}
                </p>

                {/* Product Title */}
                <h3
                  className="
                    font-semibold
                    text-[14px]
                    md:text-[16px]
                    text-[#03081F]
                    leading-5
                    md:leading-6

                    wrap-break-word
                    overflow-wrap-anywhere
                  "
                >
                  {item.title || item.name}
                </h3>

                {/* Size */}
                {item.size && (
                  <p
                    className="
                      text-[12px]
                      md:text-[14px]
                      text-[#6B7280]
                      wrap-break-word
                    "
                  >
                    {item.size}
                  </p>
                )}

                {/* Details */}
                {(item.details || item.description) && (
                  <p
                    className="
                      font-normal
                      text-[12px]
                      md:text-[15px]
                      leading-4
                      md:leading-4.5
                      text-[#6B7280]

                      wrap-break-word
                      overflow-wrap-anywhere
                    "
                  >
                    {item.details || item.description}
                  </p>
                )}
              </div>

              {/* Delete */}
              <button
                type="button"
                onClick={() =>
                  setCart((currentCart) =>
                    currentCart.filter((cartItem) => cartItem.id !== item.id),
                  )
                }
                className="
                  md:w-10
                  md:h-10

                  w-8
                  h-8

                  shrink-0

                  rounded-full

                  bg-[#FFF1F0]

                  flex
                  items-center
                  justify-center

                  cursor-pointer

                  transition-all
                  duration-200

                  hover:bg-[#FFE0DD]
                  hover:scale-105
                "
              >
                <img
                  className="
                    md:w-6
                    md:h-6

                    w-5
                    h-5

                    object-contain
                  "
                  src="/images/trash-2.webp"
                  alt="Remove item"
                />
              </button>
            </div>
          ))
        )}
      </div>

      {/* AMOUNTS */}
      <div
        className="
          md:grid
          md:grid-cols-2
          md:place-items-center
          md:h-47.5
          md:border-b
          md:border-b-[#E5E7EB]
          md:mt-5

          grid
          grid-cols-2
          items-center
          gap-y-3
          px-5
          py-5
          mt-4
          border-b
          border-[#E5E7EB]
        "
      >
        <p className="font-semibold md:text-[20px] text-[15px] text-[#03081F]">
          Sub Total:
        </p>

        <p className="text-right md:text-[24px] text-[18px] font-semibold text-[#03081F]">
          £{subTotal.toFixed(2)}
        </p>

        <p className="font-semibold md:text-[20px] text-[15px] text-[#03081F]">
          Discounts:
        </p>

        <p
          className={`
            text-right
            md:text-[24px]
            text-[18px]
            font-semibold
            ${discount > 0 ? "text-[#028643]" : "text-[#03081F]"}
          `}
        >
          -£{discount.toFixed(2)}
        </p>

        <p className="font-semibold md:text-[20px] text-[15px] text-[#03081F]">
          Delivery Fee:
        </p>

        <p className="text-right md:text-[24px] text-[18px] font-semibold text-[#03081F]">
          £{deliveryFee.toFixed(2)}
        </p>
      </div>

      {/* TOTAL */}
      <div
        className="
          md:w-85.5
          md:h-17.5
          md:bg-[#FC8A06]
          md:mt-5
          md:mx-auto
          md:rounded-xl
          md:flex
          md:items-center
          md:justify-center
          md:gap-10
          md:text-white
          md:shadow-lg

          w-[92%]
          min-h-15
          bg-[#FC8A06]
          mt-4
          mx-auto
          rounded-xl
          flex
          items-center
          justify-center
          gap-5
          text-white

          shadow-md
        "
      >
        <p className="font-semibold md:text-[20px] text-[16px]">Total to pay</p>

        <p className="font-bold md:text-[36px] text-[25px]">
          £{total.toFixed(2)}
        </p>
      </div>

      {/* COUPON */}
      <div
        className="
          md:flex
          md:flex-col
          md:items-center
          md:justify-center
          md:gap-5
          md:mt-2

          flex
          flex-col
          items-center
          gap-3
          mt-4
          px-3
        "
      >
        {/* Free Item */}
        <div className="relative w-full md:w-86">
          <img
            className="
              absolute
              right-5
              top-1/2
              h-5
              w-5
              md:h-6.5
              md:w-6.5
              -translate-y-1/2
            "
            src="/images/arrow-bottom.webp"
            alt=""
          />

          <input
            className="
              h-13
              md:h-15.75
              w-full
              rounded-[120px]

              border
              border-[#D9DCE1]

              bg-white

              pl-5
              pr-14

              outline-none

              text-[#03081F]

              placeholder:text-[14px]
              placeholder:font-semibold
              placeholder:text-[#8A8F98]

              md:placeholder:text-[18px]

              focus:border-[#FC8A06]
              focus:ring-2
              focus:ring-[#FC8A06]/20

              transition-all
            "
            type="text"
            placeholder="Choose your free item.."
          />
        </div>

        {/* Coupon Code */}
        <div className="relative w-full md:w-86">
          <button
            onClick={applyCoupon}
            type="button"
            className="
              absolute
              right-0
              top-0

              w-14
              h-full

              flex
              items-center
              justify-center

              cursor-pointer
              z-10
            "
          >
            <img
              className="
                h-5
                w-5
                md:h-6.5
                md:w-6.5
              "
              src="/images/arrow-right-2.webp"
              alt=""
            />
          </button>

          <input
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="
              h-13
              md:h-15.75
              w-full
              rounded-[120px]

              border
              border-[#D9DCE1]

              bg-white

              pl-5
              pr-14

              outline-none

              text-[#03081F]

              placeholder:text-[14px]
              placeholder:font-semibold
              placeholder:text-[#8A8F98]

              md:placeholder:text-[18px]

              focus:border-[#028643]
              focus:ring-2
              focus:ring-[#028643]/20

              transition-all
            "
            type="text"
            placeholder="Apply Coupon Code here"
          />
        </div>

        <p
          className="
            w-full
            border
            border-[#E5E7EB]
          "
        />
      </div>

      {/* DELIVERY / COLLECTION */}
      <div
        className="
          md:flex
          md:items-center
          md:justify-around
          md:mt-2

          flex
          items-center
          justify-center
          gap-3
          mt-4
          px-3
        "
      >
        {/* Delivery */}
        <div
          onClick={() => setDeliveryMethod("delivery")}
          className={`
            md:w-39.5
            md:h-28.75

            cursor-pointer
            w-1/2
            h-27
            rounded-xl
            flex
            flex-col
            items-center
            justify-center
            gap-1

            border

            transition-all
            duration-200

            ${
              deliveryMethod === "delivery"
                ? "bg-[#FC8A06] border-[#FC8A06] text-white shadow-lg scale-[1.02]"
                : "bg-white border-[#E5E7EB] text-[#03081F] hover:border-[#FC8A06]"
            }
          `}
        >
          <img
            className="w-8.75 h-8.75 object-contain"
            src="/images/scooter.webp"
            alt=""
          />

          <h3 className="font-semibold text-[14px] md:text-[16px]">Delivery</h3>

          <p
            className={`
              font-normal
              text-[12px]
              md:text-[15px]

              ${
                deliveryMethod === "delivery"
                  ? "text-white/90"
                  : "text-gray-500"
              }
            `}
          >
            Starts at 17:50
          </p>
        </div>

        {/* Collection */}
        <div
          onClick={() => setDeliveryMethod("collection")}
          className={`
            md:w-39.5
            md:h-28.75

            cursor-pointer
            w-1/2
            h-27
            rounded-xl
            flex
            flex-col
            items-center
            justify-center
            gap-1

            border

            transition-all
            duration-200

            ${
              deliveryMethod === "collection"
                ? "bg-[#FC8A06] border-[#FC8A06] text-white shadow-lg scale-[1.02]"
                : "bg-white border-[#E5E7EB] text-[#03081F] hover:border-[#FC8A06]"
            }
          `}
        >
          <img
            className="w-8.75 h-8.75 object-contain"
            src="/images/collection.webp"
            alt=""
          />

          <h3 className="font-semibold text-[14px] md:text-[16px]">
            Collection
          </h3>

          <p
            className={`
              font-normal
              text-[12px]
              md:text-[15px]

              ${
                deliveryMethod === "collection"
                  ? "text-white/90"
                  : "text-gray-500"
              }
            `}
          >
            Starts at 16:50
          </p>
        </div>
      </div>

      {/* CHECKOUT */}
      <div className="relative w-[92%] md:w-86 mx-auto mt-4 mb-4">
        <img
          className="
            absolute
            left-5
            top-1/2
            h-7
            w-7
            md:h-8.75
            md:w-8.75
            -translate-y-1/2

            z-10
          "
          src="/images/arrow.webp"
          alt=""
        />

        <button
          className="
            h-15
            md:h-17.5
            w-full

            rounded-xl

            bg-[#028643]

            font-semibold
            text-[20px]
            md:text-[24px]

            text-white

            shadow-lg

            transition-all
            duration-200

            hover:bg-[#02753A]
            hover:shadow-xl
            hover:scale-[1.01]

            cursor-pointer
          "
        >
          Checkout!
        </button>
      </div>
    </section>
  );
}

export default Basket;
