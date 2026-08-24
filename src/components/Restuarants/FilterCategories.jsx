function FilterCategories() {
  return (
    <section className="w-full mt-8 md:mt-16">
      {/* Header */}
      <div className="flex flex-col gap-5 px-4 md:flex-row md:items-center md:justify-between md:px-5">
        <h1 className="text-[24px] font-bold leading-[100%] md:text-[32px]">
          All Offers from McDonald’s East London
        </h1>

        {/* Search */}
        <div className="relative w-full md:w-86">
          <img
            className="absolute left-5 top-1/2 h-6.5 w-6.5 -translate-y-1/2"
            src="../../src/assets/images/search.png"
            alt=""
          />

          <input
            className="h-15.75 w-full rounded-[120px] border border-[#03081F] pl-15 pr-5 outline-none
        placeholder:text-[16px] placeholder:font-semibold
        md:placeholder:text-[18px]"
            type="text"
            placeholder="Search from menu..."
          />
        </div>
      </div>

      {/* Filter */}
      <div className="mt-5 flex h-20 w-full items-center bg-[#F3F3F3] px-4 md:mt-2.5 md:h-24 md:px-5">
        {/* Mobile */}
        <div className="w-full md:hidden">
          <select className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-[16px] font-semibold outline-none">
            <option>Offers</option>
            <option>Burgers</option>
            <option>Fries</option>
            <option>Snacks</option>
            <option>Salads</option>
            <option>Cold drinks</option>
            <option>Happy Meal®</option>
            <option>Desserts</option>
            <option>Hot drinks</option>
            <option>Sauces</option>
            <option>Orbit®</option>
          </select>
        </div>

        {/* Desktop */}
        <div className="hidden w-full md:block">
          <ul
            className="flex items-center justify-around
      text-[21px] font-bold text-[#252525]"
          >
            <li>
              <button>Offers</button>
            </li>

            <li>
              <button>Burgers</button>
            </li>

            <li>
              <button>Fries</button>
            </li>

            <li>
              <button>Snacks</button>
            </li>

            <li>
              <button>Salads</button>
            </li>

            <li>
              <button>Cold drinks</button>
            </li>

            <li>
              <button>Happy Meal®</button>
            </li>

            <li>
              <button>Desserts</button>
            </li>

            <li>
              <button>Hot drinks</button>
            </li>

            <li>
              <button>Sauces</button>
            </li>

            <li>
              <button>Orbit®</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default FilterCategories;
