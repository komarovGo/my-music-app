import * as S from './styledLogoBlack'
import logo from '../../img/logoLogin.png'
import { useContextTheme, themes } from '../../context/ContextTheme'

function LogoBlack() {
  return (
    <S.logo>
      {themes.dark === useContextTheme().theme ? (
        <S.logoImg src={logo} alt="logo" />
      ) : (
        <S.logoImg
          src={logo}
          alt="logo"
          style={{ width: '113.33px', height: '17px' }}
        />
      )}
    </S.logo>
  )
}

export default LogoBlack
