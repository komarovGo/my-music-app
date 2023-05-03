/* eslint-disable react/jsx-no-constructed-context-values */
import Nav from '../../components/menuNav/MenuNav'
import CenterBlock from '../../components/centerBlock/CenterBlock'
import Sidebar from '../../components/sideBar/sideBar'
import Bar from '../../components/Bar/Bar'
import * as S from './styledMain'

function Main() {
  return (
    <S.container>
      <S.main>
        <Nav />
        <CenterBlock title="Треки" />
        <Sidebar />
      </S.main>
      <Bar />
    </S.container>
  )
}

export default Main
