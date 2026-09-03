import Header from "../Home/header/Header";
import Navbar from "../Home/navbar/Navbar";
import FilterCategories from "./FilterCategories";
import RestaurantLandingPage from "./RestaurantLandingPage";
import RestaurantOfferCards from "./RestaurantOfferCards";
import ReviewCardSlider from "./ReviewCardSlider";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMap from "./RestaurantMap";
import Brands from "../Home/brands/Brands";
import Footer from "../Home/footer/Footer";
import RestaurantProducts from "./RestaurantProducts";
import { useState } from "react";

function Restaurants({ onOrder, onSpecialOffersClick, cart }) {
  const [selectedCategory, setSelectedCategory] = useState("Offers");
  return (
    <div className="w-full flex flex-col mx-auto">
      {/* Header */}
      <div className="order-2 lg:order-1">
        <Header cart={cart} />
      </div>

      {/* Navbar */}
      <div className="order-1 lg:order-2">
        <Navbar onSpecialOffersClick={onSpecialOffersClick} />
      </div>

      {/* Restaurant landing page */}
      <div className="order-3 lg:order-3">
        <RestaurantLandingPage
          text={"I'm lovin' it!"}
          title={"McDonald’s East London"}
          cover={"../images/burger.png"}
        />
      </div>

      {/* Filter categories section */}
      <div className="order-4">
        <FilterCategories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {/* Restaurant offer cards */}
      <div className="order-5">
        <RestaurantOfferCards />
      </div>

      {/* Products */}
      <div className="order-6">
        <RestaurantProducts
          onOrder={onOrder}
          selectedCategory={selectedCategory}
        />
      </div>

      {/* Info section */}
      <div className="order-7">
        <RestaurantInfo />
      </div>

      {/* Restaurant Location */}
      <div className="order-8">
        <RestaurantMap />
      </div>

      {/* Reviews */}
      <div className="order-9">
        <ReviewCardSlider />
      </div>

      {/* Similar Restaurants */}
      <div className="order-10">
        <Brands title="Similar Restaurants" />
      </div>

      {/* Footer */}
      <div className="order-11">
        <Footer />
      </div>
    </div>
  );
}

export default Restaurants;
