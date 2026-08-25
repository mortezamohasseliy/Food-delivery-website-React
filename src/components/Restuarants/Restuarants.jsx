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
      {/* Products card */}
      <div className="order-6">
        <section className="md:w-full md:h-auto md:mt-10 mt-10 md:p-5 p-3">
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
      {/* Info section */}
      <div className="order-7">
        <section className="w-full p-3 mt-5 md:h-auto md:mt-10 md:shadow-2xl md:rounded-2xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-5">
            {/* Delivery Information */}
            <div className="p-4">
              <h1 className="flex items-center gap-2 mb-5 text-[20px] font-bold md:mb-10 md:text-[32px]">
                <span>
                  <img
                    className="w-8 h-8 md:w-11.25 md:h-11.25"
                    src="../src/assets/images/location.png"
                    alt=""
                  />
                </span>
                Delivery information
              </h1>

              <p className="text-[13px] leading-6 md:text-[18px] md:leading-12">
                <span className="font-bold">Monday:</span> 12:00 AM–3:00 AM,
                8:00 AM–3:00 AM
                <br />
                <span className="font-bold">Tuesday:</span> 8:00 AM–3:00 AM
                <br />
                <span className="font-bold">Wednesday:</span> 8:00 AM–3:00 AM
                <br />
                <span className="font-bold">Thursday:</span> 8:00 AM–3:00 AM
                <br />
                <span className="font-bold">Friday:</span> 8:00 AM–3:00 AM
                <br />
                <span className="font-bold">Saturday:</span> 8:00 AM–3:00 AM
                <br />
                <span className="font-bold">Sunday:</span> 8:00 AM–12:00 AM
                <br />
                <span className="font-bold">
                  Estimated time until delivery:
                </span>{" "}
                20 min
              </p>
            </div>

            {/* Contact Information */}
            <div className="p-4">
              <h1 className="flex items-center gap-2 mb-5 text-[20px] font-bold md:mb-10 md:text-[32px]">
                <span>
                  <img
                    className="w-8 h-8 md:w-11.25 md:h-11.25"
                    src="../src/assets/images/contact.png"
                    alt=""
                  />
                </span>
                Contact information
              </h1>

              <p className="text-[13px] leading-6 md:text-[18px] md:leading-11.5">
                If you have allergies or other dietary restrictions, please
                contact the restaurant. The restaurant will provide
                food-specific information upon request.
                <br />
                <span className="font-bold">Phone number</span>
                <br />
                +934443-43
                <br />
                <span className="font-bold">Website</span>
                <br />
                <a href="#">http://mcdonalds.uk/</a>
              </p>
            </div>

            {/* Operational Times */}
            <div className="bg-[#03081F] p-4 text-white md:p-0 md:flex md:flex-col md:items-center md:justify-center">
              <h1 className="flex items-center gap-2 mb-5 text-[20px] font-bold md:mb-10 md:text-[32px]">
                <span>
                  <img
                    className="w-8 h-8 md:w-11.25 md:h-11.25"
                    src="../src/assets/images/clock - 2.png"
                    alt=""
                  />
                </span>
                Operational Times
              </h1>

              <p className="text-[13px] leading-6 md:text-[18px] md:leading-12">
                <span className="font-bold">Monday:</span> 8:00 AM–3:00 AM
                <br />
                <span className="font-bold">Tuesday:</span> 8:00 AM–3:00 AM
                <br />
                <span className="font-bold">Wednesday:</span> 8:00 AM–3:00 AM
                <br />
                <span className="font-bold">Thursday:</span> 8:00 AM–3:00 AM
                <br />
                <span className="font-bold">Friday:</span> 8:00 AM–3:00 AM
                <br />
                <span className="font-bold">Saturday:</span> 8:00 AM–3:00 AM
                <br />
                <span className="font-bold">Sunday:</span> 8:00 AM–12:00 AM
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="order-8">
        <section
          className="
    relative w-full h-105 mt-5
    bg-[url('../src/assets/images/map.png')] bg-cover bg-center
    md:relative md:w-full md:h-164.75 md:mt-10
  "
        >
          <div
            className="
      absolute
      w-[85%] min-h-75
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      rounded-xl
      bg-[#03081FF7]
      p-6
      text-white
      flex flex-col justify-center

      md:absolute md:w-116.5 md:h-134.75 md:bg-[#03081FF7]
      md:rounded-xl md:top-12.25 md:left-32.25
      md:translate-x-0 md:translate-y-0
      md:text-white md:p-10
      md:flex md:flex-col md:items-start md:justify-center
    "
          >
            <h1 className="font-bold text-[24px] leading-7 md:font-bold md:text-[32px] md:leading-9.5">
              McDonald’s <br />
              <span className="font-semibold text-[17px] leading-7 text-[#FC8A06] md:font-semibold md:text-[22px] md:leading-9.5">
                South London
              </span>
            </h1>

            <p className="mt-4 font-normal text-[13px] leading-6 md:mt-0 md:font-normal md:text-[18px] md:leading-7.75">
              Tooley St, London Bridge, London SE1 2TF,
              <br />
              United Kingdom
              <br />
              <span className="font-bold text-[14px] leading-8 md:font-bold md:text-[18px] md:leading-11.5">
                Phone number
              </span>
              <br />
              <span className="text-[14px] text-[#FC8A06] md:text-[18px]">
                +934443-43
              </span>
              <br />
              <span className="font-bold text-[14px] leading-8 md:font-bold md:text-[18px] md:leading-11.5">
                Website
              </span>
              <br />
              <span className="text-[14px] text-[#FC8A06] md:text-[18px]">
                http://mcdonalds.uk/
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Restaurants;
