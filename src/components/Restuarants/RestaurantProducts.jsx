import { coldDrinks } from "../../data/data";
import ProductCard from "./ProductCard";

function RestaurantProducts() {
  return (
    <section className="md:w-full md:h-auto md:mt-10 mt-10 md:p-5 p-3">
      <div>
        <h1 className="md:font-bold font-bold md:text-[44px] text-[20px] md:leading-[100%] md:tracking-normal md:mb-10 mb-10">
          Burgers
        </h1>
        {/* product card */}
        <div className="md:grid md:grid-cols-3 md:gap-5 gap-2 grid grid-cols-2">
          {/* burger cards */}
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductCard
              key={index}
              title="Royal Cheese Burger with extra Fries"
              details="1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium"
              price="GBP 23.10"
              image="../../src/assets/images/burger-1.png"
            />
          ))}
        </div>
      </div>
      {/* fries cards */}
      <div className="mt-10">
        <h1 className="md:font-bold font-bold md:text-[44px] text-[20px] text-[#FC8A06] md:leading-[100%] md:tracking-normal md:mb-10 mb-10">
          Fries
        </h1>
        {/* product card */}
        <div className="md:grid md:grid-cols-3  md:gap-5 gap-2 grid grid-cols-2">
          {/* fries cards */}
          {Array.from({ length: 3 }).map((_, index) => (
            <ProductCard
              key={index}
              title="Royal Cheese Burger with extra Fries"
              details="1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium"
              price="GBP 23.10"
              image="../../src/assets/images/fries.png"
            />
          ))}
          {Array.from({ length: 3 }).map((_, index) => (
            <ProductCard
              key={index}
              title="Royal Cheese Burger with extra Fries"
              details="1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium"
              price="GBP 23.10"
              image="../../src/assets/images/fries-2.png"
            />
          ))}
        </div>
      </div>
      {/* cold drinks */}
      <div className="mt-10">
        <h1 className="md:font-bold font-bold md:text-[44px] text-[20px] text-[#FC8A06] md:leading-[100%] md:tracking-normal md:mb-10 mb-10">
          Cold Drinks
        </h1>
        {/* product card */}
        <div className="md:grid md:grid-cols-3  md:gap-5 gap-2 grid grid-cols-2">
          {/* cold drinks cards */}
          {coldDrinks.map((drink, index) => (
            <ProductCard
              key={index}
              title={drink.title}
              details={drink.details}
              price={drink.price}
              image={drink.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default RestaurantProducts;
