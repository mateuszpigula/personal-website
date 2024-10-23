import type { ClassValue } from "clsx";
import { clsxm } from "~/utils/clsxm";

interface Props {
  className?: ClassValue;
}

export const ContactIcons = ({ className }: Props) => {
  return (
    <ul className={clsxm("text-2xl flex gap-3 justify-center", className)}>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/mateuszpigula"
      >
        <i className="ri-linkedin-box-fill hover:text-green-500 transition-all" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/mateuszpigula"
      >
        <i className="ri-github-fill hover:text-green-500 transition-all" />
      </a>
    </ul>
  );
};
