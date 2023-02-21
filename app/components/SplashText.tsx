import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { INTRO_DURATION } from "./SplashScreen";

interface Props {
  text: string;
  y?: number;
}

export const SplashText = ({ text, y = 50 }: Props) => {
  const tl = useRef<GSAPTimeline>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to("tspan", {
          strokeDasharray: "50% 0",
          duration: 2,
        })
        .to(
          "tspan",
          {
            fill: "inherit",
            stagger: {
              amount: 2,
              ease: "power2.out",
              from: "random",
            },
          },
          "-=1"
        )
        .to("text", {
          transform: "translateY(100vh)",
          duration: 0.4,
        })
        .duration(INTRO_DURATION);
    }, "#splash-screen");

    return () => ctx.revert();
  }, []);

  return (
    <text
      x="300"
      y={y}
      textAnchor="middle"
      stroke="url(#darkerTextGradient)"
      fill="url(#textGradient)"
      fontFamily="sans-serif"
    >
      {text.split("").map((letter, index) => {
        return (
          <tspan
            key={index}
            className="fill-white drop-shadow-sm transition-colors"
            strokeDasharray="0 50%"
          >
            {letter}
          </tspan>
        );
      })}
    </text>
  );
};
