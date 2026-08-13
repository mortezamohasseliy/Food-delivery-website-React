function MobileHeader() {
  return (
    <div className="w-full flex flex-col">
      <header className="w-full h-19.25 top-22.75 bg-[#FC8A06] flex">
        <div className="w-1/2  h-full flex items-center justify-center space-x-3">
          <img
            className="w-11 h-11 top-27.25 left-7.5 rounded-full object-cover"
            src="../src/assets/images/account.png"
            alt=""
          />
          <p className="w-11.5 h-5.25 top-30.25 left-21.25 font-semibold text-[14px] leading-[100%] tracking-normal">
            Aycan
          </p>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center bg-[#028643] space-x-3">
          <img
            className="w-11.25 h-11.25 top-26.75 left-61.75 object-cover"
            src="../src/assets/images/cart.png"
            alt=""
          />
          <p className="w-20 h-6 top-29.75 left-77.25 font-semibold text-[16px] leading-[100%] tracking-normal text-[#FFFFFF]">
            GBP 79.89
          </p>
        </div>
      </header>
      <div className="w-full h-20 flex items-center justify-center space-x-1">
        <img
          className="w-6.25 h-6.25 top-45 left-50.75"
          src="../src/assets/images/map.png"
          alt=""
        />
        <p className="w-40 h-5.25 top-45.5 left-59 font-normal text-[14px] leading-[100%] tracking-normal">
          Lution Street, N4G-00....
        </p>
      </div>
    </div>
  );
}

export default MobileHeader;
