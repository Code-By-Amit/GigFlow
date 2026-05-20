// LeadsTable.tsx
import { Pencil, Trash2, Mail, ExternalLink } from "lucide-react";
import { type Lead } from "../../types/lead.types";

interface LeadsTableProps {
  leads: Lead[];
  onEdit: (lead: Lead) => void;
  onDelete: (id: string) => void;
}

const statusColors: Record<string, string> = {
  New: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  Contacted: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800",
  Qualified: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
  Lost: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800",
};

const sourceIcons: Record<string, string> = {
  Website: "🌐",
  Instagram: "📸",
  Referral: "🤝",
};

const LeadsTable = ({ leads, onEdit, onDelete }: LeadsTableProps) => {
  if (leads.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-700">
        <div className="text-6xl mb-4">📋</div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">No leads found</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-700">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800/50">
            <th className="text-left p-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Name</th>
            <th className="text-left p-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Email</th>
            <th className="text-left p-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Status</th>
            <th className="text-left p-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Source</th>
            <th className="text-left p-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => (
            <tr
              key={lead._id}
              className={`border-b border-gray-100 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors duration-150
                ${index % 2 === 0 ? 'bg-white dark:bg-zinc-900' : 'bg-gray-50/50 dark:bg-zinc-900/50'}`}
            >
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
                    {lead.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{lead.name}</span>
                </div>
              </td>
              <td className="p-4">
                <a
                  href={`mailto:${lead.email}`}
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  <Mail size={14} />
                  {lead.email}
                </a>
              </td>
              <td className="p-4">
                <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full border ${statusColors[lead.status] || statusColors.New}`}>
                  {lead.status}
                </span>
              </td>
              <td className="p-4">
                <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <span>{sourceIcons[lead.source] || "📌"}</span>
                  {lead.source}
                </span>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onEdit(lead)}
                    className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                    title="Edit lead"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(lead._id)}
                    className="p-2 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
                    title="Delete lead"
                  >
                    <Trash2 size={16} />
                  </button>
                  <button
                    className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-all duration-200"
                    title="View details"
                  >
                    <ExternalLink size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsTable;