import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaPlus, FaPoll } from "react-icons/fa";
import { signout } from "../authApi/authService";
import { CgLogOut } from "react-icons/cg";
function Sidebar() {
  const navigate = useNavigate();
  const handleSignout = async () => {
    try {
      await signout();
      navigate("/");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };
  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4 text-2xl font-bold">QR Dashboard</div>
      <ul>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/dashboard" className="flex items-center">
            <FaHome className="mr-2" /> Dashboard
          </Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/add-survey" className="flex items-center">
            <FaPlus className="mr-2" /> Add Survey
          </Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/" className="flex items-center">
            <FaPoll className="mr-2" /> Surveys
          </Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/user-dashboard" className="flex items-center">
           UserDashboard
          </Link>
        </li>
      </ul>
      <button
        onClick={handleSignout}
        className="text-white font-bold py-2 px-4 hover:bg-gray-700 rounded w-full lg:w-max flex items-center justify-center lg:justify-end mt-4 transition duration-300"
      >
        <CgLogOut size={24} />
        <span className="ml-2">Çıkış Yap</span>
      </button>
    </div>
  );
}

export default Sidebar;
