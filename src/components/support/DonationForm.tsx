import React, { useState } from 'react';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    tier: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '78fccd8b-d1a5-4ecb-b276-9ea00b8e2c9c', // ← your existing key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Donation Inquiry – ${formData.tier || 'General'} (${formData.amount})`,
          message: formData.message || 'I would like to support Nhlanhlayethu Secondary School.',
          from_name: 'Nhlanhlayethu Donation Form',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try WhatsApp or phone instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-8 py-12 rounded-3xl text-center">
        <h3 className="text-2xl font-bold mb-3">Thank you!</h3>
        <p className="mb-6">Your message has been sent to Principal Caluza.</p>
        <a
          href="https://wa.me/27826117027?text=Hi%20Principal%20Caluza%2C%20I%20just%20submitted%20a%20donation%20inquiry%20on%20the%20school%20website."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-700 transition"
        >
          💬 Open WhatsApp to confirm
        </a>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({ name: '', email: '', phone: '', amount: '', tier: '', message: '' });
          }}
          className="mt-6 text-bay-of-many underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-1">Full Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-chenin" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-chenin" />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Phone / WhatsApp</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-chenin" placeholder="+27" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-1">Donation Amount (ZAR)</label>
          <input type="text" name="amount" value={formData.amount} onChange={handleChange} className="w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-chenin" placeholder="e.g. 500" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">I’d like to be a...</label>
          <select name="tier" value={formData.tier} onChange={handleChange} className="w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-chenin">
            <option value="">Select tier</option>
            <option value="Uniform Hero">Uniform Hero – R500</option>
            <option value="Learning Champion">Learning Champion – R2,000</option>
            <option value="Future Builder">Future Builder – R10,000+</option>
            <option value="General">General donation</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Message / Special note (optional)</label>
        <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-4 py-3 border rounded-3xl focus:ring-2 focus:ring-chenin" placeholder="Any additional information..." />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-chenin text-bay-of-many font-bold py-4 rounded-3xl text-xl hover:bg-yellow-600 transition disabled:opacity-70"
      >
        {isSubmitting ? 'Sending...' : 'Send My Donation Inquiry'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        You will receive an official receipt and (where possible) a Section 18A tax certificate from the school.
      </p>
    </form>
  );
};

export default DonationForm;