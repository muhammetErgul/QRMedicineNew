import React from "react";
import { Link } from "react-router-dom";
import LanguageSelector from "../translations/LanguageSelector";

function Header() {
  return (
    <header className=" text-white py-2 px-4 md:px-8 flex flex-col items-center justify-center relative font-poppins">
      {/* Dil seçici */}
      <div className="absolute top-1 right-0">
        <LanguageSelector />
      </div>

      {/* Logo ve başlık */}
      <div className="flex flex-col items-center justify-center">
        <Link to="/" className="flex flex-col items-center">
          <img
            width={70}
            height={37}
            src="./cv-logo.webp"
            className="mb-2"
            alt="Atlas Üniversitesi Logo"
          />
          <h1 className="text-2xl md:text-2xl  text-center font-libre flex flex-col">
            ATLAS ÜNİVERSİTESİ
            <span> HASTANESİ</span>
          </h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
