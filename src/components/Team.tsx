
import { useEffect, useRef } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMemberProps {
  name: string;
  nickname: string;
  position: string;
  imageUrl: string;
  email?: string;
  telegramUrl?: string;
  index: number;
}

const TeamMember = ({ name, position, imageUrl, email, telegramUrl, index }: TeamMemberProps) => {
  return (
    <div className={`stagger-animation team-card p-6 flex flex-col items-center text-center`}>
      <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-bold tracking-tight mt-2">{name}</h3>
      <p className="text-gray-500 text-sm">{position}</p>
      
      <div className="mt-4 flex flex-col items-center gap-2">
        {email && (
          <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
            <Mail size={14} className="text-manao-purple" />
            {email}
          </p>
        )}
        
        {telegramUrl && (
          <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Send size={14} className="text-manao-purple" />
              Telegram
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

const Team = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const staggerItems = entry.target.querySelectorAll(".stagger-animation");
            staggerItems.forEach((item) => {
              item.classList.add("appear-animation");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Контакты команды
          </h2>
          
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Здесь размещены контакты тех, с кем вы могли бы общаться. Можете связаться с конкретным человеком или обратиться напрямую в компанию.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <TeamMember
              nickname=""
              name="ДМИТРИЙ ГРИНКЕВИЧ"
              position="Основатель, директор"
              imageUrl="/lovable-uploads/bdbbc44f-459a-4f86-8c42-ad23cacbaac0.png"
              email="dg@manao-team.com"
              telegramUrl="https://t.me/DmitriyGrinkevich"
              index={0}
            />
            
            <TeamMember
              nickname=""
              name="АЛЕКСАНДРА ШАРОВА"
              position="Зам. директора по развитию"
              imageUrl="/lovable-uploads/94dec6d6-4f01-4c9d-b5fc-c432dd478c13.png"
              email="a.sharova@manao-team.com"
              telegramUrl="https://t.me/ManaoConsult"
              index={1}
            />
            
            <TeamMember
              nickname=""
              name="МАРИЯ САНТАЛОВА"
              position="Маркетолог"
              imageUrl="/lovable-uploads/5a62ebe0-410f-44cd-ae57-f0d4f30662f2.png"
              email="manao.marketolog@gmail.com"
              telegramUrl="https://t.me/fq_mry"
              index={2}
            />
            
            <TeamMember
              nickname=""
              name="ПАВЕЛ ПЕНКРАТ"
              position="Технический директор"
              imageUrl="/lovable-uploads/f6a1c8cf-0e13-4333-ba82-f494d5f11f95.png"
              email="p.penkrat@manao-team.com"
              telegramUrl="https://t.me/manaodev_tech"
              index={3}
            />
            
            <TeamMember
              nickname=""
              name="ТАТЬЯНА ГРЕЧАНИК"
              position="Проектный менеджер"
              imageUrl="/lovable-uploads/86605fab-5224-4e07-a951-670c0b407b32.png"
              email="t.grechanik@manao-team.com"
              telegramUrl="https://t.me/manaodev_gt"
              index={4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
