import Header from "../components/Header.tsx";
import OverviewCards from "../components/analytics/OverviewCards.tsx";
import RevenueChart from "../components/analytics/RevenueChart.tsx";
import ChannelPerformance from "../components/analytics/ChannelPerformance.tsx";
import ProductPerformance from "../components/analytics/ProductPerformance.tsx";
import UserRetention from "../components/analytics/UserRetention.tsx";
import CustomerSegmentation from "../components/analytics/CustomerSegmentation.tsx";
import AIPoweredInsights from "../components/analytics/AIPoweredInsight.tsx";
import React from "react";

const AnalyticsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-white text-black dark:bg-gray-900 dark:text-white">
      <Header title={"Analytics"} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <OverviewCards />
        <RevenueChart />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetention />
          <CustomerSegmentation />
        </div>

        <AIPoweredInsights />
      </main>
    </div>
  );
};

export default AnalyticsPage;