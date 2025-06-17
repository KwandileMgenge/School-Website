import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [bgChange, setBgChange] = useState(false)
  const [textChange, setTextChange] = useState(false)

  useEffect( () => {
    window.addEventListener('scroll', () => {
      window.scrollY > 10 ? setBgChange(true) : setBgChange(false)
      window.scrollY > 10 ? setTextChange(true) : setTextChange(false)
    })
  }, [])

  return (
    <nav className={`fixed py-3 z-20 top-0 w-full ${textChange ? 'text-bay-of-many' : 'text-green-white'} flex justify-around ${bgChange ? 'bg-green-white' : 'bg-transparent'} transition duration-100`}>
      <div className='flex items-center'>
        <div className='flex justify-center p-2 rounded-full'>
          <img className='w-15' src="./logo.png" alt="" />
        </div>
        <div className='font-merriweather ml-2'>
          <h1 className='text-2xl font-extrabold'>NHLANHLAYETHU</h1>
          <h2 className='font-bold'>SECONDARY SCHOOL</h2>
        </div>
      </div>
      <div className='flex items-center'>
        <ul className="flex font-bold space-x-10">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/support" className="hover:underline">Support Us</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;