import { Link } from 'react-router-dom';

const SponsorLearner = () => {
  // Sponsorship options for a no-fee school
  const supportOptions = [
    {
      id: 1,
      type: "Uniform & Shoes",
      amount: "R800/year",
      includes: [
        "Full school uniform set",
        "Pair of school shoes",
        "Winter jersey"
      ],
      impact: "Ensures dignity and compliance with dress code"
    },
    {
      id: 2,
      type: "Learning Materials",
      amount: "R1,200/year",
      includes: [
        "Textbooks and workbooks",
        "Stationery pack",
        "Scientific calculator (Grade 10-12)"
      ],
      impact: "Provides tools for academic success"
    },
    {
      id: 3,
      type: "Daily Nutrition",
      amount: "R1,500/year",
      includes: [
        "Nutritious daily lunch",
        "Exam-time energy snacks",
        "Winter soup program"
      ],
      impact: "Supports concentration and health"
    }
  ];

  const successStories = [
    {
      quote: "My new uniform made me feel proud to come to school every day.",
      name: "Lerato, Grade 8"
    },
    {
      quote: "Having my own calculator helped me pass maths finals.",
      name: "Sipho, Grade 11"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "linear-gradient(rgba(33, 76, 132, 0.8), rgba(33, 76, 132, 0.6)), url('/src/assets/sponsor-hero.jpg')" }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-merriweather">Support a Learner</h1>
          <p className="text-lg md:text-xl">Help break barriers to education</p>
        </div>
      </section>

      {/* Why Support Section */}
      <section className="bg-green-white py-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-merriweather text-bay-of-many">
            Why Your Support Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: "👕",
                title: "Uniform Provision",
                text: "Many families struggle with uniform costs despite no school fees"
              },
              {
                icon: "📚",
                title: "Learning Materials",
                text: "Essential books and supplies aren't always provided by the state"
              },
              {
                icon: "🍎",
                title: "Nutrition Support",
                text: "Hungry learners can't concentrate in class"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-merriweather text-center text-bay-of-many">
            How You Can Help
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map(option => (
              <div key={option.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                <div className="bg-bay-of-many text-white p-4">
                  <h3 className="text-xl font-bold text-center">{option.type}</h3>
                  <p className="text-center font-medium">{option.amount}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-bold mb-2">Includes:</h4>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    {option.includes.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="bg-green-white/50 p-3 rounded">
                    <p className="font-semibold">Impact:</p>
                    <p>{option.impact}</p>
                  </div>
                </div>
                <div className="p-4 bg-gray-50">
                  <Link 
                    to="/contact" 
                    className="block w-full bg-chenin text-bay-of-many text-center font-bold py-2 px-4 rounded hover:bg-yellow-600 transition"
                  >
                    Pledge Support
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-bay-of-many text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-merriweather text-center">
            Real Impact Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-lg">
                <blockquote className="italic mb-4 text-lg">"{story.quote}"</blockquote>
                <p className="font-semibold text-right">— {story.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-merriweather text-bay-of-many">
            Our Commitment to Transparency
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: "📊",
                title: "Annual Reports",
                text: "Detailed breakdown of all support received"
              },
              {
                icon: "📷",
                title: "Photo Updates",
                text: "See your impact (while protecting privacy)"
              },
              {
                icon: "✉️",
                title: "Regular Communication",
                text: "Receive thank-you notes from staff"
              }
            ].map((item, i) => (
              <div key={i} className="p-4">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <Link 
            to="/transparency" 
            className="inline-block bg-chenin text-bay-of-many px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition"
          >
            View Our 2023 Impact Report
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-merriweather text-bay-of-many">
            Ready to Change a Life?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-bay-of-many text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition"
            >
              Start Sponsoring
            </Link>
            <Link 
              to="/faq" 
              className="bg-white text-bay-of-many border-2 border-bay-of-many px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
            >
              Have Questions?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SponsorLearner;