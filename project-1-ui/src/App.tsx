import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import FNavBar from './components/nav-bar/NavBar'
import LoginComponent from './components/login-component/LoginContainer';
import { Provider } from 'react-redux';
import { store } from './Store';
import AllUsersComponent from './components/user-component/AllUsersContainer';
import UserByIdComponent from './components/user-component/UserByIdContainer';
import ReimbursementByStatusIdComponent from './components/reimbursement-component/ReimbursementByStatusIdContainer';
import ReimbursementByUserIdComponent from './components/reimbursement-component/ReimbursementByUserIdContainer';
import { UpdateUserComponent } from './components/user-component/UpdateUserComponent';
import {ReimbursementUpdateComponent} from './components/reimbursement-component/ReimbursementUpdateComponent'
import {NewReimbursementComponent} from './components/reimbursement-component/NewReimbursementComponent'


const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <nav>
            <FNavBar />
          </nav>
          <Switch>
            <Route path='/usersbyid' component={UserByIdComponent} />
            <Route path='/usersupdate' component={UpdateUserComponent} />
            <Route path='/users' component={AllUsersComponent} />
            <Route path='/reimbursement/update' component={ReimbursementUpdateComponent} />
            <Route path='/reimbursement/status' component={ReimbursementByStatusIdComponent} />
            <Route path='/reimbursement/user' component={ReimbursementByUserIdComponent} />
            <Route path='/reimbursement/new' component={NewReimbursementComponent} />
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
