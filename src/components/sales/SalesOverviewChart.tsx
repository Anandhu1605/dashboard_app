import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";
import React from "react";

// Different data for time ranges
const weeklySalesData = [
  { week: "Week 1", sales: 1500 },
  { week: "Week 2", sales: 2200 },
  { week: "Week 3", sales: 1800 },
  { week: "Week 4", sales: 2500 },
];

const monthlySalesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
  { month: "Jul", sales: 7000 },
];

const quarterlySalesData = [
  { quarter: "Q1", sales: 12000 },
  { quarter: "Q2", sales: 15000 },
  { quarter: "Q3", sales: 18000 },
  { quarter: "Q4", sales: 20000 },
];

const yearlySalesData = [
  { year: "2021", sales: 50000 },
  { year: "2022", sales: 60000 },
  { year: "2023", sales: 70000 },
];

const SalesOverviewChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");
  const [chartData, setChartData] = useState(monthlySalesData); // Default to monthly data

  // Handle time range change
  const handleTimeRangeChange = (timeRange: string) => {
    setSelectedTimeRange(timeRange);

    switch (timeRange) {
      case "This Week":
        setChartData(weeklySalesData);
        break;
      case "This Month":
        setChartData(monthlySalesData);
        break;
      case "This Quarter":
        setChartData(quarterlySalesData);
        break;
      case "This Year":
        setChartData(yearlySalesData);
        break;
      default:
        setChartData(monthlySalesData); // Default to monthly data
        break;
    }
  };

  return (
    <motion.div
      className="bg-white text-black shadow-lg rounded-xl p-6 border border-gray-300 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Sales Overview</h2>

        <select
          className="bg-gray-200 text-black rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => handleTimeRangeChange(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey={
                selectedTimeRange === "This Week"
                  ? "week"
                  : selectedTimeRange === "This Quarter"
                  ? "quarter"
                  : selectedTimeRange === "This Year"
                  ? "year"
                  : "month"
              }
              stroke="#4B5563"
            />
            <YAxis stroke="#4B5563" />
            <Tooltip
              contentStyle={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}
              itemStyle={{ color: "#111827" }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
