import Logo from "../logo/Logo";

function Navbar() {
  return (
    <nav className="w-[95%] mx-auto mt-6 lg:mt-10">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex h-15.25 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <ul className="flex items-center gap-8 font-medium text-[18px]">
          <li>Home</li>

          <li>Browse Menu</li>
          <li>Special Offers</li>
          <li>Restaurants</li>
          <li>Track Order</li>
        </ul>

        {/* Login */}
        <button className="w-58.5 h-15.25 rounded-full bg-[#03081F] text-white flex items-center justify-center gap-3">
          <img
            className="w-7.75 h-6.75"
            src="../src/assets/images/user.png"
            alt=""
          />

          <span>Login/Signup</span>
        </button>
      </div>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden items-center justify-between py-3">
        {/* Logo */}
        <img
          className="w-38.5 h-9.5 object-contain"
          src="../src/assets/images/logo.png"
          alt="Logo"
        />

        {/* Menu */}
        <button>
          <img
            className="w-16.25 h-16.25"
            src="../src/assets/images/menu.png"
            alt="Menu"
          />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
