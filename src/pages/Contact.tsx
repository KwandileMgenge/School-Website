// src/pages/ContactUs.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    // Reset submission status after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8 text-bay-of-many" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      details: "+27 12 345 6789",
      action: "Call us"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-bay-of-many" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      details: "info@nhlanhlayethu.edu.za",
      action: "Send a message"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-bay-of-many" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "linear-gradient(rgba(33, 76, 132, 0.8), rgba(33, 76, 132, 0.6)), url('/src/assets/contact-hero.jpg')" }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-merriweather">Contact Us</h1>
          <p className="text-lg md:text-xl">We'd love to hear from you</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="flex justify-center mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 font-merriweather text-bay-of-many">{method.title}</h3>
              <p className="text-gray-700 mb-4">{method.details}</p>
              {method.title === "Email" ? (
                <a 
                  href={`mailto:${method.details}`}
                  className="inline-block bg-bay-of-many text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                >
                  {method.action}
                </a>
              ) : method.title === "Phone" ? (
                <a 
                  href={`tel:${method.details.replace(/\D/g, '')}`}
                  className="inline-block bg-bay-of-many text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                >
                  {method.action}
                </a>
              ) : (
                <Link 
                  to="/directions"
                  className="inline-block bg-bay-of-many text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                >
                  {method.action}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 font-merriweather text-bay-of-many">Send Us a Message</h2>
            
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you for your message! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin"
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
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chenin"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-chenin text-bay-of-many font-bold py-3 px-4 rounded-lg hover:bg-yellow-600 transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Map and Additional Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 font-merriweather text-bay-of-many">Our Location</h2>
            
            <div className="bg-gray-200 h-64 md:h-96 rounded-lg mb-6 overflow-hidden">
              {/* Replace with your actual map embed */}
              <iframe 
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.123456789012!2d28.12345678901234!3d-26.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA3JzI0LjQiTiAyOMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <div className="bg-green-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 font-merriweather">Office Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>7:30 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>8:00 AM - 12:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-4 font-merriweather">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/admissions" className="text-bay-of-many hover:underline">Admissions Process</Link>
                </li>
                <li>
                  <Link to="/faq" className="text-bay-of-many hover:underline">FAQ</Link>
                </li>
                <li>
                  <Link to="/staff" className="text-bay-of-many hover:underline">Staff Directory</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;