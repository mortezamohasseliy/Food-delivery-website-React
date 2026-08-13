import DesktopHero from "./Desktop/HeroDesktop";
import MobileHero from "./Mobile/HeroMobile";

function Hero() {
  return (
    <header>
      {/* Desktop */}
      <div className="hidden lg:block">
        <DesktopHero />
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <MobileHero />
      </div>
    </header>
  );
}
export default Hero;
