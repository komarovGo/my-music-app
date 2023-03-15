import { Routes, Route} from "react-router-dom"
import MainPiges from './pages/mainPagina/mainPaiges';
import Login from './pages/auctoritate/login';
import Registro from './pages/auctoritate/registro';


function AppRoutes() {
  return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/" element={<MainPiges/>}/>
        </Routes>
  )
} 

export default AppRoutes;