
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto text-center">
              <div className={`transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8">
                  <span className="hero-gradient">РЕШАЕМ IT-ЗАДАЧИ</span>,<br />
                  ЧТОБЫ ВЫ ЗАНИМАЛИСЬ БИЗНЕСОМ
                </h1>
              </div>
              
              <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  Улучшаем Битрикс24, разрабатываем и дорабатываем сайты на 1С-Битрикс, создаем сложные B2B-решения на фреймворках.
                </p>
              </div>
              
              <div className={`mt-10 flex flex-col md:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
                <a href="#contact" className="button-primary">
                  Связаться с нами
                </a>
                <a href="#services" className="button-outline">
                  Узнать больше
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <Services />
        <Team />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
