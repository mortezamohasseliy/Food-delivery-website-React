import { useState } from "react";
import { Link, useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Email or password is incorrect");
    }
  }

  return (
    <div
      className="
        min-h-screen
        bg-[#F8F8F8]

        flex
        items-center
        justify-center

        px-5
        py-10

        md:px-10
      "
    >
      {/* LOGIN CARD */}
      <div
        className="
          w-full
          max-w-105

          bg-white
          rounded-2xl

          shadow-xl

          p-6

          md:p-10
        "
      >
        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="
                w-38.5
                h-9.5
                object-contain
              "
            />
          </Link>
        </div>

        {/* TITLE */}
        <div className="text-center">
          <h1
            className="
              text-[#03081F]
              font-bold
              text-[28px]

              md:text-[32px]
            "
          >
            Welcome Back!
          </h1>

          <p
            className="
              mt-2
              text-gray-500
              text-[14px]
            "
          >
            Login to continue ordering your favourite food
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="mt-8">
          {/* EMAIL */}
          <div>
            <label
              className="
                block
                mb-2
                text-[#03081F]
                font-bold
                text-[14px]
              "
            >
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="
                w-full
                h-12

                rounded-md

                border
                border-[#D9D9D9]

                bg-[#F8F8F8]

                px-4

                text-[14px]
                text-[#03081F]

                outline-none

                focus:border-[#FC8A06]
              "
            />
          </div>

          {/* PASSWORD */}
          <div className="mt-5">
            <label
              className="
                block
                mb-2
                text-[#03081F]
                font-bold
                text-[14px]
              "
            >
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="
                w-full
                h-12

                rounded-md

                border
                border-[#D9D9D9]

                bg-[#F8F8F8]

                px-4

                text-[14px]
                text-[#03081F]

                outline-none

                focus:border-[#FC8A06]
              "
            />
          </div>

          {/* FORGOT PASSWORD */}
          <div className="flex justify-end mt-3">
            <button
              type="button"
              className="
                text-[#FC8A06]
                font-bold
                text-[13px]

                hover:underline
              "
            >
              Forgot Password?
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="
              w-full
              h-12

              mt-6

              rounded-md

              bg-[#008C45]
              text-white

              font-bold
              text-[15px]

              cursor-pointer

              hover:bg-[#007A3D]

              transition
            "
          >
            Login
          </button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200" />

          <span className="text-gray-400 text-[12px]">OR</span>

          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* SIGN UP */}
        <div className="text-center">
          <p className="text-gray-500 text-[13px]">Don't have an account?</p>

          <button
            type="button"
            className="
              mt-2

              text-[#FC8A06]

              font-bold
              text-[14px]

              hover:underline
            "
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
