import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [bgChange, setBgChange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBgChange(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed py-3 z-50 top-0 w-full transition-all duration-300
      ${bgChange 
        ? 'bg-white text-bay-of-many shadow-md' 
        : 'bg-transparent text-white'}`}>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo / Branding */}
          <Link to="/">
            <div className="flex items-center">
              <div className="flex justify-center p-2 rounded-full bg-white/10 backdrop-blur-md">
                <img 
                  className="w-10 md:w-12" 
                  src="/logo.png" 
                  alt="Nhlanhlayethu Secondary School Logo" 
                />
              </div>
              <div className="ml-3">
                <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">NHLANHLAYETHU</h1>
                <h2 className="text-xs md:text-sm font-bold -mt-1">SECONDARY SCHOOL</h2>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link to="/" className="hover:text-chenin transition">Home</Link>
            <Link to="/about" className="hover:text-chenin transition">About</Link>
            <Link to="/support" className="hover:text-chenin transition">Support Us</Link>
            <Link to="/contact" className="hover:text-chenin transition">Contact</Link>
            
            <Button to="/support" className="px-6 py-2 text-sm">
              Donate / Sponsor
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-current focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white text-bay-of-many rounded-3xl shadow-xl py-6 px-6">
            <ul className="space-y-4">
              <li><Link to="/" onClick={toggleMenu} className="block py-2 text-lg">Home</Link></li>
              <li><Link to="/about" onClick={toggleMenu} className="block py-2 text-lg">About</Link></li>
              <li><Link to="/support" onClick={toggleMenu} className="block py-2 text-lg">Support Us</Link></li>
              <li><Link to="/contact" onClick={toggleMenu} className="block py-2 text-lg">Contact</Link></li>
              <li className="pt-4">
                <Button to="/support" className="w-full py-4 text-lg">
                  Donate / Sponsor a Learner
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;