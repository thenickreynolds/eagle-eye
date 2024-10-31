import AppPrimaryButton from "./appPrimaryButton";
import Image from "next/image";

export default function Splash({ onStart }: { onStart: () => void }) {
  return (
    <>
      <div className="absolute inset-0 -z-10 w-full min-h-screen">
        <Image
          src="/pixelstars 2.png"
          alt="Starry background"
          className="absolute inset-0 w-full h-full object-cover"
          width="1440"
          height="90"
        />
        <Image
          src="/background-sprites.png"
          alt="Background"
          className="absolute right-0 mr-6 top-1/2 -translate-y-1/2 h-[65vh] w-auto collapse md:visible"
          width="461"
          height="837"
        />
      </div>
      <div className="flex flex-col justify-center h-screen max-w-2xl my-auto pl-6 md:pl-32">
        <Image
          className="mb-2 mt-1"
          src="/discord-logo-eagle-eye.svg"
          alt="Discord Logo"
          width="122"
          height="20"
        />
        <div
          className="uppercase font-extrabold leading-tight mb-6 text-2xl md:text-3xl"
          style={{ fontFamily: `"Ginto", sans-serif` }}
        >
          Eagle Eye
          <br /> Challenge
        </div>
        <p className="text-2xl md:text-6xl mb-4">
          How good is your eye for design detail?
        </p>
        <p className="mb-4 leading-relaxed text-lg">
          Test your eye for detail and see how well you truly know the Discord
          product. Spot differences, recognize subtle design elements, and prove
          you&apos;re a master of your craft! Let&apos;s see how sharp your
          design sense really is!
        </p>
        <div className="pt-4">
          <AppPrimaryButton text="Begin" onClick={onStart} />
        </div>
      </div>
    </>
  );
}
