import Brands from "./components/brands/Brands";
import DiscountOffer from "./components/discount-offers/DiscountOffer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Logo from "./components/logo/Logo";
import Navbar from "./components/navbar/Navbar";
import Order from "./components/order/Desktop/OrderDesktop";

function App() {
  return (
    <div className="max-w-360 flex flex-col">
      {/* Header */}
      <div className="order-2 lg:order-1">
        <Header />
      </div>

      {/* Navbar */}
      <div className="order-1 lg:order-2">
        <Navbar />
      </div>

      {/* landing page */}
      <div className="order-3 lg:order-3">
        <Hero />
      </div>

      <div className="order-4">
        <DiscountOffer />
      </div>

      <div className="order-5">
        <Order />
      </div>

      <div className="order-6">
        <Brands />
      </div>

      <div className="order-7">
        <section className="relative w-full h-152.75 mt-10 rounded-lg bg-linear-to-r from-[#E0E1DC] to-[#EEEEEE] p-5">
          <img
            className="w-208 h-162.75 absolute bottom-0 z-10"
            src="../src/assets/images/use-mobile.png"
            alt=""
          />
          <div className="absolute right-10 top-35 flex items-center">
            <Logo />
            <span className="w-26 h-25.5 font-bold text-[68px] tracking-[-6%]">
              ing
            </span>
            <span className="w-57.75 h-25.5 font-bold text-[68px] tracking-[-6%]">
              is more{" "}
            </span>
          </div>
          <div
            className="absolute z-0 w-219.5 h-22.5 bg-[#03081F] rounded-[120px] right-0
            top-58 m-5 flex items-center justify-center"
          >
            <h2 className="absolute w-135 h-20.25 right-0 text-[#FFFFFF]  font-medium text-[54px] tracking-[-6%]">
              <span className="text-[#FC8A06] underline">Personalised</span> &
              Instant
            </h2>
          </div>
          <h2 className="absolute right-10 bottom-50 w-122 h-9 font-normal text-[24px] tracking-[-6%]">
            Download the Order.uk app for faster ordering
          </h2>
          {/* app stores */}
          <div className="absolute right-25 bottom-30 w-103 h-15.25 flex items-center justify-evenly">
            <div className="w-[203.15px] h-[58.25px] bg-cover">
              <img
                className="bg-cover"
                src="../src/assets/images/store.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
