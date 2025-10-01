"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function StatsDashboard() {
  const [activeTab, setActiveTab] = useState("3 Days");
  const tabs = ["3 Days", "7 Days", "10 Days", "30 Days"];
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("/api/stats");
        // console.log(res?.data);
        setStats(res.data);  
      } catch (error) {
        console.error("Error fetching stats:", error?.message);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-md border p-4 w-full">
      {/* Tabs & Buttons */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 border text-sm rounded-md ${
                activeTab === tab
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-gray-100 text-gray-600 border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 md:gap-6 justify-end">
          <button className="px-4 h-9 text-sm font-semibold border-2 border-red-500 rounded-lg bg-red-100 text-red-500 hover:text-red-600 transition-colors">
            View Report
          </button>
          {/* <button className="px-4 h-9 text-sm font-semibold border-2 border-red-500 rounded-lg bg-red-100 text-red-500 hover:text-red-600 transition-colors">
            View Report
          </button> */}
        </div>
      </div>

      {/* Stats Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded p-3 flex items-center gap-3 shadow-sm"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <img src={stat?.icon} className="w-20 h-20" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <span className="font-semibold text-gray-700 block">
                {stat.label}
              </span>
              <div className="border-b-[1px] border-gray-300 w-full my-2 hidden md:block"></div>
              <p className="text-sm text-gray-500 font-semibold">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
