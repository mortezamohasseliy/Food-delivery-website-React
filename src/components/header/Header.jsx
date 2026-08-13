import DesktopHeader from "./Desktop/DesktopHeader";
import MobileHeader from "./Mobile/MobileHeader";

function Header() {
  return (
    <header>
      {/* Desktop */}
      <div className="hidden lg:block">
        <DesktopHeader />
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <MobileHeader />
      </div>
    </header>
  );
}
export default Header;
