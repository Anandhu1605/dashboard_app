import React, { useState } from "react";

interface LoginPageProps {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage: React.FC<LoginPageProps> = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    // Hardcoded credentials
    const hardcodedUsername = "Anandhu";
    const hardcodedPassword = "Password@123";

    if (username === hardcodedUsername && password === hardcodedPassword) {
      setLoggedIn(true); // Log in
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#1A3D57]">
      <div className="bg-white p-8 rounded-lg w-full max-w-sm">
        <h2 className="text-black text-3xl mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-black">Username</label>
          <input
            type="text"
            id="username"
            className="w-full p-2 mt-2 rounded-lg text-black border-2 border-gray-300"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6 relative">
          <label htmlFor="password" className="block text-black">Password</label>
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            className="w-full p-2 mt-2 rounded-lg text-black border-2 border-gray-300 pr-10"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute top-2/3 right-3 transform -translate-y-1/2 text-gray-400"
          >
            {passwordVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12h.01M9 12h.01M12 5a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7zm0 0a7 7 0 00-7 7m14 0a7 7 0 01-7 7m0 0a7 7 0 007-7m0 0a7 7 0 01-7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 10-5.656-5.656 4 4 0 005.656 5.656zM2.458 12C3.732 8.247 7.59 5.5 12 5.5c3.73 0 7.028 2.45 8.42 5.995l.036-.029a9.825 9.825 0 011.228.75A4 4 0 1014.828 14.828z"
                />
              </svg>
            )}
          </button>
        </div>
        <button
          onClick={handleLogin}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
