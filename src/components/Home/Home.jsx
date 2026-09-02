import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Landing from "./landing/Landing";
import DiscountOffer from "./discount-offers/DiscountOffer";
import Order from "./order/Order";
import Brands from "./brands/Brands";
import Download from "./download/Download";
import SignUp from "./Signup/SignUp";
import About from "./about/About";
import Stats from "./stats/Stats";
import Footer from "./footer/Footer";

function Home({ onSpecialOffersClick }) {
  return (
    <>
      <div className="flex flex-col">
        {/* Navbar */}
        <div className="order-1 lg:order-2">
          <Navbar onSpecialOffersClick={onSpecialOffersClick} />
        </div>

        {/* Header */}
        <div className="order-2 lg:order-1">
          <Header />
        </div>
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
        <Brands title=" Popular Restaurants" />
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
    </>
  );
}
export default Home;
