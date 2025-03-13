
import { useEffect, useRef } from "react";
import { Mail } from "lucide-react";

interface TeamMemberProps {
  name: string;
  nickname: string;
  position: string;
  imageUrl: string;
  email?: string;
  index: number;
}

const TeamMember = ({ name, nickname, position, imageUrl, email, index }: TeamMemberProps) => {
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
      <p className="text-manao-purple font-medium mt-2">{nickname}</p>
      <h3 className="text-xl font-bold tracking-tight">{name}</h3>
      <p className="text-gray-500 text-sm">{position}</p>
      
      {email && (
        <div className="mt-4">
          <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
            <Mail size={14} className="text-manao-purple" />
            {email}
          </p>
          <button className="button-outline mt-4 text-sm">
            Связаться
          </button>
        </div>
      )}
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
              nickname="ДИМА"
              name="ДМИТРИЙ ГРИНКЕВИЧ"
              position="Основатель, директор"
              imageUrl="/lovable-uploads/bdbbc44f-459a-4f86-8c42-ad23cacbaac0.png"
              index={0}
            />
            
            <TeamMember
              nickname="САША"
              name="АЛЕКСАНДРА ШАРОВА"
              position="Зам. директора по развитию"
              imageUrl="/lovable-uploads/94dec6d6-4f01-4c9d-b5fc-c432dd478c13.png"
              index={1}
            />
            
            <TeamMember
              nickname="МАША"
              name="МАРИЯ САНТАЛОВА"
              position="Маркетолог"
              imageUrl="/lovable-uploads/5a62ebe0-410f-44cd-ae57-f0d4f30662f2.png"
              index={2}
            />
            
            <TeamMember
              nickname="ПАША"
              name="ПАВЕЛ ПЕНКРАТ"
              position="Технический директор"
              imageUrl="https://cdn-ru.bitrix24.ru/b25909916/landing/0e5/0e52ab0e9ebcab2adaffb1f67b8b3d3a/Pasha_1x.jpg"
              email="p.penkrat@manao-team.com"
              index={3}
            />
            
            <TeamMember
              nickname="ТАНЯ"
              name="ТАТЬЯНА ГРЕЧАНИК"
              position="Проектный менеджер"
              imageUrl="https://cdn-ru.bitrix24.ru/b25909916/landing/83a/83a7d62cb334dee1e5c1cbe0e1e7e761/Tanya_1x.jpg"
              email="t.grechanik@manao-team.com"
              index={4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
