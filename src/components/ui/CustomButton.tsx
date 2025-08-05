import cn from "classnames";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
}

export const CustomButton = ({ variant = "primary", className, children, ...props }: CustomButtonProps) => {
  switch (variant) {
    case "primary":
      return (
        <button
          className={cn(
            className,
            "bg-[var(--color-primary)] text-[var(--color-secondary)] px-[50px] py-[22px] text-[28px] font-semibold cursor-pointer hover:outline-3 hover:outline-solid hover:outline-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-all max-xs:text-[18px]"
          )}
          {...props}
        >
          {children}
        </button>
      );

    case "secondary":
      return (
        <button
          className={cn(
            className,
            "bg-[var(--color-secondary)] text-[var(--color-primary)] px-[50px] py-[22px] text-[28px] font-semibold cursor-pointer outline-3 outline-solid outline-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-all max-xs:text-[18px]"
          )}
          {...props}
        >
          {children}
        </button>
      );
  }
};
