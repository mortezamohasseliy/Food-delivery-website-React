import { boxes } from "../../data/data";

function CustomizePizza() {
  return (
    <section
      className="h-auto border md:pl-50.25 md:pr-50.25
    md:pt-75 md:pb-75"
    >
      <div className="md:relative">
        {/* Header  */}
        <img
          className="w-full h-70 object-cover"
          src="../src/assets/images/pizza-5.png"
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
          <img
            className="w-7.5 h-7.5"
            src="../src/assets/images/Forward.png"
            alt=""
          />
          <h4 className="md:font-bold md:text-[24px] md:leading-14.5 md:text-[#03081F]">
            Customise Pizza 1
          </h4>
        </div>
        <div className="md:flex md:items-center md:justify-between">
          <p className="font-normal text-[32px] leading-10 md:pl-30 md:mt-5 md:mb-13">
            Customise your chicken Pizza
          </p>
          <p className="font-bold md:text-[24px] md:leading-14.5">
            4/4 Selected
          </p>
        </div>
        <div className="flex items-center gap-5">
          <img
            className="md:w-28.25 md:h-28.25 rounded-full bg-cover"
            src="../src/assets/images/Polo.png"
            alt=""
          />
          <p className="w-0.5 h-20 bg-gray-400"></p>
          <p className="font-bold md:text-[44px] md:leading-10 text-[#FC8A06]">
            Please select up to 4 options free!
          </p>
        </div>
      </div>
      {/* Vegitable Toppings checkboxes */}
      <div className="md:h-95.25 md:rounded-xl shadow-sm md:mt-5 p-3">
        <div className="md:grid md:grid-cols-3 md:place-items-center space-y-10">
          {/* Cheese */}
          {boxes.map((box, index) => (
            <div className="flex items-center justify-center" key={index}>
              <input
                className="md:w-11.25 md:h-11.25 rounded-xl accent-[#028643]"
                type="checkbox"
              />
              <label className="font-bold md:text-[32px]">{box}</label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default CustomizePizza;
