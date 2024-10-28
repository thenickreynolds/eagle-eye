import AppButton from "./appButton";
import Image from "next/image";

export default function Splash({ onStart }: { onStart: () => void }) {
  return (
    <>
      <Image
        className="mb-2"
        src="/discord-logo-white.svg"
        alt="Discord Logo"
        width="208"
        height="40"
      />
      <h1 className="mb-4">
        Eagle Eye <br />
        Challenge
      </h1>
      <p className="text-6xl mb-8">How good is your eye for design detail?</p>
      <p className="mb-4 leading-relaxed text-lg">
        Test your eye for detail and see how well you truly know the Discord
        product. Spot differences, recognize subtle design elements, and prove
        you&apos;re a master of your craft! Let&apos;s see how sharp your design
        sense really is!
      </p>
      <div>
        <AppButton text="Begin" onClick={onStart} />
      </div>
    </>
  );
}
