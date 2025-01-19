import Button from "./Button";

const Card = () => {
  return (
    <div className="relative bg-orange md:z-40 md:-mt-[32.125rem] md:ml-64 md:mr-16 md:max-w-[22.25rem] md:rounded-2xl md:px-12 xl:-mt-[32.38rem] xl:ml-[34rem] xl:max-w-[32rem] xl:px-14">
      <h2 className="pt-12 text-fs-3 font-fw-3 leading-lh-3">Premium EQ</h2>
      <p className="mt-6 text-fs-5 font-fw-4 leading-lh-4 tracking-normal md:text-fs-6 xl:text-fs-4">
        Get expert-level control with a robust equalizer, volume mixer, and
        spatial audio. Take your listening experience to a whole new level and
        access all our incredible features!
      </p>
      <p className="mt-10 flex items-center gap-4 text-fs-4 font-fw-4 leading-lh-4">
        <span className="text-fs-2 font-fw-2">$4</span> / month
      </p>
      <div className="mt-12 flex flex-col gap-4 pb-28 md:pb-12">
        <Button name="ios Download" type="dark" os="ios" />
        <Button name="Android Download" type="light" os="android" />
      </div>
    </div>
  );
};

export default Card;
