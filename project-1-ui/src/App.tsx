import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/nav-bar/NavBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <NavBar />
        </nav>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
