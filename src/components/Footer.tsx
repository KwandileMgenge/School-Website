import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bay-of-many text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* School Info */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Nhlanhlayethu Secondary School</h3>
            <p className="text-sm opacity-90 mb-6">
              EMIS 500161727 • Inanda Newtown B, Durban<br />
              Quintile 3 no-fee public secondary school serving 1,404 learners
            </p>
            <p className="text-sm leading-relaxed">
              Education is the key to success. Proudly serving the Inanda community with excellence in academics and sport.
            </p>
            
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/enamba7/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-white hover:text-chenin transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              <span className="font-medium">Follow us on Facebook</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-chenin transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-chenin transition">Our Story</Link></li>
              <li><Link to="/support" className="hover:text-chenin transition">Support Our Learners</Link></li>
              <li><Link to="/contact" className="hover:text-chenin transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Get in Touch</h4>
            <div className="space-y-5 text-sm">
              <div className="flex gap-3">
                <span className="text-chenin">📍</span>
                <div>
                  77 Somlandela Dr, Newtown B Ext,<br />
                  Inanda, Durban, 4310<br />
                  <span className="text-xs opacity-70">(Postal: Private Bag X028, KwaMashu, 4360)</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <span className="text-chenin">📞</span>
                <div>
                  <a href="tel:0315190094" className="block hover:text-chenin">031 519 0094</a>
                  <a href="https://wa.me/27826117027" target="_blank" rel="noopener noreferrer" className="block text-green-400 hover:text-green-300">
                    082 611 7027 (WhatsApp)
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-chenin">✉️</span>
                <a href="mailto:nomarashiyacaluza@gmail.com" className="hover:text-chenin">
                  nomarashiyacaluza@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Support CTA */}
          <div className="lg:text-right">
            <h4 className="font-bold mb-4 text-lg">Make a Difference Today</h4>
            <p className="text-sm mb-6 max-w-xs lg:ml-auto">
              Your support helps provide uniforms, learning materials and sports equipment for our learners.
            </p>
            <Link 
              to="/support"
              className="inline-block bg-chenin text-bay-of-many px-8 py-4 rounded-2xl font-bold hover:bg-yellow-600 transition"
            >
              Sponsor a Learner or Project →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-16 pt-8 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Nhlanhlayethu Secondary School • EMIS 500161727</p>
          <p className="text-white/70">
            Proudly serving Inanda Newtown B, Durban • KwaZulu-Natal Department of Education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;