import AppButton from "./appButton";

export default function Splash({ onStart }: { onStart: () => void }) {
  return (
    <>
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
