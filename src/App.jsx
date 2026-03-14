import Login from "./Component/Login"
import { Route, Routes } from 'react-router-dom';
import NotFound from "./Component/NotFound";
import ClientPortal from "./Component/ClientPortal";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/clientPortal" element={<ClientPortal />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>      
    </>
  )
}

export default App
