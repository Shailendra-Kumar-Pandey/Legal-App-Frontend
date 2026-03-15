import Login from "./Component/Login"
import { Route, Routes } from 'react-router-dom';
import NotFound from "./Component/NotFound";
import AdminPanel from "./Component/AdminPanel";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/adminPanel" element={<AdminPanel />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>      
    </>
  )
}

export default App
