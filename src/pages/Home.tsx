import Hero from "../components/home/Hero";
import News from "../components/home/News";
import HowYouCanHelp from "../components/home/HowYouCanHelp";

const Home = () => {
  return (
    <div className="mx-auto w-full">
      <Hero/>

      <News/>

      <HowYouCanHelp/>
    </div>
  );
};

export default Home;