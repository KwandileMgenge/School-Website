// src/pages/SupportUs.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/Button';
import DonationForm from '../components/support/DonationForm';
import SponsorProject from '../components/support/SponsorProject';

const SupportUs = () => {
  const location = useLocation();
  const hash = location.hash.replace('#', '');
  
  // Set initial tab based on URL hash
  const [activeTab, setActiveTab] = useState<'donate' | 'sponsor' | 'learner'>(
    hash === 'sponsor' ? 'sponsor' :
    hash === 'learner' ? 'learner' : 'donate'
  );

  // Update tab when hash changes
  useEffect(() => {
    if (hash === 'sponsor') setActiveTab('sponsor');
    else if (hash === 'learner') setActiveTab('learner');
    else setActiveTab('donate');
  }, [hash]);

  // Donation Options (South African Rand)
  const donationTiers = [
    { name: "Supporter", amount: "R500", perks: ["Thank you letter"] },
    { name: "Benefactor", amount: "R5,000", perks: ["Certificate of appreciation", "School tour"] },
    { name: "Champion", amount: "R50,000", perks: ["Naming opportunity", "VIP event invites"] }
  ];

  // Learner Sponsorship
  const learnerSupportOptions = [
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
      impact: "Ensures dignity and full participation"
    },
    {
      id: 2,
      type: "Learning Essentials Kit",
      amount: "R1,800/year",
      includes: [
        "Full stationery set",
        "Mathematics instruments",
        "Prescribed novels",
        "Scientific calculator (Gr.10-12)",
        "USB drive for digital work"
      ],
      impact: "Equips learners for academic success"
    },
    {
      id: 3,
      type: "Afternoon Nutrition Pack",
      amount: "R600/year",
      includes: [
        "Take-home snack packs",
        "Exam period brain foods",
        "Weekend nutrition support"
      ],
      impact: "Supports learning beyond school hours"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "linear-gradient(rgba(33, 76, 132, 0.8), rgba(33, 76, 132, 0.6)), url('/src/assets/support-hero.jpg')" }}>
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-merriweather">Support Our School</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Your generosity helps provide quality education for our learners
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-bay-of-many text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center">
            <Link 
              to="/support#donate"
              className={`py-4 px-6 font-medium text-center ${activeTab === 'donate' ? 'bg-chenin text-bay-of-many' : 'hover:bg-blue-800'}`}
            >
              Make a Donation
            </Link>
            <Link 
              to="/support#learner"
              className={`py-4 px-6 font-medium text-center ${activeTab === 'learner' ? 'bg-chenin text-bay-of-many' : 'hover:bg-blue-800'}`}
            >
              Sponsor a Learner
            </Link>
            <Link 
              to="/support#sponsor"
              className={`py-4 px-6 font-medium text-center ${activeTab === 'sponsor' ? 'bg-chenin text-bay-of-many' : 'hover:bg-blue-800'}`}
            >
              Sponsor a Project
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Donation Tab */}
        {activeTab === 'donate' && (
          <div className="grid md:grid-cols-3 gap-12">
            <div className='col-span-1'>
              <h2 className="text-2xl font-bold mb-6 font-merriweather text-bay-of-many">Donation Options</h2>
              <div className="space-y-6">
                {donationTiers.map((tier, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                    <h3 className="text-xl font-bold mb-2 font-merriweather">{tier.name} - {tier.amount}</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                      {tier.perks.map((perk, i) => (
                        <li key={i}>{perk}</li>
                      ))}
                    </ul>
                    <Link 
                      to="/contact" 
                      className="inline-block bg-bay-of-many text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                    >
                      Select {tier.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className='md:col-span-2'>
              <h2 className="text-2xl font-bold mb-6 font-merriweather text-bay-of-many">Donation Form</h2>
              <form className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
                {<DonationForm/>}
              </form>
            </div>
          </div>
        )}

        {/* Project Sponsor Tab */}
        {activeTab === 'sponsor' && (
          <div>
            <SponsorProject/>
          </div>
        )}

        {/* Learner Sponsor Tab */}
        {activeTab === 'learner' && (
          <div>
            <div className="bg-green-white p-4 rounded-lg mb-8 text-center">
              <p className="font-medium">
                While our school benefits from government programs, many learners still need support with uniforms and materials.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-8 font-merriweather text-bay-of-many">
              Direct Learner Support Options
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {learnerSupportOptions.map(option => (
                <div key={option.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                  <div className="bg-bay-of-many text-white p-4">
                    <h3 className="text-xl font-bold text-center">{option.type}</h3>
                    <p className="text-center font-medium">{option.amount}</p>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {option.includes.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-chenin mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 bg-green-white/50 p-3 rounded">
                      <p className="font-semibold">Impact:</p>
                      <p>{option.impact}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 border-t">
                    <Link 
                      to="/contact" 
                      className="block w-full bg-chenin text-bay-of-many text-center font-bold py-2 px-4 rounded hover:bg-yellow-600 transition"
                    >
                      Support This Need
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 font-merriweather">How Learner Sponsorship Works</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {[
                  {
                    icon: "🛒",
                    title: "Bulk Purchasing",
                    text: "We buy quality items at discounted rates"
                  },
                  {
                    icon: "🙅‍♂️",
                    title: "No Direct Contact",
                    text: "Maintains learner privacy and dignity"
                  },
                  {
                    icon: "📬",
                    title: "Annual Report",
                    text: "Receive impact updates each year"
                  }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4">
                    <span className="text-3xl block mb-3">{item.icon}</span>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* CTA Section */}
      <section className="bg-bay-of-many text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 font-merriweather">Need More Information?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="secondary">
              Contact Our Team
            </Button>
            <Button to="/faq">
              Visit FAQs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportUs;