import { Route, Routes, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import OverviewPage from "./pages/OverviewPage.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";
import OrdersPage from "./pages/OrdersPage.tsx";
import UsersPage from "./UsersPage.tsx";
import SalesPage from "./pages/SalesPage.tsx";
import AnalyticsPage from "./pages/AnalyticsPage.tsx";
import Sidebar from "./components/Sidebar.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import NotificationsPage from "./pages/NotificationsPage.tsx";
import { ThemeProvider } from "./ThemeProvider.tsx";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("loggedIn");
    setLoggedIn(storedLoggedIn === "true"); // Convert to boolean
  }, []);

  useEffect(() => {
    if (loggedIn !== null) {
      localStorage.setItem("loggedIn", loggedIn.toString());
    }
  }, [loggedIn]);

  if (loggedIn === null) {
    return (
      <div className="flex h-screen justify-center items-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="flex h-screen bg-white text-black dark:bg-gray-900 dark:text-gray-100 overflow-hidden">
        {/* Conditionally render Sidebar */}
        {loggedIn && <Sidebar />}

        <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">
          <Routes>
            {/* Redirect to OverviewPage if logged in, otherwise show LoginPage */}
            <Route
              path="/"
              element={loggedIn ? <Navigate to="/overview" /> : <LoginPage setLoggedIn={setLoggedIn} />}
            />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/profile" element={<ProfilePage setLoggedIn={setLoggedIn} />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
