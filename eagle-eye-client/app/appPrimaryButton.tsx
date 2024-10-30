"use client";

export default function AppPrimaryButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <div
      className="text-white font-semibold	cursor-pointer rounded-full bg-indigo-500 text-lg w-fit px-8 py-3 transition-all select-none hover:shadow-lg hover:bg-indigo-600"
      onClick={() => onClick()}
    >
      {text}
    </div>
  );
}
