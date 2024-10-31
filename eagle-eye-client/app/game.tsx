"use client";

import { useEffect, useState } from "react";
import Splash from "./splash";
import GameLevel from "./gameLevel";
import AppPrimaryButton from "./appPrimaryButton";
import Score from "./score";
import Image from "next/image";
import { Howl } from "howler";
import GameData from "./gameData";
import { fireworks } from "@/utils/confettiHelper";

const backgroundMusic = new Howl({
  src: "discord_app_sounds_vibing_wumpus.mp3",
  loop: true,
  volume: 0.05,
});

enum GameState {
  Splash,
  Playing,
  End,
}

export default function Game() {
  const [gameState, setGameState] = useState(GameState.Splash);
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    backgroundMusic.play();

    // Hide overlfow in PIP state
    const handleResize = () => {
      document.body.style.overflow =
        window.innerWidth < 350 ? "hidden" : "auto";
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (gameState === GameState.End) {
      fireworks();
    }
  }, [gameState]);

  const onAnswer = (wasCorrect: boolean) => {
    if (wasCorrect) setScore(score + GameData[level].points);
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
      {/* TODO List
          P0
          - improve transitions
          - confetti on game over

          P1
          - post result to chat when game over
          - leaderboard
          - use Discord's monofont
          - make the sprites on landing page slide right when getting smaller and maybe all move independently

          P2
          - fix the way I force dark theme colors :(
          - consider progress bar
          - consider sound effects for correct and incorrect
       */}
      <div className="text-white">
        {gameState === GameState.Splash && (
          <Splash onStart={() => setGameState(GameState.Playing)} />
        )}
        {gameState === GameState.Playing && (
          <div className="flex flex-col min-h-screen">
            <div className="grid grid-cols-2 m-12 items-center mr-28">
              <Image
                src="/discord-logo-eagle-eye.svg"
                alt="Discord Logo"
                width="122"
                height="20"
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
          <div className="flex flex-col items-center justify-center h-screen gap-6">
            <div
              className="uppercase font-extrabold leading-tight mb-6 text-2xl md:text-3xl"
              style={{ fontFamily: `"Ginto", sans-serif` }}
            >
              Game Over
            </div>
            <div className="text-2xl md:text-4xl">Congratulations!</div>
            <Score score={score} />
            <div className="pt-2" />
            <AppPrimaryButton text="Play Again" onClick={() => reset()} />
          </div>
        )}
      </div>
      <div className="absolute right-0 top-0 p-14 m-0.5">
        <Image
          className="cursor-pointer opacity-75 hover:opacity-100 transition-opacity duration-300 shadow-lg"
          alt={isMuted ? "Unmute" : "Mute"}
          src={isMuted ? "/headphones-slash.svg" : "/headphones.svg"}
          width="30"
          height="30"
          onClick={() => {
            const newIsMuted = !isMuted;
            setIsMuted(newIsMuted);
            if (newIsMuted) {
              backgroundMusic.fade(0.05, 0, 0.5);
            } else {
              backgroundMusic.fade(0, 0.05, 0.5);
            }
          }}
        />
      </div>
      {/* PIP mode */}
      {/* TODO actually integrate API to detect PIP rather than this shitty hack */}
      <div className="min-[350px]:collapse absolute inset-0 w-full min-h-screen flex items-center justify-center bg-indigo-300">
        <Score score={score} />
      </div>
    </>
  );
}
