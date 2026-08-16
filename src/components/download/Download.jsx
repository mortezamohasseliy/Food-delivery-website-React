import DownloadDesktop from "./Desktop/DownloadDesktop";
import DownloadMobile from "./Mobile/DownloadMobile";

function Download() {
  return (
    <section>
      {/* Desktop */}
      <div className="hidden lg:block">
        <DownloadDesktop />
      </div>

      {/* Mobile */}

      <div className="lg:hidden">
        <DownloadMobile />
      </div>
    </section>
  );
}
export default Download;
