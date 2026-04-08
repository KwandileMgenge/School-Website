// components/admin/NewsManager.tsx
import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  query, 
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';

interface NewsItem {
  id?: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: Timestamp;
  content?: string;
}

const NewsManager = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null);
  const [formData, setFormData] = useState<NewsItem>({
    title: '',
    excerpt: '',
    image: '',
    category: 'General',
    date: Timestamp.now(),
    content: ''
  });
  const [loading, setLoading] = useState(false);

  const categories = ['General', 'Academic', 'Sports', 'Events', 'Announcements', 'Achievements'];

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const newsQuery = query(collection(db, 'news'), orderBy('date', 'desc'));
      const snapshot = await getDocs(newsQuery);
      const newsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as NewsItem[];
      setNews(newsData);
    } catch (error) {
      console.error('Error fetching news:', error);
      alert('Error loading news articles');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingItem && editingItem.id) {
        // Update existing - explicitly define the update object
        const updateData = {
          title: formData.title,
          excerpt: formData.excerpt,
          image: formData.image,
          category: formData.category,
          content: formData.content || '',
          date: formData.date || Timestamp.now()
        };
        
        await updateDoc(doc(db, 'news', editingItem.id), updateData);
        alert('News article updated successfully!');
      } else {
        // Create new
        await addDoc(collection(db, 'news'), {
          ...formData,
          date: formData.date || Timestamp.now()
        });
        alert('News article created successfully!');
      }
      
      resetForm();
      fetchNews();
    } catch (error) {
      console.error('Error saving news:', error);
      alert('Error saving news article');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: NewsItem) => {
    setEditingItem(item);
    setFormData(item);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this news article?')) {
      try {
        await deleteDoc(doc(db, 'news', id));
        fetchNews();
        alert('News article deleted successfully!');
      } catch (error) {
        console.error('Error deleting news:', error);
        alert('Error deleting news article');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      image: '',
      category: 'General',
      date: Timestamp.now(),
      content: ''
    });
    setEditingItem(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-bay-of-many">News Management</h2>
        <button
          onClick={resetForm}
          className="bg-chenin text-bay-of-many px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
        >
          + Add New Article
        </button>
      </div>

      {/* News Form */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h3 className="text-lg font-semibold mb-4">
          {editingItem ? 'Edit News Article' : 'Create New Article'}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Excerpt *</label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Image URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Full Content (Optional)</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin"
              rows={5}
              placeholder="Detailed content for the news article..."
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-bay-of-many text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
            >
              {loading ? 'Saving...' : (editingItem ? 'Update Article' : 'Create Article')}
            </button>
            {editingItem && (
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* News List */}
      <div className="bg-white rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold p-6 border-b">Existing News Articles</h3>
        
        <div className="divide-y">
          {news.map((item) => (
            <div key={item.id} className="p-6 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-bay-of-many text-white text-xs px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {item.date?.toDate().toLocaleDateString()}
                    </span>
                  </div>
                  <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-gray-600">{item.excerpt}</p>
                </div>
                
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-chenin text-bay-of-many px-3 py-1 rounded hover:bg-yellow-600 transition text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id!)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {news.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No news articles found. Create your first article above.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsManager;