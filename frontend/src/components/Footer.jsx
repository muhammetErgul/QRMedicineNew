import React from "react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  const isMobile = window.innerWidth < 768;
  
  return (
    <footer
      className="w-full fixed bottom-0 left-0 right-0 backdrop-blur-sm"
      style={{ 
        zIndex: 20, 
        backgroundColor: isMobile ? 'rgba(255, 255, 255, 0.7)' : '#29597D',
        height: isMobile ? '48px' : '65px'
      }}
    >
      {/* Mobil görünüm için orijinal tasarım */}
      {isMobile ? (
        <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center space-y-2 px-1 py-1">
          <div className="flex items-center justify-center text-xs gap-1">
            <a
              href="https://www.google.com/maps/dir//Atlas+%C3%9Cniversitesi+Medicine+Hastanesi,+Barbaros,+Hoca+Ahmet+Yesevi+Cd.+No:+149,+34203+Ba%C4%9Fc%C4%B1lar%2F%C4%B0stanbul/@41.0306647,28.8383798,19.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14caa4de4cd2a8e1:0xd8327c4ae8c67491!2m2!1d28.8386075!2d41.0305247?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <MdLocationOn className="text-lg cursor-pointer text-sky-500" />
              <small className="font-bold">
                Barbaros Mah, H. Ahmet Yesevi Cad, No: 149 Güneşli - Bağcılar/İstanbul
              </small>
            </a>
          </div>
          <div className="flex items-center gap-6 text-xs">
            <div className="flex items-center gap-1">
              <MdPhone className="text-lg text-sky-500" />
              <a href="tel:4443439" className="hover:underline">
                <small className="font-bold">444 3439</small>
              </a>
            </div>
            <div className="flex items-center gap-1">
              <MdEmail className="text-lg text-sky-500" />
              <a
                href="mailto:hastaneinfo@atlas.edu.tr"
                className="hover:underline"
              >
                <small className="font-bold">hastaneinfo@atlas.edu.tr</small>
              </a>
            </div>
          </div>
        </div>
      ) : (
        // Desktop görünüm için yeni tasarım
        <div className="w-full h-full flex flex-col">
          <div className="w-full flex-grow">
            <div className="h-full max-w-screen-2xl mx-auto flex items-center justify-between px-4 md:px-8 lg:px-12">
              {/* Konum Bilgisi */}
              <div className="flex items-center text-base gap-3 flex-1 max-w-xl group">
                <a
                  href="https://www.google.com/maps/dir//Atlas+%C3%9Cniversitesi+Medicine+Hastanesi,+Barbaros,+Hoca+Ahmet+Yesevi+Cd.+No:+149,+34203+Ba%C4%9Fc%C4%B1lar%2F%C4%B0stanbul/@41.0306647,28.8383798,19.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14caa4de4cd2a8e1:0xd8327c4ae8c67491!2m2!1d28.8386075!2d41.0305247?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-sky-400 transition-colors"
                >
                  <MdLocationOn className="text-2xl text-sky-300 group-hover:text-sky-400 transition-colors" />
                  <span className="ml-1">
                    Barbaros Mah, H. Ahmet Yesevi Cad, No: 149 Güneşli - Bağcılar/İstanbul
                  </span>
                </a>
              </div>

              {/* İletişim Bilgileri */}
              <div className="flex items-center gap-8 text-white">
                <div className="flex items-center gap-2 group">
                  <MdPhone className="text-2xl text-sky-300 group-hover:text-sky-400 transition-colors" />
                  <a href="tel:4443439" className="hover:text-sky-400 transition-colors">
                    444 3439
                  </a>
                </div>
                <div className="flex items-center gap-2 group">
                  <MdEmail className="text-2xl text-sky-300 group-hover:text-sky-400 transition-colors" />
                  <a
                    href="mailto:hastaneinfo@atlas.edu.tr"
                    className="hover:text-sky-400 transition-colors"
                  >
                    hastaneinfo@atlas.edu.tr
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Alt çizgi efekti */}
          <div className="w-full h-1 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 opacity-30"></div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
