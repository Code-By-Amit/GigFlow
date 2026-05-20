import { useMutation } from "@tanstack/react-query";

import { useQuery } from "@tanstack/react-query";

import { useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

import {
  createLead,
  deleteLead,
  getLeads,
  updateLead,
} from "../services/lead.service";

interface UseLeadsProps {
  search: string;

  status: string;

  source: string;

  sort: string;

  page: number;
}

const useLeads = ({
  search,
  status,
  source,
  sort,
  page,
}: UseLeadsProps) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: [
      "leads",
      search,
      status,
      source,
      sort,
      page,
    ],

    queryFn: () =>
      getLeads({
        search,
        status,
        source,
        sort,
        page: page.toString(),
      }),
  });

  const createMutation = useMutation({
    mutationFn: createLead,

    onSuccess: () => {
      toast.success(
        "Lead created successfully"
      );

      queryClient.invalidateQueries({
        queryKey: ["leads"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error.response?.data?.message ||
          "Failed to create lead"
      );
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: any;
    }) =>
      updateLead(id, data),

    onSuccess: () => {
      toast.success(
        "Lead updated successfully"
      );

      queryClient.invalidateQueries({
        queryKey: ["leads"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error.response?.data?.message ||
          "Failed to update lead"
      );
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteLead,

    onSuccess: () => {
      toast.success(
        "Lead deleted successfully"
      );

      queryClient.invalidateQueries({
        queryKey: ["leads"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error.response?.data?.message ||
          "Failed to delete lead"
      );
    },
  });

  return {
    query,
    createMutation,
    updateMutation,
    deleteMutation,
  };
};

export default useLeads;