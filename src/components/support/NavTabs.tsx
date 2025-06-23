import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const location = useLocation();
  // Get the activeTab from the URL hash (without the #)
  const activeTab = location.hash.substring(1);

  return (
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
  )
}

export default NavTabs