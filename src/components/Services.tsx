
import { useEffect, useRef } from "react";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0">
            Разработчики и веб-интеграторы
          </h2>
          
          <div className="space-y-6 mt-8">
            <p className="text-lg text-gray-700 animate-on-scroll opacity-0">
              Улучшаем <span className="font-semibold">Битрикс24</span>, разрабатываем и дорабатываем сайты на <span className="font-semibold">1С-Битрикс</span>, создаем сложные B2B-решения на <span className="font-semibold">фреймворках</span>. Интегрируем сайты и CRM с 1С, платежными системами, маркетплейсами и другими сервисами, создавая единую экосистему.
            </p>
            
            <p className="text-lg text-gray-700 animate-on-scroll opacity-0">
              Автоматизируем процессы, решаем сложные задачи и делаем то, что реально помогает бизнесу. Адаптируемся под любую сферу — от медицины до промышленности.
            </p>
          </div>
          
          <div className="mt-12 animate-on-scroll opacity-0">
            <h3 className="text-xl font-semibold mb-6">Наши клиенты</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
              <div className="partner-card">
                <img src="https://via.placeholder.com/120x40?text=ARTOX" alt="ARTOX" className="h-8 object-contain" />
              </div>
              <div className="partner-card">
                <img src="https://via.placeholder.com/120x40?text=SANTE" alt="SANTE" className="h-8 object-contain" />
              </div>
              <div className="partner-card">
                <img src="https://via.placeholder.com/120x40?text=KUGEL" alt="KUGEL" className="h-8 object-contain" />
              </div>
              <div className="partner-card">
                <img src="https://via.placeholder.com/120x40?text=MULTISPORT" alt="MULTISPORT" className="h-8 object-contain" />
              </div>
              <div className="partner-card">
                <img src="https://via.placeholder.com/120x40?text=XISTORE" alt="XISTORE" className="h-8 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
