import './App.css';
import MenuNav from './jsx/MenuNav';
import CentrBlock from './jsx/centrBlock';
import MenuSidebar from './jsx/MenuSidebar';
import Bar from './jsx/bar';



function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <main className="main">
          <MenuNav/>
          <CentrBlock/>
          <MenuSidebar/>
        </main>
        <Bar/>
        <footer className="footer"/>
      </div>
    </div>
  );
}

export default App;
