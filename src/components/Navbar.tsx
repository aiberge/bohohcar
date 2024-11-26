import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import bohLogo from '/bohlogo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          <Link to="/" className="flex items-center">
            <img 
              src={bohLogo} 
              alt="Bohohcar Logo" 
              className="h-[190px] w-[190px]"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-12">
            <Link to="/" className="hover:text-yellow-500 transition-colors text-lg">Accueil</Link>
            <Link to="/catalogue" className="hover:text-yellow-500 transition-colors text-lg">Catalogue</Link>
            <Link to="/about" className="hover:text-yellow-500 transition-colors text-lg">À propos</Link>
            <Link to="/contact" className="hover:text-yellow-500 transition-colors text-lg">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-500 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            <Link
              to="/"
              className="block px-4 py-3 hover:bg-yellow-500 hover:text-black rounded-md text-lg"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/catalogue"
              className="block px-4 py-3 hover:bg-yellow-500 hover:text-black rounded-md text-lg"
              onClick={() => setIsOpen(false)}
            >
              Catalogue
            </Link>
            <Link
              to="/about"
              className="block px-4 py-3 hover:bg-yellow-500 hover:text-black rounded-md text-lg"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-3 hover:bg-yellow-500 hover:text-black rounded-md text-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}