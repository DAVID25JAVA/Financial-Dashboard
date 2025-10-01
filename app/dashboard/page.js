"use client";
import Aum from "../component/Aum";
import ClientsBubbleChart from "../component/ClientBubbleChart";
import MonthlyMISChart from "../component/MonthlyMISChart";
import Sip from "../component/Sip";
import SIPBusinessChart from "../component/SipLineChart";
import StatsDashboard from "../component/StatusUI";

export default function DashboardPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Top Section - AUM and SIP Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="w-full">
          <Aum />
        </div>
        <div className="w-full">
          <Sip />
        </div>
      </div>

      {/* Stats Dashboard */}
      <div className="w-full mb-6">
        <StatsDashboard />
      </div>

      {/* Charts Section - 3 Charts */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        <div className="w-full">
          <ClientsBubbleChart />
        </div>
        <div className="w-full">
          <SIPBusinessChart />
        </div>
        <div className="w-full">
          <MonthlyMISChart />
        </div>
      </div>
    </div>
  );
}