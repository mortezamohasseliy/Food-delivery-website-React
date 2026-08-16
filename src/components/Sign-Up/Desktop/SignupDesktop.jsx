function SignupDesktop() {
  return (
    <section className="mt-10 flex gap-5 px-5">
      {/*  */}
      <div className="relative w-188.5 h-106.25 rounded-xl">
        <img
          className="w-188.5 h-106.25 bg-cover rounded-xl"
          src="../src/assets/images/chef.png"
          alt=""
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/20 to-transparent" />
        <div
          className="absolute left-10 top-0 w-[288px] h-15.75 rounded-br-xl rounded-bl-xl bg-[#FFFFFF]
            font-bold text-[18px] text-[#03081F] flex items-center justify-center"
        >
          Earn more with lower fees
        </div>
        <div className="absolute w-121.25 h-17 bottom-40 left-20">
          <h2 className="w-65.75 h-8.75 font-medium text-[18px] text-[#FC8A06]">
            Signup as a business
          </h2>
          <h1 className="w-121.25 h-11.75 font-bold text-[44px] text-[#FFFFFF]">
            Partner with us
          </h1>
        </div>
        <button className="absolute bottom-10 left-20 w-51.25 h-13 font-medium text-[18px] bg-[#FC8A06] text-[#FFFFFF] rounded-[120px]">
          Get Started
        </button>
      </div>

      <div className="relative w-188.5 h-106.25 rounded-xl">
        <img
          className="w-188.5 h-106.25 bg-cover rounded-xl"
          src="../src/assets/images/chef-1.png"
          alt=""
        />

        <div className="absolute inset-0 bg-linear-to-r from-gray-900/70 to-transparent" />
        <div
          className="absolute left-10 top-0 w-[288px] h-15.75 rounded-br-xl rounded-bl-xl bg-[#FFFFFF]
            font-bold text-[18px] text-[#03081F] flex items-center justify-center"
        >
          Avail exclusive perks
        </div>
        <div className="absolute w-121.25 h-17 bottom-40 left-20">
          <h2 className="w-65.75 h-8.75 font-medium text-[18px] text-[#FC8A06]">
            Signup as a rider
          </h2>
          <h1 className="w-121.25 h-11.75 font-bold text-[44px] text-[#FFFFFF]">
            Ride with us
          </h1>
        </div>
        <button className="absolute bottom-10 left-20 w-51.25 h-13 font-medium text-[18px] bg-[#FC8A06] text-[#FFFFFF] rounded-[120px]">
          Get Started
        </button>
      </div>
    </section>
  );
}
export default SignupDesktop;
