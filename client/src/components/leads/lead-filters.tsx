// LeadFilters.tsx
import { Filter, SortAsc, SortDesc } from "lucide-react";

interface LeadFiltersProps {
    status: string;
    source: string;
    sort: string;
    setStatus: (value: string) => void;
    setSource: (value: string) => void;
    setSort: (value: string) => void;
}

const statusOptions = [
    { value: "", label: "All Status" },
    { value: "New", label: "New", color: "text-blue-600 dark:text-blue-400" },
    { value: "Contacted", label: "Contacted", color: "text-yellow-600 dark:text-yellow-400" },
    { value: "Qualified", label: "Qualified", color: "text-green-600 dark:text-green-400" },
    { value: "Lost", label: "Lost", color: "text-red-600 dark:text-red-400" },
];

const sourceOptions = [
    { value: "", label: "All Sources" },
    { value: "Website", label: "Website" },
    { value: "Instagram", label: "Instagram" },
    { value: "Referral", label: "Referral" },
];

const sortOptions = [
    { value: "latest", label: "Latest First", icon: SortDesc },
    { value: "oldest", label: "Oldest First", icon: SortAsc },
];

const LeadFilters = ({
    status,
    source,
    sort,
    setStatus,
    setSource,
    setSort,
}: LeadFiltersProps) => {
    const getStatusStyle = (value: string) => {
        const option = statusOptions.find(opt => opt.value === value);
        if (!value || !option) return "";
        return option.color;
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Filter size={18} />
                <span className="text-sm font-medium">Filter & Sort</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Status Filter */}
                <div className="relative">
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-zinc-900 
                            border-gray-200 dark:border-zinc-700 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            transition-all duration-200 appearance-none cursor-pointer
                            text-sm text-gray-900 dark:text-gray-100
                            ${getStatusStyle(status)}`}
                    >
                        {statusOptions.map((option) => (
                            <option 
                                key={option.value} 
                                value={option.value} 
                                className="text-gray-900 dark:text-gray-100 bg-white dark:bg-zinc-900"
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* Source Filter */}
                <div className="relative">
                    <select
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-zinc-900 
                            border-gray-200 dark:border-zinc-700
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            transition-all duration-200 appearance-none cursor-pointer text-sm
                            text-gray-900 dark:text-gray-100"
                    >
                        {sourceOptions.map((option) => (
                            <option 
                                key={option.value} 
                                value={option.value}
                                className="text-gray-900 dark:text-gray-100 bg-white dark:bg-zinc-900"
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* Sort Filter */}
                <div className="relative">
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-zinc-900 
                            border-gray-200 dark:border-zinc-700 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            transition-all duration-200 appearance-none cursor-pointer text-sm
                            text-gray-900 dark:text-gray-100"
                    >
                        {sortOptions.map((option) => (
                            <option 
                                key={option.value} 
                                value={option.value}
                                className="text-gray-900 dark:text-gray-100 bg-white dark:bg-zinc-900"
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        {sort === "latest" ? <SortDesc size={14} className="text-gray-400" /> : <SortAsc size={14} className="text-gray-400" />}
                    </div>
                </div>
            </div>

            {/* Active Filters Display */}
            {(status || source) && (
                <div className="flex flex-wrap gap-2">
                    {status && status !== "" && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                            Status: {statusOptions.find(s => s.value === status)?.label}
                            <button 
                                onClick={() => setStatus("")} 
                                className="hover:text-blue-900 dark:hover:text-blue-100 ml-1 font-bold"
                            >
                                ×
                            </button>
                        </span>
                    )}
                    {source && source !== "" && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                            Source: {source}
                            <button 
                                onClick={() => setSource("")} 
                                className="hover:text-green-900 dark:hover:text-green-100 ml-1 font-bold"
                            >
                                ×
                            </button>
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

export default LeadFilters;