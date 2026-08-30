import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import OrderPage from "./components/Orders/OrderPage";
import Restaurants from "./components/Restuarants/Restuarants";
import SpecialRequest from "./components/Orders/SpecialRequest";
import CustomizePizza from "./components/Orders/CustomizePizza";
import MealDeals from "./components/Orders/MealDeals";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/restaurants" element={<Restaurants />} />
    //   <Route path="/order" element={<OrderPage />} />
    // </Routes>

    <MealDeals />
  );
}

export default App;
