
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="https://manao-team.com/?utm_source=vizitka" className="flex items-center">
            <img 
              src="/lovable-uploads/03472ed3-9db8-4589-87d4-1a34a0f24eb0.png" 
              alt="Manao Dev Logo" 
              className="h-10 w-auto" 
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex space-x-8">
              <a href="#services" className="text-gray-800 hover:text-manao-purple transition-colors">
                Услуги
              </a>
              <a href="#team" className="text-gray-800 hover:text-manao-purple transition-colors">
                Команда
              </a>
              <a href="#contact" className="text-gray-800 hover:text-manao-purple transition-colors">
                Контакты
              </a>
            </nav>
          </div>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-white z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col space-y-8 p-8 text-center text-xl">
          <a 
            href="#services" 
            className="text-gray-800 hover:text-manao-purple transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Услуги
          </a>
          <a 
            href="#team" 
            className="text-gray-800 hover:text-manao-purple transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Команда
          </a>
          <a 
            href="#contact" 
            className="text-gray-800 hover:text-manao-purple transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
