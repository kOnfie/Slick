import cn from "classnames";
import { Container } from "components/ui/Container";
import { CustomButton } from "components/ui/CustomButton";

import sneakers from "assets/hero/sneakers.png";
import ultimate from "assets/hero/ultimate.png";

interface HeroProps {
  className?: string;
}

export const Hero = ({ className }: HeroProps) => {
  return (
    <section className={cn(className, "relative mb-[181px] max-lg:mb-0")}>
      <div
        className="absolute top-[-120px] right-0 w-[60%] h-[1117px] max-xl:h-[900px] max-lg:h-[125%] max-md:left-0 max-md:h-[72%] max-md:w-full max-xs:h-[460px] max-2xs:h-[400px]"
        style={{ background: "var(--gradient-grey-white)" }}
      >
        <img
          src={ultimate}
          alt="ULTIMATE"
          className="absolute left-0 bottom-3 max-w-[140px] w-[140px] z-3 max-xl:w-[100px] max-lg:w-[70px] max-xs:w-[50px]"
        />
      </div>

      <Container>
        <div className="flex items-center justify-between relative z-5 max-md:flex-col">
          <div className="pt-[215px] w-[40%] max-xl:pt-[50px] max-md:order-2 max-md:w-full">
            <h1 className="text-[98px] font-semibold mb-[39px] max-w-[487px] leading-[1.2] max-xl:text-[72px] max-lg:text-[58px] max-lg:mb-5 max-xs:text-[32px] max-xs:mb-2">
              Find Your Sole Mate With Us
            </h1>

            <p className="text-[var(--color-primary-opacity-75)] text-[28px] mb-[39px] max-lg:text-[20px] max-lg:mb-5 max-xs:text-[16px] max-xs:mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>

            <CustomButton className="max-xs:w-full max-xs:py-3">Shop Now</CustomButton>
          </div>

          <div className="w-[60%] max-md:order-1 max-md:w-[90%]">
            <img src={sneakers} alt="Sneakers" />

            <p className="text-center text-[38px] font-medium max-xs:text-[24px]">Trendy Slick Pro</p>
            <p className="text-center text-[32px] text-[var(--color-primary-opacity)] max-xs:text-[18px]">₹ 3999.00</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
