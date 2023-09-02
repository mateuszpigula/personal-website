import { Link } from "@remix-run/react";
import { Button } from "./Button";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
}

export const ButtonLink = ({ children, href }: Props) => {
  return (
    <Button asChild className="border-none">
      <Link to={href}>{children}</Link>
    </Button>
  );
};
