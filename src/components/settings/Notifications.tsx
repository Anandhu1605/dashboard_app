import { useState } from "react";
import { Bell } from "lucide-react";
import React from "react";
import SettingSection from "./SettingsSection.tsx";
import ToggleSwitch from "./ToggleSwitch.tsx";

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: true,
  });

  return (
    <SettingSection icon={Bell} title={"Notifications"}>
      <ToggleSwitch
        label={<span className="text-black dark:text-white">Push Notifications</span>}
        isOn={notifications.push}
        onToggle={() => setNotifications({ ...notifications, push: !notifications.push })}
      />
      <ToggleSwitch
        label={<span className="text-black dark:text-white">Email Notifications</span>}
        isOn={notifications.email}
        onToggle={() => setNotifications({ ...notifications, email: !notifications.email })}
      />
      <ToggleSwitch
        label={<span className="text-black dark:text-white">SMS Notifications</span>}
        isOn={notifications.sms}
        onToggle={() => setNotifications({ ...notifications, sms: !notifications.sms })}
      />
    </SettingSection>
  );
};

export default Notifications;
