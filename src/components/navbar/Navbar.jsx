import DesktopNavbar from "./Desktop/DesktopNavbar";
import MobileNavbar from "./Mobile/MobileNavbar";

function Navbar() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
}
export default Navbar;
