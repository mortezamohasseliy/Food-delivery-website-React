import { useState } from "react";
import { Link } from "react-router";
import Logo from "../logo/Logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[95%] mx-auto mt-6 lg:mt-10">
      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="hidden lg:flex h-15.25 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <ul className="flex items-center gap-8 font-medium text-[18px]">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>Browse Menu</li>

          <li>Special Offers</li>

          <li>
            <Link to="/restaurants">Restaurants</Link>
          </li>

          <li>
            <Link to="/order">Track Order</Link>
          </li>
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

      {/* ================= MOBILE NAVBAR ================= */}
      <div className="lg:hidden">
        {/* Top Navbar */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/">
            <img
              className="w-38.5 h-9.5 object-contain"
              src="../src/assets/images/logo.png"
              alt="Logo"
            />
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 flex items-center justify-center"
          >
            <img
              className="w-10 h-10"
              src="../src/assets/images/menu.png"
              alt="Menu"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            ${isOpen ? "max-h-100 opacity-100 mt-3" : "max-h-0 opacity-0"}
          `}
        >
          <div className="bg-[#03081F] rounded-xl p-5">
            <ul className="flex flex-col text-white font-medium text-[16px]">
              {/* Home */}
              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 border-b border-white/10"
                >
                  Home
                </Link>
              </li>

              {/* Browse Menu */}
              <li className="py-3 border-b border-white/10">Browse Menu</li>

              {/* Special Offers */}
              <li className="py-3 border-b border-white/10">Special Offers</li>

              {/* Restaurants */}
              <li>
                <Link
                  to="/restaurants"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 border-b border-white/10"
                >
                  Restaurants
                </Link>
              </li>

              {/* Order */}
              <li>
                <Link
                  to="/order"
                  onClick={() => setIsOpen(false)}
                  className="block py-3"
                >
                  Track Order
                </Link>
              </li>
            </ul>

            {/* Login */}
            <button className="w-full h-12 mt-4 rounded-full bg-[#FC8A06] text-white flex items-center justify-center gap-3 font-semibold">
              <img
                className="w-6 h-6"
                src="../src/assets/images/user.png"
                alt=""
              />

              <span>Login/Signup</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
