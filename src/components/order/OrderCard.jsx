const cards = [
  {
    id: 0,
    cardImage: "../src/assets/images/food-3.png",
    cardTitle: "  Burgers & Fast food",
    numRestuarants: "  21 Restaurants",
  },
  {
    id: 1,
    cardImage: "../src/assets/images/food-4.png",
    cardTitle: "Salads",
    numRestuarants: "32 Restaurants",
  },
  {
    id: 2,
    cardImage: "../src/assets/images/food-5.png",
    cardTitle: "Pasta & Casuals",
    numRestuarants: "4 Restaurants",
  },
  {
    id: 3,
    cardImage: "../src/assets/images/food-6.png",
    cardTitle: "Pizza",
    numRestuarants: "32 Restaurants",
  },
  {
    id: 4,
    cardImage: "../src/assets/images/food-7.png",
    cardTitle: "Breakfast",
    numRestuarants: "4 Restaurants",
  },
  {
    id: 5,
    cardImage: "../src/assets/images/food-8.png",
    cardTitle: "Soups",
    numRestuarants: "32 Restaurants",
  },
];

function OrderCard() {
  return (
    <div className="flex items-center gap-5 p-3">
      {/* card 1 */}
      {cards.map((card) => (
        <div
          className="w-59.5 h-66.5 top-365.75 left-25
            rounded-xl  bg-[#F5F5F5]"
          key={card.id}
        >
          <img
            className="w-full h-50.75 rounded-tl-xl rounded-tr-xl object-cover"
            src={card.cardImage}
            alt=""
          />
          <h2 className="w-45 h-6.75 top-[1675px] left-30.5 font-bold text-[18px] leading-[100%] tracking-normal mt-3 ml-3">
            {card.cardTitle}
          </h2>
          <p
            className="w-23.5 h-5 top-[1699px] left-30.5 font-normal text-[13px] leading-[100%] tracking-normal
              text-[#FC8A06] ml-3"
          >
            {card.numRestuarants}
          </p>
        </div>
      ))}
    </div>
  );
}
export default OrderCard;
