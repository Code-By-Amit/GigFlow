export interface User {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "sales";
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}