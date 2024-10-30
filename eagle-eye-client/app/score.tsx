import Image from "next/image";

export default function Score({ score }: { score: number }) {
  // TODO make this score count up
  const scoreString = score.toString().padStart(5, "0");

  return (
    <div className="justify-self-end rounded-md bg-indigo-400 py-1 pl-4 pr-5 font-mono flex flex-row items-center">
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
