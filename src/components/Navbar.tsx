import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [bgChange, setBgChange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldChange = window.scrollY > 10;
      setBgChange(shouldChange);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed py-3 z-50 top-0 w-full
      ${bgChange ? 'bg-green-white text-bay-of-many shadow-md' : 'bg-transparent text-green-white'} 
        transition-all duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo/Branding */}
          <div className="flex items-center">
            <div className="flex justify-center p-2 rounded-full">
              <img className="w-12 md:w-15" src="./logo.png" alt="School Logo" />
            </div>
            <div className="font-roboto ml-2">
              <h1 className="text-xl md:text-2xl font-extrabold">NHLANHLAYETHU</h1>
              <h2 className="text-sm md:text-base font-bold">SECONDARY SCHOOL</h2>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex font-bold space-x-6 lg:space-x-10">
              <li><Link to="/" className="hover:underline px-2 py-1">Home</Link></li>
              <li><Link to="/about" className="hover:underline px-2 py-1">About</Link></li>
              <li><Link to="/support" className="hover:underline px-2 py-1">Support Us</Link></li>
              <li><Link to="/contact" className="hover:underline px-2 py-1">Contact</Link></li>
              <li><Link to="/donate" className="ml-6 px-4 py-2 bg-chenin text-bay-of-many rounded-lg font-bold hover:bg-yellow-600 transition">
                    Donate
                  </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-current focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block bg-green-white text-bay-of-many pb-5' : 'hidden'} transition-all duration-300`}>
          <ul className="pt-4 pb-2 space-y-3">
            <li>
              <Link 
                to="/" 
                className="block px-3 py-2 hover:bg-bay-of-many/10 rounded"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="block px-3 py-2 hover:bg-bay-of-many/10 rounded"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/support" 
                className="block px-3 py-2 hover:bg-bay-of-many/10 rounded"
                onClick={() => setIsOpen(false)}
              >
                Support Us
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block px-3 py-2 hover:bg-bay-of-many/10 rounded"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="/donate" 
                className="ml-6 px-4 py-2 bg-chenin text-bay-of-many rounded-lg font-bold hover:bg-yellow-600 transition">
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;