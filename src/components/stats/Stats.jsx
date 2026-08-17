import StatsDesktop from "./Desktop/StatsDesktop";
import StatsMobile from "./Mobile/StatsMobile";

function Stats() {
  return (
    <section>
      <div className="hidden lg:block">
        <StatsDesktop />
      </div>

      <div className="lg:hidden">
        <StatsMobile />
      </div>
    </section>
  );
}
export default Stats;
