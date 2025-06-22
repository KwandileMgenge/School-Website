import React from 'react';
import { Link } from 'react-router-dom';

// Type definitions
type Project = {
  id: number;
  name: string;
  description: string;
  budget: string;
  funded: number;
  impact: string;
  image: string;
};

type SponsorshipTier = {
  level: string;
  amount: string;
  benefits: string[];
  example: string;
};

type TransparencyItem = {
  icon: string;
  title: string;
  description: string;
};

type HeroSection = {
  title: string;
  subtitle: string;
  backgroundImage: string;
};

type PageData = {
  hero: HeroSection;
  essentialProjects: Project[];
  sponsorshipTiers: SponsorshipTier[];
  transparencyItems: TransparencyItem[];
};

// Component props
type ProjectCardProps = {
  project: Project;
};

type FundingProgressProps = {
  budget: string;
  funded: number;
};

type TierCardProps = {
  tier: SponsorshipTier;
  highlighted?: boolean;
};

type TransparencyItemProps = {
  item: TransparencyItem;
};

const SponsorProject = () => {
  // Data with proper typing
  const pageData: PageData = {
    hero: {
      title: "Sponsor a Project",
      subtitle: "Transform learning through targeted support",
      backgroundImage: "linear-gradient(rgba(33, 76, 132, 0.8), rgba(33, 76, 132, 0.6)), url('/project-hero.jpg')"
    },
    
    essentialProjects: [
      {
        id: 1,
        name: "STEM Lab Upgrade",
        description: "Equip our science lab with 10 student microscopes and chemistry sets",
        budget: "R120,000",
        funded: 35,
        impact: "150 learners/year gain hands-on science experience",
        image: "/stem-lab.jpg"
      },
      {
        id: 2,
        name: "Library Revival",
        description: "300 new curriculum-aligned books and reading corner furniture",
        budget: "R85,000",
        funded: 15,
        impact: "Whole school access to quality reading materials",
        image: "/library.jpg"
      }
    ],
    
    sponsorshipTiers: [
      {
        level: "Bronze",
        amount: "R5,000 - R20,000",
        benefits: [
          "Recognition on project plaque",
          "Social media feature",
          "Thank you certificate"
        ],
        example: "Buys 5 microscopes or 50 books"
      },
      {
        level: "Silver",
        amount: "R20,001 - R50,000",
        benefits: [
          "Named equipment (e.g. 'The [YourName] Science Station')",
          "Project visit invitation",
          "Featured in school newsletter"
        ],
        example: "Funds a sports team kit or reading corner"
      }
    ],
    
    transparencyItems: [
      {
        icon: "📷",
        title: "Project Photos",
        description: "Receive images of funded items in use (no learner faces)"
      },
      {
        icon: "📊",
        title: "Financial Reports",
        description: "Annual breakdown of all expenditures"
      }
    ]
  };

  // Reusable components with typed props
  const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
      <div className="h-48 bg-gray-100 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 font-merriweather">{project.name}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <FundingProgress budget={project.budget} funded={project.funded} />
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">{project.impact}</span>
          <Link 
            to={`/contact?project=${encodeURIComponent(project.name)}`}
            className="bg-bay-of-many text-white px-4 py-2 rounded hover:bg-blue-800 transition text-sm"
          >
            Sponsor This
          </Link>
        </div>
      </div>
    </div>
  );

  const FundingProgress: React.FC<FundingProgressProps> = ({ budget, funded }) => (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>Target: {budget}</span>
        <span>{funded}% funded</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-chenin h-2 rounded-full" 
          style={{ width: `${funded}%` }}
        ></div>
      </div>
    </div>
  );

  const TierCard: React.FC<TierCardProps> = ({ tier, highlighted = false }) => (
    <div className={`border rounded-lg overflow-hidden ${
      highlighted ? 'border-2 border-bay-of-many transform md:-translate-y-2 shadow-lg' : 'border-gray-200'
    }`}>
      <div className={`p-4 text-center ${
        highlighted ? 'bg-bay-of-many text-white' :
        tier.level === 'Bronze' ? 'bg-gray-100' : 'bg-chenin text-bay-of-many'
      }`}>
        <h3 className="text-xl font-bold font-merriweather">{tier.level}</h3>
        <p className="font-medium">{tier.amount}</p>
      </div>
      <div className="p-6 bg-white">
        <h4 className="font-bold mb-3">Benefits:</h4>
        <ul className="space-y-2 mb-4">
          {tier.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start">
              <svg className="w-5 h-5 text-chenin mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm bg-green-white/50 p-2 rounded">
          <span className="font-semibold">Example:</span> {tier.example}
        </p>
      </div>
    </div>
  );

  const TransparencyItem: React.FC<TransparencyItemProps> = ({ item }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
      <span className="text-3xl block mb-3">{item.icon}</span>
      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
      <p className="text-gray-600">{item.description}</p>
    </div>
  );

  const EssentialsSection = () => (
    <section className="pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-bay-of-many font-merriweather">Our Priority Projects</h2>
          <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
            These essentials will make the biggest difference for our learners
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pageData.essentialProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );

  const SponsorshipTiersSection = () => (
    <section className="py-16 bg-green-white rounded-lg">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 font-merriweather text-center text-bay-of-many">
          Sponsorship Tiers
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {pageData.sponsorshipTiers.map((tier, index) => (
            <TierCard 
              key={index} 
              tier={tier} 
              highlighted={index === 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );

  const CorporateSection = () => (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="bg-bay-of-many/5 border border-bay-of-many/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 font-merriweather text-bay-of-many">Corporate Partnerships</h2>
          <p className="mb-6">
            We offer customized CSI packages with branding opportunities and employee engagement activities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/corporate-brochure.pdf"
              className="bg-white text-bay-of-many border-2 border-bay-of-many px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
              target="_blank"
            >
              Download Brochure
            </Link>
            <Link 
              to="/contact?type=corporate"
              className="bg-bay-of-many text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition"
            >
              Request Meeting
            </Link>
          </div>
        </div>
      </div>
    </section>
  );

  const TransparencySection = () => (
    <section className="py-16 bg-green-white rounded-lg">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl font-bold mb-8 font-merriweather text-center text-bay-of-many">
          Our Accountability Promise
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pageData.transparencyItems.map((item, index) => (
            <TransparencyItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div>
      <EssentialsSection />
      <SponsorshipTiersSection />
      <CorporateSection />
      <TransparencySection />
    </div>
  );
};

export default SponsorProject;