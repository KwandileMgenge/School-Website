import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const location = useLocation();
  const activeTab = location.hash.substring(1) || 'donate'; // default to donate if no hash

  return (
    <div className="bg-bay-of-many text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center border-b border-bay-of-many/30">
          <Link 
            to="/support#donate"
            className={`flex-1 sm:flex-none py-4 px-8 font-medium text-center transition-all ${activeTab === 'donate' 
              ? 'bg-chenin text-bay-of-many shadow-inner' 
              : 'hover:bg-blue-800'}`}
          >
            Make a Donation
          </Link>
          <Link 
            to="/support#learner"
            className={`flex-1 sm:flex-none py-4 px-8 font-medium text-center transition-all ${activeTab === 'learner' 
              ? 'bg-chenin text-bay-of-many shadow-inner' 
              : 'hover:bg-blue-800'}`}
          >
            Sponsor a Learner
          </Link>
          <Link 
            to="/support#sponsor"
            className={`flex-1 sm:flex-none py-4 px-8 font-medium text-center transition-all ${activeTab === 'sponsor' 
              ? 'bg-chenin text-bay-of-many shadow-inner' 
              : 'hover:bg-blue-800'}`}
          >
            Sponsor a Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavTabs;