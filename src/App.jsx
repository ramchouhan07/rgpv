import Home from "../pages/Home"
import Revolution from "../pages/revolution"
import Chalange from "../pages/chalange"
import { Route, Routes } from "react-router-dom"
import Result from "../pages/RESULTPAGE"
import Header from "../pages/Header"
import Out from "../pages/out"
function App() {

  return (
    <>
     <Header />
  
  <Routes>
    <Route  path="/" element={[<Home />,
  <Revolution />,
  <Chalange />]} />
    <Route path="/out" element={<Out/>} />
  
    <Route path="/new-page" element={<Result />} />
  </Routes>
   </>
  
)
}
export default App
