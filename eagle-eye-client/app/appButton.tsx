"use client";

export default function AppButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <div
      className="text-white font-bold cursor-pointer rounded-full bg-indigo-500 text-lg w-fit px-4 py-2 transition-all select-none hover:shadow-lg hover:bg-indigo-600"
      onClick={() => onClick()}
    >
      {text}
    </div>
  );
}
