import Brands from "../Home/brands/Brands";
import Footer from "../Home/footer/Footer";
import Header from "../Home/header/Header";
import Navbar from "../Home/navbar/Navbar";
import RestaurantInfo from "../Restuarants/RestaurantInfo";
import RestaurantLandingPage from "../Restuarants/RestaurantLandingPage";
import RestaurantMap from "../Restuarants/RestaurantMap";
import ReviewCardSlider from "../Restuarants/ReviewCardSlider";
import Basket from "./Basket";
import Menu from "./Menu";
import OrderCard from "./OrderCard";

function OrderPage({ cart, setCart, onSpecialOffersClick }) {
  return (
    <section className="w-full flex flex-col mx-auto">
      {/* header */}
      <div className="order-2 md:order-1">
        <Header cart={cart} />
      </div>
      {/* navbar */}
      <div className="order-1 md:order-2">
        <Navbar onSpecialOffersClick={onSpecialOffersClick} />
      </div>
      {/* orderPage landing page */}
      <div className="order-3">
        <RestaurantLandingPage
          text={"Desi Flavours with a blend of Italian aesthetics!"}
          title={"Tandoori Pizza London"}
          cover={"../../assets/images/order-cover.png"}
        />
      </div>

      <div className="order-4">
        <div className="flex flex-col gap-5 px-4 md:flex-row md:items-center md:justify-between md:px-5 mt-10">
          <h1 className="text-[18px] font-bold leading-[100%] md:text-[32px]">
            Order from Tandoori Pizza London
          </h1>

          {/* Search */}
          <div className="relative w-full md:w-86">
            <img
              className="absolute left-5 top-1/2 h-6.5 w-6.5 -translate-y-1/2"
              src="../../assets/images/search.png"
              alt=""
            />

            <input
              className="h-15.75 w-full rounded-[120px] border border-[#03081F] pl-15 pr-5 outline-none
        placeholder:text-[16px] placeholder:font-semibold
        md:placeholder:text-[18px]"
              type="text"
              placeholder="Search from menu..."
            />
          </div>
        </div>
      </div>

      {/*  */}
      <div className="order-5">
        <div className="md:flex md:items-center md:justify-between md:gap-2 md:mt-5">
          <div>
            <Menu />
          </div>
          <div>
            <div
              className="md:flex md:items-center md:justify-between md:p-3 md:mb-5
            flex items-center justify-around mt-5 mb-5"
            >
              <h1 className="font-semibold text-[32px] text-[#000000]">
                Pizzas
              </h1>
              {/* Sort Orders */}
              <div className="relative w-51.75 md:w-86">
                <img
                  className="absolute right-5 top-1/2 h-6.5 w-6.5 -translate-y-1/2"
                  src="../../assets/images/arrow-bottom-2.png"
                  alt=""
                />

                <select
                  className="h-15.75 w-full rounded-[120px] border border-[#CFCFCF] bg-[#F6F6F6] appearance-none outline-none
                pl-10"
                >
                  <option value="">Sort by Pricing</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
            </div>
            <OrderCard
              image="../../assets/images/pizza-1.png"
              setCart={setCart}
              title="Farm House Xtreme Pizza"
              details="1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
            French Fries, 3 cold drinks"
            />
            <OrderCard
              image="../../assets/images/pizza-2.png"
              setCart={setCart}
              title="Deluxe Pizza"
              details=" 1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
            French Fries, 3 cold drinks"
            />
            <OrderCard
              image="../../assets/images/pizza-3.png"
              setCart={setCart}
              title="Tandoori Pizza"
              details=" 1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
            French Fries, 3 cold drinks"
            />
          </div>
          <div className="hidden md:block">
            {/* Open until */}
            <button
              className="
          md:w-91.75 md:h-31.25
          md:bg-[#FC8A06]
          md:flex md:items-center md:justify-center
          md:text-white md:gap-4.25 md:rounded-lg md:mb-5
          hidden
        "
            >
              <span>
                <img
                  className="md:w-14.5 md:h-14.5"
                  src="../../assets/images/clock.png"
                  alt=""
                />
              </span>

              <span className="md:font-semibold md:text-[18px] leading-16.5 tracking-normal">
                Open until 3:00 AM
              </span>
            </button>
            <Basket cart={cart} setCart={setCart} />
          </div>
        </div>
      </div>

      <div className="order-6">
        <RestaurantInfo />
      </div>

      <div className="order-7">
        <RestaurantMap />
      </div>

      <div className="order-8">
        <ReviewCardSlider />
      </div>

      <div className="order-9">
        <Brands title="Similar Restaurants" />
      </div>

      <div className="order-10">
        <Footer />
      </div>
    </section>
  );
}
export default OrderPage;
