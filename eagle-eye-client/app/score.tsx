import Image from "next/image";
import { useEffect, useState } from "react";

export default function Score({ score }: { score: number }) {
  const [displayScore, setDisplayScore] = useState(score);

  const getStepSize = (current: number, target: number) => {
    const remaining = Math.abs(target - current);
    // Exponentially increase step size as we get closer
    return Math.max(1, Math.floor(remaining * 0.2));
  };

  useEffect(() => {
    if (displayScore === score) return;

    const direction = displayScore < score ? 1 : -1;
    const timer = setInterval(() => {
      setDisplayScore((prev) => {
        if (prev === score) {
          clearInterval(timer);
          return prev;
        }
        const step = getStepSize(prev, score);
        // Don't overshoot the target
        if (direction > 0) {
          return Math.min(score, prev + step);
        } else {
          return Math.max(score, prev - step);
        }
      });
    }, 50);

    return () => clearInterval(timer);
  }, [score, displayScore]);

  const scoreString = displayScore.toString().padStart(6, "0");

  return (
    <div className="justify-self-end rounded-md bg-indigo-400 py-0.5 md:py-1 pl-2 md:pl-4 pr-2 md:pr-5 font-mono flex flex-row items-center text-sm md:text-base">
      <Image
        className="mr-2"
        src="/191_Discord_Icons_Crown.png"
        alt="Crown"
        width="44"
        height="44"
      />
      {scoreString}
    </div>
  );
}
