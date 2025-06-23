import Hero from "../components/Hero";
import News from "../components/home/News";
import UrgentNeeds from "../components/support/UrgentNeeds";

const Home = () => {
  return (
    <div className="mx-auto w-full">
      <Hero/>

      <News/>

      <UrgentNeeds/>

      
    </div>
  );
};

export default Home;