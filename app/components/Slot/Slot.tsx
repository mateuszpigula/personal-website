import type { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Children, cloneElement, isValidElement } from "react";
import { clsxm } from "~/utils/clsxm";

interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  // If there are multiple children, you can specify which one to render
  slotIndex?: number;
}

const cloneChild = (
  child: ReactElement,
  props: Props,
  children?: ReactNode
) => {
  return cloneElement(child, {
    ...props,
    ...child.props,
    children: children ?? child.props.children,
    style: {
      ...props.style,
      ...child.props.style,
    },
    className: clsxm(props.className, child.props.className),
  });
};

export const Slot = ({ children, slotIndex, ...props }: Props) => {
  if (isValidElement(children)) {
    return cloneChild(children, props);
  }

  if (Children.count(children) > 1) {
    if (slotIndex !== undefined) {
      const filteredChildren = Children.toArray(children).filter(Boolean);
      const directChild = filteredChildren.splice(slotIndex, 1)[0];

      if (isValidElement(directChild)) {
        const concatenatedChildren = filteredChildren
          .slice(0, slotIndex)
          .concat(directChild.props.children)
          .concat(filteredChildren.slice(slotIndex));

        return cloneChild(directChild, props, concatenatedChildren);
      }
    }

    Children.only(null);
  }

  return null;
};
