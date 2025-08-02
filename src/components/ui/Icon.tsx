import cn from "classnames";
import sprite from "assets/sprite.svg";

export interface IconProps {
  name: string;
  className?: string;
}

export const Icon = ({ name, className }: IconProps) => {
  return (
    <svg className={cn(className)}>
      <use href={`${sprite}#${name}`} />
    </svg>
  );
};
