import BrandsCard from "./BrandsCard";

function Brands({ title }) {
  return (
    <section className="h-91.25 rounded-tl-xl rounded-tr-xl p-3 mt-10">
      <h1 className="font-bold md:ml-5 md:text-[32px] text-[20px] leading-[100%] tracking-normal ">
        {title}
      </h1>
      {/* brand cards */}
      <BrandsCard />
    </section>
  );
}
export default Brands;
