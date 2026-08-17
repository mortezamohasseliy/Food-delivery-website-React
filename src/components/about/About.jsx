import AboutDesktop from "./Desktop/AboutDesktop";
import AboutMobile from "./Mobile/AboutMobile";

function About() {
  return (
    <section>
      <div className="hidden lg:block">
        <AboutDesktop />
      </div>

      <div className="lg:hidden">
        <AboutMobile />
      </div>
    </section>
  );
}
export default About;
