import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

// Define the type for your news items
interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: Timestamp; // Firestore Timestamp type
  // Add other fields as needed
}

const News = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to format Firestore Timestamp to readable date
  const formatDate = (timestamp: Timestamp): string => {
    if (!timestamp) return 'No date';
    
    try {
      const date = timestamp.toDate();
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid date';
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        // Query the 'news' collection, ordered by date
        const newsQuery = query(
          collection(db, 'news'), 
          orderBy('date', 'desc')
        );
        
        const querySnapshot = await getDocs(newsQuery);
        const newsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as NewsItem[];
        
        setNewsItems(newsData);
        setError(null);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to load news. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="text-2xl">Loading news...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="text-red-500 text-xl">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bay-of-many font-merriweather">
            Latest News & Updates
          </h2>
          <div className="w-20 h-1 bg-chenin mx-auto mt-4"></div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              {/* News Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              
              {/* News Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-chenin">{item.category}</span>
                  <span className="text-sm text-gray-500">
                    {formatDate(item.date)} {/* Use the formatDate function here */}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-bay-of-many mb-3 font-merriweather">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <button className="text-bay-of-many font-semibold hover:text-chenin transition flex items-center">
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-bay-of-many text-white rounded-lg hover:bg-blue-800 transition font-medium">
            View All News Updates
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;