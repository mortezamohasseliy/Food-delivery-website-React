import { useState } from "react";
import ReviewCard from "./ReviewCard";

function ReviewCardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCards = 5;

  function handleNext() {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  return (
    <section
      className="
        w-full
        mt-10
        bg-[#D9D9D9]
        p-4
        overflow-hidden

        md:h-150
        md:flex
        md:flex-col
        md:justify-center
        md:relative
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 md:mb-10">
        <h1
          className="
            font-bold
            text-[20px]

            md:text-[44px]
            md:text-[#000000]
          "
        >
          Customer Reviews
        </h1>

        <div className="flex gap-3 md:gap-5">
          {/* Previous */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="
              w-11
              h-11
              rounded-full
              bg-[#FC8A06]
              flex
              items-center
              justify-center
              disabled:opacity-40

              md:w-18.75
              md:h-18.75
            "
          >
            <img
              className="w-5 h-5 md:w-9 md:h-9"
              src="../src/assets/images/arrow-left.png"
              alt="Previous"
            />
          </button>

          {/* Next */}
          <button
            onClick={handleNext}
            disabled={currentIndex === totalCards - 1}
            className="
              w-11
              h-11
              rounded-full
              bg-[#FC8A06]
              flex
              items-center
              justify-center
              disabled:opacity-40

              md:w-18.75
              md:h-18.75
            "
          >
            <img
              className="w-5 h-5 md:w-9 md:h-9 rotate-180"
              src="../src/assets/images/arrow-left.png"
              alt="Next"
            />
          </button>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block w-full overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 33.33}%)`,
          }}
        >
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          <div className="min-w-full">
            <ReviewCard />
          </div>

          <div className="min-w-full">
            <ReviewCard />
          </div>

          <div className="min-w-full">
            <ReviewCard />
          </div>

          <div className="min-w-full">
            <ReviewCard />
          </div>

          <div className="min-w-full">
            <ReviewCard />
          </div>

          <div className="min-w-full">
            <ReviewCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewCardSlider;
