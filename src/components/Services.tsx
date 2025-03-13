
import { useEffect, useRef } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

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
              Интегрируем сайты и CRM с 1С, платежными системами, маркетплейсами и другими сервисами, создавая единую экосистему.
            </p>
            
            <p className="text-lg text-gray-700 animate-on-scroll opacity-0">
              Автоматизируем процессы, решаем сложные задачи и делаем то, что реально помогает бизнесу. Адаптируемся под любую сферу — от медицины до промышленности.
            </p>
          </div>
          
          <div className="mt-12 animate-on-scroll opacity-0">
            <h3 className="text-xl font-semibold mb-6">Наши клиенты</h3>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
                autoplay: true,
                duration: 2000
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="py-6">
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="h-32 flex items-center justify-center mx-2">
                    <img src="/lovable-uploads/e2c70d25-6470-4a73-8e8f-1628083d256c.png" alt="ROAST" className="h-16 object-contain" />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="h-32 flex items-center justify-center mx-2">
                    <img src="/lovable-uploads/2781b978-f1a8-440f-b207-5cd21b873011.png" alt="SANTE" className="h-20 object-contain" />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="h-32 flex items-center justify-center mx-2">
                    <img src="/lovable-uploads/a12d4da6-f416-4952-9a52-7ac2150a603b.png" alt="MULTISPORT" className="h-16 object-contain" />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="h-32 flex items-center justify-center mx-2">
                    <img src="/lovable-uploads/21c86a82-a86c-4ec5-8b18-fb56cda3dbda.png" alt="АЛЛО" className="h-14 object-contain" />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="h-32 flex items-center justify-center mx-2">
                    <img src="/lovable-uploads/2e008d93-76c0-4048-91de-c437ccc0c915.png" alt="WINTERS.BY" className="h-20 object-contain" />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="h-32 flex items-center justify-center mx-2">
                    <img src="/lovable-uploads/f08adae9-5f28-4201-b01b-6dec25bc62a7.png" alt="ARTOX" className="h-16 object-contain" />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="h-32 flex items-center justify-center mx-2">
                    <img src="/lovable-uploads/76fdd837-27d5-4e4c-a0af-a10020417340.png" alt="MI.BY" className="h-16 object-contain" />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="h-32 flex items-center justify-center mx-2">
                    <img src="/lovable-uploads/a1efa31f-32ad-408d-9448-afaed77f98fc.png" alt="KUGEL" className="h-14 object-contain" />
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
