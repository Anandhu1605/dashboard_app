import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import React from "react";

const DangerZone = () => {
  return (
    <motion.div
      className="bg-red-400 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-red-700 mb-8 dark:bg-red-700 dark:bg-opacity-70 dark:border-red-600"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center mb-4">
        <Trash2 className="text-red-500 mr-3 dark:text-red-300" size={24} />
        <h2 className="text-xl font-semibold text-black dark:text-white">Danger Zone</h2>
      </div>
      <p className="text-black mb-4 dark:text-gray-200">
        Permanently delete your account and all of your content.
      </p>
      <button
        className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded transition duration-200 dark:bg-red-500 dark:hover:bg-red-600"
      >
        Delete Account
      </button>
    </motion.div>
  );
};

export default DangerZone;
