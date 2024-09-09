import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const langs = [
  { code: "tr", lang: "Türkçe", flag: "./turkey.png" },
  { code: "en", lang: "English", flag: "./united-kingdom.png" },
  { code: "ar", lang: "Arabic", flag: "./united-arab-emirates.png" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-28 z-50">
      <div
        className="block w-12 top-0 right-2 absolute  p-3 flex items-center justify-center text-gray-700  cursor-pointer transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoLanguage size={25} color="#fff" className="font-bold "/>
       
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute mt-2 w-15 right-2 top-12 bg-white border border-gray-300 rounded-md shadow-lg z-10 overflow-hidden"
          >
            {langs.map((lang) => (
              <div
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="flex items-center space-x-2 py-2 px-3 hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <img
                  src={lang.flag}
                  alt={`${lang.lang} flag`}
                  className="w-6 h-auto"
                />
                {/* <span className="text-gray-700">{lang.lang}</span> */}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
