import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FNavBar from './components/nav-bar/NavBar';
import { FLoginComponent } from './components/login-component/LoginComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <FNavBar />
        </nav>

        <Switch>
          <Route path='/login' component={FLoginComponent}></Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
