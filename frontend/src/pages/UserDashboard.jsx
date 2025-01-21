import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import anketPng from "../assets/anket.png";
import aboutPng from "../assets/hastane.png";

import randevuPng from "../assets/randevu.png";
import siparisPng from "../assets/siparis.png";
import sonucPng from "../assets/sonuc.png";
import helpDesk from "../assets/customer-support.png";

const UserDashboard = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  return (
    <div className="relative flex flex-col mt-3">
      {/* Main Content */}
      <div className="relative flex-grow container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 justify-items-center font-libre">
          {/* Kartlar için sabit boyutlar */}
          <Link
            to={type ? `/anketler?type=${type}` : "/anketler"}
            className="flex flex-col items-center justify-center w-24 h-24 md:w-40 md:h-40 gap-1 md:gap-2 p-2 bg-white bg-opacity-50 rounded-lg shadow-md transition duration-300"
          >
            <div className="h-12 md:h-20 flex items-center justify-center">
              <img
                src={anketPng}
                className="w-8 h-8 md:w-16 md:h-16 object-contain"
                alt="Anket"
              />
            </div>
            <span className="text-xs md:text-base font-bold text-black text-center h-6 md:h-8 flex items-center">
              {t("survey-page")}
            </span>
          </Link>

          <Link
            to="/tanitim"
            className="flex flex-col items-center justify-center w-24 h-24 md:w-40 md:h-40 gap-1 md:gap-2 p-2 bg-white bg-opacity-50 rounded-lg shadow-md transition duration-300"
          >
            <div className="h-12 md:h-20 flex items-center justify-center">
              <img
                src={aboutPng}
                alt="Tanıtım"
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
            </div>
            <span className="text-xs md:text-base font-bold text-black text-center h-6 md:h-8 flex items-center">
              {t("about-us")}
            </span>
          </Link>

          <a
            href="https://medicinehospital.com.tr/doktorlar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-24 h-24 md:w-40 md:h-40 gap-1 md:gap-2 p-2 bg-white bg-opacity-50 rounded-lg shadow-md transition duration-300"
          >
            <div className="h-12 md:h-20 flex items-center justify-center">
              <img
                src={randevuPng}
                alt="Randevu"
                className="w-8 h-8 md:w-16 md:h-16 object-contain"
              />
            </div>
            <span className="text-xs md:text-base font-bold text-black text-center h-6 md:h-8 flex items-center">
              {t("appointment")}
            </span>
          </a>

          <a
            href="https://tetkik.medicinehospital.com.tr/patient_information.php"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-24 h-24 md:w-40 md:h-40 gap-1 md:gap-2 p-2 bg-white bg-opacity-50 rounded-lg shadow-md transition duration-300"
          >
            <div className="h-12 md:h-20 flex items-center justify-center">
              <img
                src={sonucPng}
                alt="Sonuç"
                className="w-8 h-8 md:w-16 md:h-16 object-contain"
              />
            </div>
            <span className="text-xs md:text-base font-bold text-black text-center h-6 md:h-8 flex items-center">
              {t("sonuc")}
            </span>
          </a>

          <Link
            to="/helpdesk"
            className="flex flex-col items-center justify-center w-24 h-24 md:w-40 md:h-40 gap-1 md:gap-2 p-2 bg-white bg-opacity-50 rounded-lg shadow-md transition duration-300"
          >
            <div className="h-12 md:h-20 flex items-center justify-center">
              <img
                src={helpDesk}
                alt="Bilgi"
                className="w-8 h-8 md:w-16 md:h-16 object-contain"
              />
            </div>
            <span className="text-xs md:text-base font-bold text-black text-center h-6 md:h-8 flex items-center">
              {t("helpDesk")}
            </span>
          </Link>

          <a
            href="https://menu.myqrcodemenu.com/menu/foodz-cafe--df8995"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-24 h-24 md:w-40 md:h-40 gap-1 md:gap-2 p-2 bg-white bg-opacity-50 rounded-lg shadow-md transition duration-300"
          >
            <div className="h-12 md:h-20 flex items-center justify-center">
              <img
                src={siparisPng}
                alt="Sipariş"
                className="w-8 h-8 md:w-16 md:h-16 object-contain"
              />
            </div>
            <span className="text-xs md:text-base font-bold text-black text-center h-6 md:h-8 flex items-center">
              {t("order-screen")}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
