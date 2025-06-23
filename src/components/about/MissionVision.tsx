

const MissionVision = () => {
  return (
    <section className="py-16 bg-green-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-bay-of-many mb-12 font-merriweather">
          Our Guiding Principles
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-chenin">
            <div className="flex items-center mb-4">
              <div className="bg-bay-of-many text-white p-3 rounded-full mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-bay-of-many font-merriweather">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To empower students from all backgrounds through accessible, quality education, fostering curiosity, 
              resilience, and community responsibility. We cultivate a safe, inclusive learning environment 
              where every student's potential is recognized and celebrated.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-bay-of-many">
            <div className="flex items-center mb-4">
              <div className="bg-chenin text-bay-of-many p-3 rounded-full mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-bay-of-many font-merriweather">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be a beacon of transformative public education where every student graduates with future-ready skills, 
              where community collaboration fuels growth, and where digital tools amplify opportunity for all. 
              We envision a future where our model inspires schools nationwide.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-bay-of-many mb-6 font-merriweather">
            Our Core Values
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Equity', 'Integrity', 'Community', 'Excellence'].map((value) => (
              <div 
                key={value}
                className="px-6 py-3 bg-bay-of-many/10 text-bay-of-many rounded-full font-medium hover:bg-bay-of-many/20 transition"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;