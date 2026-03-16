import Login from "./Component/Login"
import { Route, Routes } from 'react-router-dom';
import NotFound from "./Component/NotFound";
import AdminPanel from "./Component/AdminPanel";
import {ToastContainer} from 'react-toastify';
import Registration from "./Component/Registration";


function App() {

  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/adminPanel" element={<AdminPanel />}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>      
    </>
  )
}

export default App
