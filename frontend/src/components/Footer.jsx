import React from "react";
import { useTranslation } from "react-i18next";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0A568C] text-white py-1 px-5 w-full ">
      <div className="mx-auto flex flex-col lg:flex-row justify-between items-start">
        <div className="w-full lg:w-1/3 space-y-2">
          <div className="flex  items-center justify-between space-y-1">
            <div className="flex items-center gap-2">
              <MdPhone className="text-xl" />
              <a href="tel:4440205" className="text-sm lg:text-base">
                444 0 205
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-xl" />
              <a
                href="mailto:info@medicinehospital.com.tr"
                className="hover:underline text-white text-sm lg:text-base"
              >
                info@medicinehospital.com.tr
              </a>
            </div>
          </div>

          <div className="flex  items-start space-x-2">
            <MdLocationOn className="text-3xl" />
            <div className="text-sm lg:text-base">
              Barbaros Mah, H. Ahmet Yesevi Cad, No: 149 Güneşli - Bağcılar /
              İstanbul
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
