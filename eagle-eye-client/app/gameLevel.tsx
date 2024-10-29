"use client";
import Image from "next/image";
import { useState } from "react";
import { AnswerOption, LevelData } from "./game";
import AppButton from "./appButton";
import classNames from "classnames";

function Option({
  src,
  alt,
  onClick,
  label,
}: {
  src: string;
  alt: string;
  onClick?: () => void;
  label?: string;
}) {
  return (
    <div className="relative inline-block">
      <div
        onClick={onClick}
        className={classNames(
          "p-8 border-2 border-solid rounded-lg select-none",
          {
            // TODO fix this?
            "cursor-pointer": onClick !== undefined,
            "cursor-default": onClick === undefined,
          }
        )}
      >
        <Image src={src} alt={alt} width={400} height={400} />
      </div>
      {label && (
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-1 rounded-full font-bold">
          {label}
        </span>
      )}
    </div>
  );
}

export default function GameLevel({
  levelData,
  onAnswer,
  onNext,
}: {
  levelData: LevelData;
  onAnswer: (wasCorrect: boolean) => void;
  onNext: () => void;
}) {
  const [answer, setAnswer] = useState<AnswerOption | undefined>(undefined);
  const handleAnswer = (selected: AnswerOption) => {
    console.log(selected);
    setAnswer(selected);
    onAnswer(selected === levelData.correctAnswer);
  };

  const hasAnswered = answer !== undefined;
  const wasCorrect = answer === levelData.correctAnswer;

  return (
    <div className="flex flex-col items-center gap-4">
      <h1>{levelData.title}</h1>
      <p className="text-2xl">{levelData.levelText}</p>
      <div className="flex flex-row gap-4 items-center pb-4">
        <Option
          src={levelData.leftImage}
          alt="Left Image"
          onClick={() =>
            !hasAnswered ? handleAnswer(AnswerOption.Left) : undefined
          }
          label={
            answer === AnswerOption.Left
              ? wasCorrect
                ? "✅ Correct"
                : "❌ Incorrect"
              : undefined
          }
        />
        <span>OR</span>
        <Option
          src={levelData.rightImage}
          alt="Right Image"
          onClick={() =>
            !hasAnswered ? handleAnswer(AnswerOption.Right) : undefined
          }
          label={
            answer === AnswerOption.Right
              ? wasCorrect
                ? "✅ Correct"
                : "❌ Incorrect"
              : undefined
          }
        />
      </div>

      <div
        className={classNames("flex flex-col gap-4 self-start", {
          invisible: !hasAnswered,
        })}
      >
        <p>{levelData.reason}</p>

        <AppButton text="Next" onClick={onNext} />
      </div>
    </div>
  );
}
