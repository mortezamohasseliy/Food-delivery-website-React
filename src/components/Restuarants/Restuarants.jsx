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

function Restaurants({ cart, setCart, selectedProduct, setSelectedProduct }) {
  return (
    <div className="w-full flex flex-col mx-auto">
      {/* header */}
      <div className="order-2 lg:order-1">
        <Header />
      </div>
      {/* navbar */}
      <div className="order-1 lg:order-2">
        <Navbar />
      </div>
      {/* restaurant landing page */}
      <div className="order-3 lg:order-3">
        <RestaurantLandingPage
          text={"I'm lovin' it!"}
          title={"McDonald’s East London"}
          cover={"../../src/assets/images/burger.png"}
        />
      </div>
      {/* filter categories section */}
      <div className="order-4">
        <FilterCategories />
      </div>
      {/* Restaurant offercards */}
      <div className="order-5">
        <RestaurantOfferCards />
      </div>
      {/* Products card */}
      <div className="order-6">
        <RestaurantProducts setSelectedProduct={setSelectedProduct} />
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
        {/* Review Card Slider */}
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
