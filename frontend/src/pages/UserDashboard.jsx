import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const UserDashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="relative  flex flex-col mt-5 ">
      {/* Main Content */}
      <div className="relative flex-grow container mx-auto px-5 ">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center font-libre">
          {/* Updated gap and card styling */}
          <Link to="/anketler" className="flex flex-col items-center gap-2">
            <img
              src="./call-center.png"
              className="bg-transparent text-center border rounded-md p-1 border-black"
              alt=""
              style={{ filter: "invert(100%)" }}
              width={"50px"}
            />
            <span className="text-sm font-semibold text-[#ffff]">
              {t("survey-page")}
            </span>
          </Link>

          <Link to="/tanitim" className="flex flex-col items-center gap-2">
            <img
              src="./hospital-building.png"
              alt=""
              width={"50px"}
              style={{ filter: "invert(100%)" }}
              className="bg-transparent text-center border rounded-md p-1 border-black"
            />
            <span className="text-sm font-semibold text-[#ffff]">{t("about-us")}</span>
          </Link>

          <a
            href="https://randevu.medicinehospital.com.tr/appointment.php"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2"
          >
            <img
              src="./appointment.png"
              alt=""
              width={"50px"}
              style={{ filter: "invert(100%)" }}
              className="bg-transparent text-center border rounded-md p-1 border-black"
            />
            <span className="text-sm font-semibold text-[#ffff]">
              {t("appointment")}
            </span>
          </a>

          <a
            href="https://tetkik.medicinehospital.com.tr/patient_information.php"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2"
          >
            <img
              src="./doctor1.png"
              alt=""
              width={"50px"}
              style={{ filter: "invert(100%)" }}
              className="bg-transparent text-center border rounded-md p-1 border-black"
            />
            <span className="text-sm font-semibold text-[#ffff]">
              {t("sonuc")}
            </span>
          </a>

          <Link to="/info" className="flex flex-col items-center gap-2">
            <img
              src="./info.png"
              alt=""
              width={"50px"}
              style={{ filter: "invert(100%)" }}
              className="bg-transparent text-center border rounded-md p-1 border-black"
            />
            <span className="text-sm font-semibold text-[#ffff]">
              {t("info")}
            </span>
          </Link>

          <a
            href="https://menu.myqrcodemenu.com/menu/foodz-cafe--df8995"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2"
          >
            <img
              src="./shopping.png"
              alt=""
              width={"50px"}
              style={{ filter: "invert(100%)" }}
              className="bg-transparent text-center border rounded-md p-1 border-black"
            />
            <span className="text-sm font-semibold text-[#ffff]">
              {t("order-screen")}
            </span>
          </a>
        </div>

        {/* Social Media Section */}
        {/* <div className="fixed bottom-20 right-4 left-4 p-2 rounded-lg bg-[#ffff] opacity-90  shadow-md transition duration-300 z-50 mb-4">
          <div className="grid grid-cols-8 md:grid-cols-8 gap-3 ">
            <a
              href="https://medicinehospital.com.tr/"
              className="text-2xl "
              target="_blank"
              rel="noopener noreferrer"

            >
              <img
                src="./internet.png"
                alt="Internet"
                className="w-10 h-10 object-contain"
                style={{ imageRendering: "auto" }}
              />
            </a>
            <a
              href="https://www.facebook.com/medicinehospital.com.tr"
              className=" text-2xl transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                
                src="./facebook.png"
                alt="Facebook"
                className="w-10 h-10 object-contain"
                style={{ imageRendering: "auto" }}
              />
            </a>
            <a
              href="https://www.instagram.com/medicinehospital/"
              className=" text-2xl transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./instagram.png"
                alt="Instagram"
                className="w-10 h-10 object-contain"
                style={{ imageRendering: "auto" }}
              />
            </a>
            <a
              href="https://x.com/medicinehospital"
              className=" text-2xl transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./x.png"
                alt="X"
                className="w-10 h-10 object-contain"
                style={{ imageRendering: "auto" }}
              />
            </a>
            <a
              href="https://www.youtube.com/@MedicineHospitalTurkey"
              className=" text-2xl transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./youtube.png"
                alt="YouTube"
                className="w-10 h-10 object-contain"
                style={{ imageRendering: "auto" }}
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.pratikbilisim.medicine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./google_play.png"
                alt="Google Play Store"
                className="w-10 h-10 object-contain"
                style={{ imageRendering: "auto" }}
              />
            </a>
            <a
              href="https://apps.apple.com/tr/app/medicine-hospital-mobil/id6471742134?l=tr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./apple_app.png"
                alt="App Store"
                className="w-10 h-10 object-contain"
                style={{ imageRendering: "auto" }}
              />
            </a>
            <a
              href="tel:4440205"
              className="flex items-center justify-center  transition-colors duration-300"
            >
              <img
                src="./iletişim.png"
                alt="Iletisim"
                className="w-10 h-10 object-contain"
                style={{ imageRendering: "auto" }}
              />
            </a>
          </div>
        </div> */}

        <div className="relative top-20  fixed bottom-0 right-0 left-0  p-3 rounded-lg bg-[#fefefe] bg-opacity-80 shadow-md transition duration-300">
          <div className="grid grid-cols-8 gap-4 ">
            <a
              href="https://medicinehospital.com.tr/"
              className="hover:text-gray-400 text-2xl text-gray-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./internet.png" alt="Internet" />
            </a>
            <a
              href="https://www.facebook.com/medicinehospital.com.tr"
              className="hover:text-blue-700 text-2xl text-blue-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./facebook.png" alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/medicinehospital/"
              className="hover:text-pink-300 text-2xl text-pink-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./instagram.png" alt="Instagram" />
            </a>
            <a
              href="https://x.com/medicinehospital"
              className="hover:text-blue-300 text-2xl text-blue-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./x.png" alt="X" />
            </a>
            <a
              href="https://www.youtube.com/@MedicineHospitalTurkey"
              className="hover:text-red-300 text-2xl text-red-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./youtube.png" alt="YouTube" />
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
              className="flex items-center justify-center hover:text-gray-400 text-2xl text-gray-500 transition-colors duration-300"
            >
              <img src="./iletişim.png" alt="Iletisim" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
