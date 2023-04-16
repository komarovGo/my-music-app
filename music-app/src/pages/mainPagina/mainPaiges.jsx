import { useState}  from "react";
import { ThemeContext, themes } from '../../context/theme';
/* eslint-disable no-param-reassign */

import MenuNav from '../../components/menuNav/MenuNav';
import CentrBlock from '../../components/CentrBlock/centrBlock';
import MenuSidebar from '../../components/menuSidebar/MenuSidebar';
import Bar from '../../components/Bar/barMain';

import * as S from './StyledMenuPiges'


function MainPiges() {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);
  const [IsDark, setIsDark] = useState(true);

  function toggleTheme ()  {
    if (currentTheme === themes.dark) {
    setCurrentTheme(themes.light);
    setIsDark(false)
    return;
    }

    setCurrentTheme(themes.dark);
    setIsDark(true)
  };

  return (  
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme, IsDark }}>
      <S.Container >
          <S.Main>
            <MenuNav/>
            <CentrBlock/>
            <MenuSidebar/>
          </S.Main>
          <Bar/>
          <footer className="footer"/>
    </S.Container>
   </ThemeContext.Provider>    
  )
}

export default MainPiges;
