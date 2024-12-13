import { User } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import SettingSection from "./SettingsSection.tsx";
import Photo from "../../Image/Photo.jpeg";

const Profile = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false); // Update the logged-in state
    navigate("/");      // Redirect to login page
  };

  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img
          src={Photo}
          alt="Profile"
          className="rounded-full w-20 h-20 object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-100">Anandhu</h3>
          <p className="text-gray-400">anandhu@gmail.com</p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
          Edit Profile
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto ml-4"
        >
          Logout
        </button>
      </div>
    </SettingSection>
  );
};

export default Profile;
