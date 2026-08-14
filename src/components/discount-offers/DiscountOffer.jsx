import DiscountOfferDesktop from "./Desktop/DiscountOfferDesktop";
import DiscountOfferMobile from "./Mobile/DiscountOfferMobile";

function DiscountOffer() {
  return (
    <header>
      {/* Desktop */}
      <div className="hidden lg:block">
        <DiscountOfferDesktop />
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <DiscountOfferMobile />
      </div>
    </header>
  );
}
export default DiscountOffer;
