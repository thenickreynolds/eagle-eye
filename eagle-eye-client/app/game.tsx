"use client";

import { useEffect, useState } from "react";
import Splash from "./splash";
import GameLevel from "./gameLevel";
import AppPrimaryButton from "./appPrimaryButton";
import Score from "./score";
import Image from "next/image";
import { Howl } from "howler";

const backgroundMusic = new Howl({
  src: "discord_app_sounds_vibing_wumpus.mp3",
  loop: true,
  volume: 0.5,
});

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
    levelText: "Intro: 1 / 5",
    leftImage: "/levels/1_Left.png",
    rightImage: "/levels/1_Right.png",
    correctAnswer: AnswerOption.Right,
    reason: "Oval eyes, modified text in wordmark",
  },
  {
    title: "Which blurple is our brand #5865F2?",
    levelText: "Intro: 2 / 5",
    leftImage: "/levels/2_Left.png",
    rightImage: "/levels/2_Right.png",
    correctAnswer: AnswerOption.Right,
    reason: "Oval eyes, modified text in wordmark", // TODO replace
  },
  {
    title: "Which Wumpus is cozier?",
    levelText: "Intro: 3 / 5",
    leftImage: "/levels/3_Left.png",
    rightImage: "/levels/3_Right.png",
    correctAnswer: AnswerOption.Left,
    reason: "Oval eyes, modified text in wordmark", // TODO replace
  },
  {
    title: "What is Discord’s design system named?",
    levelText: "Intro: 4 / 5",
    leftImage: "/levels/4_Left.png",
    rightImage: "/levels/4_Right.png",
    correctAnswer: AnswerOption.Left,
    reason: "Oval eyes, modified text in wordmark", // TODO replace
  },
  {
    title: "Which squircle is centered?",
    levelText: "Intro: 5 / 5",
    leftImage: "/levels/5_Left.png",
    rightImage: "/levels/5_Right.png",
    correctAnswer: AnswerOption.Left,
    reason: "Oval eyes, modified text in wordmark", // TODO replace
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

  useEffect(() => {
    backgroundMusic.play();
  }, []);

  const onAnswer = (wasCorrect: boolean) => {
    if (wasCorrect) setScore(score + 10);
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

  return (
    <>
      {/* TODO PIP mode */}
      {/* TODO mobile responsiveness */}
      {/* TODO fix theme */}
      {/* TODO mute button */}
      <div className="text-white">
        {gameState === GameState.Splash && (
          <Splash onStart={() => setGameState(GameState.Playing)} />
        )}
        {gameState === GameState.Playing && (
          <div className="flex flex-col min-h-screen">
            <div className="grid grid-cols-2 items-start m-12">
              {/* TODO replace with eagle eye logo */}
              <Image
                className="mb-2 mt-1"
                src="/discord-logo-white.svg"
                alt="Discord Logo"
                width="208"
                height="40"
              />

              <Score score={score} />
            </div>
            <div className="grow flex-col content-center px-12">
              <GameLevel
                key={level}
                levelData={GameData[level]}
                onAnswer={onAnswer}
                onNext={nextLevel}
              />
            </div>
          </div>
        )}
        {gameState === GameState.End && (
          <div>
            <h1>Game Over</h1>
            <div>Score: {score}</div>
            <AppPrimaryButton text="Play Again" onClick={() => reset()} />
          </div>
        )}
      </div>
      {/* PIP mode */}
      <div className="min-[200px]:collapse absolute inset-0 w-full min-h-screen flex items-center justify-center bg-indigo-300">
        <Score score={score} />
      </div>
    </>
  );
}
