import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import FNavBar from './components/nav-bar/NavBar'
import LoginComponent from './components/login-component/LoginContainer';
import { Provider } from 'react-redux';
import { store } from './Store';
import UserComponent from './components/user-component/UserContainer';
import ReimbursementInfoComponent from './components/reimbursement-component/ReimbursementInfoContainer';
import AllUsersComponent from './components/user-component/AllUsersContainer';
import UserByIdComponent from './components/user-component/UserByIdContainer';
import ReimbursementByStatusIdComponent from './components/reimbursement-component/ReimbursementByStatusIdContainer';
import ReimbursementByUserIdComponent from './components/reimbursement-component/ReimbursementByUserIdContainer';
import { UpdateUserComponent } from './components/user-component/UpdateUserComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <nav>
            <FNavBar />
          </nav>
          <Switch>
            <Route path='/users' component={AllUsersComponent} />
            <Route path='/user' component={UserComponent} />
            <Route path='/usersbyid' component={UserByIdComponent} />
            <Route path='updateuser' component={UpdateUserComponent} />
            <Route path='/reimbursement/status' component={ReimbursementByStatusIdComponent} />
            <Route path='/reimbursement/user' component={ReimbursementByUserIdComponent} />
            <Route path='/reimbursement' component={ReimbursementInfoComponent} />
            <Route path='/login' component={LoginComponent} />
            <Route path='/'>
              <LoginComponent />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
