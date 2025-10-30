import { Link } from "react-router-dom";
import LanguageSelector from "../translations/LanguageSelector";
//import socialPng from "../assets/social.png";
import appStore from "../assets/appstore.png";
import googlePlay from "../assets/google-play.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import youTube from "../assets/youtube.png";
import socialMarketing from "../assets/social-marketing.png";
import call from "../assets/phone-call.png";
import web from "../assets/web-domain.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Header() {
  // Sosyal medya menüsünü açıp kapatmak için state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();

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
      <div className="absolute top-5 left-1 md:left-8 z-50">
        <button
          className="p-2  rounded-full focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Sosyal medya ikonu */}
          <img
            src={socialMarketing}
            alt="Sosyal Medya"
            className="w-9 h-9  "
            style={{ filter: "invert(100%)" }}
          />
        </button>

        {/* Sosyal Medya Linkleri */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="bg-white bg-opacity-80 md:bg-opacity-95 py-2 px-3 rounded-lg shadow-md mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              <a
                href="https://atlasuniversitesihastanesi.com/"
                className="hover:text-gray-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={web} alt="Internet" className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/atlasunvhastane/"
                className="hover:text-blue-700 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook" className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/atlasunvhastane/"
                className="hover:text-pink-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/Atlasunvhastane"
                className="hover:text-blue-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="X" className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@AtlasUnvHastane"
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
                href="tel:4443439"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <img src={call} alt="Iletisim" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Logo ve başlık */}
      <div className="flex flex-col items-center justify-center min-h-[120px] md:min-h-[160px]">
        <Link to="/" className="flex flex-col gap-2 items-center">
          {i18n.language === "tr" ? (
            <>
              <div className="w-20 h-20 md:w-32 md:h-32 flex items-center justify-center">
                <img
                  className="w-full h-full object-contain"
                  src="./Atlas-Beyaz-zeminli.png"
                  alt="Atlas Üniversitesi Logo"
                />
              </div>
              <div className="w-48 md:w-64 h-12 flex items-center justify-center">
                <img src="./Atlas.png" alt="" className="w-full object-contain" />
              </div>
            </>
          ) : (
            <>
              <div className="w-20 h-20 md:w-32 md:h-32 flex items-center justify-center">
                <img
                  className="w-full h-full object-contain"
                  src="./AtlasUniLogo1.png"
                  alt="Atlas Üniversitesi Logo"
                />
              </div>
              <div className="w-48 md:w-64 h-12 flex items-center justify-center">
                <img
                  src="./Atlas Ünv. Hastanesi Beyaz Yazı-02.png"
                  alt=""
                  className="w-full object-contain"
                />
              </div>
            </>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;
