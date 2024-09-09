import React from "react";
import { useTranslation } from "react-i18next";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0A568C] text-white py-5 px-5 w-full   ">
      <div className=" mx-auto flex-col lg:flex-row justify-between items-start">
        <div className="w-full lg:w-1/3">
          <div className="space-y-2 ">
            <div className="flex items-start space-x-2">
              <MdPhone className="text-2xl mt-1" />
              <div>
                <p>444 0 205</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <MdEmail className="text-2xl mt-1" />
              <div>
                <a href="mailto:info@medicinehospital.com.tr">
                  info@medicinehospital.com.tr
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <MdLocationOn className="text-4xl mt-1" />
              <div>
                Barbaros Mah, H. Ahmet Yesevi Cad, No: 149 Güneşli - Bağcılar /
                İstanbul
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
