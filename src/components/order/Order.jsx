import OrderCardDesktop from "./OrderCard";

function OrderDesktop() {
  return (
    <section className="mt-10 w-full">
      <div className="mx-auto w-full max-w-360 px-6 lg:px-8">
        <h1 className="text-[28px] font-bold leading-[100%] xl:text-[32px]">
          Order.uk Popular Categories 🤩
        </h1>

        <OrderCardDesktop />
      </div>
    </section>
  );
}

export default OrderDesktop;
