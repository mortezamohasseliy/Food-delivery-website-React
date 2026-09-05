function ReviewCard() {
  return (
    <div
      className="
        shrink-0
        w-full
        h-auto
        bg-[#FFFFFF]
        rounded-sm
        p-4

        md:w-124
        md:h-68.5
        md:p-5
      "
    >
      {/* Header Card */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            className="
              w-12
              h-12
              rounded-full
              object-cover

              md:w-13.5
              md:h-13.5
            "
            src="/images/customer.webp"
            alt=""
          />

          <p className="w-0.5 h-12.5 bg-[#FC8A06]"></p>

          <p className="font-semibold text-[16px] leading-5">
            St Glx
            <br />
            <span className="font-normal text-[14px] leading-5 text-[#FC8A06] md:text-[16px]">
              South London
            </span>
          </p>
        </div>

        {/* Rate */}
        <div className="space-y-1">
          {/* Stars */}
          <div className="flex gap-0.5 justify-end">
            <img
              className="w-3.5 h-3.5 md:w-[16.98px] md:h-[16.98px]"
              src="/images/star.webp"
              alt=""
            />

            <img
              className="w-3.5 h-3.5 md:w-[16.98px] md:h-[16.98px]"
              src="/images/star.webp"
              alt=""
            />

            <img
              className="w-3.5 h-3.5 md:w-[16.98px] md:h-[16.98px]"
              src="/images/star.webp"
              alt=""
            />

            <img
              className="w-3.5 h-3.5 md:w-[16.98px] md:h-[16.98px]"
              src="/images/star.webp"
              alt=""
            />

            <img
              className="w-3.5 h-3.5 md:w-[16.98px] md:h-[16.98px]"
              src="/images/star.webp"
              alt=""
            />
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 md:gap-3">
            <img
              className="w-5 h-5 md:w-5.75 md:h-5.75"
              src="/images/clock-3.webp"
              alt=""
            />

            <p className="font-normal text-[11px] leading-4 md:text-[15px] md:leading-5.25 whitespace-nowrap">
              24th September, 2023
            </p>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="mt-6 md:flex md:items-center md:justify-center md:mt-10">
        <p className="text-[13px] leading-5 md:text-base">
          The positive aspect was undoubtedly the efficiency of the service. The
          queue moved quickly, the staff was friendly, and the food was up to
          the usual McDonald's standard – hot and satisfying.
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
