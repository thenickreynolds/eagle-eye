"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnswerOption, LevelData } from "./game";
import classNames from "classnames";
import AppButton from "./appButton";

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
  explanation,
}: {
  src: string;
  alt: string;
  onClick?: () => void;
  optionState: OptionState;
  explanation?: string;
}) {
  const text = optionState === OptionState.Correct ? "Correct!" : "Incorrect";
  const image =
    optionState === OptionState.Correct ? "/check.png" : "/cross.png";

  return (
    <div className="relative inline-block mx-2">
      <div
        onClick={onClick}
        className={classNames("select-none", {
          "cursor-pointer": onClick !== undefined,
        })}
      >
        <Image
          className={classNames(
            "w-full pointer-events-none rounded-2xl border-4 bg-white",
            {
              "border-green-500": optionState === OptionState.Correct,
              "border-red-500": optionState === OptionState.Incorrect,
              "border-transparent": optionState === OptionState.None,
              "hover:shadow-2xl": onClick !== undefined,
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
          "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
          {
            collapse: optionState === OptionState.None,
          }
        )}
      >
        <div className="bg-white text-black p-1.5 rounded-full font-bold shadow-md flex flex-row items-center justify-center">
          <Image src={image} alt={text} width={24} height={24} />
          <span className="ml-2 mr-1">{text}</span>
        </div>
      </span>

      <span
        className={classNames(
          "absolute bottom-0 w-full transform translate-y-1/2 flex flex-row items-center justify-center",
          {
            collapse: optionState === OptionState.None,
          }
        )}
      >
        <span className="bg-slate-100 border-slate-200 border text-black py-1.5 px-2 rounded-lg font-bold shadow-md">
          {explanation}
        </span>
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
  const [compareDown, setCompareDown] = useState(false);

  const compare = shiftPressed || compareDown;

  const handleAnswer = (selected: AnswerOption) => {
    console.log(selected);
    setAnswer(selected);
    onAnswer(selected === levelData.correctAnswer);
  };

  const hasAnswered = answer !== undefined;

  console.log(hasAnswered);

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
    <div className="flex flex-col items-center">
      <div
        className="font-semibold leading-tight text-2xl md:text-5xl text-center mb-1"
        style={{ fontFamily: `"Ginto", sans-serif` }}
      >
        {levelData.title}
      </div>
      <div className="text-center text-lg md:text-3xl text-zinc-300 font-semibold mb-10">
        {levelData.levelText}
      </div>
      <div className="grid grid-cols-2 pt-4 pb-12">
        <div
          className={classNames("transition-all duration-300", {
            "transform translate-x-1/2": hasAnswered,
            "z-10": answer === AnswerOption.Left,
            "opacity-0 ": answer === AnswerOption.Left && compare,
          })}
        >
          <Option
            src={levelData.leftImage}
            alt="Left Image"
            onClick={() => handleAnswer(AnswerOption.Left)}
            optionState={leftState}
            explanation={levelData.reason}
          />
        </div>
        <div
          className={classNames("transition-all duration-300", {
            "transform -translate-x-1/2": hasAnswered,
            "z-10": answer === AnswerOption.Right,
            "opacity-0": answer === AnswerOption.Right && compare,
          })}
        >
          <Option
            src={levelData.rightImage}
            alt="Right Image"
            onClick={() => handleAnswer(AnswerOption.Right)}
            optionState={rightState}
            explanation={levelData.reason}
          />
        </div>
      </div>

      <div
        className={classNames(
          "flex flex-col gap-4 self-start w-full collapse",
          {
            invisible: !hasAnswered,
          }
        )}
      >
        <p className="font-mono text-center p-6 leading-loose">
          Press and hold{" "}
          <span
            className={classNames("font-bold bg-slate-400/50 p-2 rounded-md", {
              "text-black": compare,
              "bg-slate-200": compare,
            })}
          >
            Shift
          </span>{" "}
          to compare,{" "}
          <span className="font-bold bg-slate-400/50 p-2 rounded-md">
            Enter
          </span>{" "}
          to continue
        </p>

        <div className="w-full flex justify-center gap-4">
          <AppButton
            text="Compare"
            onMouseDown={() => setCompareDown(true)}
            onMouseUp={() => setCompareDown(false)}
          />
          <AppButton text="Next" onClick={onNext} />
        </div>
      </div>
    </div>
  );
}
