import OrderCard from "../OrderCard";

function OrderDesktop() {
  return (
    <section
      className="w-full h-91.25 top-341 left-25
        rounded-tl-xl rounded-tr-xl mt-10 p-5"
    >
      <h1
        className="w-126.75 h-12 top-341 left-30.25 font-bold
          text-[32px] leading-[100%] tracking-normal"
      >
        Order.uk Popular Categories 🤩
      </h1>
      <OrderCard />
    </section>
  );
}
export default OrderDesktop;
