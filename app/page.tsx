import Hero from "@components/hero/Hero";
import Posts from "@components/posts/Posts";

const Home = () => {
  return (
    <section className="home__page w-full">
      <Hero />
      <Posts />
    </section>
  );
};

export default Home;
