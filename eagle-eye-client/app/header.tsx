import Image from "next/image";
import Score from "./score";

export default function Header({
  showScore,
  score,
}: {
  showScore: boolean;
  score: number;
}) {
  return (
    <div className="grid grid-cols-2 items-start">
      <Image
        className="mb-2"
        src="/discord-logo-white.svg"
        alt="Discord Logo"
        width="208"
        height="40"
      />

      {showScore && <Score score={score} />}
    </div>
  );
}
