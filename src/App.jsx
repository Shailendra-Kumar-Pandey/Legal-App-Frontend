import Login from "./Component/Login"
import { Route, Routes } from 'react-router-dom';
import NotFound from "./Component/NotFound";
import AdminDashboard from "./Component/AdminDashboard";
import {ToastContainer} from 'react-toastify';
import Registration from "./Component/Registration";
import ProtectRoute from "./Component/ProtectRoute";
import CompleteLawyerProfile from "./Component/CompleteLawyerProfile";


function App() {

  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Login />}/>
        {/* <Route path="/adminPanel" element={<AdminPanel />}/> */}
        <Route path="/registration" element={<Registration />}/>
        <Route path="/completeProfile" element={<CompleteLawyerProfile />}/>
        <Route path="/admin-dashboard" element={
          <ProtectRoute>
            <AdminDashboard />
          </ProtectRoute>
          }/>
        <Route path="*" element={<NotFound />}/>
      </Routes>      
    </>
  )
}

export default App
