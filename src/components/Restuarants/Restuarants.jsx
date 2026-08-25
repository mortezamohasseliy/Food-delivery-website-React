import { coldDrinks } from "../../data/offers";
import Header from "../Home/header/Header";
import Navbar from "../Home/navbar/Navbar";
import ProductCard from "./ProductCard";
import FilterCategories from "./FilterCategories";
import RestaurantLandingPage from "./RestaurantLandingPage";
import RestaurantOfferCards from "./RestaurantOfferCards";

function Restaurants() {
  return (
    <div className="w-full flex flex-col mx-auto">
      {/* header */}
      <div className="order-2 lg:order-1">
        <Header />
      </div>
      {/* navbar */}
      <div className="order-1 lg:order-2">
        <Navbar />
      </div>
      {/* restaurant landing page */}
      <div className="order-3 lg:order-3">
        <RestaurantLandingPage />
      </div>
      {/* filter categories section */}
      <div className="order-4">
        <FilterCategories />
      </div>
      {/* Restaurant offercards */}
      <div className="order-5">
        <RestaurantOfferCards />
      </div>
      {/* burger cards */}
      <div className="order-6">
        <section className="md:w-full md:h-61.25 md:mt-10 mt-10 md:p-5 p-3">
          <div>
            <h1 className="md:font-bold font-bold md:text-[44px] text-[20px] md:leading-[100%] md:tracking-normal md:mb-10 mb-10">
              Burgers
            </h1>
            {/* product card */}
            <div className="md:grid md:grid-cols-3 gap-2 grid grid-cols-2">
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
            <div className="md:grid md:grid-cols-3 gap-2 grid grid-cols-2">
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
            <div className="md:grid md:grid-cols-3 gap-2 grid grid-cols-2">
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
      </div>
    </div>
  );
}

export default Restaurants;
