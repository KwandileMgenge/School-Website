// src/pages/SupportUs.tsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../components/Button';
import SponsorProject from './tabs/SponsorProject';
import MakeDonation from './tabs/MakeDonation';
import NavTabs from '../../components/support/NavTabs';
import SponsorLearner from './tabs/SponsorLearner';
import HeroSub from '../../components/HeroSub';

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSub imageUrl="/Zwelemfundo_public_school_Africom.jpg" title="Support Our School"
        subtitle="Your generosity helps provide quality education for our learners"
      />

      {/* Navigation Tabs */}
      <NavTabs/>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Donation Tab */}
        {activeTab === 'donate' && (
          <MakeDonation/>
        )}

        {/* Project Sponsor Tab */}
        {activeTab === 'sponsor' && (
          <div>
            <SponsorProject/>
          </div>
        )}

        {/* Learner Sponsor Tab */}
        {activeTab === 'learner' && (
          // <div>
          //   <div className="bg-green-white p-4 rounded-lg mb-8 text-center">
          //     <p className="font-medium">
          //       While our school benefits from government programs, many learners still need support with uniforms and materials.
          //     </p>
          //   </div>

          //   <h2 className="text-2xl font-bold mb-8 font-merriweather text-bay-of-many">
          //     Direct Learner Support Options
          //   </h2>
            
          //   <div className="grid md:grid-cols-3 gap-8 mb-12">
          //     {learnerSupportOptions.map(option => (
          //       <div key={option.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
          //         <div className="bg-bay-of-many text-white p-4">
          //           <h3 className="text-xl font-bold text-center">{option.type}</h3>
          //           <p className="text-center font-medium">{option.amount}</p>
          //         </div>
          //         <div className="p-6">
          //           <h4 className="font-bold mb-3">Includes:</h4>
          //           <ul className="space-y-2">
          //             {option.includes.map((item, i) => (
          //               <li key={i} className="flex items-start">
          //                 <svg className="w-5 h-5 text-chenin mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          //                 </svg>
          //                 <span>{item}</span>
          //               </li>
          //             ))}
          //           </ul>
          //           <div className="mt-4 bg-green-white/50 p-3 rounded">
          //             <p className="font-semibold">Impact:</p>
          //             <p>{option.impact}</p>
          //           </div>
          //         </div>
          //         <div className="p-4 bg-gray-50 border-t">
          //           <Link 
          //             to="/contact" 
          //             className="block w-full bg-chenin text-bay-of-many text-center font-bold py-2 px-4 rounded hover:bg-yellow-600 transition"
          //           >
          //             Support This Need
          //           </Link>
          //         </div>
          //       </div>
          //     ))}
          //   </div>

          //   <div className="bg-white p-6 rounded-lg shadow-md">
          //     <h3 className="text-xl font-bold mb-4 font-merriweather">How Learner Sponsorship Works</h3>
          //     <div className="grid md:grid-cols-3 gap-6 mb-6">
          //       {[
          //         {
          //           icon: "🛒",
          //           title: "Bulk Purchasing",
          //           text: "We buy quality items at discounted rates"
          //         },
          //         {
          //           icon: "🙅‍♂️",
          //           title: "No Direct Contact",
          //           text: "Maintains learner privacy and dignity"
          //         },
          //         {
          //           icon: "📬",
          //           title: "Annual Report",
          //           text: "Receive impact updates each year"
          //         }
          //       ].map((item, i) => (
          //         <div key={i} className="text-center p-4">
          //           <span className="text-3xl block mb-3">{item.icon}</span>
          //           <h4 className="font-bold mb-2">{item.title}</h4>
          //           <p className="text-sm">{item.text}</p>
          //         </div>
          //       ))}
          //     </div>
          //   </div>
          // </div>
          <SponsorLearner/>
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