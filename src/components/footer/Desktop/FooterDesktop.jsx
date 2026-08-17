function FooterDesktop() {
  return (
    <>
      {" "}
      <section className="w-full h-92.75 bg-[#D9D9D9]/60 mt-10 flex justify-between p-3 items-center">
        <div>
          <img
            className="w-67 h-16.5 "
            src="../src/assets/images/logo-2.png"
            alt=""
          />
          <img
            className="w-90.25 h-30 bg-cover"
            src="../src/assets/images/store-logoes.png"
            alt=""
          />
          <p
            className="w-77.75 h-11.5 font-normal text-[15px]
            leading-[100%] tracking-normal"
          >
            Company # 490039-445, Registered withHouse of companies.
          </p>
        </div>
        <div className="space-y-5">
          <h2
            className="w-75.5 h-10.75 font-bold text-[18px] leading-10.75 tracking-normal
            text-[#03081F]"
          >
            Get Exclusive Deals in your Inbox
          </h2>
          <input
            className="relative w-95.25 h-14.75 bg-[#D9D9D9] rounded-[120px] outline-none pl-5"
            type="email"
            placeholder="youremail@gmail.com"
          />
          <button
            className="absolute right-120 w-42.75 h-14.75 rounded-[120px] bg-[#FC8A06]
            text-[#FFFFFF] font-medium text-[18px] tracking-normal"
          >
            Subscribe
          </button>{" "}
          <br />
          <span>we wont spam, read our email policy</span>
          <div className="flex items-center gap-5 mt-5">
            <img
              className="w-11.25 h-11.25"
              src="../src/assets/images/facebook.png"
              alt=""
            />

            <img
              className="w-11.25 h-11.25"
              src="../src/assets/images/instagram.png"
              alt=""
            />

            <img
              className="w-11.25 h-11.25"
              src="../src/assets/images/tiktok.png"
              alt=""
            />

            <img
              className="w-11.25 h-11.25"
              src="../src/assets/images/snapchat.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-[18px] leading-10.75 text-[#03081F]">
            legal pages
          </h1>
          <a
            href=""
            className="font-normal text-[15px] leading-10.75 tracking-normal underline
              text-[#000000]"
          >
            Terms and conditions <br /> Privacy <br /> Cookies <br /> Modern
            Slavery Statement
          </a>
        </div>
        <div>
          <h1 className="font-bold text-[18px] leading-10.75 text-[#03081F]">
            important links
          </h1>
          <a
            href=""
            className="font-normal text-[15px] leading-10.75 tracking-normal underline
              text-[#000000]"
          >
            Get helpAdd <br /> your restaurant <br /> Sign up to deliver <br />{" "}
            Create a business account
          </a>
        </div>
      </section>
      {/* footer */}
      <section
        className="w-full h-18.25 bg-[#03081F] text-[#FFFFFF]
        font-normal text-[15px] leading-[100%] tracking-normal flex justify-around items-center"
      >
        <h2>Order.uk Copyright 2024, All Rights Reserved.</h2>
        <div className="space-x-10">
          <a href=""> Privacy Policy</a>
          <a href="">Terms</a>
          <a href="">Pricing</a>
          <a href=""> Do not sell or share my personal information</a>
        </div>
      </section>
    </>
  );
}
export default FooterDesktop;
