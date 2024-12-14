import { Lock } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch.tsx";
import { useState } from "react";
import React from "react";
import SettingSection from "./SettingsSection.tsx";

const Security = () => {
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <SettingSection icon={Lock} title={"Security"}>
      <ToggleSwitch
        label={<span className="text-black dark:text-white">Two-Factor Authentication</span>}
        isOn={twoFactor}
        onToggle={() => setTwoFactor(!twoFactor)}
      />
      <div className="mt-4">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto dark:bg-indigo-700 dark:hover:bg-indigo-600"
        >
          Change Password
        </button>
      </div>
    </SettingSection>
  );
};

export default Security;
