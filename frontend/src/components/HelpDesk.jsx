import kadin from "../assets/kadın.png";
import personel from "../assets/personel.png";
import teknikAriza from "../assets/teknikArıza.png";
import temizlik from "../assets/temizlik.png";
import { useTranslation } from "react-i18next";

const HelpDesk = () => {
  const { t } = useTranslation();

  const icons = [
    { src: personel, label: t("staff") },
    { src: teknikAriza, label: t("teknik") },
    { src: temizlik, label: t("temizlik") },
  ];

  return (
    <div className="relative flex flex-col items-center justify-between mt-28 mb-12">
      {/* Container */}
      <div className="relative w-full max-w-xl py-2 bg-transparent rounded-lg">
        {/* Kadın Görseli Ortada */}
        <div className="relative flex items-center justify-center">
          <img
            src={kadin}
            alt="Kadın Görseli"
            className="w-24 h-24 rounded-full object-contain border-2 border-white z-10 mt-1 p-1"
          />

          {/* İkonların Yatay Parantez Yerleşimi */}
          {icons.map((icon, index) => {
            const isLeft = index === 0;
            const isRight = index === 2;
            const horizontalPosition = isLeft ? -100 : isRight ? 100 : 0;
            const verticalPosition = isLeft || isRight ? -80 : -100;

            return (
              <div
                key={index}
                className="absolute flex flex-col items-center justify-center w-20 h-20 bg-white bg-opacity-80 rounded-full shadow-lg transition transform hover:scale-110"
                style={{
                  left: `calc(50% + ${horizontalPosition}px)`,
                  top: `calc(50% + ${verticalPosition}px)`,
                  transform: "translate(-50%, -50%)", // Ortaya hizalama
                }}
              >
                {/* İkonun kendisi */}
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
      <div className="relative text-center px-2 mt-16 "> {/* Y ekseninde daha yakınlaştırma için space-y-1 ekledik */}
        <div className="bg-white bg-opacity-80 px-1 rounded-md shadow-md border-t-4 border-blue-500 leading-tight ">
          <small className="text-xs font-bold text-[#1F629B]">
            {t("patientMessageStart")}
            <span className="text-red-500 font-bold text-sm underline">1999</span>{" "}
            {t("patientMessageMiddle")}
            <span className="text-red-500 font-bold underline text-sm">7/24</span>{" "}
            {t("patientMessageEnd")}
          </small>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
