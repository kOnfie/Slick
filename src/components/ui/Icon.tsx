import cn from "classnames";

export interface IconProps {
  name: string;
  className?: string;
}

export const Icon = ({ name, className }: IconProps) => {
  return (
    <svg className={cn(className)}>
      <use href={`${"assets/sprite.svg"}#${name}`} />
    </svg>
  );
};
