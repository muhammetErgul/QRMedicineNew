import React from "react";
import { FaLink } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useParams, useSearchParams } from 'react-router-dom';

function UserSurveyList() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const { type: paramType } = useParams();
  
  // URL'den type'ı al (önce route params'a bak, yoksa query params'a bak)
  const surveyType = paramType || searchParams.get('type') || 'yatan';

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

  // Anketleri filtrele
  const filteredSurveys = surveys.filter(survey => survey.type === surveyType);

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