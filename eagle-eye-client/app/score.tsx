import Image from "next/image";

export default function Score({ score }: { score: number }) {
  // TODO make this score count up
  const scoreString = score.toString().padStart(5, "0");

  return (
    <div className="justify-self-end rounded-md bg-sky-500/50 py-1.5 pl-2 pr-3 font-mono flex flex-row items-center">
      <Image
        className="mr-2"
        src="/191_Discord_Icons_Crown 1.png"
        alt="Crown"
        width="32"
        height="32"
      />
      Score: {scoreString}
    </div>
  );
}
