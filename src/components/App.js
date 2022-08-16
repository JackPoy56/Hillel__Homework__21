import './App.css';

import MainContent from './MainContent/MainContent';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';

function App() {
  const headerText = 'HEADER';
  const mainContentText = 'Main Content';

  return (
    <div className="App">
      <Header className="header" text={headerText}/>
      <div className="container">
        <Navigation className="nav"/>
        <MainContent className="mainContent" text={mainContentText}/>
       
      </div>
    </div>
  );
}

export default App;