import Brands from "./components/brands/Brands";
import DiscountOffer from "./components/discount-offers/DiscountOffer";
import Download from "./components/download/Download";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Order from "./components/order/Desktop/OrderDesktop";
import SignUp from "./components/Sign-Up/Signup";

function App() {
  return (
    <div className="w-full flex flex-col">
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
        <section className="w-full h-220.5 bg-[#D9D9D9] mt-10 p-10">
          <div className="flex items-center justify-between">
            <h1 className="w-87.75 h-12 font-bold text-[32px]">
              Know more about us!
            </h1>
            <ul className="flex items-center space-x-20 text-[16px] font-normal">
              <li className="font-bold border border-[#FC8A06] p-5 rounded-[120px]">
                Frequent Questions{" "}
              </li>
              <li> Who we are? </li>
              <li>Partner Program</li>
              <li>Help & Support</li>
            </ul>
          </div>

          <div
            className="w-322.5 h-131.5 rounded-xl bg-[#FFFFFF] mx-auto mt-10 flex
           justify-between items-center p-5"
          >
            {/* questions */}
            <div className="flex flex-col space-y-10">
              <button
                className="w-86.5 h-15.5 rounded-[120px] bg-[#FC8A06]
              font-bold text-[18px] tracking-[-2%]"
              >
                How does Order.UK work?
              </button>
              <button className="w-88 h-6.75 font-bold text-[18px] tracking-[-2%]">
                What payment methods are accepted?
              </button>
              <button className="w-88 h-6.75 font-bold text-[18px] tracking-[-2%]">
                Can I track my order in real-time?
              </button>
              <button className="w-88 h-6.75 font-bold text-[18px] tracking-[-2%]">
                Are there any special discounts or promotions available?
              </button>
              <button className="w-88 h-6.75 mt-3 font-bold text-[18px] tracking-[-2%]">
                Is Order.UK available in my area?
              </button>
            </div>
            {/* answers */}
            <div className="flex items-center gap-5">
              <div
                className="w-59.5 h-71.25 rounded-xl bg-[#D9D9D9] flex flex-col items-center
              justify-center text-center space-y-3"
              >
                <h3 className="font-bold text-[18px] tracking-[-2%] leading-[100%]">
                  Place an Order!
                </h3>
                <img
                  className="w-32 h-32 "
                  src="../src/assets/images/order-food.png"
                  alt=""
                />
                <p className="font-medium text-[16px] leading-6.25 tracking-[-2%]">
                  Place order through our website or Mobile app
                </p>
              </div>

              <div
                className="w-59.5 h-71.25 rounded-xl bg-[#D9D9D9] flex flex-col items-center
              justify-center text-center space-y-3"
              >
                <h3 className="font-bold text-[18px] tracking-[-2%] leading-[100%]">
                  Track Progress
                </h3>
                <img
                  className="w-32 h-32 "
                  src="../src/assets/images/drink.png"
                  alt=""
                />
                <p className="font-medium text-[16px] leading-6.25 tracking-[-2%]">
                  Your can track your order status with delivery time
                </p>
              </div>

              <div
                className="w-59.5 h-71.25 rounded-xl bg-[#D9D9D9] flex flex-col items-center
              justify-center text-center space-y-3"
              >
                <h3 className="font-bold text-[18px] tracking-[-2%] leading-[100%]">
                  Get your Order!
                </h3>
                <img
                  className="w-32 h-32 "
                  src="../src/assets/images/order.png"
                  alt=""
                />
                <p className="font-medium text-[16px] leading-6.25 tracking-[-2%]">
                  Receive your order at a lighting fast speed!
                </p>
              </div>
            </div>
          </div>
          {/* <div className="">
            Order.UK simplifies the food ordering process. Browse through our
            diverse menu, select your favorite dishes, and proceed to checkout.
            Your delicious meal will be on its way to your doorstep in no time!
          </div> */}
        </section>
      </div>
    </div>
  );
}

export default App;
