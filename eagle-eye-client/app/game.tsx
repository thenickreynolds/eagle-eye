"use client";

import { useState } from "react";
import Splash from "./splash";
import GameLevel from "./gameLevel";

export enum AnswerOption {
  Left,
  Right,
}

export interface LevelData {
  title: string;
  levelText: string;
  leftImage: string;
  rightImage: string;
  correctAnswer: AnswerOption;
  reason: string;
}

const GameData: LevelData[] = [
  {
    title: "Which is the correct Discord logo?",
    levelText: "Easy",
    leftImage: "/discord-logo-white.svg",
    rightImage: "/discord-logo-white.svg",
    correctAnswer: AnswerOption.Left,
    reason: "Oval eyes, modified text in wordmark",
  },
];

enum GameState {
  Splash,
  Playing,
  End,
}

export default function Game() {
  const [gameState, setGameState] = useState(GameState.Splash);
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);

  const onAnswer = (wasCorrect: boolean) => {
    if (wasCorrect) setScore(score + 1);
  };
  const nextLevel = () => {
    if (level < GameData.length - 1) {
      setLevel(level + 1);
    } else {
      setGameState(GameState.End);
    }
  };

  return (
    <div className="m-12 flex flex-col max-w-2xl">
      {gameState === GameState.Splash && (
        <Splash onStart={() => setGameState(GameState.Playing)} />
      )}
      {gameState === GameState.Playing && (
        <>
          <div className="flex flex-row">
            <div className="grow">
              <img
                className="mb-2"
                src="/discord-logo-white.svg"
                alt="Discord Logo"
                width="208"
                height="40"
              />
            </div>
            <div className="grow items-center">Score: {score}</div>
          </div>
          <GameLevel
            levelData={GameData[level]}
            onAnswer={onAnswer}
            onNext={nextLevel}
          />
        </>
      )}
      {gameState === GameState.End && <p>End</p>}
    </div>
  );
}
