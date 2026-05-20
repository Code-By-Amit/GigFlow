import api from "../api/axios";

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export const loginUser = async (data: LoginPayload) => {
  const response = await api.post( "/auth/login", data );
  return response.data;
};

export const registerUser = async (data: RegisterPayload) => {
  const response = await api.post("/auth/register",data);
  return response.data;
};

export const getCurrentUser = async () => {
    const response = await api.get("/auth/me");
    return response.data;
};