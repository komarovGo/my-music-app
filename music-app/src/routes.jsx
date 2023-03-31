import { Routes, Route} from "react-router-dom"

import Cookies from 'js-cookie'

import MainPiges from './pages/mainPagina/mainPaiges';
import Login from './pages/auctoritate/login';
import Registro from './pages/auctoritate/registro';
import PlaylistDay from './pages/playlistDay/playlistDay';
import DanceHit from './pages/danceHit/danceHit';
import IndiCharge from './pages/indiCharge/indiCharge';
import MyTracks from "./pages/MyTracks/MyTracks";
import NotFound from "./pages/NotFount/notFound";

import ProtectedRoute from './protected-route/index';

function AppRoutes() {
  const token = Cookies.get('token')
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/registro" element={<Registro/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route element={<ProtectedRoute isAllowed={Boolean(token)}/>}>      
        <Route path="/main" element={<MainPiges/>}/>
        <Route path="/main/mytracks" element={<MyTracks/>}/>
        <Route path="/main/plailist/1" element={<PlaylistDay/>}/>      
        <Route path="/main/plailist/2" element={<DanceHit/>}/>      
        <Route path="/main/plailist/3" element={<IndiCharge/>}/>   
      </Route>   
    </Routes>


  //   <Routes>
  //     <Route path="/" element={<Login/>}/>
  //     <Route path="/registro" element={<Registro/>}/>
  //     <Route path="*" element={<NotFound/>}/>
  //     <Route path="/main" element={<ProtectedRoute isAllowed={Boolean(token)}><MainPiges/></ProtectedRoute>}/>
  //     <Route path="/main/mytracks" element={<ProtectedRoute isAllowed={Boolean(token)}><MyTracks/></ProtectedRoute>}/>
  //     <Route path="/main/plailist/1" element={<ProtectedRoute isAllowed={Boolean(token)}><PlaylistDay/></ProtectedRoute>}/>
  //     <Route path="/main/plailist/2" element={<ProtectedRoute isAllowed={Boolean(token)}><DanceHit/></ProtectedRoute>}/>
  //     <Route path="/main/plailist/3" element={<ProtectedRoute isAllowed={Boolean(token)}><IndiCharge/></ProtectedRoute>}/>
  //   </Routes>
  )
} 

export default AppRoutes;