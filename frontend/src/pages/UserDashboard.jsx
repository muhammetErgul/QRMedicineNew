import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import anketPng from '../assets/anket.png';
import aboutPng from '../assets/hospital.png';
import bilgiPng from '../assets/bilgi.png';
import randevuPng from '../assets/randevu.png';
import siparisPng from '../assets/siparis.png';
import sonucPng from '../assets/sonuc.png';

const UserDashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col mt-3">
      {/* Main Content */}
      <div className="relative flex-grow container mx-auto px-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center font-libre">
          {/* Sabit boyutlu kartlar */}
          <Link to="/anketler" className="flex flex-col items-center justify-center w-28 h-24 gap-2 p-3 bg-white bg-opacity-60 rounded-lg shadow-lg  transition duration-300">
            <img
              src={anketPng}
              className="w-12 h-12 object-contain ml-1 "
              alt="Anket"
            />
            <span className="text-sm font-semibold text-gray-800">
              {t("survey-page")}
            </span>
          </Link>

          <Link to="/tanitim" className="flex flex-col items-center justify-center w-28 h-24 gap-2 p-3 bg-white bg-opacity-60 rounded-lg shadow-lg transition duration-300">
            <img
              src={aboutPng}
              alt="Tanıtım"
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm font-semibold text-gray-800">
              {t("about-us")}
            </span>
          </Link>

          <a
            href="https://randevu.medicinehospital.com.tr/appointment.php"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-28 h-24 gap-2 p-3 bg-white bg-opacity-60 rounded-lg shadow-lg transition duration-300"
          >
            <img
              src={randevuPng}
              alt="Randevu"
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm font-semibold  text-gray-800">
              {t("appointment")}
            </span>
          </a>

          <a
            href="https://tetkik.medicinehospital.com.tr/patient_information.php"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-28 h-24 gap-2 p-3 bg-white bg-opacity-60 rounded-lg shadow-lg  transition duration-300"
          >
            <img
              src={sonucPng}
              alt="Sonuç"
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm font-semibold text-gray-800">
              {t("sonuc")}
            </span>
          </a>

          <Link to="/info" className="flex flex-col items-center justify-center w-28 h-24 gap-2 p-3 bg-white bg-opacity-60 rounded-lg shadow-lg  transition duration-300">
            <img
              src={bilgiPng}
              alt="Bilgi"
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm font-semibold text-gray-800">
              {t("info")}
            </span>
          </Link>

          <a
            href="https://menu.myqrcodemenu.com/menu/foodz-cafe--df8995"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-28 h-24 gap-2 p-3 bg-white bg-opacity-60 rounded-lg shadow-lg  transition duration-300"
          >
            <img
              src={siparisPng}
              alt="Sipariş"
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm font-semibold text-gray-800">
              {t("order-screen")}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
