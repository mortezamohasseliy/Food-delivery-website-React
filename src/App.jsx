import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import OrderPage from "./components/Orders/OrderPage";
import Restaurants from "./components/Restuarants/Restuarants";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/order" element={<OrderPage />} />
    </Routes>
  );
}

export default App;
