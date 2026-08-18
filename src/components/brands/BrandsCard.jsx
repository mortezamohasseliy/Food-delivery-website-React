const brands = [
  {
    id: 0,
    brandImage: "../src/assets/images/brand-1.png",
    brandTitle: "McDonald’s London",
  },
  {
    id: 1,
    brandImage: "../src/assets/images/brand-2.png",
    brandTitle: "Papa Johns",
  },
  {
    id: 2,
    brandImage: "../src/assets/images/brand-3.png",
    brandTitle: "KFC West London",
  },
  {
    id: 3,
    brandImage: "../src/assets/images/brand-4.png",
    brandTitle: "Texas Chicken",
  },
  {
    id: 4,
    brandImage: "../src/assets/images/brand-5.png",
    brandTitle: "Burger King",
  },
  {
    id: 5,
    brandImage: "../src/assets/images/brand-6.png",
    brandTitle: "Shaurma 1",
  },
];

function BrandsCard() {
  return (
    <div className="flex items-center gap-5 p-5 overflow-x-auto">
      {brands.map((brand) => (
        <div
          key={brand.id}
          className="w-full lg:grid-cols-4 md:grid-cols-6 border border-gray-200 rounded-tl-xl rounded-tr-xl bg-[#FC8A06] flex flex-col items-center text-center"
        >
          <img
            className="w-59.5 h-50.75 bg-cover rounded-tl-xl rounded-tr-xl"
            src={brand.brandImage}
            alt=""
          />
          <h2 className="w-45.5 h-6.75 font-bold text-[18px] text-[#FFFFFF] mt-2">
            {brand.brandTitle}
          </h2>
        </div>
      ))}
    </div>
  );
}
export default BrandsCard;
