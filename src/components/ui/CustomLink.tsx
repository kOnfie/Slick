import cn from "classnames";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  path: string;
  className?: string;
  children: ReactNode;
}

export const CustomLink = ({ variant = "primary", path, className, children, ...props }: CustomLinkProps) => {
  switch (variant) {
    case "primary":
      return (
        <Link
          to={path}
          className={cn(
            className,
            "bg-[var(--color-primary)] text-[var(--color-secondary)] px-[50px] py-[22px] text-[28px] font-semibold cursor-pointer hover:outline-3 hover:outline-solid hover:outline-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-all"
          )}
          {...props}
        >
          {children}
        </Link>
      );

    case "secondary":
      return (
        <Link
          to={path}
          className={cn(
            className,
            "bg-[var(--color-secondary)] text-[var(--color-primary)] px-[50px] py-[22px] text-[28px] font-semibold cursor-pointer outline-3 outline-solid outline-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-all"
          )}
          {...props}
        >
          {children}
        </Link>
      );
  }
};
