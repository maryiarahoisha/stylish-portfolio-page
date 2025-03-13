
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="text-manao-purple font-display flex items-center">
              <img 
                src="https://cdn-ru.bitrix24.ru/b25909916/landing/1b6/1b6e6c58af96b0a642c4c1cfe00cc514/logo-symbol_1x.png" 
                alt="MANAO Logo" 
                width="32" 
                height="32" 
              />
              <span className="ml-2 text-lg font-bold">MANAO DEV</span>
            </div>
          </div>
          
          <div className="mb-6 md:mb-0">
            <nav className="flex space-x-8">
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                Услуги
              </a>
              <a href="#team" className="text-gray-400 hover:text-white transition-colors">
                Команда
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
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
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
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
