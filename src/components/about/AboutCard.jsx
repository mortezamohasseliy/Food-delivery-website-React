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
    <div className="flex items-center gap-5">
      {cards.map((card) => (
        <div
          key={card.id}
          className="w-59.5 h-71.25 rounded-xl bg-[#D9D9D9] flex flex-col items-center
              justify-center text-center space-y-3"
        >
          <h3 className="font-bold text-[18px] tracking-[-2%] leading-[100%]">
            {card.title}
          </h3>
          <img className="w-32 h-32 " src={card.image} alt="" />
          <p className="font-medium text-[16px] leading-6.25 tracking-[-2%]">
            {card.text}
          </p>
        </div>
      ))}

      {/* <div
        className="w-59.5 h-71.25 rounded-xl bg-[#D9D9D9] flex flex-col items-center
              justify-center text-center space-y-3"
      >
        <h3 className="font-bold text-[18px] tracking-[-2%] leading-[100%]">
          Track Progress
        </h3>
        <img
          className="w-32 h-32 "
          src="../src/assets/images/drink.png"
          alt=""
        />
        <p className="font-medium text-[16px] leading-6.25 tracking-[-2%]">
          Your can track your order status with delivery time
        </p>
      </div> */}

      {/* <div
        className="w-59.5 h-71.25 rounded-xl bg-[#D9D9D9] flex flex-col items-center
              justify-center text-center space-y-3"
      >
        <h3 className="font-bold text-[18px] tracking-[-2%] leading-[100%]">
          Get your Order!
        </h3>
        <img
          className="w-32 h-32 "
          src="../src/assets/images/order.png"
          alt=""
        />
        <p className="font-medium text-[16px] leading-6.25 tracking-[-2%]">
          Receive your order at a lighting fast speed!
        </p>
      </div> */}
    </div>
  );
}
export default AboutCard;
