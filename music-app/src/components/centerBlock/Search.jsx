import * as S from './styledSearch'

function HeaderCenterBlock(props) {
  return (
    <S.header>
      <S.search>
        <S.searchSvg />
        <S.searchInput type="search" placeholder="Поиск" name="search" />
      </S.search>
      <S.h2>{props.title}</S.h2>
    </S.header>
  )
}

export default HeaderCenterBlock
