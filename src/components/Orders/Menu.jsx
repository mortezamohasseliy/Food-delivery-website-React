function Menu() {
  return (
    <section
      className="md:w-91.75 md:h-269.5 md:bg-[#FBFBFB]  md:m-5  md:rounded-xl
      md:shadow-lg"
    >
      {/* menu Header */}
      <div className="md:flex md:items-center md:justify-start md:gap-5 md:p-5">
        <p>
          <img
            className="md:w-13.75 md:h-13.75"
            src="../../src/assets/images/res-logo.png"
            alt=""
          />
        </p>
        <h1 className="md:font-semibold md:text-[32px] md:text-[#000000]">
          Menu
        </h1>
      </div>
      {/* Menu Lists */}
      <div>
        <ul className="">
          <li className="md:w-full md:h-16.75 md:bg-[#03081F] md:text-[22px] md:leading-20.75 md:pl-2 md:font-bold">
            <span className="md:text-white">Pizzas</span>
            <br /> Garlic Bread <br /> Calzone <br /> Kebabas <br />
            Salads <br /> Cold drinks <br /> Happy Meal® <br /> Desserts <br />
            Hot drinks <br /> Sauces <br /> Orbit®
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Menu;
