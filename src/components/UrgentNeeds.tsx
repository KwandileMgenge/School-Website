// components/UrgentNeeds.tsx
import React from 'react';

interface UrgentItem {
  id: string;
  name: string;
  amount: string;
  funded?: boolean;
}

interface UrgentNeedsProps {
  items?: UrgentItem[];
  title?: string;
  theme?: 'yellow' | 'red' | 'blue'; // Color variants
  showProgress?: boolean;
}

const UrgentNeeds: React.FC<UrgentNeedsProps> = ({
  items = [
    { id: '1', name: 'New science lab equipment', amount: '₦500,000' },
    { id: '2', name: 'Library books', amount: '₦200,000' },
  ],
  title = 'Urgent Needs',
  theme = 'yellow',
  showProgress = false,
}) => {
  // Theme configuration
  const themeClasses = {
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    red: 'bg-red-50 border-red-200 text-red-800',
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
  };

  return (
    <section className={`p-6 rounded-lg border-l-4 ${themeClasses[theme]} shadow-sm`}>
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {showProgress && (
          <span className="text-sm px-3 py-1 bg-white rounded-full shadow-xs">
            {items.length} priorities
          </span>
        )}
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="flex items-start">
            <span className={`inline-block mt-1 mr-3 w-2 h-2 rounded-full ${
              item.funded ? 'bg-green-500' : 'bg-current'
            }`}></span>
            <div className="flex-1">
              <p className="font-medium">
                {item.name} 
                <span className="ml-2 font-bold">{item.amount}</span>
              </p>
              {showProgress && (
                <div className="mt-1 w-full bg-white rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      item.funded ? 'bg-green-500' : theme === 'yellow' ? 'bg-yellow-400' : theme === 'red' ? 'bg-red-400' : 'bg-blue-400'
                    }`} 
                    style={{ width: item.funded ? '100%' : '30%' }} // Adjust percentage as needed
                  ></div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-center">
        <button className={`px-4 py-2 rounded-lg font-medium ${
          theme === 'yellow' 
            ? 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800' 
            : theme === 'red' 
              ? 'bg-red-100 hover:bg-red-200 text-red-800'
              : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
        } transition-colors`}>
          Support These Needs
        </button>
      </div>
    </section>
  );
};

export default UrgentNeeds;