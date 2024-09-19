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
          {/* Kart boyutları küçültüldü */}
          <Link to="/anketler" className="flex flex-col items-center justify-center w-24 h-20 gap-1 p-2 bg-white bg-opacity-50 rounded-lg shadow-md transition duration-300">
            <img
              src={anketPng}
              className="w-10 h-10 object-contain ml-1"
              alt="Anket"
            />
            <span className="text-xs font-bold text-black">
              {t("survey-page")}
            </span>
          </Link>

          <Link to="/tanitim" className="flex flex-col items-center justify-center w-24 h-20 gap-1 p-2 bg-white bg-opacity-50 rounded-lg shadow-md transition duration-300">
            <img
              src={aboutPng}
              alt="Tanıtım"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xs font-bold text-black">
              {t("about-us")}
            </span>
          </Link>

          <a
            href="https://randevu.medicinehospital.com.tr/appointment.php"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-24 h-20 gap-1 p-2 bg-white bg-opacity-50 rounded-lg shadow-md transition duration-300"
          >
            <img
              src={randevuPng}
              alt="Randevu"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xs font-bold text-black">
              {t("appointment")}
            </span>
          </a>

          <a
            href="https://tetkik.medicinehospital.com.tr/patient_information.php"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-24 h-20 gap-1 p-2 bg-white bg-opacity-50 rounded-lg shadow-md transition duration-300"
          >
            <img
              src={sonucPng}
              alt="Sonuç"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xs font-bold text-black">
              {t("sonuc")}
            </span>
          </a>

          <Link to="/info" className="flex flex-col items-center justify-center w-24 h-20 gap-1 p-2 bg-white bg-opacity-50 rounded-lg shadow-md transition duration-300">
            <img
              src={bilgiPng}
              alt="Bilgi"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xs font-bold text-black">
              {t("info")}
            </span>
          </Link>

          <a
            href="https://menu.myqrcodemenu.com/menu/foodz-cafe--df8995"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-24 h-20 gap-1 p-2 bg-white bg-opacity-50 rounded-lg shadow-md transition duration-300"
          >
            <img
              src={siparisPng}
              alt="Sipariş"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xs font-bold text-black">
              {t("order-screen")}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
