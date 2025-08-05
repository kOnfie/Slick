import cn from "classnames";

import Marquee from "react-fast-marquee";

interface PartnersProps {
  className?: string;
}

const logos = [
  <img src="src/assets/partners/ebay.svg" alt="ebay" />,
  <img src="src/assets/partners/amazon.svg" alt="amazon" />,
  <img src="src/assets/partners/ajio.svg" alt="ajio" />,
];

export const Partners = ({ className }: PartnersProps) => {
  return (
    <section className={cn(className, "bg-black max-lg:mt-5")}>
      <Marquee gradient={false} speed={120} autoFill >
        {logos.map((logo, i) => (
          <div key={i} className="mx-20">{logo}</div>
        ))}
      </Marquee>
    </section>
  );
};
