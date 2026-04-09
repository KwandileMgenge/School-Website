// components/HowYouCanHelp.tsx   ← (you can rename the file and import)
import React from 'react';

const HowYouCanHelp = () => {
  const needs = [
    {
      name: "School Uniforms",
      amount: "R950 per learner",
      impact: "Full uniform pack – removes a major barrier for families in Inanda"
    },
    {
      name: "Learning Essentials Kit",
      amount: "R1,800 per learner",
      impact: "Stationery, calculator, textbooks & USB for academic success"
    },
    {
      name: "Netball Team Support",
      amount: "R1,200 per team pack",
      impact: "Kits, trainers & equipment – continuing our KZN Cup legacy"
    },
    {
      name: "Computer Lab Upgrade",
      amount: "R5,000+",
      impact: "More devices and maintenance for digital learning"
    }
  ];

  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-bay-of-many font-merriweather">How You Can Help Right Now</h2>
          <p className="text-lg text-gray-600 mt-3">Real needs • Real impact • 100% managed by the School Governing Body</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {needs.map((need, index) => (
            <div key={index} className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-md transition">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-bay-of-many">{need.name}</h3>
                <span className="text-3xl font-bold text-chenin">{need.amount}</span>
              </div>
              <p className="text-gray-700 mb-8">{need.impact}</p>
              <button
                onClick={() => window.scrollTo({ top: document.getElementById('support-section')?.offsetTop || 0, behavior: 'smooth' })}
                className="w-full py-4 bg-chenin text-bay-of-many font-bold rounded-2xl hover:bg-yellow-600 transition"
              >
                Help meet this need
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/support"
            className="inline-flex items-center gap-3 text-xl font-semibold text-bay-of-many hover:text-chenin"
          >
            See all ways to support <span className="text-3xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowYouCanHelp;