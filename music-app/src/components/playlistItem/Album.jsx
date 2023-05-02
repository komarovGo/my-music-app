import * as S from './styledAlbum'

function Album(props) {
  return (
    <S.album>
      <S.albumLink href="http://">{props.name}</S.albumLink>
    </S.album>
  )
}

export default Album
