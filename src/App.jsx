import Home from "./components/Home/Home";
import Basket from "./components/Orders/Basket";
import OrderPage from "./components/Orders/OrderPage";
import Restaurants from "./components/Restuarants/Restuarants";

function App() {
  return (
    <div className="lg:max-w-360 flex flex-col mx-auto">
      {/* <Home /> */}
      {/* <Restaurants /> */}
      {/* <OrderPage /> */}
      <Basket />
    </div>
  );
}

export default App;
