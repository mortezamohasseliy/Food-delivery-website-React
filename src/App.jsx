import About from "./components/about/About";
import Brands from "./components/brands/Brands";
import DiscountOffer from "./components/discount-offers/DiscountOffer";
import Download from "./components/download/Download";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Order from "./components/order/Order";
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
      {/* offers */}
      <div className="order-4">
        <DiscountOffer />
      </div>
      {/* orders */}
      <div className="order-5">
        <Order />
      </div>
      {/* brands */}
      <div className="order-6">
        <Brands />
      </div>
      {/* download app */}
      <div className="order-7">
        <Download />
      </div>
      {/* sign up */}
      <div className="order-8">
        <SignUp />
      </div>
      {/* about page */}
      <div className="order-9">
        <About />
      </div>
      {/* stats of app */}
      <div className="order-10">
        <Stats />
      </div>
      {/* footer */}
      <div className="order-11">
        <Footer />
      </div>
    </div>
  );
}

export default App;
