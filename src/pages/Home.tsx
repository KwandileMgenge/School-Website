import Hero from "../components/Hero";
import MissionVision from "../components/MissionVision";

const Home = () => {
  return (
    <div className="mx-auto w-full">
      <Hero/>

      <MissionVision/>

      <section className="bg-yellow-50 p-4 rounded-lg my-6">
        <h2 className="text-xl font-semibold mb-2">Urgent Needs</h2>
        <ul className="list-disc pl-5">
          <li>New science lab equipment (₦500,000)</li>
          <li>Library books (₦200,000)</li>
        </ul>
      </section>

      <section className="my-6">
        <h2 className="text-xl font-semibold mb-2">Latest News</h2>
        <div className="bg-green-50 p-3 rounded-lg">
          <p>🏆 School wins regional debate competition!</p>
        </div>
      </section>
    </div>
  );
};

export default Home;