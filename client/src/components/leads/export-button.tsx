import { CSVLink } from "react-csv";
import { Download } from "lucide-react";
import type { Lead } from "../../types/lead.types";

interface ExportButtonProps { leads: Lead[] }

const ExportButton = ({ leads, }: ExportButtonProps) => {
  const csvData = leads.map(
    (lead) => ({
      Name: lead.name,
      Email: lead.email,
      Status: lead.status,
      Source: lead.source,
      CreatedAt:
        new Date(
          lead.createdAt
        ).toLocaleDateString(),
    })
  );

  return (
    <CSVLink
      data={csvData}
      filename="leads.csv"
      className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all"
    >
      <Download size={18} />

      Export CSV
    </CSVLink>
  );
};

export default ExportButton;