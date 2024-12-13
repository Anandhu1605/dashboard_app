import React from "react";
import Header from "../components/Header.tsx";
import Profile from "../components/settings/Profile.tsx";
import Notifications from "../components/settings/Notifications.tsx";
import Security from "../components/settings/Security.tsx";
import ConnectedAccounts from "../components/settings/ConnectedAccounts.tsx";
import DangerZone from "../components/settings/DangerZone.tsx";

const ProfilePage = ({ setLoggedIn }) => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title='Settings' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
				<Profile setLoggedIn={setLoggedIn} />
				<Notifications />
				<Security />
				<ConnectedAccounts />
				<DangerZone />
			</main>
		</div>
	);
};

export default ProfilePage;
