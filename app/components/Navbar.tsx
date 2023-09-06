import { useScrollPosition } from "~/hooks/useScrollPosition";
import { ButtonLink } from "./Button/ButtonLink";
import { clsxm } from "~/utils/clsxm";

export default function Navbar() {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={clsxm(
        "fixed w-full top-0 bg-white border-b py-8 px-4 transition-all z-40",
        {
          "py-0": scrollPosition > 0,
        }
      )}
    >
      <nav className="flex justify-between w-full">
        <ButtonLink href="/">
          <img
            src="/logo.svg"
            alt="mateuszpigula text inside transparent rectangle with black stroke"
            className="inline h-6 hover:opacity-60 transition-opacity"
          />
        </ButtonLink>
        <ButtonLink href="/blog">Blog</ButtonLink>
      </nav>
    </header>
  );
}
