import React from "react";
import { Link } from "react-router-dom"; // React Router for navigation
import { Bell, User } from "lucide-react"; // Importing icons from lucide-react

// Defining types for the props of the Header component
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>

        {/* Navigation Features */}
        <div className="flex items-center space-x-6">
          {/* Users Button */}
          <Link
            to="/profile"
            className="flex items-center space-x-2 text-gray-300 hover:text-white focus:outline-none"
          >
            <User className="h-6 w-6" style={{ color: "#ffffff" }} />
            <span>Profile</span>
          </Link>

          {/* Notifications Button */}
          <Link
            to="/notifications"
            className="flex items-center space-x-2 text-gray-300 hover:text-white focus:outline-none"
          >
            <Bell className="h-6 w-6" style={{ color: "#4F46E5" }} />
            <span>Notifications</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
