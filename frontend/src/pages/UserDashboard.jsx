import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const UserDashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex flex-col ">
      {/* Main Content */}
      <div className="relative flex-grow container mx-auto px-4 py-2 ">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 text-center mt-4 font-poppins">
          {/* Updated gap and card styling */}
          <Link
            to="/anketler"
            className="flex gap-2 flex-col items-center p-4   "
          >
            <img
              src="./call-center.png"
              className="bg-transparent text-center"
              alt=""
              style={{ filter: "invert(100%)" }}
              width={"70px"}
            />
            <span className="text-lg font-semibold text-[#ffff]">
              {t("survey-page")}
            </span>
          </Link>

          <Link to="/tanitim" className="flex gap-2 flex-col items-center p-4 ">
            <img
              src="./hospital-building.png"
              alt=""
              width={"70px"}
              style={{ filter: "invert(100%)" }}
            />
            <span className="text-lg font-semibold text-[#ffff]">
              Hastanemiz
            </span>
          </Link>

          <a
            href="https://randevu.medicinehospital.com.tr/appointment.php"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 flex-col items-center p-4 "
          >
            <img
              src="./appointment.png"
              alt=""
              width={"70px"}
              style={{ filter: "invert(100%)" }}
            />
            <span className="text-lg font-semibold text-[#ffff]">
              {t("appointment")}
            </span>
          </a>

          <a
            href="https://tetkik.medicinehospital.com.tr/patient_information.php"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 flex-col items-center p-4  "
          >
            <img
              src="./doctor1.png"
              alt=""
              width={"70px"}
              style={{ filter: "invert(100%)" }}
            />
            <span className="text-lg font-semibold text-[#ffff]">
              {t("sonuc")}
            </span>
          </a>

          <Link to="/info" className="flex gap-2 flex-col items-center p-4">
            <img
              src="./info.png"
              alt=""
              width={"70px"}
              style={{ filter: "invert(100%)" }}
            />
            <span className="text-lg font-semibold text-[#ffff]">
              {t("info")}
            </span>
          </Link>

          <a
            href="https://menu.myqrcodemenu.com/menu/foodz-cafe--df8995"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 flex-col items-center p-4  "
          >
            <img
              src="./shopping.png"
              alt=""
              width={"70px"}
              style={{ filter: "invert(100%)" }}
            />
            <span className="text-lg font-semibold text-[#ffff]">
              {t("order-screen")}
            </span>
          </a>
        </div>

        {/* Social Media Section */}
        <div className="p-2 rounded-lg bg-[#ffff] opacity-80 shadow-md transition duration-300 mt-6 absolute bottom-3 right-5 left-5">
          <div className="grid grid-cols-8 md:grid-cols-8 gap-4">
            <a
              href="https://medicinehospital.com.tr/"
              className="hover:text-gray-400 text-2xl transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./internet.png" alt="" />
            </a>
            <a
              href="https://www.facebook.com/medicinehospital.com.tr"
              className="hover:text-blue-700 text-2xl transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./facebook.png" alt="" />
            </a>
            <a
              href="https://www.instagram.com/medicinehospital/"
              className="hover:text-pink-300 text-2xl transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./instagram.png" alt="" />
            </a>
            <a
              href="https://x.com/medicinehospital"
              className="hover:text-blue-300 text-2xl transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./x.png" alt="" />
            </a>
            <a
              href="https://www.youtube.com/@MedicineHospitalTurkey"
              className="hover:text-red-300 text-2xl transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./youtube.png" alt="" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.pratikbilisim.medicine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./google_play.png" alt="Google Play Store" />
            </a>
            <a
              href="https://apps.apple.com/tr/app/medicine-hospital-mobil/id6471742134?l=tr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./apple_app.png" alt="App Store" />
            </a>
            <a
              href="tel:4440205"
              className="flex items-center justify-center hover:text-gray-400 transition-colors duration-300"
            >
              <img src="./iletişim.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
