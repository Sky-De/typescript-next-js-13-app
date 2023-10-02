import Hero from "@components/hero/Hero";
import Posts from "@components/posts/Posts";

export const metadata = {
  title: "AI-Share",
  description:
    "Explore the boundless potential of AI with a global network of like-minded individuals, all eager to connect, collaborate, andcollectively shape the future of machine intelligence",
  keywords: "ai, share, skyde1991, app",
};

const Home = () => {
  return (
    <section className="home__page w-full">
      <Hero />
      <Posts />
    </section>
  );
};

export default Home;
