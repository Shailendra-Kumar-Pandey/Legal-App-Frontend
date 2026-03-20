import Login from "./Component/Login"
import { Route, Routes } from 'react-router-dom';
import NotFound from "./Component/NotFound";
import AdminPanel from "./Component/AdminPanel";
import {ToastContainer} from 'react-toastify';
import Registration from "./Component/Registration";
import Profile from "./Component/Profile";
import Protect from "./Component/Protect";


function App() {

  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/adminPanel" element={<AdminPanel />}/>
        <Route path="/registration" element={<Registration />}/>
        <Route path="/profile" element={
          <Protect>
            <Profile/>
          </Protect>
          }/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>      
    </>
  )
}

export default App
