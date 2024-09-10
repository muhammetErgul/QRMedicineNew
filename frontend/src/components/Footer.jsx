import React from "react";
import { useTranslation } from "react-i18next";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0A568C] text-white py-2 px-6 w-full">
      <div className="mx-auto flex flex-col items-center lg:flex-row lg:justify-between lg:items-start">
        
        {/* Telefon ve Email Bilgileri - Yan Yana ve Sabit */}
        <div className="flex items-center justify-center lg:justify-start gap-4 w-full lg:w-1/3">
          <div className="flex items-center gap-1">
            <MdPhone className="text-2xl" />
            <a href="tel:4440205" className="text-sm lg:text-lg">
              4440205
            </a>
          </div>
          <div className="flex items-center gap-1">
            <MdEmail className="text-2xl" />
            <a
              href="mailto:info@medicinehospital.com.tr"
              className="hover:underline text-white text-sm lg:text-lg"
            >
              info@medicinehospital.com.tr
            </a>
          </div>
        </div>

        {/* Konum Bilgisi - Alt Kısım */}
        <div className="flex items-start  text-center lg:text-left mt-1 lg:mt-0 w-full lg:w-auto">
          <MdLocationOn className="text-2xl" />
          <div className="text-sm lg:text-lg leading-tight">
            Barbaros Mah, H. Ahmet Yesevi Cad, No: 149 Güneşli - Bağcılar /
            İstanbul
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
