import React from "react";
import hakkimizda from "../assets/hakkımızda.png";
import kadin from "../assets/kadın.png";
import personel from "../assets/personel.png";
import randevu from "../assets/randevu1.png";
import siparis from "../assets/sipariş1.png";
import teknikAriza from "../assets/teknikArıza.png";
import temizlik from "../assets/temizlik.png";
import { useTranslation } from "react-i18next";

const HelpDesk = () => {
  const { t } = useTranslation();
  
  const icons = [
    { src: personel, label: "Personel" },
    { src: hakkimizda, label: "Hakkımızda" },
    { src: teknikAriza, label: "Teknik" },
    { src: randevu, label: "Randevu" },
    { src: siparis, label: "Sipariş" },
    { src: temizlik, label: "Temizlik" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-between mt-28 mb-12">
      {/* Container */}
      <div className="relative w-full max-w-xl py-2 bg-transparent rounded-lg">
        {/* Kadın Görseli Ortada */}
        <div className="relative flex items-center justify-center  ">
          <img
            src={kadin}
            alt="Kadın Görseli"
            className="w-24 h-24 rounded-full object-contain border-4 border-white z-10 mt-1 p-1" // Görseli biraz daha aşağı kaydırmak için mt-2 eklendi
          />

          {/* İkonların Dairesel Yerleşimi */}
          {icons.map((icon, index) => {
            const angle = (index / icons.length) * 2 * Math.PI; // İkonların yerleşimi için açı hesaplama
            const radius = 110; // Kadın görselinden olan mesafe

            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <div
                key={index}
                className="absolute flex flex-col items-center  justify-center w-20 h-20 bg-white bg-opacity-80 rounded-full shadow-lg transition transform hover:scale-110"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)", // Ortaya hizalama
                }}
              >
                <img
                  src={icon.src}
                  className="w-9 h-9 object-contain"
                  alt={icon.label}
                />
                <span className="text-xs font-semibold text-black mt-1">
                  {icon.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Alt Kısım Yazıları */}
      <div className="relative text-justify px-2 mt-28">
        <div className=" bg-white bg-opacity-80  px-1 rounded-md shadow-md border-b-4 border-blue-500">
          {/* <small className="text-xs font-bold text-[#1F629B]">
            Değerli Misafirimiz; Tedaviniz süresince karşılaşmanızı arzu
            etmediğimiz sorunlarla ilgili{" "}
            <small className="text-red-500 font-bold text-sm underline">
              1999
            </small>{" "}
            numaralı dahiliyi tuşlayarak hasta temsilcimize{" "}
            <small className="text-red-500 font-bold underline text-sm">
              7/24
            </small>{" "}
            ulaşabilirsiniz.
            
          </small> */}
          <small className="text-xs font-bold text-[#1F629B]">
            {t('patientMessageStart')}
            <span className="text-red-500 font-bold text-sm underline">
              1999
            </span>{" "}
            {t('patientMessageMiddle')}
            <span className="text-red-500 font-bold underline text-sm">
              7/24
            </span>{" "}
            {t('patientMessageEnd')}
          </small>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
