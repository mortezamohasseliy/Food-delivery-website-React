import OrderMobile from "./Mobile/OrderMobile";
import OrderDesktop from "./Desktop/OrderDesktop";

function Order() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block">
        <OrderDesktop />
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <OrderMobile />
      </div>
    </>
  );
}
export default Order;
