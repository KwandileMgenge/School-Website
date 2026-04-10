import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/support/Support';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import OurImpact from './pages/OurImpact';
import FAQ from './pages/FAQ';
import Staff from './pages/Staff';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/our-impact' element={<OurImpact />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/faq' element={<FAQ />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;