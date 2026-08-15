import BrandsCard from "../BrandsCard";

function BrandsDesktop() {
  return (
    <section className=" h-91.25 rounded-tl-xl rounded-tr-xl p-3">
      <h1 className="w-84.5 h-12 font-bold ml-5 text-[32px] leading-[100%] tracking-normal ">
        Popular Restaurants
      </h1>
      {/* brand cards */}

      <BrandsCard />
    </section>
  );
}
export default BrandsDesktop;
