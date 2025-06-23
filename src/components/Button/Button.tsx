import type { MouseEvent, ReactNode } from "react";

import "components/Button/Button.scss";
import { getConditionalClassName } from "@/helpers/conditionalClassNameHelper";

type TVariant = "primary" | "secondary" | "neutral";
export type TButton = {
  children?: ReactNode;
  action: (evt: MouseEvent<HTMLButtonElement>) => void;
  variant?: TVariant;
  className?: string;
};

export const Button = ({ children, action, variant, className }: TButton) => {
  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => action(evt);

  return (
    <button
      className={`button-root ${getConditionalClassName(
        variant,
        `button-root__${variant}`
      )} ${getConditionalClassName(className, className)}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
