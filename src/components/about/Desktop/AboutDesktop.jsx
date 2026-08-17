import AboutCard from "../AboutCard";

function AboutDesktop() {
  return (
    <section className="w-full h-220.5 bg-[#D9D9D9] mt-10 p-10">
      <div className="flex items-center justify-between">
        <h1 className="w-87.75 h-12 font-bold text-[32px]">
          Know more about us!
        </h1>
        <ul className="flex items-center space-x-20 text-[16px] font-normal">
          <li className="font-bold border border-[#FC8A06] p-5 rounded-[120px]">
            Frequent Questions{" "}
          </li>
          <li> Who we are? </li>
          <li>Partner Program</li>
          <li>Help & Support</li>
        </ul>
      </div>

      <div
        className="relative w-322.5 h-131.5 rounded-xl bg-[#FFFFFF] mx-auto mt-10 flex
           justify-between items-center p-5"
      >
        <div className="w-full flex items-center justify-around">
          {/* questions */}
          <div className="flex flex-col space-y-10">
            <button
              className="w-86.5 h-15.5 rounded-[120px] bg-[#FC8A06]
              font-bold text-[18px] tracking-[-2%]"
            >
              How does Order.UK work?
            </button>
            <button className="w-88 h-6.75 font-bold text-[18px] tracking-[-2%]">
              What payment methods are accepted?
            </button>
            <button className="w-88 h-6.75 font-bold text-[18px] tracking-[-2%]">
              Can I track my order in real-time?
            </button>
            <button className="w-88 h-6.75 font-bold text-[18px] tracking-[-2%]">
              Are there any special discounts or promotions available?
            </button>
            <button className="w-88 h-6.75 mt-3 font-bold text-[18px] tracking-[-2%]">
              Is Order.UK available in my area?
            </button>
          </div>
          {/* answers */}
          <AboutCard />
        </div>
        <div
          className="absolute bottom-5 right-30 w-156.25 h-18 font-normal text-[16px]
          leading-[130%] tracking-[-2%] text-center"
        >
          Order.UK simplifies the food ordering process. Browse through our
          diverse menu, select your favorite dishes, and proceed to checkout.
          Your delicious meal will be on its way to your doorstep in no time!
        </div>
      </div>
    </section>
  );
}
export default AboutDesktop;
