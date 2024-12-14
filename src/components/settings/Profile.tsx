import { User } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SettingSection from "./SettingsSection.tsx";

const Profile = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  // On mount, get username from localStorage
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);  // Set username if found in localStorage
    } else {
      navigate("/");  // Redirect to login if no username found
    }
  }, [navigate]);

  const handleLogout = () => {
    setLoggedIn(false); // Update logged-in state
    localStorage.removeItem("userId");  // Clear userId from localStorage
    localStorage.removeItem("username");  // Clear username from localStorage
    navigate("/");  // Redirect to login page
  };

  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Welcome back, {username || "User"} !</h3>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto dark:bg-indigo-700 dark:hover:bg-indigo-600">
          Edit Profile
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto ml-4 dark:bg-red-700 dark:hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </SettingSection>
  );
};

export default Profile;
