import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Header from "../components/Header.tsx";
import StatCard from "../components/StatCard.tsx";
import SalesOverviewChart from "../components/overview/SalesOverviewChart.tsx";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart.tsx";
import SalesChannelChart from "../components/overview/SalesChannelChart.tsx";
import axios from "axios";

interface Card {
  title: string;
  value: string | number;
  icon: string;
  color: string;
}

const OverviewPage: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("https://dashboard-app-be.onrender.com/cards");
        setCards(response.data);
      } catch (err) {
        setError("Failed to fetch cards");
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-white text-black dark:bg-gray-900 dark:text-white">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {cards.map((card) => {
            const Icon =
              card.icon === "Zap"
                ? Zap
                : card.icon === "Users"
                ? Users
                : card.icon === "ShoppingBag"
                ? ShoppingBag
                : BarChart2;
            return (
              <StatCard
                key={card.title}
                name={card.title}
                icon={Icon}
                value={card.value}
                color={card.color}
              />
            );
          })}
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
