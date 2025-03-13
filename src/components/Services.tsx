
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
                <img src="https://cdn-ru.bitrix24.ru/b25909916/landing/1f8/1f8c0e3e34c36f5f24a1d4e8c12e6fcc/artox_1x.png" alt="ARTOX" className="h-8 object-contain" />
              </div>
              <div className="partner-card">
                <img src="https://cdn-ru.bitrix24.ru/b25909916/landing/c44/c448fb5649a3ef4d76f4f84da4abb3af/sante_1x.png" alt="SANTE" className="h-8 object-contain" />
              </div>
              <div className="partner-card">
                <img src="https://cdn-ru.bitrix24.ru/b25909916/landing/25d/25d9fa0119d6f71d78af93f61c8ffa32/kugel_1x.png" alt="KUGEL" className="h-8 object-contain" />
              </div>
              <div className="partner-card">
                <img src="https://cdn-ru.bitrix24.ru/b25909916/landing/c2c/c2cf5f9be1eb9bbbee2f663a17b41a23/multisport_1x.png" alt="MULTISPORT" className="h-8 object-contain" />
              </div>
              <div className="partner-card">
                <img src="https://cdn-ru.bitrix24.ru/b25909916/landing/37c/37c4b69a2797c8ef8ee9de6ef1a52aea/xistore_1x.png" alt="XISTORE" className="h-8 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
