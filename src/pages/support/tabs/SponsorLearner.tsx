import { Link } from 'react-router-dom';

const SponsorLearner = () => {
  const supportOptions = [
    {
      id: 1,
      type: "Complete Uniform Pack",
      amount: "R950/year",
      includes: [
        "2x Summer uniforms (shirt/dress + trousers/skirt)",
        "1x Winter jersey",
        "Pair of school shoes",
        "Sports kit",
        "School bag"
      ],
      impact: "Removes a major barrier to attendance and dignity for learners in Inanda Newtown B"
    },
    {
      id: 2,
      type: "Learning Essentials Kit",
      amount: "R1,800/year",
      includes: [
        "Full stationery set for the year",
        "Mathematics instruments & scientific calculator",
        "Prescribed textbooks & novels",
        "USB drive for digital learning"
      ],
      impact: "Equips our 1,404 learners for academic success in Grades 8–12"
    },
    {
      id: 3,
      type: "Netball Sports Pack",
      amount: "R1,200/year",
      includes: [
        "Full matching netball kit (top + skirt/skort)",
        "Trainers & socks",
        "Training bibs & equipment",
        "Support for tournament travel"
      ],
      impact: "Powers our proud u/15 netball team — KZN Cup winners"
    }
  ];

  return (
    <div>
      {/* School context banner */}
      <div className="bg-emerald-700 text-white p-8 rounded-3xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-3 font-merriweather">Sponsor a Learner</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Quintile 3 no-fee public school • Inanda Newtown B, Durban<br />
          <strong>Your sponsorship directly helps one of our 1,404 learners</strong> with essentials the government funding doesn’t cover.
        </p>
      </div>

      {/* How to Sponsor */}
      <div className="bg-white border-2 border-chenin rounded-3xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-bay-of-many mb-4 font-merriweather">How to Sponsor (Safe & Official)</h3>
        <p className="text-gray-700 mb-6">
          All learner sponsorships are managed by our School Governing Body (SGB).
        </p>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div>
            <p className="font-medium text-bay-of-many">Contact Principal Caluza:</p>
            <p className="text-2xl font-bold">031 519 0094</p>
            <p className="text-xl">082 611 7027 (WhatsApp)</p>
            <p className="text-sm text-gray-500 mt-1">nomarashiyacaluza@gmail.com</p>
          </div>
          <div className="flex-1">
            <a 
              href="https://wa.me/27826117027?text=Hi%20Principal%20Caluza%2C%20I%20would%20like%20to%20sponsor%20a%20learner%20at%20Nhlanhlayethu%20Secondary%20School."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition"
            >
              💬 Sponsor via WhatsApp now
            </a>
          </div>
        </div>
      </div>

      {/* Support Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-merriweather text-center text-bay-of-many">
            Choose How You’d Like to Help
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map(option => (
              <div key={option.id} className="border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-bay-of-many text-white p-6 text-center">
                  <h3 className="text-2xl font-bold">{option.type}</h3>
                  <p className="text-4xl font-bold mt-2">{option.amount}</p>
                </div>
                <div className="p-7">
                  <h4 className="font-bold mb-4">Includes:</h4>
                  <ul className="space-y-3 mb-8">
                    {option.includes.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-chenin mr-3 mt-1">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-emerald-50 p-4 rounded-2xl">
                    <p className="font-semibold text-emerald-700">Impact:</p>
                    <p className="text-gray-700">{option.impact}</p>
                  </div>
                </div>
                <div className="p-6 bg-gray-50 border-t">
                  <button
                    onClick={() => window.scrollTo({ top: document.getElementById('sponsor-form')?.offsetTop || 0, behavior: 'smooth' })}
                    className="w-full bg-chenin text-bay-of-many py-4 rounded-2xl font-bold hover:bg-yellow-600 transition"
                  >
                    I’d like to sponsor this
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA at bottom */}
      <section className="py-16 bg-green-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 font-merriweather text-bay-of-many">Ready to change a learner’s story?</h2>
          <a 
            href="https://wa.me/27826117027?text=Hi%20Principal%20Caluza%2C%20I%27m%20interested%20in%20sponsoring%20a%20learner."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 text-white px-10 py-5 rounded-3xl font-bold text-xl hover:bg-green-700 transition"
          >
            💬 Message Principal Caluza on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default SponsorLearner;