"use client";

export default function AppButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <div className="button w-fit" onClick={() => onClick()}>
      {text}
    </div>
  );
}
