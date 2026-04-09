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
      <HeroSub 
        imageUrl="/images/school-hero.jpg" 
        title="Support Our School"
        subtitle="Quintile 3 no-fee school in Inanda Newtown B • Every contribution helps our 1,404 learners"
      />

    {/* Intro banner */}
    <div className="bg-emerald-700 text-white py-6">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <p className="text-lg">As a no-fee public school we rely on community and corporate partners for uniforms, sports kits, books, and technology upgrades.</p>
      </div>
    </div>

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