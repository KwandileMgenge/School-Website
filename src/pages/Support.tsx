// src/pages/SupportUs.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SupportUs = () => {
  const [activeTab, setActiveTab] = useState<'donate' | 'sponsor' | 'volunteer'>('donate');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const donationTiers = [
    { name: "Supporter", amount: "₦5,000", perks: ["Thank you letter", "Newsletter mention"] },
    { name: "Benefactor", amount: "₦50,000", perks: ["Certificate of appreciation", "School tour"] },
    { name: "Champion", amount: "₦500,000", perks: ["Named scholarship", "VIP event invites"] }
  ];

  const urgentNeeds = [
    { id: 1, name: "Science Lab Equipment", target: "₦500,000", progress: 35 },
    { id: 2, name: "Library Books", target: "₦200,000", progress: 15 },
    { id: 3, name: "Sports Facilities", target: "₦300,000", progress: 10 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-80 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "linear-gradient(rgba(33, 76, 132, 0.8), rgba(33, 76, 132, 0.6)), url('/src/assets/support-hero.jpg')" }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-merriweather">Support Our School</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Your generosity helps provide quality education for our students
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-bay-of-many text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center">
            <button
              onClick={() => setActiveTab('donate')}
              className={`py-4 px-6 font-medium ${activeTab === 'donate' ? 'bg-chenin text-bay-of-many' : 'hover:bg-blue-800'}`}
            >
              Make a Donation
            </button>
            <button
              onClick={() => setActiveTab('sponsor')}
              className={`py-4 px-6 font-medium ${activeTab === 'sponsor' ? 'bg-chenin text-bay-of-many' : 'hover:bg-blue-800'}`}
            >
              Sponsor a Project
            </button>
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`py-4 px-6 font-medium ${activeTab === 'volunteer' ? 'bg-chenin text-bay-of-many' : 'hover:bg-blue-800'}`}
            >
              Volunteer
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Donation Tab */}
        {activeTab === 'donate' && (
          <div className="grid md:grid-cols-2 gap-12">
            <div>
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
                    <button className="bg-bay-of-many text-white px-4 py-2 rounded hover:bg-blue-800 transition">
                      Select {tier.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 font-merriweather text-bay-of-many">Donation Form</h2>
              <form className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-chenin"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-chenin"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Amount (₦)</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-chenin"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-chenin"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-chenin text-bay-of-many font-bold py-3 px-4 rounded hover:bg-yellow-600 transition"
                >
                  Proceed to Payment
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Sponsor Tab */}
        {activeTab === 'sponsor' && (
          <div>
            <h2 className="text-2xl font-bold mb-8 font-merriweather text-bay-of-many">Current Funding Needs</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {urgentNeeds.map((need) => (
                <div key={need.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                  <h3 className="text-xl font-bold mb-3 font-merriweather">{need.name}</h3>
                  <p className="text-gray-600 mb-4">Target: {need.target}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div 
                      className="bg-chenin h-2.5 rounded-full" 
                      style={{ width: `${need.progress}%` }}
                    ></div>
                  </div>
                  <button className="text-bay-of-many font-medium hover:underline flex items-center">
                    Sponsor this project
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-green-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 font-merriweather">Corporate Sponsorship</h3>
              <p className="mb-6">
                We offer customized sponsorship packages for businesses. Benefits may include logo placement, 
                event recognition, and tax deductions.
              </p>
              <button className="bg-bay-of-many text-white px-6 py-3 rounded hover:bg-blue-800 transition">
                Download Sponsorship Brochure
              </button>
            </div>
          </div>
        )}

        {/* Volunteer Tab */}
        {activeTab === 'volunteer' && (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 font-merriweather text-bay-of-many">Volunteer Opportunities</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 font-merriweather">Share Your Skills</h3>
              <p className="mb-6">
                We welcome volunteers in various capacities including tutoring, mentoring, event support, 
                and professional services.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-bay-of-many/10 text-bay-of-many p-2 rounded-full mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Academic Tutors</h4>
                    <p className="text-sm text-gray-600">Help students in math, science, or language subjects</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bay-of-many/10 text-bay-of-many p-2 rounded-full mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Career Mentors</h4>
                    <p className="text-sm text-gray-600">Guide students in career exploration and skills</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bay-of-many/10 text-bay-of-many p-2 rounded-full mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Event Volunteers</h4>
                    <p className="text-sm text-gray-600">Assist with school events and fundraisers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 font-merriweather">Volunteer Application</h3>
              <form>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-3 py-2 border rounded" required />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-3 py-2 border rounded" required />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-3 py-2 border rounded" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-3 py-2 border rounded" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Area of Interest</label>
                  <select className="w-full px-3 py-2 border rounded">
                    <option>Tutoring</option>
                    <option>Mentoring</option>
                    <option>Event Support</option>
                    <option>Professional Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Availability</label>
                  <textarea className="w-full px-3 py-2 border rounded" rows={3}></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-bay-of-many text-white px-6 py-3 rounded hover:bg-blue-800 transition"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* CTA Section */}
      <section className="bg-bay-of-many text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 font-merriweather">Other Ways to Support</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/about" 
              className="bg-chenin text-bay-of-many px-6 py-3 rounded font-bold hover:bg-yellow-600 transition"
            >
              Learn About Our School
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded font-bold hover:bg-white/10 transition"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportUs;