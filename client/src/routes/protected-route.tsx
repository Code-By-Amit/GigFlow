import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import Loader from "../components/Loading";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);


  if (isLoading) {
  return <Loader />;
}

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;