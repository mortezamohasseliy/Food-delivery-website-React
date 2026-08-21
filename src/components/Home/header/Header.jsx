function Header() {
  return (
    <header className="w-full">
      {/* ================= MOBILE ================= */}
      <div className="flex flex-col md:hidden">
        {/* Top orange / green section */}
        <div className="flex h-19.25 w-full">
          {/* Account */}
          <div className="flex h-full w-1/2 items-center justify-center gap-3 bg-[#FC8A06]">
            <img
              className="h-11 w-11 rounded-full object-cover"
              src="../src/assets/images/account.png"
              alt="Account"
            />

            <p className="text-[14px] font-semibold">Aycan</p>
          </div>

          {/* Cart */}
          <div className="flex h-full w-1/2 items-center justify-center gap-3 bg-[#028643]">
            <img
              className="h-11.25 w-11.25 object-cover"
              src="../src/assets/images/cart.png"
              alt="Cart"
            />

            <p className="text-[16px] font-semibold text-white">GBP 79.89</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex h-20 w-full items-center justify-center gap-1">
          <img
            className="h-6.25 w-6.25"
            src="../src/assets/images/map.png"
            alt="Location"
          />

          <p className="text-[14px]">Lution Street, N4G-00....</p>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="mx-auto hidden h-17.5 w-[90%] items-start justify-between md:flex">
        {/* Promo */}
        <div className="flex h-full items-center">
          <p className="text-[15px] font-medium">
            Get 5% Off your first order,{" "}
            <span className="text-[#FC8A06]">Promo: ORDER5</span>
          </p>
        </div>

        {/* Location */}
        <div className="flex h-full items-center gap-3">
          <p className="text-[15px] font-medium">
            Regent Street, A4, A4201, London
          </p>

          <button className="text-[14px] font-medium text-[#FC8A06]">
            Change Location
          </button>
        </div>

        {/* Cart */}
        <div className="flex h-17.5 w-94.5 items-center justify-evenly rounded-b-2xl bg-[#028643] text-white">
          <img
            className="h-10.75 w-10.75"
            src="../src/assets/images/pucket.png"
            alt="Cart"
          />

          <span className="text-[14px]">23 Items</span>

          <span className="text-[14px]">GBP 79.89</span>

          <img
            className="h-9.5 w-9.5 rotate-90"
            src="../src/assets/images/arrow.png"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
