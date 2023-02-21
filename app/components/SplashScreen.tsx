import clsx from "clsx";
import { useEffect, useState } from "react";
import { SplashText } from "./SplashText";

export const INTRO_DURATION = 3.5; //in seconds

export const SplashScreen = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHidden(true);
    }, INTRO_DURATION * 1000);
  });

  return (
    <div
      id="splash-screen"
      className={clsx(
        "h-screen w-screen bg-white absolute transition-all duration-300 uppercase text-6xl font-extrabold",
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
            <stop stopColor="hsl(180, 70%, 45%)" offset="0%" />
            <stop stopColor="hsl(41, 98%, 58%)" offset="100%" />
          </linearGradient>
          <linearGradient
            id="darkerTextGradient"
            x1="0"
            x2="100%"
            y1="0"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="hsl(180, 70%, 35%)" offset="0%" />
            <stop stopColor="hsl(41, 98%, 48%)" offset="100%" />
          </linearGradient>
        </defs>
        <SplashText text="Mateusz" />
        <SplashText text="Piguła" y={100} />
      </svg>
    </div>
  );
};
