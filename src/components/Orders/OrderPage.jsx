import Header from "../Home/header/Header";
import Navbar from "../Home/navbar/Navbar";
import RestaurantLandingPage from "../Restuarants/RestaurantLandingPage";

function OrderPage() {
  return (
    <section className="w-full flex flex-col mx-auto">
      {/* header */}
      <div className="order-2 md:order-1">
        <Header />
      </div>
      {/* navbar */}
      <div className="order-1 md:order-2">
        <Navbar />
      </div>
      {/* orderPage landing page */}
      <div className="order-3">
        <RestaurantLandingPage
          text={"Desi Flavours with a blend of Italian aesthetics!"}
          title={"Tandoori Pizza London"}
          cover={"../../src/assets/images/order-cover.png"}
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
              src="../../src/assets/images/search.png"
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
    </section>
  );
}
export default OrderPage;
