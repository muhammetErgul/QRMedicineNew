import React, { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

function UserSurveyList() {
  const [filteredSurveys, setFilteredSurveys] = useState([]);
  const { t } = useTranslation();
  const location = useLocation();

  // Test için örnek veri
  const surveys = [
    {
      id: 31,
      department: "DENEME ANKETİ SİLİN",
      title: "YATAN HASTA DEĞERLENDİRME ANKETİ",
      type: "yatan",
      link: "http://qrlink.web.tr/0031",
    },
    {
      id: 32,
      department: "DENEME ANKETİ SİLİN",
      title: "AYAKTAN HASTA DEĞERLENDİRME ANKETİ",
      type: "ayaktan",
      link: "http://qrlink.web.tr/0032",
    },
  ];

  useEffect(() => {
    // URL'den type parametresini al
    const params = new URLSearchParams(location.search);
    const surveyType = params.get('type');
    
    console.log("Current survey type:", surveyType); // Hata ayıklama için

    // Anketi filtrele
    const filtered = surveyType
      ? surveys.filter(survey => survey.type === surveyType)
      : surveys;

    console.log("Filtered surveys:", filtered); // Hata ayıklama için
    
    setFilteredSurveys(filtered);
  }, [location.search]); // location.search değiştiğinde useEffect'i tekrar çalıştır

  // Eğer hiç anket yoksa bilgi mesajı göster
  if (filteredSurveys.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-lg text-gray-600">
          Bu türde mevcut anket bulunmamaktadır.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center mt-8 py-8 px-4">
      <div className="w-full max-w-4xl overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-[#0A568C] text-white">
            <tr>
              <th className="px-4 py-2 text-center">{t("survey-title")}</th>
            </tr>
          </thead>
          <tbody>
            {filteredSurveys.map((survey) => (
              <tr
                key={survey.id}
                className="even:bg-gray-50 hover:bg-blue-100 hover:shadow-lg transition duration-300"
              >
                <td className="border-t px-4 py-2 text-center">
                  <a
                    href={survey.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 flex justify-center items-center"
                  >
                    <FaLink size={24} className="mr-2" />
                    <span>{survey.title}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserSurveyList;