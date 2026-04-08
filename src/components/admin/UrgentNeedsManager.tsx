// components/admin/UrgentNeedsManager.tsx
import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';

interface UrgentNeed {
  id?: string;
  name: string;
  amount: string;
  funded: boolean;
  priority: number;
  description?: string;
  createdAt?: any;
}

const UrgentNeedsManager = () => {
  const [needs, setNeeds] = useState<UrgentNeed[]>([]);
  const [editingItem, setEditingItem] = useState<UrgentNeed | null>(null);
  const [formData, setFormData] = useState<UrgentNeed>({
    name: '',
    amount: '',
    funded: false,
    priority: 1,
    description: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNeeds();
  }, []);

  const fetchNeeds = async () => {
    try {
      const needsQuery = query(collection(db, 'urgentNeeds'), orderBy('priority', 'asc'));
      const snapshot = await getDocs(needsQuery);
      const needsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as UrgentNeed[];
      setNeeds(needsData);
    } catch (error) {
      console.error('Error fetching urgent needs:', error);
      alert('Error loading urgent needs');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingItem && editingItem.id) {
        // Update existing - explicitly define the update object
        const updateData = {
          name: formData.name,
          amount: formData.amount,
          funded: formData.funded,
          priority: formData.priority,
          description: formData.description || ''
        };
        
        await updateDoc(doc(db, 'urgentNeeds', editingItem.id), updateData);
        alert('Urgent need updated successfully!');
      } else {
        // Create new
        await addDoc(collection(db, 'urgentNeeds'), {
          ...formData,
          createdAt: new Date()
        });
        alert('Urgent need created successfully!');
      }
      
      resetForm();
      fetchNeeds();
    } catch (error) {
      console.error('Error saving urgent need:', error);
      alert('Error saving urgent need');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: UrgentNeed) => {
    setEditingItem(item);
    setFormData(item);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this urgent need?')) {
      try {
        await deleteDoc(doc(db, 'urgentNeeds', id));
        fetchNeeds();
        alert('Urgent need deleted successfully!');
      } catch (error) {
        console.error('Error deleting urgent need:', error);
        alert('Error deleting urgent need');
      }
    }
  };

  const toggleFunded = async (id: string, currentlyFunded: boolean) => {
    try {
      // Explicitly define the update object for the funded status
      await updateDoc(doc(db, 'urgentNeeds', id), {
        funded: !currentlyFunded
      });
      fetchNeeds();
    } catch (error) {
      console.error('Error updating funding status:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      amount: '',
      funded: false,
      priority: 1,
      description: ''
    });
    setEditingItem(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-bay-of-many">Urgent Needs Management</h2>
        <button
          onClick={resetForm}
          className="bg-chenin text-bay-of-many px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
        >
          + Add New Need
        </button>
      </div>

      {/* Urgent Needs Form */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h3 className="text-lg font-semibold mb-4">
          {editingItem ? 'Edit Urgent Need' : 'Create New Urgent Need'}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Item Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin"
                placeholder="e.g., Science Lab Equipment"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Amount Needed *</label>
              <input
                type="text"
                value={formData.amount}
                onChange={(e) => setFormData({...formData, amount: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin"
                placeholder="e.g., R120,000"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Priority Level</label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({...formData, priority: parseInt(e.target.value)})}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin"
              >
                <option value={1}>High Priority</option>
                <option value={2}>Medium Priority</option>
                <option value={3}>Low Priority</option>
              </select>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="funded"
                checked={formData.funded}
                onChange={(e) => setFormData({...formData, funded: e.target.checked})}
                className="h-4 w-4 text-bay-of-many focus:ring-chenin"
              />
              <label htmlFor="funded" className="ml-2 text-gray-700">
                Mark as Funded
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin"
              rows={3}
              placeholder="Detailed description of what this funding will provide..."
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-bay-of-many text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
            >
              {loading ? 'Saving...' : (editingItem ? 'Update Need' : 'Create Need')}
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

      {/* Urgent Needs List */}
      <div className="bg-white rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold p-6 border-b">Current Urgent Needs</h3>
        
        <div className="divide-y">
          {needs.map((item) => (
            <div key={item.id} className="p-6 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`text-xs px-2 py-1 rounded ${
                      item.priority === 1 
                        ? 'bg-red-100 text-red-800' 
                        : item.priority === 2
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      Priority {item.priority}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      item.funded 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {item.funded ? 'Funded' : 'Not Funded'}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <span className="text-bay-of-many font-bold">{item.amount}</span>
                  </div>
                  
                  {item.description && (
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  )}
                </div>
                
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => toggleFunded(item.id!, item.funded)}
                    className={`px-3 py-1 rounded text-sm transition ${
                      item.funded
                        ? 'bg-gray-500 text-white hover:bg-gray-600'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    {item.funded ? 'Mark Unfunded' : 'Mark Funded'}
                  </button>
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
          
          {needs.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No urgent needs found. Create your first urgent need above.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UrgentNeedsManager;