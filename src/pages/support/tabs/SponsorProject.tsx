import { Link } from 'react-router-dom';

const SponsorProject = () => {
  const essentialProjects = [
    {
      id: 1,
      name: "Netball Programme Enhancement",
      description: "Matching kits, trainers, equipment and tournament support for our proud netball teams",
      budget: "R35,000",
      impact: "Continues our tradition of KZN Cup success and inspires 100+ girls"
    },
    {
      id: 2,
      name: "Computer Lab Expansion",
      description: "Additional desktops, software licences and maintenance (building on the 20 PCs already donated)",
      budget: "R65,000",
      impact: "Gives more learners hands-on digital skills for the future"
    },
    {
      id: 3,
      name: "Library & Reading Resources",
      description: "Curriculum-aligned books, novels and comfortable reading corners",
      budget: "R45,000",
      impact: "Improves literacy and supports all Grades 8–12 learners"
    }
  ];

  return (
    <div>
      {/* School context banner */}
      <div className="bg-emerald-700 text-white p-8 rounded-3xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-3 font-merriweather">Sponsor a Project</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Targeted support that benefits the entire school<br />
          <strong>Nhlanhlayethu Secondary School • Inanda Newtown B</strong>
        </p>
      </div>

      {/* How to Sponsor */}
      <div className="bg-white border-2 border-chenin rounded-3xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-bay-of-many mb-4 font-merriweather">How to Sponsor a Project</h3>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div>
            <p className="font-medium text-bay-of-many">Contact Principal Caluza:</p>
            <p className="text-2xl font-bold">031 519 0094</p>
            <p className="text-xl">082 611 7027 (WhatsApp)</p>
          </div>
          <div className="flex-1">
            <a 
              href="https://wa.me/27826117027?text=Hi%20Principal%20Caluza%2C%20I%27d%20like%20to%20sponsor%20a%20project%20at%20Nhlanhlayethu%20Secondary%20School."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition"
            >
              💬 Sponsor via WhatsApp now
            </a>
          </div>
        </div>
      </div>

      {/* Priority Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-merriweather text-center text-bay-of-many">
            Our Priority Projects
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {essentialProjects.map(project => (
              <div key={project.id} className="border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all">
                <div className="p-7">
                  <h3 className="text-2xl font-bold font-merriweather mb-3">{project.name}</h3>
                  <p className="text-gray-700 mb-6">{project.description}</p>
                  <div className="bg-emerald-50 p-4 rounded-2xl mb-6">
                    <p className="font-semibold text-emerald-700">Impact:</p>
                    <p className="text-gray-700">{project.impact}</p>
                  </div>
                  <button
                    onClick={() => window.scrollTo({ top: document.getElementById('project-form')?.offsetTop || 0, behavior: 'smooth' })}
                    className="w-full bg-bay-of-many text-white py-4 rounded-2xl font-bold hover:bg-blue-800 transition"
                  >
                    Sponsor this project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="project-form" className="py-16 bg-green-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 font-merriweather text-bay-of-many">Let’s make one of these projects happen together</h2>
          <a 
            href="https://wa.me/27826117027?text=Hi%20Principal%20Caluza%2C%20I%27m%20interested%20in%20sponsoring%20a%20school%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 text-white px-10 py-5 rounded-3xl font-bold text-xl hover:bg-green-700 transition"
          >
            💬 Message the Principal on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default SponsorProject;