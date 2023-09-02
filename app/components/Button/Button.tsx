import type { ReactNode, ButtonHTMLAttributes } from "react";
import type { AsChildProps } from "../Slot/types";
import { Slot } from "../Slot/Slot";
import { clsxm } from "~/utils/clsxm";
import type { ClassValue } from "clsx";

type Props = AsChildProps<ButtonHTMLAttributes<HTMLButtonElement>> & {
  children: ReactNode;
  className?: ClassValue;
};

export const Button = ({ children, asChild, ...props }: Props) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...props}
      className={clsxm(
        "border border-green-500 hover:border-green-800 hover:text-green-800 text-green-500 font-bold py-2 px-4 rounded transition-colors",
        props.className
      )}
    >
      {children}
    </Comp>
  );
};
