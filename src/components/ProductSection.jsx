import illustrationMobileImg from "../assets/illustration-app.png";
import bgMobileImg from "../assets/bg-pattern-2.svg";
import Card from "./Card";

const ProductSection = () => {
  return (
    <section>
      <div className="relative mt-44 w-full bg-slate pt-96 md:max-w-[42.5rem] md:rounded-xl md:pt-[37.5rem] xl:max-w-[72rem]">
        <img
          className="absolute left-1/2 top-[-6.875rem] z-20 max-w-52 -translate-x-1/2 md:left-11 md:max-w-[16.89rem] md:translate-x-0 xl:left-[6.25rem] xl:max-w-[19.5rem] xl:translate-x-0"
          src={illustrationMobileImg}
          alt="Equalizer app playing in a mobile which shows treble boost 10decibels"
        />
        <img
          className="absolute left-4 top-0 z-0 max-w-[19.5rem] md:left-0 xl:left-[23rem]"
          src={bgMobileImg}
          alt=""
        />
      </div>
      <Card />
    </section>
  );
};

export default ProductSection;
