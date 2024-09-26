import React from "react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="bg-[#ffff]   py-1   w-full fixed bottom-0"
      style={{ zIndex: 20,opacity:0.7 }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center lg:flex-row lg:justify-between lg:items-center space-y-2 lg:space-y-0">
        {/* Telefon ve Email Bilgileri */}

        <div className="flex items-center justify-center text-xs lg:text-sm   gap-1">
          <a
            href="https://www.google.com/maps/dir//Atlas+%C3%9Cniversitesi+Medicine+Hastanesi,+Barbaros,+Hoca+Ahmet+Yesevi+Cd.+No:+149,+34203+Ba%C4%9Fc%C4%B1lar%2F%C4%B0stanbul/@41.0306647,28.8383798,19.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14caa4de4cd2a8e1:0xd8327c4ae8c67491!2m2!1d28.8386075!2d41.0305247?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center "
          >
            <MdLocationOn className="text-lg cursor-pointer text-sky-500" />
          </a>
          <small className="font-bold">
            Barbaros Mah, H. Ahmet Yesevi Cad, No: 149 Güneşli - Bağcılar/İstanbul
          </small>
        </div>
        <div className="flex  items-center gap-6 text-xs lg:text-sm">
          <div className="flex items-center gap-1">
            <MdPhone className="text-lg text-sky-500" />
            <a href="tel:4440205" className="hover:underline">
             <small className="font-bold">444 0205</small>
            </a>
          </div>
          <div className="flex items-center gap-1">
            <MdEmail className="text-lg text-sky-500" />
            <a
              href="mailto:info@medicinehospital.com.tr"
              className="hover:underline "
            >
              <small className="font-bold">info@medicinehospital.com.tr</small>
            </a>
          </div>
        </div>

        {/* Konum Bilgisi */}
      
      </div>
    </footer>
  );
};

export default Footer;
