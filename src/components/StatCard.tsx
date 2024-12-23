import { motion } from "framer-motion";
import React from "react";

// Defining the types for the props
interface StatCardProps {
  name: string;
  icon: React.ComponentType<any>; // The icon component passed in (e.g., from lucide-react)
  value: string | number; // The value displayed (could be a string or a number)
  color: string; // The color of the icon
}

const StatCard: React.FC<StatCardProps> = ({ name, icon: Icon, value, color }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 dark:bg-opacity-50 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 dark:border-gray-700"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-900 dark:text-gray-400">
          <Icon size={20} className="mr-2" style={{ color }} />
          {name}
        </span>
        <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-100">{value}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;
