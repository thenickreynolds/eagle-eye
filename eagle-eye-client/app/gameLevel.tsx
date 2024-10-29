"use client";
import Image from "next/image";
import { useState } from "react";
import { AnswerOption, LevelData } from "./game";
import AppButton from "./appButton";
import classNames from "classnames";

enum OptionState {
  None,
  Incorrect,
  Correct,
}

function getOptionStateText(state: OptionState) {
  switch (state) {
    case OptionState.None:
      return "";
    case OptionState.Correct:
      return "✅ Correct";
    case OptionState.Incorrect:
      return "❌ Incorrect";
    default:
      throw "Unhandled";
  }
}

function Option({
  src,
  alt,
  onClick,
  state,
}: {
  src: string;
  alt: string;
  onClick?: () => void;
  state: OptionState;
}) {
  if (state !== OptionState.None) onClick = undefined;

  return (
    <div className="relative inline-block">
      <div
        onClick={onClick}
        className={classNames("select-none", {
          "cursor-pointer": state === OptionState.None,
        })}
      >
        <Image
          className="w-full"
          src={src}
          alt={alt}
          width={426}
          height={1000}
        />
      </div>

      <span
        className={classNames(
          "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-1 rounded-full font-bold",
          {
            collapse: state === OptionState.None,
          }
        )}
      >
        {getOptionStateText(state)}
      </span>
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
  const levelText = hasAnswered ? levelData.reason : "Select the correct image";

  const leftState = hasAnswered
    ? levelData.correctAnswer === AnswerOption.Left
      ? OptionState.Correct
      : OptionState.Incorrect
    : OptionState.None;
  const rightState = hasAnswered
    ? levelData.correctAnswer === AnswerOption.Right
      ? OptionState.Correct
      : OptionState.Incorrect
    : OptionState.None;

  // TODO slow down the transition
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="min-h-24">{levelData.title}</h1>
      <p className="text-xl text-neutral-300">{levelData.levelText}</p>
      <div className="grid grid-cols-2 pt-4">
        <div
          className={classNames("transition-transform duration-500", {
            "transform translate-x-1/2": hasAnswered,
            "z-10": answer === AnswerOption.Left,
          })}
        >
          <Option
            src={levelData.leftImage}
            alt="Left Image"
            onClick={() => handleAnswer(AnswerOption.Left)}
            state={leftState}
          />
        </div>
        <div
          className={classNames("transition-transform duration-500", {
            "transform -translate-x-1/2": hasAnswered,
            "z-10": answer === AnswerOption.Right,
          })}
        >
          <Option
            src={levelData.rightImage}
            alt="Right Image"
            onClick={() => handleAnswer(AnswerOption.Right)}
            state={rightState}
          />
        </div>
      </div>

      <div className={"flex flex-col gap-4 self-start"}>
        <p>{levelText}</p>

        {hasAnswered && <AppButton text="Next" onClick={onNext} />}
      </div>
    </div>
  );
}
