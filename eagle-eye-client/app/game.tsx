"use client";

import { useState } from "react";
import Splash from "./splash";
import GameLevel from "./gameLevel";
import AppButton from "./appButton";
import Header from "./header";

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
    levelText: "Intro 1",
    leftImage: "/levels/1/left.png",
    rightImage: "/levels/1/right.png",
    correctAnswer: AnswerOption.Right,
    reason: "Oval eyes, modified text in wordmark",
  },
  {
    title: "Which is the correct Discord logo?",
    levelText: "Intro 2",
    leftImage: "/levels/1/left.png",
    rightImage: "/levels/1/right.png",
    correctAnswer: AnswerOption.Right,
    reason: "Oval eyes, modified text in wordmark",
  },
  {
    title: "Which is the correct Discord logo?",
    levelText: "Intro 3",
    leftImage: "/levels/1/left.png",
    rightImage: "/levels/1/right.png",
    correctAnswer: AnswerOption.Right,
    reason: "Oval eyes, modified text in wordmark",
  },
  {
    title: "Which is the correct Discord logo?",
    levelText: "Intro 4",
    leftImage: "/levels/1/left.png",
    rightImage: "/levels/1/right.png",
    correctAnswer: AnswerOption.Right,
    reason: "Oval eyes, modified text in wordmark",
  },
  {
    title: "Which is the correct Discord logo?",
    levelText: "Intro 5",
    leftImage: "/levels/1/left.png",
    rightImage: "/levels/1/right.png",
    correctAnswer: AnswerOption.Right,
    reason: "Oval eyes, modified text in wordmark",
  },
  {
    title: "Which is the correct Discord logo?",
    levelText: "Intro 6",
    leftImage: "/levels/1/left.png",
    rightImage: "/levels/1/right.png",
    correctAnswer: AnswerOption.Right,
    reason: "Oval eyes, modified text in wordmark",
  },
];

enum GameState {
  Splash,
  Playing,
  End,
}

function getHeaderText(gameState: GameState, level: LevelData) {
  switch (gameState) {
    case GameState.Splash:
      return "Eagle Eye Challenge";
    case GameState.Playing:
      return level.title;
    case GameState.End:
      return "Game Over";
    default:
      throw "Unhandled";
  }
}

export default function Game() {
  const [gameState, setGameState] = useState(GameState.Splash);
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);

  const onAnswer = (wasCorrect: boolean) => {
    if (wasCorrect) setScore(score + 100);
  };
  const nextLevel = () => {
    if (level < GameData.length - 1) {
      setLevel(level + 1);
    } else {
      setGameState(GameState.End);
    }
  };
  const reset = () => {
    setGameState(GameState.Splash);
    setScore(0);
    setLevel(0);
  };

  const headerText = getHeaderText(gameState, GameData[level]);

  return (
    // TODO fix text colors
    // TODO add background images
    <div className="pl-12 pr-12 pb-12 pt-96 flex flex-col max-w-4xl text-white">
      <Header showScore={gameState === GameState.Playing} score={score} />
      {/* TODO correct font usage */}
      <div
        className="uppercase font-extrabold leading-tight mb-4 text-5xl min-h-32"
        style={{ fontFamily: `"Ginto", sans-serif` }}
      >
        {headerText}
      </div>

      {gameState === GameState.Splash && (
        <Splash onStart={() => setGameState(GameState.Playing)} />
      )}
      {gameState === GameState.Playing && (
        <GameLevel
          key={level}
          levelData={GameData[level]}
          onAnswer={onAnswer}
          onNext={nextLevel}
        />
      )}
      {gameState === GameState.End && (
        <div>
          <h1>Game Over</h1>
          <div>Score: {score}</div>
          <AppButton text="Play Again" onClick={() => reset()} />
        </div>
      )}
    </div>
  );
}
