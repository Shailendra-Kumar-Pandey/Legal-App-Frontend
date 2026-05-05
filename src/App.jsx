import { lazy, Suspense } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Login from "./Component/Login"
import NotFound from "./Component/NotFound";
import Registration from "./Component/Registration";
import ProtectRoute from "./Component/ProtectRoute";
import CompleteLawyerProfile from "./Component/CompleteLawyerProfile";


const LazyAdminDashboard = lazy(() => import("./Component/AdminDashboard"))
const LazyClientPortal = lazy(() => import("./Component/ClientPortal"))
const LazyLawyerDashboard = lazy(() => import("./Component/LawyerDashboard"))


function App() {
  const navigator = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem('user')
    toast.success("Logged out successfully")
    navigator('/')
  }


  return (
    <>
      <ToastContainer />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/completeProfile" element={<CompleteLawyerProfile />} />
          <Route path="/admin-dashboard" element={<ProtectRoute><LazyAdminDashboard logOutHandler={logOutHandler} /></ProtectRoute>} />
          <Route path="/client-dashboard" element={<ProtectRoute><LazyClientPortal logOutHandler={logOutHandler} /></ProtectRoute>} />
          <Route path="/lawyer-dashboard" element={<ProtectRoute><LazyLawyerDashboard logOutHandler={logOutHandler} /></ProtectRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
