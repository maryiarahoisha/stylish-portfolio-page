
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2">
            <div className="text-manao-purple font-display flex items-center">
              <img 
                src="https://cdn-ru.bitrix24.ru/b25909916/landing/1b6/1b6e6c58af96b0a642c4c1cfe00cc514/logo-symbol_1x.png" 
                alt="MANAO Logo" 
                className="w-10 h-10"
              />
              <span className="ml-2 text-xl font-bold">MANAO DEV</span>
            </div>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="nav-link">Услуги</a>
          <a href="#team" className="nav-link">Команда</a>
          <a href="#contact" className="nav-link">Контакты</a>
          <a href="#contact" className="button-primary">
            Связаться
          </a>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          <a
            href="#services"
            className="font-medium px-4 py-2 hover:bg-secondary rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Услуги
          </a>
          <a
            href="#team"
            className="font-medium px-4 py-2 hover:bg-secondary rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Команда
          </a>
          <a
            href="#contact"
            className="font-medium px-4 py-2 hover:bg-secondary rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Контакты
          </a>
          <a
            href="#contact"
            className="button-primary text-center mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Связаться
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
