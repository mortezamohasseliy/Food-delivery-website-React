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
    <div className="mt-10 w-full overflow-hidden">
      <div className="flex w-max animate-offer-scroll gap-5 hover:[animation-play-state:paused]">
        {/* Original cards */}
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="lg:w-59.5 sm:w-30.5 shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-[#FC8A06]"
          >
            <img
              className="h-50.75 w-full object-cover"
              src={brand.brandImage}
              alt={brand.brandTitle}
            />

            <h2 className="px-2 py-3 text-center text-[18px] font-bold text-white">
              {brand.brandTitle}
            </h2>
          </div>
        ))}

        {/* Duplicate cards */}
        {brands.map((brand) => (
          <div
            key={`duplicate-${brand.id}`}
            className="w-59.5 shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-[#FC8A06]"
          >
            <img
              className="h-50.75 w-full object-cover"
              src={brand.brandImage}
              alt={brand.brandTitle}
            />

            <h2 className="px-2 py-3 text-center text-[18px] font-bold text-white">
              {brand.brandTitle}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandsCard;
