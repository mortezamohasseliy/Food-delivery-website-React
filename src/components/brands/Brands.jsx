import BrandsDesktop from "./Desktop/BrandsDesktop";
import BrandsMobile from "./Mobile/BrandsMobile";

function Brands() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block">
        <BrandsDesktop />
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <BrandsMobile />
      </div>
    </>
  );
}
export default Brands;
