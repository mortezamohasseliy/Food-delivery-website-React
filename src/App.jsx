import { Route, Routes } from "react-router";
import { useState } from "react";

import Home from "./components/Home/Home";
import OrderPage from "./components/Orders/OrderPage";
import Restaurants from "./components/Restuarants/Restuarants";
import MealDeals from "./components/Orders/MealDeals";

function App() {
  const [cart, setCart] = useState([]);
  const [isMealDealsOpen, setIsMealDealsOpen] = useState(false);

  function openMealDeals() {
    setIsMealDealsOpen(true);
  }

  function closeMealDeals() {
    setIsMealDealsOpen(false);
  }

  function handleOrder(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home onSpecialOffersClick={openMealDeals} />}
        />

        <Route
          path="/restaurants"
          element={
            <Restaurants
              onOrder={handleOrder}
              onSpecialOffersClick={openMealDeals}
            />
          }
        />

        <Route
          path="/order"
          element={
            <OrderPage
              cart={cart}
              setCart={setCart}
              onSpecialOffersClick={openMealDeals}
            />
          }
        />
      </Routes>

      {isMealDealsOpen && (
        <MealDeals onClose={closeMealDeals} onNext={() => {}} />
      )}
    </>
  );
}

export default App;
