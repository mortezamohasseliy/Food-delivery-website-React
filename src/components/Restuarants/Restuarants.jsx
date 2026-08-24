import Header from "../Home/header/Header";
import Navbar from "../Home/navbar/Navbar";
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
        <div className="md:w-124 md:h-61.25  md:flex md:items-center border">
          <div className="md:w-[50%] md:ml-5 md:space-y-5">
            <h2 className="md:font-semibold md:text-[20px] md:leading-5.75 md:text-[#000000]">
              Royal Cheese Burger with extra Fries
            </h2>
            <p className="md:font-normal md:text-[14px] md:leading-6.25">
              1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
            </p>
            <p className="md:font-bold md:text-[18px] md:leading-[100%]">
              GBP 23.10
            </p>
          </div>
          <div className="md:relative md:w-[50%]">
            <img
              className=" md:w-50.75 md:h-49.75 md:rounded-xl md:bg-cover md:object-cover"
              src="../../src/assets/images/burger-1.png"
              alt=""
            />
            <div
              className="md:absolute md:bottom-0 md:right-8 md:w-22 md:h-20.25 md:rounded-tl-[45px] md:rounded-br-xl
            md:bg-[#FFFFFF] md:flex md:items-center md:justify-center"
            >
              <button>
                <img
                  className="md:w-12.25 md:h-12.25"
                  src="../../src/assets/images/plus.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurants;
