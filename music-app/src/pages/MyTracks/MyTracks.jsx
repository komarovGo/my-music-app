import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Nav from '../../components/menuNav/MenuNav'
import Bar from '../../components/Bar/Bar'
import * as S from './styledMyTracks'
import CenterBlock from '../../components/centerBlock/CenterBlock'
import SideBarPlaylist from '../../components/sideBar/sideBarPlaylist'
import { setTracksIds } from '../../store/slises/player'
import { useGetAllTracksQuery } from '../../api/api'

function MyTracks() {
  const dispatch = useDispatch()
  const { data } = useGetAllTracksQuery('')
  const favoriteTracks =
    useSelector((state) => state.favorite.favoriteTracks) || []
  console.log(data)

  const myTracks = data?.filter((val) => favoriteTracks.includes(val.id))

  useEffect(() => {
    dispatch(setTracksIds(favoriteTracks))
  })
  return (
    <S.container>
      <S.main>
        <Nav />
        <CenterBlock title="Мои треки" tracks={myTracks} />
        <SideBarPlaylist />
      </S.main>
      <Bar />
    </S.container>
  )
}

export default MyTracks
