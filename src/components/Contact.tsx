
import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-manao-purple text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              СВЯЗАТЬСЯ С MANAO DEV
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-medium mb-2">ПОЧТА</h3>
              <a href="mailto:INFO@MANAO-TEAM.COM" className="hover:underline transition-all">
                INFO@MANAO-TEAM.COM
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-medium mb-2">ТЕЛЕФОН</h3>
              <a href="tel:+375297558771" className="hover:underline transition-all">
                +375 (29) 675-58-71
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-lg font-medium mb-2">ОНЛАЙН В МЕССЕНДЖЕРАХ</h3>
              <div className="flex gap-4 mt-2">
                <a 
                  href="https://api.whatsapp.com/send/?phone=375296755871&text&type=phone_number&app_absent=0" 
                  className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a 
                  href="https://t.me/ManaoBot" 
                  className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  aria-label="Telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <a 
                  href="viber://pa?chatURI=manao" 
                  className="bg-[#7360f2] w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  aria-label="Viber"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src="/lovable-uploads/b3c71aa7-e6e4-454f-ae71-ad874f2686ac.png" 
                    alt="Viber" 
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
