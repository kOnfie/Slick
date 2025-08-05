import { useState } from "react";
import cn from "classnames";

import { Container } from "../components/ui/Container";
import { CustomButton } from "../components/ui/CustomButton";
import { FILTERS, PRODUCTS } from "utils/product-data";
import { Plus, Check } from "lucide-react";
import type { ProductType } from "types/Product.types";
import { useCartStore } from "stores/cart.store";

interface ProductsProps {
  className?: string;
  title: string;
}

export const Products = ({ className, title }: ProductsProps) => {
  const [activeFilter, setActiveFilter] = useState<string>("Man");
  const [addedProducts, setAddedProducts] = useState<Set<number>>(new Set());
  const addItemToCart = useCartStore((state) => state.addItemToCart);

  const filteredProducts = PRODUCTS.filter((product) => product.type === activeFilter);

  const handleAddToCart = (product: ProductType) => {
    addItemToCart({ ...product, quantity: 1 });

    setAddedProducts((prev) => new Set(prev).add(product.id));

    setTimeout(() => {
      setAddedProducts((prev) => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 2000);
  };

  return (
    <section className={cn(className, "mt-8 sm:mt-16 md:mt-32 lg:mt-[211px] mb-5")}>
      <Container>
        <div className="flex gap-2 sm:gap-4 md:gap-[22px] items-center justify-center mb-8 sm:mb-12 md:mb-[60px] px-4">
          <div className="w-4 sm:w-6 md:w-[41px] h-[2px] bg-[var(--color-primary)] flex-shrink-0" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-medium text-center whitespace-nowrap">
            {title}
          </h2>
          <div className="w-4 sm:w-6 md:w-[41px] h-[2px] bg-[var(--color-primary)] flex-shrink-0" />
        </div>

        <div>
          <div className="flex flex-wrap gap-3 sm:gap-6 md:gap-8 lg:gap-[64px] mb-8 sm:mb-12 md:mb-[81px] justify-center px-4">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.name;
              return (
                <CustomButton
                  key={filter.name}
                  variant={isActive ? "primary" : "secondary"}
                  onClick={() => setActiveFilter(filter.name)}
                  className="text-sm sm:text-base px-3 sm:px-4 py-2 min-w-[80px] sm:min-w-[100px]"
                >
                  {filter.name}
                </CustomButton>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-[29px] px-4 sm:px-0">
            {filteredProducts.map((product: ProductType) => {
              const isAdded = addedProducts.has(product.id);

              return (
                <div
                  key={product.id}
                  className="border-2 border-solid border-[#DEDEDE] rounded-2xl sm:rounded-[25px] p-4 sm:p-6 md:py-[50px] md:px-10 hover:shadow-lg transition-shadow relative"
                >
                  <div className="mb-4 sm:mb-6 text-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 sm:h-40 md:h-48 lg:h-auto object-contain mx-auto"
                    />
                  </div>

                  <div className="flex justify-between items-start sm:items-center gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base md:text-6 mb-2 sm:mb-3 md:mb-5 font-medium line-clamp-2">
                        {product.name}
                      </p>
                      <p className="text-base sm:text-lg md:text-6 font-semibold">₹{product.price}</p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <button
                        className={cn(
                          "cursor-pointer p-2 sm:p-3 rounded-full transition-all flex-shrink-0 ml-2 relative",
                          isAdded ? "bg-green-500 text-white" : "hover:bg-gray-100"
                        )}
                        onClick={() => handleAddToCart(product)}
                        aria-label={`Add ${product.name} to cart`}
                        disabled={isAdded}
                      >
                        {isAdded ? (
                          <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                        ) : (
                          <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
                        )}
                      </button>

                      {isAdded && (
                        <div className="text-xs sm:text-sm text-green-600 font-medium animate-fade-in whitespace-nowrap">
                          Added to cart!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <p className="text-gray-500 text-sm sm:text-base">No products found for this category</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
