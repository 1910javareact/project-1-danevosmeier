import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FNavBar from './components/nav-bar/NavBar';
import FLoginComponent from './components/login-component/Login-Container';
import { Provider } from 'react-redux'
import { store } from './Store';
import UserDisplayComponent from './components/users-display/UsersDisplayContainer'
import ReimbursementDisplayComponent from './components/reimbursement-display/ReimbursementDisplayContainer'


const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <nav>
            <FNavBar />
          </nav>

          <Switch>
            <Route path='/login' component={FLoginComponent}></Route>
            <Route path='/users/display' component={UserDisplayComponent}></Route>
            <Route path='/reimbursements' component={ReimbursementDisplayComponent}></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
