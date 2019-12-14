import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FNavBar from './components/nav-bar/NavBar';
import { FLoginComponent } from './components/login-component/LoginComponent';
import {Provider} from 'react-redux'
import { store } from './Store';
import UserDisplayComponent from './components/users-display/UsersDisplayContainer'

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store ={store}>
      <BrowserRouter>
        <nav>
          <FNavBar />
        </nav>

        <Switch>
          <Route path='/login' component={FLoginComponent}></Route>
        </Switch>
        <Switch>
          <Route path='/users/display' component={UserDisplayComponent}></Route>
        </Switch>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
