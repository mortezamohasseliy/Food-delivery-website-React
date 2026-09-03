import { coldDrinks } from "../../data/data";
import ProductCard from "./ProductCard";

function RestaurantProducts({ onOrder, selectedCategory }) {
  const burger = {
    id: "burger-1",
    title: "Royal Cheese Burger with extra Fries",
    details: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
    price: "GBP 23.10",
    image: "../../src/assets/images/burger-1.png",
  };

  const fries = {
    id: "fries-1",
    title: "Royal Cheese Burger with extra Fries",
    details: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
    price: "GBP 23.10",
    image: "../../src/assets/images/fries.png",
  };

  const friesTwo = {
    id: "fries-2",
    title: "Royal Cheese Burger with extra Fries",
    details: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
    price: "GBP 23.10",
    image: "../../src/assets/images/fries-2.png",
  };

  return (
    <section className="md:w-full md:h-auto md:mt-10 mt-10 md:p-5 p-3">
      {/* BURGERS */}
      {(selectedCategory === "Offers" || selectedCategory === "Burgers") && (
        <div>
          <h1
            className="
              font-bold
              text-[20px]
              md:text-[44px]
              leading-[100%]
              mb-10
            "
          >
            Burgers
          </h1>

          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-5">
            {Array.from({ length: 6 }).map((_, index) => (
              <ProductCard
                key={`burger-${index}`}
                {...burger}
                id={`burger-${index}`}
                onAdd={() =>
                  onOrder({
                    ...burger,
                    id: `burger-${index}`,
                  })
                }
              />
            ))}
          </div>
        </div>
      )}

      {/* FRIES */}
      {(selectedCategory === "Offers" || selectedCategory === "Fries") && (
        <div className="mt-10">
          <h1
            className="
              font-bold
              text-[20px]
              md:text-[44px]
              text-[#FC8A06]
              leading-[100%]
              mb-10
            "
          >
            Fries
          </h1>

          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-5">
            {Array.from({ length: 3 }).map((_, index) => (
              <ProductCard
                key={`fries-${index}`}
                {...fries}
                id={`fries-${index}`}
                onAdd={() =>
                  onOrder({
                    ...fries,
                    id: `fries-${index}`,
                  })
                }
              />
            ))}

            {Array.from({ length: 3 }).map((_, index) => (
              <ProductCard
                key={`fries-two-${index}`}
                {...friesTwo}
                id={`fries-two-${index}`}
                onAdd={() =>
                  onOrder({
                    ...friesTwo,
                    id: `fries-two-${index}`,
                  })
                }
              />
            ))}
          </div>
        </div>
      )}

      {/* COLD DRINKS */}
      {(selectedCategory === "Offers" ||
        selectedCategory === "Cold drinks") && (
        <div className="mt-10">
          <h1
            className="
              font-bold
              text-[20px]
              md:text-[44px]
              text-[#FC8A06]
              leading-[100%]
              mb-10
            "
          >
            Cold Drinks
          </h1>

          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-5">
            {coldDrinks.map((drink, index) => (
              <ProductCard
                key={drink.id || `drink-${index}`}
                {...drink}
                id={drink.id || `drink-${index}`}
                onAdd={() =>
                  onOrder({
                    ...drink,
                    id: drink.id || `drink-${index}`,
                  })
                }
              />
            ))}
          </div>
        </div>
      )}

      {/* EMPTY CATEGORIES */}
      {[
        "Snacks",
        "Salads",
        "Happy Meal®",
        "Desserts",
        "Hot drinks",
        "Sauces",
        "Orbit®",
      ].includes(selectedCategory) && (
        <div className="flex min-h-60 w-full items-center justify-center">
          <p className="text-[18px] font-semibold text-gray-500 md:text-[24px]">
            No products available in this category.
          </p>
        </div>
      )}
    </section>
  );
}

export default RestaurantProducts;
