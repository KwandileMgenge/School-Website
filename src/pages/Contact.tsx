import { Link } from 'react-router-dom';

const ContactUs = () => {

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
      <section className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "linear-gradient(rgba(33, 76, 132, 0.8), rgba(33, 76, 132, 0.6)), url('/Zwelemfundo_public_school_Africom.jpg')" }}>
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-merriweather">Contact Us</h1>
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
            <iframe className='w-full'  height="740" frameBorder={0} marginHeight={0} marginWidth={0}
              src="https://docs.google.com/forms/d/e/1FAIpQLSfHMFCKa9G2b6WZw5zmz2bgDoGBM9uuFNACJVLh6FA6RqdOdg/viewform?embedded=true">
                Loading…
            </iframe>
          </div>

          {/* Map and Additional Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 font-merriweather text-bay-of-many">Our Location</h2>
            
            <div className="bg-gray-200 h-64 md:h-96 rounded-lg mb-6 overflow-hidden">
              {/* Replace with your actual map embed */}
              <iframe 
                title="School Location"
                src="https://www.google.com/maps/place/77+Somlandela+Dr,+Newtown+B+Ext,+Inanda,+4310/@-29.7174483,30.9574316,674m/data=!3m1!1e3!4m6!3m5!1s0x1ef70313ca839f39:0x1961f5ced88587bb!8m2!3d-29.7167595!4d30.9603664!16s%2Fg%2F11kmyrynxv?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
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
                  <span className="font-medium">Saturday - Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-4 font-merriweather">Quick Links</h3>
              <ul className="space-y-2">
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