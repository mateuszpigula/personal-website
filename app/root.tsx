import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import icons from "~/fonts/remixicon.css";
import Navbar from "./components/Navbar";
import { ContactIcons } from "./components/ContactIcons";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: icons },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Mateusz Pigula - Software Developer",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-stone-100 min-h-screen">
        <Navbar />
        <main className="container mx-auto max-w-3xl font-sans px-4 flex flex-col items-center pt-32">
          {children}
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <div className="h-full flex items-center gap-2">
          <h1 className="text-6xl text-green-500 font-semibold">
            {error.status}
          </h1>
          <p>{error.statusText}</p>
        </div>
        <p className="mt-4 border-t pt-4">
          If you think this is mistake please let me know 🙏
        </p>
        <a
          href="mailto:contact@mateuszpigula.dev?subject=Found your personal website"
          className="text-green-500 italic"
        >
          contact@mateuszpigula.dev
        </a>
        <ContactIcons className="text-green-500" />
      </Document>
    );
  }

  return (
    <Document>
      <h1>Unknown Error</h1>
    </Document>
  );
}
