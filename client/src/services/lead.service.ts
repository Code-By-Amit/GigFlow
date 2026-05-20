import api from "../api/axios";

export const getLeadStats = async () => {
    const response = await api.get("/leads/stats");
    return response.data;
};

export const getLeads = async (params: Record<string, string>) => {
  const response = await api.get("/leads",{ params,});
  return response.data;
};

export const createLead = async (data: unknown ) => {
  const response = await api.post("/leads", data);
  return response.data;
};

export const updateLead = async ( id: string, data: unknown) => {
  const response = await api.put(`/leads/${id}`,data);
  return response.data;
};

export const deleteLead = async (id: string) => {
  const response = await api.delete( `/leads/${id}`);
  return response.data;
};