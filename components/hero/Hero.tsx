import HeroSvg from "../../public/SVG/hero.svg";
import Image from "next/image";
const Hero = () => {
  return (
    <section
      role="banner"
      className="hero flex flex-col lg:flex-row-reverse items-center w-full justify-between"
    >
      <Image
        title="https://storyset.com/"
        src={HeroSvg}
        alt="Hero"
        className="hero__img"
      />
      <div className="hero__intro flex flex-col text-4xl">
        <h1 className="hero__title font-bold text-center lg:text-start">
          <span>Discover </span>
          <span className="hero__title__gradiant font-bold">
            the Power of AI
          </span>{" "}
          <span className="block">
            Share Your Favorite Tech Titans{" "}
            <span className="hero__title__gradiant">!</span>
          </span>
        </h1>
        <p className="text-gray-400 text-xl mt-6 text-center lg:text-start lg:max-w-[80%]">
          Discover the boundless potential of AI with a global network of
          like-minded individuals, all eager to connect, collaborate, and
          collectively shape the future of machine intelligence.
        </p>
      </div>
    </section>
  );
};

export default Hero;
