import cn from "classnames";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return <footer className={cn(className, "")}></footer>;
};
