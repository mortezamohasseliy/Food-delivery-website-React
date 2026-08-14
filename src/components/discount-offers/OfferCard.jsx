function OfferCard({ image, restaurant, discount = "-17%" }) {
  return (
    <div className="w-37.5 shrink-0">
      <div className="relative h-37.5 w-37.5 overflow-hidden rounded-xl">
        <img
          className="h-full w-full object-cover"
          src={image}
          alt={restaurant}
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

        {/* Discount */}
        <span className="absolute right-0 top-0 flex h-9.5 w-11.5 items-center justify-center rounded-bl-xl rounded-br-xl bg-[#03081F] text-white">
          <span className="font-bold text-[15px]">{discount}</span>
        </span>
      </div>

      <div className="mt-3">
        <h3 className="font-medium text-[13px] text-[#FC8A06]">Restaurant</h3>

        <h2 className="font-bold text-[14px] leading-4">{restaurant}</h2>
      </div>
    </div>
  );
}
export default OfferCard;
