import React from "react";
import { Link } from "react-router-dom";
import { Bell, User, Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeProvider.tsx";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="bg-white text-black dark:bg-gray-800 dark:text-gray-100 shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Title */}
        <h1 className="text-2xl font-semibold">{title}</h1>

        {/* Navigation Features */}
        <div className="flex items-center space-x-6">
          {/* Users Button */}
          <Link
            to="/profile"
            className="flex items-center space-x-2 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
          >
            <User className="h-6 w-6" />
            <span>Profile</span>
          </Link>

          {/* Notifications Button */}
          <Link
            to="/notifications"
            className="flex items-center space-x-2 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
          >
            <Bell className="h-6 w-6" />
            <span>Notifications</span>
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-2 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
          >
            {isDarkMode ? (
              <>
                <Sun className="h-6 w-6 text-yellow-500" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="h-6 w-6 text-blue-400" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
