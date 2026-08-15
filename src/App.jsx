import Brands from "./components/brands/Brands";
import BrandsCard from "./components/brands/BrandsCard";
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
            className="w-208 h-162.75 absolute bottom-0"
            src="../src/assets/images/use-mobile.png"
            alt=""
          />
          <div className="absolute right-10 top-50 flex items-center">
            <Logo />
            <span className="w-26 h-25.5 font-bold text-[68px] tracking-[-6%]">
              ing
            </span>
            <span className="w-57.75 h-25.5 font-bold text-[68px] tracking-[-6%]">
              is more{" "}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
