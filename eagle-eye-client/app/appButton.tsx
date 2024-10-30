"use client";

export default function AppButton({
  text,
  onClick,
  onMouseDown,
  onMouseUp,
}: {
  text: string;
  onClick?: () => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
}) {
  return (
    <div
      className="text-white font-semibold	cursor-pointer rounded-full border-slate-400 border bg-slate-400/50 text-lg w-fit px-8 py-3 transition-all select-none hover:shadow-lg hover:bg-slate-400"
      onClick={() => onClick?.()}
      onMouseDown={() => onMouseDown?.()}
      onMouseUp={() => onMouseUp?.()}
    >
      {text}
    </div>
  );
}
