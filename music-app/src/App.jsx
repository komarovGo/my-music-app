import styled, {createGlobalStyle} from "styled-components"

import AppRoutes from './routes';

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

@font-face {
  font-family: 'StratosSkyeng';
  src: local('StratosSkyeng'), local('StratosSkyeng'),
    url('./fonts/StratosSkyeng.woff2') format('woff2'),
    url('./fonts/StratosSkyeng.woff') format('woff'),
  font-weight: 400;
  font-style: normal;
}


html,
body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #ffffff;
}
`

const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #383838;
`

function App() {
  return (
    <Wrapper>
      <GlibalStyle/>
        <AppRoutes/>     
    </Wrapper>
  )
} 

export default App;
