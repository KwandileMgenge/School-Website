// src/components/DonationForm.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    frequency: 'once',
    message: '',
    anonymous: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.amount) newErrors.amount = 'Required';
    else if (isNaN(Number(formData.amount))) newErrors.amount = 'Must be a number';
    else if (Number(formData.amount) < 50) newErrors.amount = 'Minimum R50';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          amount: '',
          frequency: 'once',
          message: '',
          anonymous: false
        });
      }, 5000);
    }, 1500);
  };

  const suggestedAmounts = [100, 250, 500, 1000, 2500];

  if (isSuccess) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded text-center">
        <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-xl font-bold mb-2">Thank you for your generosity!</h3>
        <p>We've received your donation pledge. Our team will contact you shortly to complete the process.</p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Make Another Donation
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 font-merriweather text-bay-of-many">Make a Donation</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-200' : 'focus:ring-chenin'}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'focus:ring-chenin'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin"
                placeholder="+27"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="anonymous"
                name="anonymous"
                checked={formData.anonymous}
                onChange={handleChange}
                className="h-4 w-4 text-bay-of-many focus:ring-chenin"
              />
              <label htmlFor="anonymous" className="ml-2 text-gray-700">
                Make this donation anonymously
              </label>
            </div>
          </div>

          {/* Donation Details */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Donation Frequency *</label>
              <div className="flex flex-col space-y-1">
                {[
                  { value: 'once', label: 'Once-off' },
                  { value: 'monthly', label: 'Monthly' },
                  { value: 'quarterly', label: 'Quarterly' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      name="frequency"
                      value={option.value}
                      checked={formData.frequency === option.value}
                      onChange={handleChange}
                      className="h-4 w-4 text-bay-of-many focus:ring-chenin"
                    />
                    <p className="ml-2">{option.label}</p>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="amount" className="block text-gray-700 mb-1">
                Amount (ZAR) *
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.amount ? 'border-red-500 focus:ring-red-200' : 'focus:ring-chenin'}`}
                placeholder="Enter amount"
              />
              {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
              
              <div className="flex flex-wrap gap-2 mt-2">
                {suggestedAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setFormData({...formData, amount: amount.toString()})}
                    className={`px-3 py-1 rounded-full text-sm ${formData.amount === amount.toString() ? 'bg-bay-of-many text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                  >
                    R{amount}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin"
                placeholder="Any special instructions"
              />
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4 text-bay-of-many">Payment Method</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                id: 'eft',
                name: 'Bank Transfer',
                icon: '🏦',
                desc: 'We\'ll email you our banking details'
              },
              {
                id: 'paypal',
                name: 'PayPal',
                icon: '🔵',
                desc: 'Secure online payment'
              },
              {
                id: 'debit',
                name: 'Debit Order',
                icon: '💳',
                desc: 'For recurring donations'
              }
            ].map((method) => (
              <label key={method.id} className="border rounded-lg p-4 hover:border-bay-of-many cursor-pointer">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    className="h-4 w-4 text-bay-of-many focus:ring-chenin"
                    required
                  />
                  <span className="text-2xl ml-3 mr-2">{method.icon}</span>
                  <span className="font-medium">{method.name}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{method.desc}</p>
              </label>
            ))}
          </div>
        </div>

        {/* Submission */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">
            By submitting, you agree to our <Link to="/privacy" className="text-bay-of-many hover:underline">Privacy Policy</Link>.
            Donations may qualify for tax deductions in South Africa.
          </p>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-chenin text-bay-of-many font-bold py-3 px-4 rounded-lg hover:bg-yellow-600 transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-bay-of-many" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Pledge Donation'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;