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
        md:rounded-tl-lg
        md:rounded-tr-lg
        md:mx-auto
        md:bg-[#F9F9F9]

        w-full
        bg-[#F9F9F9]
        rounded-t-lg
        overflow-hidden
      "
    >
      {/* HEADER */}
      <div
        className="
          md:h-29.25
          md:bg-[#028643]
          md:text-white
          md:flex
          md:justify-evenly
          md:items-center
          md:rounded-tl-lg
          md:rounded-tr-lg

          h-20
          bg-[#028643]
          text-white
          flex
          items-center
          justify-center
          gap-4
        "
      >
        <img
          className="md:w-14.5 md:h-14.5 w-10 h-10"
          src="../src/assets/images/pucket.png"
          alt=""
        />

        <h2 className="font-semibold md:text-[32px] text-[24px]">My Basket</h2>
      </div>

      {/* ITEMS */}
      <div className="px-3 md:px-0">
        {cart.length === 0 ? (
          <p className="py-8 text-center text-gray-500 text-[16px]">
            Your basket is empty
          </p>
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
                rounded-lg
                flex
                items-center
                justify-between
                gap-3
                px-3
                py-3
                mt-3
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
                    font-semibold
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
                      text-gray-500
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
                      text-gray-600

                      break-words
                      overflow-wrap-anywhere
                    "
                  >
                    {item.details || item.description}
                  </p>
                )}
              </div>

              {/* Delete */}
              <img
                onClick={() =>
                  setCart((currentCart) =>
                    currentCart.filter((cartItem) => cartItem.id !== item.id),
                  )
                }
                className="
                  md:w-8.75
                  md:h-8.75
                  w-7
                  h-7
                  shrink-0
                  cursor-pointer
                "
                src="../src/assets/images/trash-2.png"
                alt="Remove item"
              />
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
          md:border-b-gray-200
          md:mt-5

          grid
          grid-cols-2
          items-center
          gap-y-3
          px-5
          py-5
          mt-4
          border-b
          border-gray-200
        "
      >
        <p className="font-semibold md:text-[20px] text-[15px]">Sub Total:</p>

        <p className="text-right md:text-[24px] text-[18px]">
          £{subTotal.toFixed(2)}
        </p>

        <p className="font-semibold md:text-[20px] text-[15px]">Discounts:</p>

        <p className="text-right md:text-[24px] text-[18px]">
          -£{discount.toFixed(2)}
        </p>

        <p className="font-semibold md:text-[20px] text-[15px]">
          Delivery Fee:
        </p>

        <p className="text-right md:text-[24px] text-[18px]">
          £{deliveryFee.toFixed(2)}
        </p>
      </div>

      {/* TOTAL */}
      <div
        className="
          md:w-85.5
          md:h-17.5
          md:bg-[#FC8A06CC]
          md:mt-5
          md:mx-auto
          md:rounded-lg
          md:flex
          md:items-center
          md:justify-center
          md:gap-10
          md:text-white

          w-[92%]
          min-h-15
          bg-[#FC8A06CC]
          mt-4
          mx-auto
          rounded-lg
          flex
          items-center
          justify-center
          gap-5
          text-white
        "
      >
        <p className="font-semibold md:text-[20px] text-[16px]">Total to pay</p>

        <p className="font-semibold md:text-[36px] text-[25px]">
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
            src="../../assets/images/arrow-bottom.png"
            alt=""
          />

          <input
            className="
              h-13
              md:h-15.75
              w-full
              rounded-[120px]
              border
              border-[#CFCFCF]
              pl-5
              pr-14
              outline-none
              placeholder:text-[14px]
              placeholder:font-semibold
              md:placeholder:text-[18px]
            "
            type="text"
            placeholder="Choose your free item.."
          />
        </div>

        {/* Coupon Code */}
        <div className="relative w-full md:w-86">
          <button onClick={applyCoupon} type="button">
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
              src="../../assets/images/arrow-right-2.png"
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
              border-[#CFCFCF]
              pl-5
              pr-14
              outline-none
              placeholder:text-[14px]
              placeholder:font-semibold
              md:placeholder:text-[18px]
            "
            type="text"
            placeholder="Apply Coupon Code here"
          />
        </div>

        <p className="w-full border border-[#CFCFCF]" />
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

            ${
              deliveryMethod === "delivery"
                ? "bg-[#FC8A06] text-white"
                : "bg-[#EEEEEE]"
            }
          `}
        >
          <img
            className="w-8.75 h-8.75"
            src="../../assets/images/scooter.png"
            alt=""
          />

          <h3 className="font-semibold text-[14px] md:text-[16px]">Delivery</h3>

          <p className="font-normal text-[12px] md:text-[15px]">
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

            ${
              deliveryMethod === "collection"
                ? "bg-[#FC8A06] text-white"
                : "bg-[#EEEEEE]"
            }
          `}
        >
          <img
            className="w-8.75 h-8.75"
            src="../../assets/images/collection.png"
            alt=""
          />

          <h3 className="font-semibold text-[14px] md:text-[16px]">
            Collection
          </h3>

          <p className="font-normal text-[12px] md:text-[15px]">
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
          "
          src="../../assets/images/arrow.png"
          alt=""
        />

        <button
          className="
            h-15
            md:h-17.5
            w-full
            rounded-lg
            bg-[#028643]
            font-semibold
            text-[20px]
            md:text-[24px]
            text-white
          "
        >
          Checkout!
        </button>
      </div>
    </section>
  );
}

export default Basket;
