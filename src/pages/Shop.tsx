import cn from "classnames";
import { Container } from "components/ui/Container";

import { Products } from "sections/Products";

interface ShopProps {
  className?: string;
}

export const Shop = ({ className }: ShopProps) => {
  return (
    <>
      <title>Shop - Premium Shoes Collection | Slick</title>
      <meta
        name="description"
        content="Discover our premium collection of shoes for men, women, boys, and children. Find your perfect sole mate with Slick's trendy and comfortable footwear."
      />
      <meta name="keywords" content="shoes, footwear, men shoes, women shoes, kids shoes, sneakers, boots, sandals" />
      <meta property="og:title" content="Shop - Premium Shoes Collection | Slick" />
      <meta
        property="og:description"
        content="Discover our premium collection of shoes. Find your perfect sole mate with Slick."
      />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="/shop" />

      <main className={cn("min-h-screen", className)} style={{ backgroundColor: "var(--color-bg-primary)" }}>
        <section className="py-4 sm:py-6 md:py-8">
          <Container>
            <div className="text-center px-4 sm:px-0">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Our Collection
              </h1>
              <p
                className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Discover premium footwear designed for comfort, style, and durability. Find your perfect sole mate from
                our curated collection.
              </p>
            </div>
          </Container>
        </section>

        <Products title="Best Selling" className="mt-0 sm:mt-4 md:mt-8" />

        <section className="py-8 sm:py-12 md:py-16">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
              {/* Feature Cards */}
              <div
                className="text-center p-6 sm:p-8 rounded-2xl border-2"
                style={{
                  backgroundColor: "var(--color-bg-secondary)",
                  borderColor: "var(--color-border-light)",
                }}
              >
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl sm:text-3xl"
                  style={{ backgroundColor: "var(--color-primary)", color: "var(--color-secondary)" }}
                >
                  🚚
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "var(--color-text-primary)" }}>
                  Free Delivery
                </h3>
                <p className="text-sm sm:text-base" style={{ color: "var(--color-text-secondary)" }}>
                  Free shipping on orders over $100
                </p>
              </div>

              <div
                className="text-center p-6 sm:p-8 rounded-2xl border-2"
                style={{
                  backgroundColor: "var(--color-bg-secondary)",
                  borderColor: "var(--color-border-light)",
                }}
              >
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl sm:text-3xl"
                  style={{ backgroundColor: "var(--color-primary)", color: "var(--color-secondary)" }}
                >
                  ↩️
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "var(--color-text-primary)" }}>
                  Easy Returns
                </h3>
                <p className="text-sm sm:text-base" style={{ color: "var(--color-text-secondary)" }}>
                  30-day hassle-free returns
                </p>
              </div>

              <div
                className="text-center p-6 sm:p-8 rounded-2xl border-2 sm:col-span-2 lg:col-span-1"
                style={{
                  backgroundColor: "var(--color-bg-secondary)",
                  borderColor: "var(--color-border-light)",
                }}
              >
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl sm:text-3xl"
                  style={{ backgroundColor: "var(--color-primary)", color: "var(--color-secondary)" }}
                >
                  ⭐
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "var(--color-text-primary)" }}>
                  Premium Quality
                </h3>
                <p className="text-sm sm:text-base" style={{ color: "var(--color-text-secondary)" }}>
                  Handcrafted with finest materials
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};
