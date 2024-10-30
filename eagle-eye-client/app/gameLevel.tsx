"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnswerOption, LevelData } from "./game";
import AppButton from "./appButton";
import classNames from "classnames";

enum OptionState {
  None,
  Correct,
  Incorrect,
}

function Option({
  src,
  alt,
  onClick,
  optionState,
}: {
  src: string;
  alt: string;
  onClick?: () => void;
  optionState: OptionState;
}) {
  return (
    <div className="relative inline-block px-2">
      <div
        onClick={onClick}
        className={classNames("select-none", {
          "cursor-pointer": onClick !== undefined,
        })}
      >
        <Image
          className={classNames(
            "w-full pointer-events-none shadow-lg rounded-xl border-4",
            {
              "border-green-500": optionState === OptionState.Correct,
              "border-red-500": optionState === OptionState.Incorrect,
              "border-transparent": optionState === OptionState.None,
            }
          )}
          src={src}
          alt={alt}
          height={1000}
          width={640}
        />
      </div>

      <span
        className={classNames(
          "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-1 rounded-full font-bold shadow-md min-w-32 text-center",
          {
            collapse: optionState === OptionState.None,
          }
        )}
      >
        {optionState === OptionState.Correct ? "✅ Correct" : "❌ Incorrect"}
      </span>
    </div>
  );
}

function getOptionState(
  target: AnswerOption,
  correctAnswer: AnswerOption,
  answer?: AnswerOption
) {
  if (answer === undefined || answer !== target) return OptionState.None;

  return answer === correctAnswer ? OptionState.Correct : OptionState.Incorrect;
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
  const [shiftPressed, setShiftPressed] = useState(false);

  const handleAnswer = (selected: AnswerOption) => {
    console.log(selected);
    setAnswer(selected);
    onAnswer(selected === levelData.correctAnswer);
  };

  const hasAnswered = answer !== undefined;

  useEffect(() => {
    const handleKeyPress = (event: { key: string }) => {
      if (event.key === "Shift") setShiftPressed(true);
      if (event.key === "Enter" && hasAnswered) onNext();
      if (event.key === "1" && !hasAnswered) handleAnswer(AnswerOption.Left);
      if (event.key === "2" && !hasAnswered) handleAnswer(AnswerOption.Right);
    };
    const handleKeyUp = (event: { key: string }) => {
      if (event.key === "Shift") setShiftPressed(false);
    };
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [hasAnswered]);

  const leftState = getOptionState(
    AnswerOption.Left,
    levelData.correctAnswer,
    answer
  );
  const rightState = getOptionState(
    AnswerOption.Right,
    levelData.correctAnswer,
    answer
  );

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="font-semibold leading-tight mb-4 text-5xl text-center"
        style={{ fontFamily: `"Ginto", sans-serif` }}
      >
        {levelData.title}
      </div>
      <div className="text-center text-3xl text-zinc-300">
        {levelData.levelText}
      </div>
      <div className="grid grid-cols-2 pt-4">
        <div
          className={classNames("transition-all duration-300", {
            "transform translate-x-1/2": hasAnswered,
            "z-10": answer === AnswerOption.Left,
            "opacity-0 ": answer === AnswerOption.Left && shiftPressed,
          })}
        >
          <Option
            src={levelData.leftImage}
            alt="Left Image"
            onClick={() => handleAnswer(AnswerOption.Left)}
            optionState={leftState}
          />
        </div>
        <div
          className={classNames("transition-all duration-300", {
            "transform -translate-x-1/2": hasAnswered,
            "z-10": answer === AnswerOption.Right,
            "opacity-0": answer === AnswerOption.Right && shiftPressed,
          })}
        >
          <Option
            src={levelData.rightImage}
            alt="Right Image"
            onClick={() => handleAnswer(AnswerOption.Right)}
            optionState={rightState}
          />
        </div>
      </div>

      <div
        className={classNames("flex flex-col gap-4 self-start w-full", {
          invisible: !hasAnswered,
        })}
      >
        <p className="font-mono text-center">
          Press and hold Shift to compare, Enter to continue
        </p>

        <AppButton text="Next" onClick={onNext} />
      </div>
    </div>
  );
}
