import { Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";
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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* Conditionally render Sidebar */}
      {loggedIn && <Sidebar />}

      <div className="flex-1 overflow-y-auto">
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
  );
}

export default App;
