import * as S from './styledPlaylistTitle'

function PlaylistTitle() {
  return (
    <S.playlistTitle>
      <S.playlistTitleCol01>Трек</S.playlistTitleCol01>
      <S.playlistTitleCol02>ИСПОЛНИТЕЛЬ</S.playlistTitleCol02>
      <S.playlistTitleCol03>АЛЬБОМ</S.playlistTitleCol03>
      <S.playlistTitleCol04>
        <S.playlistTitleSvg alt="time" />
      </S.playlistTitleCol04>
    </S.playlistTitle>
  )
}

export default PlaylistTitle
