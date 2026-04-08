// components/admin/DashboardStats.tsx
import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const DashboardStats = () => {
  const [stats, setStats] = useState({
    totalNews: 0,
    totalUrgentNeeds: 0,
    activeNeeds: 0,
    recentNews: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setError(null);
        
        // News count
        const newsQuery = query(collection(db, 'news'), orderBy('date', 'desc'));
        const newsSnapshot = await getDocs(newsQuery);
        
        // Urgent needs count
        const needsQuery = query(collection(db, 'urgentNeeds'));
        const needsSnapshot = await getDocs(needsQuery);
        
        // Active needs (not funded)
        const activeNeedsQuery = query(
          collection(db, 'urgentNeeds'), 
          where('funded', '==', false)
        );
        const activeNeedsSnapshot = await getDocs(activeNeedsQuery);

        // Recent news (last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const recentNews = newsSnapshot.docs.filter(doc => {
          const newsDate = doc.data().date?.toDate();
          return newsDate > thirtyDaysAgo;
        });

        setStats({
          totalNews: newsSnapshot.size,
          totalUrgentNeeds: needsSnapshot.size,
          activeNeeds: activeNeedsSnapshot.size,
          recentNews: recentNews.length
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
        setError('Failed to load dashboard statistics');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Total News Articles',
      value: stats.totalNews,
      icon: '📰',
      color: 'blue'
    },
    {
      title: 'Urgent Needs',
      value: stats.totalUrgentNeeds,
      icon: '🆘',
      color: 'red'
    },
    {
      title: 'Active Needs',
      value: stats.activeNeeds,
      icon: '⏳',
      color: 'yellow'
    },
    {
      title: 'Recent News (30 days)',
      value: stats.recentNews,
      icon: '🆕',
      color: 'green'
    }
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl">Loading statistics...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-bay-of-many">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-bay-of-many">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className="text-3xl">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button 
            onClick={() => window.location.hash = '#news'}
            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-bay-of-many hover:bg-blue-50 transition text-left"
          >
            <div className="text-2xl mb-2">📝</div>
            <div className="font-semibold">Create News Article</div>
            <div className="text-sm text-gray-600">Add latest school updates</div>
          </button>
          <button 
            onClick={() => window.location.hash = '#urgent'}
            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-bay-of-many hover:bg-blue-50 transition text-left"
          >
            <div className="text-2xl mb-2">➕</div>
            <div className="font-semibold">Add Urgent Need</div>
            <div className="text-sm text-gray-600">Create new funding priority</div>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-bay-of-many hover:bg-blue-50 transition text-left">
            <div className="text-2xl mb-2">📊</div>
            <div className="font-semibold">View Analytics</div>
            <div className="text-sm text-gray-600">See website performance</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;