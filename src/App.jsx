import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import OrderPage from "./components/Orders/OrderPage";
import Restaurants from "./components/Restuarants/Restuarants";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route
        path="/order"
        element={<OrderPage cart={cart} setCart={setCart} />}
      />
    </Routes>
  );
}

export default App;
