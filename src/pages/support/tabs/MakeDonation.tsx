import { Link } from 'react-router-dom';
import DonationForm from '../../../components/support/DonationForm';

function MakeDonation() {
  // Donation Options (South African Rand)
  const donationTiers = [
    { name: "Supporter", amount: "R500", perks: ["Thank you letter"] },
    { name: "Benefactor", amount: "R5,000", perks: ["Certificate of appreciation", "School tour"] },
    { name: "Champion", amount: "R50,000", perks: ["Naming opportunity", "VIP event invites"] }
  ];

  return (
    <div>
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
    </div>
  )
}

export default MakeDonation