// src/pages/Donate.tsx
import React, { useState, useEffect } from 'react';
// import { loadScript } from 'your-script-loader'; // Or implement your own script loader
import { useNavigate } from 'react-router-dom';

// Types
type DonationTier = {
  id: string;
  name: string;
  amount: number;
  perks: string[];
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  amount: string;
  tierId: string;
  message: string;
  anonymous: boolean;
  recurring: boolean;
};

type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  amount?: string;
};

const Donate = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentInitialized, setPaymentInitialized] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    amount: '',
    tierId: '',
    message: '',
    anonymous: false,
    recurring: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [donationSuccess, setDonationSuccess] = useState(false);

  // Sample donation tiers
  const donationTiers: DonationTier[] = [
    {
      id: 'tier-1',
      name: "Supporter",
      amount: 5000,
      perks: ["Thank you letter", "Newsletter mention"]
    },
    {
      id: 'tier-2',
      name: "Benefactor",
      amount: 50000,
      perks: ["Certificate of appreciation", "School tour"]
    },
    {
      id: 'tier-3',
      name: "Champion",
      amount: 500000,
      perks: ["Named scholarship", "VIP event invites"]
    }
  ];

  // Current funding needs
  const fundingNeeds = [
    { id: 1, name: "Science Lab Equipment", target: 500000, progress: 35 },
    { id: 2, name: "Library Books", target: 200000, progress: 15 },
    { id: 3, name: "Sports Facilities", target: 300000, progress: 10 }
  ];

  // Load payment script
  useEffect(() => {
    const initializePayment = async () => {
      try {
        // await loadScript('https://js.paystack.co/v1/inline.js');
        setPaymentInitialized(true);
      } catch (error) {
        console.error('Failed to load payment script', error);
      }
    };

    if (!paymentInitialized) {
      initializePayment();
    }
  }, [paymentInitialized]);

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when field is edited
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Select a donation tier
  const selectTier = (tierId: string) => {
    const tier = donationTiers.find(t => t.id === tierId);
    if (tier) {
      setSelectedTier(tierId);
      setFormData(prev => ({
        ...prev,
        tierId,
        amount: tier.amount.toString()
      }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.amount || isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
      newErrors.amount = 'Please enter a valid amount';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Process payment with Paystack
  const processPayment = () => {
    if (!validateForm()) return;
    if (!paymentInitialized) {
      alert('Payment system is still initializing. Please try again shortly.');
      return;
    }

    setIsProcessing(true);

    // In a real app, you would generate a unique reference from your backend
    const paymentReference = `DON-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // @ts-ignore - Paystack is loaded dynamically
    const handler = PaystackPop.setup({
      key: 'pk_test_your_paystack_public_key', // Replace with your public key
      email: formData.email,
      amount: Number(formData.amount) * 100, // Paystack uses kobo (multiply by 100)
      ref: paymentReference,
      firstname: formData.firstName,
      lastname: formData.lastName,
      metadata: {
        custom_fields: [
          {
            display_name: "Donation Type",
            variable_name: "donation_type",
            value: selectedTier || 'custom'
          },
          {
            display_name: "Anonymous",
            variable_name: "anonymous",
            value: formData.anonymous ? 'yes' : 'no'
          }
        ]
      },
      callback: (response: any) => {
        // In a real app, verify this payment with your backend
        console.log('Payment completed', response);
        setIsProcessing(false);
        setDonationSuccess(true);
        
        // Here you would typically send the payment details to your backend
        // to verify the transaction and record the donation
        
        // Redirect to thank you page after 3 seconds
        setTimeout(() => {
          navigate('/thank-you');
        }, 3000);
      },
      onClose: () => {
        // Handle when user closes payment modal
        setIsProcessing(false);
        alert('Payment window was closed. If this was a mistake, please try again.');
      }
    });

    handler.openIframe();
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      amount: '',
      tierId: '',
      message: '',
      anonymous: false,
      recurring: false
    });
    setSelectedTier(null);
    setErrors({});
  };

  if (donationSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <div className="text-green-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Donation Successful!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your generous donation of ₦{formData.amount}. 
            Your support makes a real difference in our students' lives.
          </p>
          <p className="text-gray-500 text-sm">
            You'll receive a receipt via email shortly. Redirecting to thank you page...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Support Our School</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your donation helps provide quality education and resources for our students
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Donation Options */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Donation Tiers</h2>
              
              <div className="space-y-4">
                {donationTiers.map(tier => (
                  <div 
                    key={tier.id}
                    onClick={() => selectTier(tier.id)}
                    className={`border rounded-lg p-6 cursor-pointer transition-all ${selectedTier === tier.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{tier.name}</h3>
                        <p className="text-blue-600 font-semibold text-lg">₦{tier.amount.toLocaleString()}</p>
                      </div>
                      {selectedTier === tier.id && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">Selected</span>
                      )}
                    </div>
                    <ul className="mt-3 pl-5 space-y-1 text-gray-600 list-disc">
                      {tier.perks.map((perk, i) => (
                        <li key={i}>{perk}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Needs */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Current Funding Needs</h2>
              
              <div className="space-y-6">
                {fundingNeeds.map(need => (
                  <div key={need.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">{need.name}</h3>
                      <span className="text-gray-600">₦{need.target.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${need.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>{need.progress}% funded</span>
                      <span>₦{(need.target * need.progress / 100).toLocaleString()} raised</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Donation Form */}
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Donation Information</h2>
            
            <form onSubmit={(e) => { e.preventDefault(); processPayment(); }}>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 mb-2">First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                    required
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Last Name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                    required
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  required
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Amount (₦)*</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  min="1"
                  className={`w-full px-3 py-2 border rounded ${errors.amount ? 'border-red-500' : 'border-gray-300'}`}
                  required
                />
                {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Any special instructions or dedication..."
                ></textarea>
              </div>

              <div className="mb-6 space-y-3">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="anonymous"
                    checked={formData.anonymous}
                    onChange={handleChange}
                    className="rounded text-blue-600"
                  />
                  <span className="text-gray-700">Make this donation anonymous</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="recurring"
                    checked={formData.recurring}
                    onChange={handleChange}
                    className="rounded text-blue-600"
                  />
                  <span className="text-gray-700">Make this a monthly recurring donation</span>
                </label>
              </div>

              <div className="flex justify-between space-x-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`px-6 py-3 rounded text-white font-medium flex-1 ${isProcessing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} transition`}
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    `Donate ₦${formData.amount ? Number(formData.amount).toLocaleString() : '0'}`
                  )}
                </button>
              </div>

              <div className="mt-4 text-sm text-gray-500">
                <p>Your donation is secure and tax-deductible. We use Paystack for secure payment processing.</p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-lg font-semibold mb-6 text-gray-700">Trusted By</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="/trusted-1.png" alt="Trust Badge 1" className="h-12 opacity-70" />
            <img src="/trusted-2.png" alt="Trust Badge 2" className="h-12 opacity-70" />
            <img src="/trusted-3.png" alt="Trust Badge 3" className="h-12 opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;