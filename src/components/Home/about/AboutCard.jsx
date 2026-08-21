const cards = [
  {
    id: 0,
    title: "Place an Order!",
    image: "../src/assets/images/order-food.png",
    text: "Place order through our website or Mobile app",
  },
  {
    id: 1,
    title: "Track Progress!",
    image: "../src/assets/images/drink.png",
    text: "Your can track your order status with delivery time",
  },
  {
    id: 2,
    title: "Get your Order!",
    image: "../src/assets/images/order.png",
    text: "Receive your order at a lighting fast speed!",
  },
];

function AboutCard() {
  return (
    <div
      className="
        flex flex-col items-center gap-4
        md:flex-row md:gap-5
      "
    >
      {cards.map((card) => (
        <div
          key={card.id}
          className="
            flex h-31.25 w-64
            flex-col items-center justify-center
            rounded-xl bg-[#D9D9D9]
            p-3 text-center

            md:h-71.25
            md:w-59.5
          "
        >
          <h3 className="text-[10px] font-bold md:text-[18px]">{card.title}</h3>

          <img
            className="
              h-20 w-20 object-contain
              md:h-32 md:w-32
            "
            src={card.image}
            alt={card.title}
          />

          <p
            className="
              max-w-45
              text-[8px]
              leading-3
              md:text-[16px]
              md:leading-6
            "
          >
            {card.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AboutCard;
