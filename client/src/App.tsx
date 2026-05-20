import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/LoginPage"
import Register from "./pages/RegisterPage"
import ProtectedRoute from "./routes/protected-route"
import DashboardLayout from "./components/layout/dashboard-layout"
import Dashboard from "./pages/DashboardPage"
import Leads from "./pages/Leads"
import { Toaster } from "react-hot-toast"
import { getCurrentUser } from "./services/auth.service";
import { useEffect } from "react"
import { useAppDispatch } from "./hooks/redux"
import { setCredentials } from "./features/auth/authSlice"
import LandingPage from "./pages/LandingPage"


function App() {

const dispatch = useAppDispatch();

useEffect(() => {
  const restoreUser = async () => {
    try {
      const response = await getCurrentUser();
      dispatch(
        setCredentials(response.data.user)
      );
    } catch (error) {
      console.log("Not authenticated");
    }
  };

  restoreUser();
}, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute />}>

            <Route element={<DashboardLayout />} >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leads" element={<Leads />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
