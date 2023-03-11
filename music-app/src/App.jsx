import {createGlobalStyle} from "styled-components"

import MenuNav from './jsx/menuNav/MenuNav';
import CentrBlock from './jsx/CentrBlock/centrBlock';
import MenuSidebar from './jsx/menuSidebar/MenuSidebar';
import Bar from './jsx/Bar/barMain';


import * as S from './stylegApp'

const GlibalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
    :before{
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    :after {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
}

a{
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
    :visited {
      text-decoration: none;
      font-family: 'StratosSkyeng', sans-serif;
      cursor: pointer;
  }
}

body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #FFFFFF;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul li {
  list-style: none;
}

html{
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #FFFFFF;
}

body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #FFFFFF;
}


@font-face {
  font-family: 'StratosSkyeng';
  src: local("StratosSkyeng"), local("StratosSkyeng"), url("./fonts/Stratos-Regular.woff2") format("woff2"), url("./fonts/Stratos-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}
`

function App() {
  return (
    <S.wrapper>
      <GlibalStyle/>
      <S.container>
        <S.main>
          <MenuNav/>
          <CentrBlock/>
          <MenuSidebar/>
        </S.main>
        <Bar/>
        <footer className="footer"/>
      </S.container>
    </S.wrapper>
  );
}

export default App;
