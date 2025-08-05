import cn from "classnames";
import { Container } from "./ui/Container";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn(className, "bg-[var(--color-primary)] text-[var(--color-secondary)] py-[85px] max-xs:py-5")}>
      <Container>
        <div className="flex items-center justify-between max-lg:flex-col max-lg:gap-20 max-lg:text-center">
          <div className="w-[50%] max-xmd:w-full"> 
            <h6 className=" mb-[47px] text-[28px] font-extrabold">Slick</h6>
            <p className="text-[18px] max-w-[409px] max-lg:m-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          <div className="w-[50%] max-lg:text-center max-xmd:w-full">
            <p className="text-[24px] mb-[13px]">Subscribe for news latter</p>

            <div className=" bg-[var(--color-secondary)] flex items-center max-w-[477px] w-[477px] rounded-[10px] max-lg:max-w-full max-lg:w-full max-xs:flex-col">
              <input
                type="email"
                required
                placeholder="Enter email..."
                className="focus:outline-none pl-[37px] py-[22px] pr-[30px] flex-1 text-[var(--color-primary)] max-xs:w-full"
              />
              <div className="w-[1px] h-[18px] bg-[var(--color-primary)] max-xs:w-full max-xs:h-[2px]" />

              <button className="uppercase py-5 px-[29px] cursor-pointer text-[var(--color-primary)]">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="w-[66px] h-[1px] bg-[var(--color-secondary)] mb-[38px] m-auto mt-[130px] max-xs:my-10" />

        <p className="text-[18px] text-center">www.slick.com©all right reserve</p>
      </Container>
    </footer>
  );
};
