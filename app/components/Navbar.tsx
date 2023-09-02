import { ButtonLink } from "./Button/ButtonLink";

export default function Navbar() {
  return (
    <header className="fixed w-full top-0 bg-white border-b py-8 px-4">
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
