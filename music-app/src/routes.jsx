/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Main from './pages/main/main'
import Registration from './pages/registration/registration'
import NotFound from './pages/notFound/notFound'
import Login from './pages/login/login'
import Playlist01 from './pages/playlists/playlist'
import MyTracks from './pages/myTracks/MyTracks'
import ProtectedRoute from './protected-route/ProtectedRoute'
import LayoutBar from './components/Layout/LayoutBar'

export function AppRoutes() {

  const isLogin = useSelector((state) => state.auth.isLogin)

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />

      <Route element={<ProtectedRoute isLogin={isLogin} />}>
        <Route path="/" element={<LayoutBar />} >
          <Route index element={<Main />} />
          <Route path="mytracks" element={<MyTracks />} />
          <Route path="playlist/:id" element={<Playlist01 />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}