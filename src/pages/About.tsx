
import MissionVision from '../components/about/MissionVision';

const About = () => {
  return (
    <>
      <title>About Nhlanhlayethu Secondary School - Our Story, Mission & Values</title>
      <meta name="description" content="Learn about [School Name]'s history, educational philosophy, and commitment to empowering students through quality education" />

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center flex items-center justify-center" 
              style={{ backgroundImage: "linear-gradient(rgba(33, 76, 132, 0.8), rgba(33, 76, 132, 0.6)), url('/Zwelemfundo_public_school_Africom.jpg')" }}>
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-merriweather">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">Discover the heart behind [School Name]'s commitment to transformative education</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-bay-of-many mb-6 font-merriweather">Our Humble Beginnings</h2>
              <div className="space-y-4 text-gray-700">
                <p>Founded in [Year], [School Name] started as a small community initiative with just [X] students in a rented building.</p>
                <p>Through the dedication of our founders [Names] and the support of local families, we grew into the institution we are today.</p>
                <p>Notable milestones include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>[Year]: Moved to our permanent campus</li>
                  <li>[Year]: Achieved 100% pass rate in national exams</li>
                  <li>[Year]: Launched our STEM program</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/school-history.jpg" 
                alt="Early days of [School Name]" 
                className="w-full h-auto object-cover"
              />
              <p className="text-center py-2 text-sm text-gray-500">[School Name] in [Year]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Leadership Section */}
      <section className="py-16 bg-green-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-bay-of-many mb-12 font-merriweather">Meet Our Leadership</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Principal [Name]",
                role: "School Principal",
                bio: "With [X] years in education, Principal [Name] leads our academic vision.",
                image: "/principal.jpg"
              },
              {
                name: "[Name] [Lastname]",
                role: "Board Chair",
                bio: "Community leader championing educational access since [Year].",
                image: "/board-chair.jpg"
              },
              {
                name: "[Name] [Lastname]",
                role: "PTA President",
                bio: "Parent advocate ensuring family voices are heard.",
                image: "/pta-president.jpg"
              }
            ].map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-bay-of-many font-merriweather">{leader.name}</h3>
                  <p className="text-chenin font-medium mb-3">{leader.role}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-bay-of-many text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-12 font-merriweather">By The Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "92%", label: "Graduation Rate" },
              { value: "1,200+", label: "Students Served" },
              { value: "50+", label: "Qualified Staff" },
              { value: "15", label: "Years of Excellence" }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-green-white">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-bay-of-many mb-6 font-merriweather">Become Part of Our Story</h2>
          <p className="text-xl text-gray-700 mb-8">Whether you're a prospective family, donor, or community partner, we invite you to join our mission.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-chenin text-bay-of-many rounded-lg hover:bg-yellow-600 transition font-bold">
              Schedule a Visit
            </button>
            <button className="px-8 py-3 bg-bay-of-many text-white rounded-lg hover:bg-blue-800 transition font-bold">
              Support Our Mission
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;