import React from "react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0A568C] text-white py-1  w-full fixed bottom-0" style={{ zIndex: 20 }}>
      <div className="max-w-screen-xl mx-auto flex flex-col items-center    lg:flex-row lg:justify-between lg:items-center space-y-2 lg:space-y-0">
        
        {/* Telefon ve Email Bilgileri */}
        <div className="flex  items-center gap-6 text-xs lg:text-sm">
          <div className="flex items-center gap-1">
            <MdPhone className="text-lg" />
            <a href="tel:4440205" className="hover:underline">
              4440205
            </a>
          </div>
          <div className="flex items-center gap-1">
            <MdEmail className="text-lg" />
            <a
              href="mailto:info@medicinehospital.com.tr"
              className="hover:underline text-white"
            >
              info@medicinehospital.com.tr
            </a>
          </div>
        </div>

        {/* Konum Bilgisi */}
        <div className="flex items-center text-xs lg:text-sm leading-tight gap-1">
          <MdLocationOn className="text-lg" />
          <div>
            Barbaros Mah, H. Ahmet Yesevi Cad, No: 149 Güneşli - Bağcılar /
            İstanbul
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
