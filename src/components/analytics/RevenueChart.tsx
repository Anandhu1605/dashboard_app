import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RevenueChart = () => {
  // Data for different time ranges
  const weeklyData = [
    { day: "Mon", revenue: 1000, target: 1200 },
    { day: "Tue", revenue: 1500, target: 1300 },
    { day: "Wed", revenue: 1200, target: 1500 },
    { day: "Thu", revenue: 1700, target: 1400 },
    { day: "Fri", revenue: 1400, target: 1600 },
    { day: "Sat", revenue: 1800, target: 1700 },
    { day: "Sun", revenue: 2000, target: 1900 },
  ];

  const monthlyData = [
    { month: "Jan", revenue: 4000, target: 3800 },
    { month: "Feb", revenue: 3000, target: 3200 },
    { month: "Mar", revenue: 5000, target: 4500 },
    { month: "Apr", revenue: 4500, target: 4200 },
    { month: "May", revenue: 6000, target: 5500 },
    { month: "Jun", revenue: 5500, target: 5800 },
    { month: "Jul", revenue: 7000, target: 6500 },
  ];

  const quarterlyData = [
    { quarter: "Q1", revenue: 12000, target: 11000 },
    { quarter: "Q2", revenue: 15000, target: 14000 },
    { quarter: "Q3", revenue: 17000, target: 16000 },
    { quarter: "Q4", revenue: 20000, target: 19000 },
  ];

  const yearlyData = [
    { year: "2020", revenue: 60000, target: 55000 },
    { year: "2021", revenue: 70000, target: 65000 },
    { year: "2022", revenue: 80000, target: 75000 },
    { year: "2023", revenue: 90000, target: 85000 },
  ];

  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");
  const [chartData, setChartData] = useState(monthlyData);

  // Handle selection change
  const handleTimeRangeChange = (timeRange: string) => {
    setSelectedTimeRange(timeRange);
    if (timeRange === "This Week") setChartData(weeklyData);
    else if (timeRange === "This Month") setChartData(monthlyData);
    else if (timeRange === "This Quarter") setChartData(quarterlyData);
    else if (timeRange === "This Year") setChartData(yearlyData);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Actual vs Target</h2>
        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => handleTimeRangeChange(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>

      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey={selectedTimeRange === "This Week" ? "day" : selectedTimeRange === "This Month" ? "month" : selectedTimeRange === "This Quarter" ? "quarter" : "year"}
              stroke="#9CA3AF"
            />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="target"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default RevenueChart;
