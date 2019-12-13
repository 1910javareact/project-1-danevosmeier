import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FNavBar from './components/nav-bar/NavBar';
import { FLoginComponent } from './components/login-component/LoginComponent';
import { UserComponent } from './components/user-component/UserComponent';

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
        <Switch>
          <Route path='/users' component={UserComponent}></Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
