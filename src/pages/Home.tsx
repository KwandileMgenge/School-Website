import Hero from "../components/Hero";
import News from "../components/News";
import UrgentNeeds from "../components/UrgentNeeds";

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