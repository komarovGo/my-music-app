/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-extraneous-dependencies */
import { useParams } from 'react-router-dom'
import Nav from '../../components/menuNav/MenuNav'
import Bar from '../../components/Bar/Bar'
import * as S from './styledPlaylist'
import CenterBlock from '../../components/centerBlock/CenterBlock'
import SideBarPlaylist from '../../components/sideBar/sideBarPlaylist'
import { useGetPlaylistsQuery } from '../../api/api'

function Playlist() {
  const params = useParams()
  const { data } = useGetPlaylistsQuery()
  const plTitles = [
    { id: 1, name: 'Плейлист дня ' },
    { id: 2, name: '100 танцевальных хитов' },
    { id: 3, name: 'Инди заряд' },
  ]

  const PL = data.find((p) => p.id === Number(params.id))
  const title = plTitles.find((p) => p.id === Number(params.id)).name
  console.log(title)
  return (
    <S.container>
      <S.main>
        <Nav />
        <CenterBlock title={title} tracks={PL.items} />
        <SideBarPlaylist />
      </S.main>
      <Bar />
    </S.container>
  )
}

export default Playlist
