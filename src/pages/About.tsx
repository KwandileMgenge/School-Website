import MissionVision from '../components/about/MissionVision';
import HeroSub from '../components/HeroSub';

const About = () => {
  return (
    <>
      {/* Move these to a layout or use react-helmet-async in real app */}
      <title>About Nhlanhlayethu Secondary School | Inanda Newtown B, Durban</title>
      <meta name="description" content="Nhlanhlayethu Secondary School (EMIS 500161727) - Quintile 3 no-fee public secondary school serving 1,404 learners in Inanda Newtown B, Durban. Grades 8-12 | Improving matric results | Proud KZN township school." />

      {/* Hero Section - Updated image suggestion */}
      <HeroSub 
        imageUrl="/images/school-hero.jpg" 
        title="Our Story"
        subtitle="Inanda Newtown B, Durban • Education is the key to success"
      />

      {/* History Section - Real data */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-bay-of-many mb-6 font-merriweather">Our Humble Beginnings</h2>
              <div className="space-y-4 text-gray-700">
                <p>Nhlanhlayethu Secondary School was established in the post-apartheid era to serve the vibrant Inanda Newtown B community in Durban, KwaZulu-Natal.</p>
                <p>As a public Quintile 3 no-fee secondary school (EMIS 500161727), we provide quality CAPS/NSC education to 1,404 learners from Grades 8–12 in a high-density township setting.</p>
                <p>Notable milestones include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>High-level motivational visits by KZN Premier Sihle Zikalala and HoD Dr Enock Nzama to our Grade 12 learners</li>
                  <li>u/15 Netball team won the KZN Cape Kay Motsepe Schools Netball Cup (2017) and competed nationally</li>
                  <li>Received 20 desktop computers from BET Software to upgrade our computer lab</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/school-history.jpg" 
                alt="Nhlanhlayethu Secondary School learners in Inanda Newtown B" 
                className="w-full h-auto object-cover"
              />
              <p className="text-center py-2 text-sm text-gray-500">Nhlanhlayethu Secondary School, Inanda Newtown B</p>
            </div>
          </div>
        </div>
      </section>

      <MissionVision />

      {/* Leadership Section - Real & simplified */}
      <section className="py-16 bg-green-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-bay-of-many mb-12 font-merriweather">Meet Our Leadership</h2>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/principal-caluza.jpg" 
                  alt="Principal Caluza"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-bay-of-many font-merriweather">Principal Caluza</h3>
                <p className="text-chenin font-medium mb-3">School Principal</p>
                <p className="text-gray-600">Leads our team of 49 dedicated educators serving 1,404 learners in Inanda Newtown B.</p>
                <p className="text-sm text-gray-500 mt-4">Email: nomarashiyacaluza@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Real numbers */}
      <section className="py-16 bg-bay-of-many text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-12 font-merriweather">By The Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1,404", label: "Learners" },
              { value: "49", label: "Educators" },
              { value: "Grades 8-12", label: "NSC / CAPS" },
              { value: "Quintile 3", label: "No-Fee School" }
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
          <h2 className="text-3xl font-bold text-bay-of-many mb-6 font-merriweather">Join the Nhlanhlayethu Family</h2>
          <p className="text-xl text-gray-700 mb-8">Follow us on Facebook • Connect with alumni • Support our learners</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.facebook.com/enamba7/" target="_blank" rel="noopener noreferrer" 
              className="px-8 py-3 bg-chenin text-bay-of-many rounded-lg hover:bg-yellow-600 transition font-bold">
              Visit Our Facebook Page
            </a>
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