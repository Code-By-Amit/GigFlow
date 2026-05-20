import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface LeadsChartProps {
  data: {
    name: string;
    value: number;
  }[];
}

const COLORS = [
  "#111827",
  "#6366F1",
  "#F59E0B",
];

const LeadsChart = ({
  data,
}: LeadsChartProps) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-gray-200 dark:border-zinc-800 p-6 h-[400px]">
      <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
        Lead Sources
      </h2>

      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={120}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[
                    index %
                      COLORS.length
                  ]
                }
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LeadsChart;