import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import HeroSub from '../components/HeroSub';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '78fccd8b-d1a5-4ecb-b276-9ea00b8e2c9c', // Replace with your actual key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Nhlanhlayethu Contact Form',
          botcheck: false // Important for spam protection
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8 text-green-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      details: "+27 12 345 6789",
      action: "Call us"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      details: "info@nhlanhlayethu.edu.za",
      action: "Send a message"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      details: "123 School Street, Educationville, 0001",
      action: "Get directions"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSub imageUrl="/Zwelemfundo_public_school_Africom.jpg" title="Contact Us"
        subtitle="We're here to help and answer any questions you might have"
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Contact Methods - Flex Layout */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex-1 min-w-[280px] max-w-md transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="bg-bay-of-many bg-opacity-10 p-4 rounded-full mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 font-merriweather text-bay-of-many">{method.title}</h3>
                <p className="text-gray-700 mb-6 flex-grow">{method.details}</p>
                {method.title === "Email" ? (
                  <a 
                    href={`mailto:${method.details}`}
                    className="w-full bg-bay-of-many text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                  >
                    {method.action}
                  </a>
                ) : method.title === "Phone" ? (
                  <a 
                    href={`tel:${method.details.replace(/\D/g, '')}`}
                    className="w-full bg-bay-of-many text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                  >
                    {method.action}
                  </a>
                ) : (
                  <Link 
                    to="/directions"
                    className="w-full bg-bay-of-many text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                  >
                    {method.action}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & Map Section */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 font-merriweather text-bay-of-many border-b pb-2">Send Us a Message</h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg inline-flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Thank you! We'll respond within 24 hours.</span>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 bg-chenin text-bay-of-many font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
                  <input type="hidden" name="redirect" value="https://yourdomain.com/thank-you" />
                  <input type="checkbox" name="botcheck" className="hidden" />

                  {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin focus:border-transparent transition"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin focus:border-transparent transition"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin focus:border-transparent transition appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Admissions">Admissions</option>
                      <option value="Donations">Donations</option>
                      <option value="Volunteering">Volunteering</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin focus:border-transparent transition"
                      required
                    ></textarea>
                  </div>

                  <Button className='w-full' type={"submit"} disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-bay-of-many" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Map and Additional Info */}
          <div className="lg:w-1/2">
            <div className="sticky top-6 space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 font-merriweather text-bay-of-many border-b pb-2">Our Location</h2>
                
                <div className="relative h-80 rounded-lg overflow-hidden border-2 border-gray-200">
                  <iframe 
                    title="School Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.5368501400817!2d30.962035999999998!3d-29.717144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef70313ca839f39%3A0x1961f5ced88587bb!2s77%20Somlandela%20Dr%2C%20Newtown%20B%20Ext%2C%20Inanda%2C%204310!5e1!3m2!1sen!2sza!4v1750691134413!5m2!1sen!2sza"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    ></iframe>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 font-merriweather text-bay-of-many border-b pb-2">Office Hours</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Weekdays</span>
                    <span className="text-gray-600">7:30 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span className="font-medium text-gray-700">Saturday - Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;





// import { Link } from 'react-router-dom';

// const ContactUs = () => {

//   const contactMethods = [
//     {
//       icon: (
//         <svg className="w-8 h-8 text-bay-of-many" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//         </svg>
//       ),
//       title: "Phone",
//       details: "+27 12 345 6789",
//       action: "Call us"
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8 text-bay-of-many" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//         </svg>
//       ),
//       title: "Email",
//       details: "info@nhlanhlayethu.edu.za",
//       action: "Send a message"
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8 text-bay-of-many" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//         </svg>
//       ),
//       title: "Visit Us",
//       details: "123 School Street, Educationville, 0001",
//       action: "Get directions"
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative h-96 bg-cover bg-center flex items-center justify-center"
//         style={{ backgroundImage: "linear-gradient(rgba(33, 76, 132, 0.8), rgba(33, 76, 132, 0.6)), url('/Zwelemfundo_public_school_Africom.jpg')" }}>
//         <div className="text-center text-white px-4">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 font-merriweather">Contact Us</h1>
//           <p className="text-lg md:text-xl">We'd love to hear from you</p>
//         </div>
//       </section>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-12 max-w-6xl">
//         {/* Contact Methods */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {contactMethods.map((method, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
//               <div className="flex justify-center mb-4">
//                 {method.icon}
//               </div>
//               <h3 className="text-xl font-bold mb-2 font-merriweather text-bay-of-many">{method.title}</h3>
//               <p className="text-gray-700 mb-4">{method.details}</p>
//               {method.title === "Email" ? (
//                 <a 
//                   href={`mailto:${method.details}`}
//                   className="inline-block bg-bay-of-many text-white px-4 py-2 rounded hover:bg-blue-800 transition"
//                 >
//                   {method.action}
//                 </a>
//               ) : method.title === "Phone" ? (
//                 <a 
//                   href={`tel:${method.details.replace(/\D/g, '')}`}
//                   className="inline-block bg-bay-of-many text-white px-4 py-2 rounded hover:bg-blue-800 transition"
//                 >
//                   {method.action}
//                 </a>
//               ) : (
//                 <Link 
//                   to="/directions"
//                   className="inline-block bg-bay-of-many text-white px-4 py-2 rounded hover:bg-blue-800 transition"
//                 >
//                   {method.action}
//                 </Link>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Contact Form */}
//         <div className="grid md:grid-cols-2 gap-12">
//           <div>
//             <iframe className='w-full'  height="740" frameBorder={0} marginHeight={0} marginWidth={0}
//               src="https://docs.google.com/forms/d/e/1FAIpQLSfHMFCKa9G2b6WZw5zmz2bgDoGBM9uuFNACJVLh6FA6RqdOdg/viewform?embedded=true">
//                 Loading…
//             </iframe>
//           </div>

//           {/* Map and Additional Info */}
//           <div>
//             <h2 className="text-2xl font-bold mb-6 font-merriweather text-bay-of-many">Our Location</h2>
            
//             <div className="bg-gray-200 h-64 md:h-96 rounded-lg mb-6 overflow-hidden">
//               {/* Replace with your actual map embed */}
//               <iframe 
//                 title="School Location"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.5368501400817!2d30.962035999999998!3d-29.717144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef70313ca839f39%3A0x1961f5ced88587bb!2s77%20Somlandela%20Dr%2C%20Newtown%20B%20Ext%2C%20Inanda%2C%204310!5e1!3m2!1sen!2sza!4v1750691134413!5m2!1sen!2sza"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//               ></iframe>
//             </div>

//             <div className="bg-green-white p-6 rounded-lg">
//               <h3 className="text-xl font-bold mb-4 font-merriweather">Office Hours</h3>
//               <ul className="space-y-2">
//                 <li className="flex justify-between">
//                   <span className="font-medium">Monday - Friday:</span>
//                   <span>7:30 AM - 4:00 PM</span>
//                 </li>
//                 <li className="flex justify-between">
//                   <span className="font-medium">Saturday - Sunday:</span>
//                   <span>Closed</span>
//                 </li>
//               </ul>

//               <h3 className="text-xl font-bold mt-6 mb-4 font-merriweather">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link to="/faq" className="text-bay-of-many hover:underline">FAQ</Link>
//                 </li>
//                 <li>
//                   <Link to="/staff" className="text-bay-of-many hover:underline">Staff Directory</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ContactUs;