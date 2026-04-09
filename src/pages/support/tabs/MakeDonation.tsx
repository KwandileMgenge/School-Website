import { Link } from 'react-router-dom';
import DonationForm from '../../../components/support/DonationForm';

function MakeDonation() {
  const donationTiers = [
    { 
      name: "Uniform Hero", 
      amount: "R500", 
      impact: "Buys a full school uniform for one learner in Inanda Newtown B",
      perks: ["Thank-you letter from the learner", "Official receipt from the SGB"]
    },
    { 
      name: "Learning Champion", 
      amount: "R2,000", 
      impact: "Provides stationery & exam materials for 10 learners",
      perks: ["Certificate of appreciation", "Virtual classroom visit option"]
    },
    { 
      name: "Future Builder", 
      amount: "R10,000+", 
      impact: "Supports netball kits, computer upgrades or sports equipment",
      perks: ["Named on our digital donor wall", "Annual impact report"]
    }
  ];

  return (
    <div>
      {/* School context banner */}
      <div className="bg-emerald-700 text-white p-8 rounded-3xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-3 font-merriweather">Nhlanhlayethu Secondary School</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Quintile 3 no-fee public school • Inanda Newtown B, Durban<br />
          <strong>Every rand helps our 1,404 learners</strong> with uniforms, books, and sports programmes.
        </p>
      </div>

      {/* How to Donate - Very prominent */}
      <div className="bg-white border-2 border-chenin rounded-3xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-bay-of-many mb-4 font-merriweather">How to Donate (Safe & Official)</h3>
        <p className="text-gray-700 mb-6">
          All donations are managed by our School Governing Body (SGB) as required by the South African Schools Act.
        </p>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div>
            <p className="font-medium text-bay-of-many">Contact Principal Caluza directly:</p>
            <p className="text-2xl font-bold">031 519 0094</p>
            <p className="text-xl">082 611 7027 (WhatsApp)</p>
            <p className="text-sm text-gray-500 mt-1">nomarashiyacaluza@gmail.com</p>
          </div>
          <div className="flex-1">
            <a 
              href="https://wa.me/27826117027?text=Hi%20Principal%20Caluza%2C%20I%20would%20like%20to%20make%20a%20donation%20to%20Nhlanhlayethu%20Secondary%20School."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition"
            >
              💬 Donate via WhatsApp now
            </a>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Tier Cards */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-6 font-merriweather text-bay-of-many">Choose Your Impact</h2>
          <div className="space-y-6">
            {donationTiers.map((tier, index) => (
              <div key={index} className="border border-gray-200 rounded-3xl p-7 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-2xl font-bold font-merriweather">{tier.name}</h3>
                  <span className="text-4xl font-bold text-chenin">{tier.amount}</span>
                </div>
                <p className="text-emerald-700 font-medium mb-6">{tier.impact}</p>
                <ul className="space-y-2 mb-8 text-gray-700">
                  {tier.perks.map((perk, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-chenin mr-2">✓</span> {perk}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => window.scrollTo({ top: document.getElementById('donation-form')?.offsetTop || 0, behavior: 'smooth' })}
                  className="w-full bg-bay-of-many text-white py-4 rounded-2xl font-medium hover:bg-blue-800 transition"
                >
                  I’d like to give {tier.amount}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Simplified Form */}
        <div id="donation-form" className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-6 font-merriweather text-bay-of-many">Tell Us How You’d Like to Help</h2>
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <DonationForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeDonation;