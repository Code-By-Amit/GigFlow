import { useState } from "react";
import { Search, Plus } from "lucide-react";
import LeadModal from "../components/leads/lead-modal";
import { type Lead } from "../types/lead.types";
import LeadFilters from "../components/leads/lead-filters";
import LeadsTable from "../components/leads/leads-table";
import Pagination from "../components/leads/pagination";
import useDebounce from "../hooks/useDebounce";
import useLeads from "../hooks/useLeads";

import ExportButton from "../components/leads/export-button";
import Loader from "../components/Loading";

const Leads = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [source, setSource] = useState("");

  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(search);
  const [open, setOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const {
    query,
    createMutation,
    updateMutation,
    deleteMutation,
  } = useLeads({ search: debouncedSearch, status, source, sort, page });


  const { data, isLoading } = query;



  const handleCreate = (data: any) => {
    createMutation.mutate(data);
  };

  const handleUpdate = (data: any) => {
    if (!selectedLead) return;

    updateMutation.mutate({
      id: selectedLead._id,
      data,
    });
  };

  const handleDelete = (id: string) => {
    const confirmDelete =
      window.confirm("Delete this lead?");
    if (confirmDelete) {
      deleteMutation.mutate(id);
    }
  };

  const leads = data?.data?.leads || [];
  const pagination = data?.data?.pagination;

  if(isLoading) return <Loader />

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Leads
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your leads
          </p>
        </div>

        <div className="flex items-center gap-3">
          <ExportButton leads={leads} />

          <button
            onClick={() => {
              setSelectedLead(null);

              setOpen(true);
            }}
            className="flex items-center justify-center gap-2 bg-black dark:bg-white dark:text-black text-white px-5 py-3 rounded-xl"
          >
            <Plus size={18} />

            Add Lead
          </button>
        </div>
      </div>

      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search leads..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 shadow-2xl bg-white dark:text-gray-100 dark:bg-zinc-900"
        />
      </div>

      <LeadFilters
        status={status}
        source={source}
        sort={sort}
        setStatus={setStatus}
        setSource={setSource}
        setSort={setSort}
      />

      {isLoading ? (
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border p-10 text-center">
          Loading leads...
        </div>
      ) : leads.length === 0 ? (
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border p-10 text-center">
          No leads found
        </div>
      ) : (
        <LeadsTable leads={leads} onEdit={(lead) => {
          setSelectedLead(lead);
          setOpen(true);
        }} onDelete={handleDelete} />
      )}

      {pagination && (
        <Pagination
          currentPage={
            pagination.currentPage
          }
          totalPages={
            pagination.totalPages
          }
          setPage={setPage}
        />
      )}


      <LeadModal
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedLead(null);
        }}
        onSubmit={
          selectedLead
            ? handleUpdate
            : handleCreate
        }
        isPending={
          createMutation.isPending ||
          updateMutation.isPending
        }
        initialData={
          selectedLead || undefined
        }
      />
    </div>
  );
};

export default Leads;