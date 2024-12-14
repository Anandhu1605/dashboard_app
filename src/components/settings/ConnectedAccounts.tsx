import { useState } from "react";
import { HelpCircle, Plus } from "lucide-react";
import React from "react";
import SettingSection from "./SettingsSection.tsx";

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState([
    {
      id: 1,
      name: "Google",
      connected: true,
    //   icon: "/google.png",
    },
    {
      id: 2,
      name: "Facebook",
      connected: false,
    //   icon: "/facebook.svg",
    },
    {
      id: 3,
      name: "Twitter",
      connected: true,
    //   icon: "/x.png",
    },
  ]);

  return (
    <SettingSection icon={HelpCircle} title={"Connected Accounts"}>
      {connectedAccounts.map((account) => (
        <div
          key={account.id}
          className="flex items-center justify-between py-3 dark:bg-gray-800 bg-white rounded-lg"
        >
          <div className="flex gap-1">
            {/* <img
              src={account.icon}
              alt="Social img"
              className="w-8 h-8 object-cover rounded-full mr-2"
            /> */}
            <span className="text-gray-1000 dark:text-gray-200">{account.name}</span>
          </div>
          <button
            className={`px-3 py-1 rounded text-white ${
              account.connected
                ? "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
                : "bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
            } transition duration-200`}
            onClick={() => {
              setConnectedAccounts(
                connectedAccounts.map((acc) => {
                  if (acc.id === account.id) {
                    return {
                      ...acc,
                      connected: !acc.connected,
                    };
                  }
                  return acc;
                })
              );
            }}
          >
            {account.connected ? "Connected" : "Connect"}
          </button>
        </div>
      ))}
      <button className="mt-4 flex items-center text-indigo-700 hover:text-indigo-600 transition duration-200 dark:text-indigo-400 dark:hover:text-indigo-300">
  <Plus size={18} className="mr-2" /> Add Account
</button>

    </SettingSection>
  );
};

export default ConnectedAccounts;
