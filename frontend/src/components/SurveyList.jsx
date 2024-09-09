import React, { useState } from 'react';
import { FaEdit, FaTrash, FaQrcode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import QRCode from 'qrcode.react';

Modal.setAppElement('#root'); // Modal için erişilebilirlik ayarı

function SurveyList() {
  const surveys = [
    { id: 31, department: 'DENEME ANKETİ SİLİN', title: 'DENEYİM ANKETİ', type: 'DİĞER ANKETLER' },
    { id: 36, department: 'sdfafs', title: 'asfasdfd', type: 'DİĞER ANKETLER' },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState(null);

  const openModal = (survey) => {
    setSelectedSurvey(survey);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedSurvey(null);
  };

  return (
    <>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2">Anket No</th>
            <th className="px-4 py-2">Bölüm İsmi</th>
            <th className="px-4 py-2">Anket Başlık</th>
            <th className="px-4 py-2">Anket Tipi</th>
            <th className="px-4 py-2">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {surveys.map((survey) => (
            <tr key={survey.id}>
              <td className="border px-4 py-2">{survey.id}</td>
              <td className="border px-4 py-2">{survey.department}</td>
              <td className="border px-4 py-2">{survey.title}</td>
              <td className="border px-4 py-2">{survey.type}</td>
              <td className="border px-4 py-2 flex space-x-2">
                <Link to={`/edit-survey/${survey.id}`} className="text-blue-500 hover:text-blue-700">
                  <FaEdit />
                </Link>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
                <button className="text-green-500 hover:text-green-700" onClick={() => openModal(survey)}>
                  <FaQrcode />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="QR Code Modal"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">QR Kod</h2>
          {selectedSurvey && (
            <QRCode value={`https://example.com/survey/${selectedSurvey.id}`} size={256} />
          )}
          <button
            onClick={closeModal}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Kapat
          </button>
        </div>
      </Modal>
    </>
  );
}

export default SurveyList;
