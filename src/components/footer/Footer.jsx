import FooterDesktop from "./Desktop/FooterDesktop";
import FooterMobile from "./Mobile/FooterMobile";

function Footer() {
  return (
    <footer>
      <div className="hidden lg:block">
        <FooterDesktop />
      </div>

      <div className="lg:hidden">
        <FooterMobile />
      </div>
    </footer>
  );
}
export default Footer;
