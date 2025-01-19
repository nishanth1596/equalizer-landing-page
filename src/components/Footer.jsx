import Logo from "./Logo";
import ShareIcons from "./ShareIcons";

const Footer = () => {
  return (
    <footer className="mt-16 md:mb-20 md:mt-[9.375rem] xl:mt-36 xl:flex xl:gap-32">
      <Logo />

      <div className="md:mt-8 md:flex md:items-center md:justify-between xl:mt-0 xl:gap-[10.25rem]">
        <div className="mt-8 text-fs-5 font-fw-5 leading-lh-5 md:mt-0">
          <p>All rights reserved © Equalizer 2021</p>
          <p>
            Have any problems? Contact us via social media or email us at{" "}
            <span className="block font-fw-5B">equalizer@example.com</span>
          </p>
        </div>

        <div className="mb-20 mt-8 flex gap-8 md:mb-0 md:mt-0">
          <ShareIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
