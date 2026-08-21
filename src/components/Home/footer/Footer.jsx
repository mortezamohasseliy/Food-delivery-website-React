function Footer() {
  return (
    <>
      {/* Main Footer */}
      <section
        className="
          mt-10
          w-full
          bg-[#D9D9D9]/60
          px-5 py-8

          flex flex-col gap-10

          md:h-92.75
          md:flex-row
          md:items-start
          md:justify-between
          md:px-10
          md:py-8
        "
      >
        {/* Logo + App */}
        <div className="w-full md:w-auto flex flex-col items-center">
          <img
            className="w-50 md:w-67 h-auto"
            src="../src/assets/images/logo-2.png"
            alt="Order.uk"
          />

          <img
            className="mt-5 w-65 md:w-90.25 h-auto"
            src="../src/assets/images/store-logoes.png"
            alt="App stores"
          />

          <p
            className="
              mt-4
              w-full
              max-w-77.75
              font-normal
              text-[13px] md:text-[15px]
              leading-5
            "
          >
            Company # 490039-445, Registered with House of companies.
          </p>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-auto">
          <h2 className="font-bold text-[18px] text-[#03081F]">
            Get Exclusive Deals in your Inbox
          </h2>

          {/* Input + Button */}
          <div className="relative mt-4 w-full md:w-95.25">
            <input
              className="
                h-14.75
                w-full
                rounded-[120px]
                bg-[#D9D9D9]
                pl-5
                pr-32
                outline-none
              "
              type="email"
              placeholder="youremail@gmail.com"
            />

            <button
              className="
                absolute
                right-0
                top-0
                h-14.75
                w-32 md:w-42.75
                rounded-[120px]
                bg-[#FC8A06]
                text-[15px] md:text-[18px]
                font-medium
                text-white
              "
            >
              Subscribe
            </button>
          </div>

          <span className="mt-2 block text-[12px]">
            we wont spam, read our email policy
          </span>

          {/* Social Icons */}
          <div className="mt-5 flex items-center gap-3 md:gap-5 justify-center md:justify-start">
            <img
              className="h-9 w-9 md:h-11.25 md:w-11.25"
              src="../src/assets/images/facebook.png"
              alt="Facebook"
            />

            <img
              className="h-9 w-9 md:h-11.25 md:w-11.25"
              src="../src/assets/images/instagram.png"
              alt="Instagram"
            />

            <img
              className="h-9 w-9 md:h-11.25 md:w-11.25"
              src="../src/assets/images/tiktok.png"
              alt="TikTok"
            />

            <img
              className="h-9 w-9 md:h-11.25 md:w-11.25"
              src="../src/assets/images/snapchat.png"
              alt="Snapchat"
            />
          </div>
        </div>

        {/* Legal Pages */}
        <div className="w-full md:w-auto">
          <h1 className="font-bold text-[18px] text-[#03081F]">Legal pages</h1>

          <div className="mt-3 flex flex-col gap-2">
            <a href="" className="text-[14px] underline">
              Terms and conditions
            </a>

            <a href="" className="text-[14px] underline">
              Privacy
            </a>

            <a href="" className="text-[14px] underline">
              Cookies
            </a>

            <a href="" className="text-[14px] underline">
              Modern Slavery Statement
            </a>
          </div>
        </div>

        {/* Important Links */}
        <div className="w-full md:w-auto">
          <h1 className="font-bold text-[18px] text-[#03081F]">
            Important links
          </h1>

          <div className="mt-3 flex flex-col gap-2">
            <a href="" className="text-[14px] underline">
              Get help
            </a>

            <a href="" className="text-[14px] underline">
              Add your restaurant
            </a>

            <a href="" className="text-[14px] underline">
              Sign up to deliver
            </a>

            <a href="" className="text-[14px] underline">
              Create a business account
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <section
        className="
          flex
          min-h-18.25
          w-full
          flex-col
          items-center
          justify-center
          gap-3
          bg-[#03081F]
          px-5
          py-4
          text-center
          text-[12px]
          text-white

          md:flex-row
          md:justify-around
          md:text-[15px]
        "
      >
        <h2>Order.uk Copyright 2024, All Rights Reserved.</h2>

        <div
          className="md:flex md:flex-wrap justify-center gap-x-5 gap-y-2 md:gap-x-10
        hidden"
        >
          <a href="">Privacy Policy</a>
          <a href="">Terms</a>
          <a href="">Pricing</a>
          <a href="">Do not sell or share my personal information</a>
        </div>
      </section>
    </>
  );
}

export default Footer;
