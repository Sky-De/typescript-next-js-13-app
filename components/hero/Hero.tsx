"use client";
import HeroSvg from "../../public/SVG/hero.svg";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Hero = () => {
  const { data: session } = useSession();
  return (
    <section
      role="banner"
      className="hero flex flex-col lg:flex-row-reverse items-center w-full justify-between border-b mb-14 pb-16 lg:h-[80vh]"
    >
      <Image
        title="https://storyset.com/"
        src={HeroSvg}
        alt="Hero"
        className="hero__img hidden md:block"
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
        <p className="text-gray-500 text-xl mt-6 text-center lg:text-start lg:max-w-[80%]">
          Explore the boundless potential of AI with a global network of
          like-minded individuals, all eager to connect, collaborate, and
          collectively shape the future of machine intelligence.
        </p>

        <Link
          title="create new post"
          href={session?.user ? "/create-post" : "/auth"}
          className="callToActionBtn rounded-md text-white hover:translate-y-[2px] ease-in duration-100 text-lg mt-16 lg:mt-8 w-[fit-content] self-center lg:self-start"
        >
          Create Post
        </Link>
      </div>
    </section>
  );
};

export default Hero;
