import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function AddEditSurvey() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [survey, setSurvey] = useState({ department: '', title: '', type: '' });

  useEffect(() => {
    if (id) {
      // API call to fetch survey data by id and set it to the state
      setSurvey({ department: 'Existing Department', title: 'Existing Title', type: 'Existing Type' });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSurvey({ ...survey, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // API call to update survey
    } else {
      // API call to add new survey
    }
    navigate('/');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{id ? 'Edit Survey' : 'Add Survey'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Department</label>
          <input
            type="text"
            name="department"
            value={survey.department}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={survey.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Type</label>
          <input
            type="text"
            name="type"
            value={survey.type}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {id ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
}

export default AddEditSurvey;
