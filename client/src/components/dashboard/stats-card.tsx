import { type LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;

  value: number;

  icon: LucideIcon;
}

const StatsCard = ({
  title,
  value,
  icon: Icon,
}: StatsCardProps) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-gray-200 dark:border-zinc-800 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
            {value}
          </h2>
        </div>

        <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center">
          <Icon size={26} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;