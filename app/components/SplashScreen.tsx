import clsx from "clsx";
import { useEffect, useState } from "react";
import { SplashText } from "./SplashText";

export const INTRO_DURATION = 4; //in seconds

export const SplashScreen = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem("intro") === "false") {
      setHidden(true);
      return;
    }

    setTimeout(() => {
      window.sessionStorage.setItem("intro", "false");
      setHidden(true);
    }, (INTRO_DURATION - 0.5) * 1000);
  }, []);

  return (
    <div
      id="splash-screen"
      className={clsx(
        "h-screen w-screen bg-stone-100 absolute top-0 z-50 transition-all duration-500 uppercase text-6xl font-extrabold",
        { "opacity-0 invisible": hidden }
      )}
    >
      <svg
        viewBox="0 0 600 110"
        width="100%"
        height="100%"
        className="max-w-3xl mx-auto"
      >
        <defs>
          <linearGradient
            id="textGradient"
            x1="0"
            x2="100%"
            y1="0"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="hsl(143, 94%, 19%)" offset="0%" />
            <stop stopColor="hsl(143, 83%, 44%)" offset="100%" />
          </linearGradient>
        </defs>
        <SplashText
          text="Mateusz"
          order={["u", "t", "z", "a", "s", "e", "M"]}
        />
        <SplashText
          text="Piguła"
          order={["u", "P", "ł", "i", "a", "g"]}
          y={100}
        />
      </svg>
    </div>
  );
};
