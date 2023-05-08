/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLink from './MenuNavLink'
import logo from '../../img/logo.png'
import * as S from './styledMenuNav'
import { useContextTheme, themes } from '../../context/ContextTheme'
import { SwitcherTheme } from '../../context/switcherTheme'
import LogoBlack from '../technicalComps/logoBlack'

function Nav() {
  const theme = useContextTheme()

  const [visible, setVisible] = useState(true)

  const toggleVisibility = () => setVisible(!visible)

  return (
    <S.nav
      style={{
        backgroundColor: theme.theme.colorNav,
        color: theme.theme.color,
      }}
    >
      <Link to="/">
        <S.logo>
          {themes.dark === useContextTheme().theme ? (
            <S.logoImage src={logo} alt="logo" />
          ) : (
            <LogoBlack style={{ width: '113.33px', height: '17px' }} />
          )}
        </S.logo>
      </Link>
      <S.burger onClick={toggleVisibility} role="presentation">
        <S.burgerLine
          style={{
            backgroundColor: theme.theme.color,
          }}
        />
        <S.burgerLine
          style={{
            backgroundColor: theme.theme.color,
          }}
        />
        <S.burgerLine
          style={{
            backgroundColor: theme.theme.color,
          }}
        />
      </S.burger>
      <S.menu>
        {!visible && (
          <S.menuList>
            <S.menuItem>
              <NavLink address="/" text="Главное" />
            </S.menuItem>
            <S.menuItem>  
              <NavLink address="/mytracks" text="Мои треки" />
            </S.menuItem>
            <S.menuItem>
              <NavLink address="/login" text="Войти" />
            </S.menuItem>
            <SwitcherTheme />
          </S.menuList>
        )}
      </S.menu>
    </S.nav>
  )
}

export default Nav
