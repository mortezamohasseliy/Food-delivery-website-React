import About from "./components/about/About";
import Brands from "./components/brands/Brands";
import DiscountOffer from "./components/discount-offers/DiscountOffer";
import Download from "./components/download/Download";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Order from "./components/order/Desktop/OrderDesktop";
import SignUp from "./components/Sign-Up/Signup";
import Stats from "./components/stats/Stats";

function App() {
  return (
    <div className="max-w-360 flex flex-col mx-auto">
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
        <Download />
      </div>

      <div className="order-8">
        <SignUp />
      </div>

      <div className="order-9">
        <About />
      </div>

      <div className="order-10">
        <Stats />
      </div>

      <div className="order-11">
        <section className="w-full h-92.75 bg-[#D9D9D9]/60 mt-10 flex justify-between p-3">
          <div>
            <img
              className="w-67 h-16.5 "
              src="../src/assets/images/logo-2.png"
              alt=""
            />
            <img
              className="w-90.25 h-30 bg-cover"
              src="../src/assets/images/store-logoes.png"
              alt=""
            />
            <p
              className="w-77.75 h-11.5 font-normal text-[15px]
            leading-[100%] tracking-normal"
            >
              Company # 490039-445, Registered withHouse of companies.
            </p>
          </div>
          <div>
            <h2
              className="w-75.5 h-10.75 font-bold text-[18px] leading-10.75 tracking-normal
            text-[#03081F]"
            >
              Get Exclusive Deals in your Inbox
            </h2>
            <input
              className="w-[381px] h-[59px] bg-[#D9D9D9] rounded-[120px] outline-none pl-5"
              type="email"
              placeholder="youremail@gmail.com"
            />
          </div>
          <div>legal pages</div>
          <div>important links</div>
        </section>
      </div>
    </div>
  );
}

export default App;
