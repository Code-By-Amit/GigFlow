import { useQuery } from "@tanstack/react-query";

import {
  Users,
  UserPlus,
  BadgeCheck,
  XCircle,
} from "lucide-react";

import StatsCard from "../components/dashboard/stats-card";
import LeadsChart from "../components/dashboard/leads-chart";
import { getLeadStats } from "../services/lead.service";

const Dashboard = () => {
  const { data, isLoading } =
    useQuery({
      queryKey: ["lead-stats"],
      queryFn: getLeadStats,
    });

  const stats = data?.data;

  if (isLoading) {
    return (
      <div>
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Overview of your leads
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatsCard
          title="Total Leads"
          value={stats.total}
          icon={Users}
        />

        <StatsCard
          title="New Leads"
          value={stats.newLeads}
          icon={UserPlus}
        />

        <StatsCard
          title="Qualified"
          value={stats.qualified}
          icon={BadgeCheck}
        />

        <StatsCard
          title="Lost Leads"
          value={stats.lost}
          icon={XCircle}
        />
      </div>

      {/* Charts */}
      <div>
        <LeadsChart
          data={stats.sources}
        />
      </div>
    </div>
  );
};

export default Dashboard;