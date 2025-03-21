
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
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-manao-purple/20 hover:bg-manao-purple/30 rounded-full flex items-center justify-center transition-all duration-300 mb-8"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-manao-purple" />
          </button>
          
          <div className="text-center text-gray-600 text-sm">
            <p>© 2025 MANAO DEV. Все права защищены.</p>
            <p className="mt-2">
              Разработка и интеграция сайтов и CRM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
