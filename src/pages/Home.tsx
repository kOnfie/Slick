import { Partners } from "sections/Partners";
import { Products } from "sections/Products";
import { Hero } from "sections/Hero";

export const Home = () => {
  return (
    <>
      <Hero />

      <Partners />

      <Products title="Best Selling" />
    </>
  );
};
