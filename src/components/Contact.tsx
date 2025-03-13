
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
                  className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  aria-label="Viber"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.693 6.698.623 9.82c-.06 3.11-.122 8.946 5.5 10.565v2.421s-.038.97.602.971c.77.012 1.232-.83 1.973-1.677 1.089-1.235 1.517-1.691 1.845-1.891 3.356.282 5.932-.378 6.225-.475.681-.224 4.524-.714 5.151-5.847.648-5.284-.316-8.627-2.045-10.172-.93-.977-2.385-1.64-4.163-2.024-.613-.103-1.497-.223-2.768-.233a12.07 12.07 0 0 0-.545.002zM11.41 1.728c1.114.008 1.918.111 2.473.202 1.56.328 2.748.884 3.468 1.65 1.292 1.157 2.114 3.09 2.139 4.447.04 2.054-.012 4.398-.774 6.545-.393 1.097-1.064 1.808-1.7 2.175v-.001c-.628.366-1.285.573-1.785.714a12.33 12.33 0 0 1-2.235.346c-.744.05-1.5.05-2.21-.005-.73-.056-1.43-.151-1.996-.261l-.105-.021c-.943-.192-1.993-.439-3.07-1.016l-.224-.132c-.479-.285-.904-.62-1.183-1.063-.069-.106-.12-.222-.142-.349v-.015c-.024-.141.033-.408.37-.422.364-.016 1.248.1 1.794.237.33.084.61.187.86.306l.001-.003c3.221 1.55 6.033.78 7.64-.378.048-.043.93-.863.893-1.604-.042-.741-.435-1.151-.77-1.333-.336-.182-.464-.193-.62-.193h-.1c-.276.051-.574.051-.574.051-.124.006-.24-.037-.335-.116a.488.488 0 0 1-.143-.345c0-.219.147-.402.345-.451l.834-.098c.508.001 1.185.093 1.185 1.13 0 .537.358 1.067.675 1.067.317 0 .317-.156.317-.346v-.01c0-.838-.005-4.212-.005-4.212-.003-.366-.307-.666-.675-.666a.671.671 0 0 0-.674.667s.003 1.165 0 1.576c0 .213-.236.264-.339.264-.064 0-.137-.015-.213-.043-.43-.16-.607-.558-.749-.933-.096-.254-.401-1.346-.402-1.347-.057-.201-.224-.441-.54-.464a9.642 9.642 0 0 0-.903-.033c-.984 0-1.316.062-1.643.137-.408.094-.954.293-1.193.623-.068.094-.122.196-.122.307 0 .146.083.273.204.337l.004-.004c.126.065.972.51 1.112.587.438.241.702.45.842.7.193.343.276.676.245.982-.081.805-.598 1.422-1.292 1.537-1.835.304-2.182-.434-2.35-.794-.125-.268-.254-.496-.254-.496-.048-.112-.161-.19-.293-.19-.18 0-.327.153-.327.342 0 .046.008.09.022.132v.002c.017.038.647 1.419.98 1.965.485.801 1.009 1.323 1.568 1.552 1.02.417 2.59.369 4.094-.913a4.235 4.235 0 0 0 1.007-1.336c.133-.267.243-.532.342-.794l.004-.01c.134-.333.266-.657.39-.949.255-.613 1.453-2.353 1.458-2.36.213-.348.348-.576.558-.597.163-.017.314.035.487.168.5.387.393 2.304-.007 3.605-.898 2.94-2.893 3.937-4.614 4.221-.512.085-1.113.125-1.762.116-.651-.009-1.353-.053-2.046-.146-.981-.131-1.826-.336-2.583-.588-1.122-.373-2.142-.896-2.85-1.838-.51-.678-.748-1.482-.668-2.3.056-.577.299-1.157.709-1.683.285-.365.63-.668 1.06-.899.436-.232.956-.381 1.542-.405l.3-.007c.414-.002.81.076 1.188.238.324.14.637.332.931.592.292.26.571.608.748 1.129.047.138.172.239.32.239a.356.356 0 0 0 .353-.357.35.35 0 0 0-.02-.117c-.057-.142-.109-.256-.166-.361v.003c-.3-.56-.671-.98-1.07-1.302a4.468 4.468 0 0 0-1.366-.768 5.34 5.34 0 0 0-1.552-.27h-.014c-.897.026-1.694.267-2.298.62a4.744 4.744 0 0 0-1.437 1.222c-.568.73-.908 1.581-.98 2.45-.106 1.171.228 2.358.946 3.322.851 1.134 2.101 1.806 3.464 2.246 1.796.577 3.91.779 5.636.68 3.665-.208 6.079-1.83 7.203-4.88.517-1.406.705-3.026.705-3.883-.001-1.254-.262-1.606-.262-1.606-.494-.57-1.171-.796-1.742-.796-1.788 0-2.734 1.658-2.734 1.658-.747 1.234-1.17 2.61-1.344 3.621-.192 1.126-.314 2.072-.314 2.072-.071.441-.164.91-.359 1.31-.195.399-.497.74-.878.94-1.25.651-2.68.465-2.723.468-.683-.038-1.144-.371-1.428-.685-.284-.313-.405-.621-.445-.745-.07-.219-.132-.583-.097-.95.058-.607.312-1.097.56-1.41.248-.315.495-.496.622-.576.065-.042.117-.075.117-.075.01-.006.018-.015.026-.022l-.001-.001c.035-.031.081-.082.081-.16 0-.127-.09-.232-.204-.232h-.014c-.397-.163-1.163-.284-1.685.295-.477.533-.771 1.37-.822 2.093-.045.67.096 1.308.36 1.779.545.974 1.622 1.64 3.248 1.641 1.628 0 2.926-.319 3.995-.984 1.069-.667 1.865-1.632 2.347-2.786.242-.578.445-1.246.578-1.848.134-.6.21-1.118.247-1.477.038-.36.038-.557.038-.557.118-.873.506-2.073 1.021-2.882 0 0 .534-.852 1.223-.853.127 0 .232.035.32.098.102.075.227.213.222.56v.015c-.015.565-.258 2.415-.587 3.53-1.01 3.427-3.016 4.807-6.534 5.018-1.62.097-3.585-.105-5.278-.652-1.142-.37-2.167-.912-2.825-1.785-.494-.656-.72-1.498-.641-2.35.053-.563.269-1.108.615-1.53.246-.303.543-.509.832-.636.289-.127.576-.177.836-.188l.012-.001c.345-.002.654.065.918.197.264.132.498.336.698.66.036.06.1.099.173.099a.201.201 0 0 0 .203-.204.201.201 0 0 0-.034-.113c-.215-.417-.49-.714-.801-.925-.312-.21-.68-.324-1.108-.324-1.013.03-1.874.561-2.503 1.245-.63.683-1.038 1.572-1.108 2.39-.1 1.136.215 2.169.831 2.969.924 1.195 2.425 1.888 4.1 2.25.799.172 1.677.269 2.595.291.919.022 1.863-.013 2.798-.099 3.11-.288 5.211-1.814 6.298-4.396a11.068 11.068 0 0 0 .747-2.209c.149-.726.24-1.364.275-1.777.035-.414.008-.599-.015-.576a.417.417 0 0 0-.163-.007c-.067.008-.14.028-.21.055v-.001c-.151.059-.413.188-.413.523 0 .224.178.411.39.421.172.008-.035.607-.155 1.207-.12.6-.329 1.352-.699 2.012-.37.66-.902 1.227-1.574 1.581-.672.355-1.493.492-2.337.402-1.43-.15-2.35-1.254-2.707-2.369l-.001.001c-.028-.088-.111-.153-.21-.153a.223.223 0 0 0-.221.223c0 .019.002.037.006.054.2.581.52 1.13.958 1.5.439.369.989.582 1.635.601 1.063.042 2.118-.272 2.968-.775a5.095 5.095 0 0 0 1.887-1.8c.464-.747.76-1.58.949-2.206.19-.626.285-1.061.32-1.163l.001-.003a.414.414 0 0 1 .184-.178c.072-.036.161-.053.28-.044"/>
                  </svg>
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
