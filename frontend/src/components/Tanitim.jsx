import React from "react";
import { useTranslation } from "react-i18next";

const Tanitim = () => {
  const {t} = useTranslation()
  return (
    <div className="min-h-screen flex justify-center items-center py-8 mt-8">
   
      <div className="w-full sm:w-11/12 md:w-10/12 lg:w-4/5 xl:w-3/4 px-4 flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1 w-full">
          <iframe 
            className="w-full rounded-lg shadow-md" 
            height="430px"
            src="https://www.youtube.com/embed/ysACqAfa35c" 
            title="Medicine Hospital Tanıtım Filmi" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen 
          ></iframe>
        </div>
        <div className="flex-1 p-4 rounded-lg w-full font-poppins">
          <h1 className="text-3xl font-bold text-[#0A568C] mb-4">{t("tanitim-baslik")}</h1>
          <p className="text-[#ffff] font-bold leading-relaxed">
            {t("tanitim-icerik")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tanitim;
