import React from "react";
import Header from "../components/Header.tsx";

const NotificationPage = () => {
  return (
    <><Header title='Notifications' /><div className="flex justify-center items-center h-screen bg-gray-900 text-white">

      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold mb-4">Notifications</h1>
        <p className="text-lg text-gray-400">There are no notifications.</p>
      </div>
    </div></>
    
  );
};

export default NotificationPage;
