import { useState } from "react";
import DealItems from "./DealItems";
import CustomizePizza from "./CustomizePizza";

function MealDeals({ onClose, onNext }) {
  const [isCustomizePizzaOpen, setIsCustomizePizzaOpen] = useState(false);

  function handleNext() {
    setIsCustomizePizzaOpen(true);
  }

  function handleBack() {
    setIsCustomizePizzaOpen(false);
  }

  return (
    <>
      {/* کل JSX و استایل‌های فعلی MealDeals خودت دقیقاً بدون تغییر */}

      {/* فقط onClick دکمه Next Step را این کن */}
      <button
        onClick={handleNext}
        type="button"
        // بقیه className و props فعلی خودت
      >
        Next Step
      </button>

      {/* آخر JSX اصلی MealDeals */}

      {isCustomizePizzaOpen && (
        <CustomizePizza onClose={onClose} onBack={handleBack} />
      )}
    </>
  );
}

export default MealDeals;
