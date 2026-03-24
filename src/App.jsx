import { Route, Routes } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Login from "./Component/Login"
import NotFound from "./Component/NotFound";
import AdminDashboard from "./Component/AdminDashboard";
import Registration from "./Component/Registration";
import ProtectRoute from "./Component/ProtectRoute";
import CompleteLawyerProfile from "./Component/CompleteLawyerProfile";
import ClientPortal from "./Component/ClientPortal";
import LawyerDashboard from "./Component/LawyerDashboard";


function App() {
  


  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/registration" element={<Registration />}/>
        <Route path="/completeProfile" element={<CompleteLawyerProfile />}/>
        <Route path="/admin-dashboard" element={<ProtectRoute><AdminDashboard /></ProtectRoute>}/>  
        <Route path="/client-dashboard" element={<ProtectRoute><ClientPortal /></ProtectRoute>}/>  
        <Route path="/lawyer-dashboard" element={<ProtectRoute><LawyerDashboard /></ProtectRoute>}/>  
        <Route path="*" element={<NotFound />}/>
      </Routes>      
    </>
  )
}

export default App
