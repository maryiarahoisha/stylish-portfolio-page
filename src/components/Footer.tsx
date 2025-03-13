
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-white text-gray-700 py-10 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="text-manao-purple flex items-center">
              <img 
                src="/lovable-uploads/421f1ff8-620d-4e15-b5cf-1129ef81dcce.png" 
                alt="MANAO DEV Logo" 
                className="h-10" 
              />
            </div>
          </div>
          
          <div className="mb-6 md:mb-0">
            <nav className="flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-manao-purple transition-colors">
                Услуги
              </a>
              <a href="#team" className="text-gray-600 hover:text-manao-purple transition-colors">
                Команда
              </a>
              <a href="#contact" className="text-gray-600 hover:text-manao-purple transition-colors">
                Контакты
              </a>
            </nav>
          </div>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-manao-purple/20 hover:bg-manao-purple/30 rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-manao-purple" />
          </button>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>© 2023 MANAO DEV. Все права защищены.</p>
          <p className="mt-2">
            Разработка и интеграция сайтов и CRM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
