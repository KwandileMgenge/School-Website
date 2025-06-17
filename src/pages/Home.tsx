const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="my-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to [School Name]</h1>
        <p className="text-lg">Empowering students through quality education.</p>
      </section>

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