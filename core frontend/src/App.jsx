import { Route, Routes } from "react-router-dom"
import Login from "./Component/Login"
import NotFound from "./Component/NotFound"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
