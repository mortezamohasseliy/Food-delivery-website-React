import { useState } from "react";
import { NavLink } from "react-router";
import Logo from "../logo/Logo";

function Navbar({ onSpecialOffersClick }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSpecialOffersClick() {
    setIsOpen(false);
    onSpecialOffersClick();
  }

  return (
    <nav className="w-[95%] mx-auto mt-6 lg:mt-10">
      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="hidden lg:flex h-15.25 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <ul className="flex items-center gap-4 font-medium text-[18px]">
          {/* Home */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#FC8A06] text-white px-4 py-2 rounded-full"
                  : "px-4 py-2"
              }
            >
              Home
            </NavLink>
          </li>

          {/* Special Offers */}
          <li>
            <button
              type="button"
              onClick={handleSpecialOffersClick}
              className="
                px-4
                py-2
                rounded-full
                cursor-pointer
              
              "
            >
              Special Offers
            </button>
          </li>

          {/* Restaurants */}
          <li>
            <NavLink
              to="/restaurants"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#FC8A06] text-white px-4 py-2 rounded-full"
                  : "px-4 py-2"
              }
            >
              Restaurants
            </NavLink>
          </li>

          {/* Track Order */}
          <li>
            <NavLink
              to="/order"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#FC8A06] text-white px-4 py-2 rounded-full"
                  : "px-4 py-2"
              }
            >
              Track Order
            </NavLink>
          </li>
        </ul>

        {/* Login */}
        <NavLink to={"/login"}>
          {" "}
          <button className="w-58.5 h-15.25 rounded-full bg-[#03081F] text-white flex items-center justify-center gap-3">
            <img
              className="w-7.75 h-6.75"
              src="../src/assets/images/user.png"
              alt=""
            />

            <span>Login/Signup</span>
          </button>
        </NavLink>
      </div>

      {/* ================= MOBILE NAVBAR ================= */}
      <div className="lg:hidden">
        {/* Top Navbar */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <NavLink to="/">
            <img
              className="w-38.5 h-9.5 object-contain"
              src="../src/assets/images/logo.png"
              alt="Logo"
            />
          </NavLink>

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
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "block bg-[#FC8A06] px-4 py-3 rounded-lg"
                      : "block px-4 py-3"
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* Special Offers */}
              <li>
                <button
                  type="button"
                  onClick={handleSpecialOffersClick}
                  className="
                    w-full
                    px-4
                    py-3
                    text-left
                    rounded-lg
                    hover:bg-[#FC8A06]
                  "
                >
                  Special Offers
                </button>
              </li>

              {/* Restaurants */}
              <li>
                <NavLink
                  to="/restaurants"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "block bg-[#FC8A06] px-4 py-3 rounded-lg"
                      : "block px-4 py-3"
                  }
                >
                  Restaurants
                </NavLink>
              </li>

              {/* Track Order */}
              <li>
                <NavLink
                  to="/order"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "block bg-[#FC8A06] px-4 py-3 rounded-lg"
                      : "block px-4 py-3"
                  }
                >
                  Track Order
                </NavLink>
              </li>
            </ul>

            {/* Login */}
            <NavLink to={"/login"}>
              {" "}
              <button className="w-full h-12 mt-4 rounded-full bg-[#FC8A06] text-white flex items-center justify-center gap-3 font-semibold">
                <img
                  className="w-6 h-6"
                  src="../src/assets/images/user.png"
                  alt=""
                />

                <span>Login/Signup</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
