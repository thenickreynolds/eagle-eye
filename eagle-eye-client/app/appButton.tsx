"use client";

export default function AppButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <div className="button" onClick={() => onClick()}>
      {text}
    </div>
  );
}
