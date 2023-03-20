import { Routes, Route} from "react-router-dom"
import MainPiges from './pages/mainPagina/mainPaiges';
import Login from './pages/auctoritate/login';
import Registro from './pages/auctoritate/registro';
import PlaylistDay from './pages/playlistDay/playlistDay';
import DanceHit from './pages/danceHit/danceHit';
import IndiCharge from './pages/indiCharge/indiCharge';
import MyTracks from "./pages/MyTracks/MyTracks";

// import ProtectedRoute from './protected-route/index';


function AppRoutes() {
  return (
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/main" element={<MainPiges/>}/>      
          <Route path="/main/mytracks" element={<MyTracks/>}/>
          <Route path="/main/plailist/1" element={<PlaylistDay/>}/>      
          <Route path="/main/plailist/2" element={<DanceHit/>}/>      
          <Route path="/main/plailist/3" element={<IndiCharge/>}/>      
        </Routes>
  )
} 

export default AppRoutes;