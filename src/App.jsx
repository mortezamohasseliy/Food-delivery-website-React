import Brands from "./components/Home/brands/Brands";
import DiscountOffer from "./components/Home/discount-offers/DiscountOffer";
import Download from "./components/Home/download/Download";
import Footer from "./components/Home/footer/Footer";
import Header from "./components/Home/header/Header";
import Navbar from "./components/Home/navbar/Navbar";
import Order from "./components/Home/order/Order";
import SignUp from "./components/Home/Signup/SignUp";
import About from "./components/Home/about/About";
import Stats from "./components/Home/stats/Stats";
import Landing from "./components/Home/landing/Landing";

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
        <Landing />
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
