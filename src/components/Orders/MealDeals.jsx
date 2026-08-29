import DealItems from "./DealItems";

function MealDeals() {
  return (
    <section
      className="h-auto border md:pl-50.25 md:pr-50.25
    md:pt-75 md:pb-75"
    >
      <div className="md:relative">
        {/* Header  */}
        <img
          className="w-full h-70 object-cover"
          src="../src/assets/images/pizza-4.png"
          alt=""
        />
        {/* close pop-up */}
        <button
          className="absolute md:w-29 md:h-29 md:rounded-full md:-top-13 md:-right-10
      md:bg-[#FC8A06] flex items-center justify-center"
        >
          <img src="../src/assets/images/close.png" alt="" />
        </button>
        <div className="flex items-center gap-1 pl-20 mt-6">
          <h4 className="md:font-bold md:text-[24px] md:leading-14.5 md:text-[#03081F]">
            Special Offers
          </h4>
          <img
            className="w-7.5 h-7.5"
            src="../src/assets/images/Forward.png"
            alt=""
          />
          <h4 className="md:font-bold md:text-[24px] md:leading-14.5 md:text-[#03081F]">
            Meal Deal 1
          </h4>
        </div>
        <p className="font-normal text-[32px] leading-10 md:pl-30 md:mt-5 md:mb-13">
          Please select your first Pizza
        </p>

        {/* pizza items */}
        <div className="space-y-5">
          <DealItems
            pizzaImage="../src/assets/images/Margherita.png"
            pizzaName="Margherita"
          />
          <DealItems
            pizzaImage="../src/assets/images/Polo.png"
            pizzaName="Polo"
          />
          <DealItems
            pizzaImage="../src/assets/images/Meat Fiest.png"
            pizzaName="Meat Fiest"
          />
          <DealItems
            pizzaImage="../src/assets/images/Hawaiian.png"
            pizzaName="Hawaiian"
          />
          <DealItems
            pizzaImage="../src/assets/images/Margherita.png"
            pizzaName="Toscana"
          />
          <DealItems
            pizzaImage="../src/assets/images/Margherita.png"
            pizzaName="Toscana"
          />
        </div>

        <div className="flex items-center  mt-5">
          {/* total amount */}
          <div
            className="
          md:w-85.5 md:h-17.5
          md:bg-[#FC8A06CC]
          md:mt-5
          md:rounded-lg
          md:flex md:items-center
          md:justify-center md:gap-10
          md:text-white

          w-[92%]
          min-h-15
          bg-[#FC8A06CC]
          mt-4 mx-auto
          rounded-lg
          flex items-center justify-center
          gap-5
          text-white
        "
          >
            <p className="font-semibold md:text-[20px] text-[16px]">
              Total to pay
            </p>

            <p className="font-semibold md:text-[36px] text-[25px]">£127.90</p>
          </div>
          <p className="font-normal md:text-[17px] md:leading-6.25">
            Delivery & Tax will be calculated in the next step
          </p>
        </div>

        <div className="md:flex md:items-center md:justify-center md:mt-10">
          <p className="font-semibold md:text-[24px] underline">Take me back</p>
          <div className="relative w-[92%] md:w-86 mx-auto mt-4 mb-4">
            <img
              className="
            absolute left-5 top-1/2
            h-7 w-7
            md:h-8.75 md:w-8.75
            -translate-y-1/2
          "
              src="../../src/assets/images/arrow.png"
              alt=""
            />

            <button
              className="
            h-15 md:h-17.5
            w-full
            rounded-lg
            bg-[#028643]
            font-semibold
            text-[20px]
            md:text-[24px]
            text-white
          "
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MealDeals;
