import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { INTRO_DURATION } from "./SplashScreen";

interface Props {
  text: string;
  order?: string[];
  y?: number;
}

export const SplashText = ({ text, y = 50, order }: Props) => {
  const el = useRef<SVGTextElement>(null);
  const tl = useRef<GSAPTimeline>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray("tspan") as SVGTSpanElement[];

      tl.current = gsap.timeline({ paused: true }).to(
        "tspan",
        {
          strokeDasharray: "50% 0",
          duration: 2,
        },
        "prefill"
      );

      letters.forEach((letter, i) => {
        const letterIndexInOrder =
          order?.findIndex((orderLetter) => orderLetter === text[i]) ||
          Math.random() * text.length;

        tl.current!.to(
          letter,
          {
            fill: "inherit",
            delay: 1 + letterIndexInOrder * 0.2,
            duration: 2.5,
          },
          "prefill+=1"
        );
      });

      tl.current.to("tspan", { opacity: 0, duration: 1 });

      gsap.to(tl.current, {
        time: tl.current.duration(),
        duration: INTRO_DURATION,
        ease: "power3.inOut",
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <text
      x="300"
      y={y}
      textAnchor="middle"
      stroke="url(#textGradient)"
      fill="url(#textGradient)"
      fontFamily="sans-serif"
      ref={el}
    >
      {text.split("").map((letter, index) => {
        return (
          <tspan
            key={index}
            className="fill-transparent drop-shadow-sm transition-colors"
            strokeDasharray="0 50%"
          >
            {letter}
          </tspan>
        );
      })}
    </text>
  );
};
