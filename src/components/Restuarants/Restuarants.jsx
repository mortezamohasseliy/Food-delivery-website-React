import Header from "../Home/header/Header";
import Navbar from "../Home/navbar/Navbar";

function Restaurants() {
  return (
    <div className="w-full flex flex-col mx-auto">
      <div className="order-2 lg:order-1">
        <Header />
      </div>
      <div className="order-1 lg:order-2">
        <Navbar />
      </div>

      <div className="order-3 lg:order-3">
        <section
          className="md:relative md:w-382 md:h-119.25 bg-[url('../../src/assets/images/burger.png')] bg-cover  md:bg-[url('../../src/assets/images/burger.png')] md:bg-cover
 md:mt-10.25 md:rounded-xl relative w-[90%] h-90 rounded-xl flex flex-col items-center justify-center mx-auto"
        >
          <div className="md:absolute md:inset-0 md:bg-[#F4F4F4E5]/90" />
          <p
            className="md:absolute md:top-42.75 md:bottom-60 md:left-14.25 md:font-normal md:text-[20px] text-[18px]
          leading-16.5 tracking-normal"
          >
            I'm lovin' it!
          </p>
          <h1
            className="md:absolute md:top-56.75 md:left-14.25 md:bottom-46
          md:font-semibold font-semibold md:text-[54px] text-[20px] leading-16.5 tracking-normal md:text-[#FC8A06] text-[#03081F]"
          >
            McDonald’s East London
          </h1>
          <button
            className="md:absolute md:top-81 md:left-14.25 md:bottom-22.5 md:w-82.5 w-60 md:h-15.75 h-10 md:rounded-[120px] rounded-[120px] md:bg-[#03081F] bg-[#03081F]
          md:flex md:items-center md:justify-center md:text-[#FFFFFF] text-[#FFFFFF] md:gap-4.25 gap-3.5
          flex items-center justify-center"
          >
            <span>
              <img
                className="md:w-8.5 w-5 md:h-8.5 h-5"
                src="../../src/assets/images/list.png"
                alt=""
              />
            </span>
            <span className="md:font-semibold font-semibold md:text-[18px] text-[12px] leading-16.5 tracking-normal">
              Minimum Order: 12 GBP
            </span>
          </button>

          <button
            className="md:absolute md:top-81 absolute top-70 md:left-101 md:bottom-22.5 md:w-82.5 w-60 md:h-15.75 h-10 md:rounded-[120px] rounded-[120px] md:bg-[#03081F] bg-[#03081F]
          flex items-center justify-center md:flex md:items-center md:justify-center md:text-[#FFFFFF] text-[#FFFFFF] md:gap-4.25 gap-3.5"
          >
            <span>
              <img
                className="md:w-8.5 md:h-8.5 w-5 h-5"
                src="../../src/assets/images/bike.png"
                alt=""
              />
            </span>
            <span className="md:font-semibold font-semibold text-[12px] md:text-[18px] leading-16.5 tracking-normal">
              Delivery in 20-25 Minutes
            </span>
          </button>

          <button
            className="md:absolute md:top-111.25 md:left-0 md:bottom-7.25 md:w-82.5 md:h-15.75 md:rounded-tr-xl md:rounded-br-xl md:bg-[#FC8A06]
          md:flex md:items-center md:justify-center md:text-[#FFFFFF] md:gap-4.25 hidden"
          >
            <span>
              <img
                className="md:w-7.25 md:h-7.25"
                src="../../src/assets/images/clock.png"
                alt=""
              />
            </span>
            <span className="md:font-semibold md:text-[18px] leading-16.5 tracking-normal">
              Open until 3:00 AM
            </span>
          </button>

          <img
            className="md:absolute md:right-15.5 md:top-14.25 md:bottom-14.75 md:w-145.25 md:h-90.25 md:rounded-xl hidden md:block"
            src="../../src/assets/images/burger.png"
            alt=""
          />
          <img
            className="md:absolute md:w-34 md:h-39.5 md:rounded-xl md:top-67 md:right-140.75 md:bottom-12.75 hidden md:block"
            src="../../src/assets/images/rate.png"
            alt=""
          />
        </section>

        {/* filter categories section */}

        <section className="md:absolute md:w-full md:h-40 md:top-187.75 md:left-23.75 md:border">
          <div className="md:flex md:justify-around">
            <h1 className="md:font-bold md:text-[32px] md:leading-[100%] md:tracking-normal">
              All Offers from McDonald’s East London
            </h1>
            <div className="md:relative">
              <input
                className="md:absolute md:w-86 md:h-15.75 md:rounded-[120px] md:placeholder:left-16 md:border md:border-[#03081F] md:outline-none"
                type="text"
                placeholder="Search from menu..."
              />
              <div>
                <img src="../../src/assets/images/search.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Restaurants;
