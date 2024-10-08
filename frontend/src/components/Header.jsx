import React, { useState } from "react";
import { Link } from "react-router-dom";
import LanguageSelector from "../translations/LanguageSelector";
//import socialPng from "../assets/social.png";
import appStore from "../assets/appstore.png";
import googlePlay from "../assets/google-play.png";
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import youTube from '../assets/youtube.png';
import socialMarketing from '../assets/social-marketing.png';
import call from '../assets/phone-call.png';
import web from '../assets/web-domain.png';
function Header() {
  // Sosyal medya menüsünü açıp kapatmak için state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menü açma/kapatma fonksiyonu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white pt-2 px-4 md:px-8 flex flex-col items-center justify-center relative font-poppins">
      {/* Dil seçici */}
      <div className="absolute top-1 right-0">
        <LanguageSelector />
      </div>

      {/* Sosyal Medya Menü Butonu */}
      <div className="absolute top-5 left-1 z-50">
        <button
          className="p-2  rounded-full focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Sosyal medya ikonu */}
          <img src={socialMarketing} alt="Sosyal Medya" className="w-9 h-9  " style={{ filter: "invert(100%)" }} />
        </button>

        {/* Sosyal Medya Linkleri */}
        <div
          className={`transition-all duration-500 ease-in-out  ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="bg-white bg-opacity-80 py-2 px-3   rounded-lg shadow-md mt-2 ">
            <div className="grid grid-cols-1 gap-2">
              <a
                href="https://medicinehospital.com.tr/"
                className="hover:text-gray-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={web} alt="Internet" className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/medicinehospital.com.tr"
                className="hover:text-blue-700 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook" className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/medicinehospital/"
                className="hover:text-pink-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/medicinehospital"
                className="hover:text-blue-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="X" className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@MedicineHospitalTurkey"
                className="hover:text-red-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youTube} alt="YouTube" className="w-6 h-6" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.pratikbilisim.medicine"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={googlePlay}
                  alt="Google Play Store"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://apps.apple.com/tr/app/medicine-hospital-mobil/id6471742134?l=tr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={appStore} alt="App Store" className="w-6 h-6" />
              </a>
              <a
                href="tel:4440205"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <img src={call} alt="Iletisim" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Logo ve başlık */}
      <div className="flex flex-col items-center justify-center">
        <Link to="/" className="flex flex-col gap-2 items-center">
          <img
            className="w-20 h-20  "
            src="./Atlas-Beyaz-zeminli.png"
            alt="Atlas Üniversitesi Logo"
          />
          <img src="./Atlas.png" alt=""   /> 
        </Link>
        
      </div>
    </header>
  );
}

export default Header;
