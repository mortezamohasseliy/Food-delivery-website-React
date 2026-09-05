function ProductCard({ title, details, price, image, onAdd }) {
  return (
    <div className="flex bg-[#FDFDFD] shadow-lg rounded-xl p-1.5 md:p-3">
      {/* Content */}
      <div className="flex-1 min-w-0 ml-1 md:ml-5 space-y-1 md:space-y-5">
        <h2 className="font-semibold text-[10px] leading-3 md:text-[20px] md:leading-5.75 text-black">
          {title}
        </h2>

        <p className="font-normal text-[8px] leading-3 md:text-[14px] md:leading-6.25">
          {details}
        </p>

        <p className="font-bold text-[10px] md:text-[18px] leading-[100%]">
          {price}
        </p>
      </div>

      {/* Image */}
      <div className="relative w-[42%] shrink-0">
        <img
          className="w-full h-20 md:w-50.75 md:h-49.75 rounded-lg md:rounded-xl object-cover"
          src={image}
          alt="Royal Cheese Burger"
        />

        {/* Plus */}
        <div className="absolute bottom-0 right-0 md:right-0 w-9 h-8 md:w-22 md:h-20.25 rounded-tl-[20px] md:rounded-tl-[45px] rounded-br-lg md:rounded-br-xl bg-white/90 flex items-center justify-center">
          <button onClick={onAdd}>
            <img
              className="w-5 h-5 md:w-12.25 md:h-12.25"
              src="../images/plus.webp"
              alt="Add"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
