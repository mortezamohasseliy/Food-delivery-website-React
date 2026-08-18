const cards = [
  {
    id: 0,
    cardImage: "../src/assets/images/food-3.png",
    cardTitle: "Burgers & Fast food",
    numRestaurants: "21 Restaurants",
  },
  {
    id: 1,
    cardImage: "../src/assets/images/food-4.png",
    cardTitle: "Salads",
    numRestaurants: "32 Restaurants",
  },
  {
    id: 2,
    cardImage: "../src/assets/images/food-5.png",
    cardTitle: "Pasta & Casuals",
    numRestaurants: "4 Restaurants",
  },
  {
    id: 3,
    cardImage: "../src/assets/images/food-6.png",
    cardTitle: "Pizza",
    numRestaurants: "32 Restaurants",
  },
  {
    id: 4,
    cardImage: "../src/assets/images/food-7.png",
    cardTitle: "Breakfast",
    numRestaurants: "4 Restaurants",
  },
  {
    id: 5,
    cardImage: "../src/assets/images/food-8.png",
    cardTitle: "Soups",
    numRestaurants: "32 Restaurants",
  },
];

function OrderCardDesktop() {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5 xl:grid-cols-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="min-w-0 overflow-hidden rounded-xl bg-[#F5F5F5]"
        >
          <img
            className="aspect-[1/1.02] w-full object-cover"
            src={card.cardImage}
            alt={card.cardTitle}
          />

          <div className="px-3 py-3">
            <h2 className="text-[16px] font-bold leading-5 xl:text-[18px] xl:leading-[100%]">
              {card.cardTitle}
            </h2>

            <p className="mt-2 text-[12px] text-[#FC8A06] xl:text-[13px]">
              {card.numRestaurants}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderCardDesktop;
