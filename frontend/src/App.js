import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory as history } from "history";
import SignInComponent from './Containers/SignInComponent';
import RegisterComponent from './Containers/RegisterComponent';
import WorkComponent from './Containers/Components/Work/WorkComponent';
import WithDashboard from './Containers/Nav/WithDashboard';
import WithoutDashboard from './Containers/Nav/WithoutDashboard';
import ProfileComponent from './Containers/Components/Profile/ProfileComponent';
import ProtectedRoute from './Containers/Nav/ProtectedRoute';
import CalendarComponent from './Containers/Components/Calendar/CalendarComponent';
import ManageUsersComponent from './Containers/Components/Admin/ManageUsersComponent';
import ManageWorkDayComponent from './Containers/Components/Admin/ManageWorkDayComponent';
import CreateUserComponent from './Containers/Components/Admin/CreateUserComponent';

function App() {
  return (
    <Router history={history}>
      <div>
        <Routes>
          <Route element={<WithoutDashboard />} >
            <Route exact path="/" element={<SignInComponent />} />
          </Route>
          <Route element={<WithoutDashboard />} >
            <Route path="/register" element={<RegisterComponent />} />
          </Route>
          <Route element={<WithDashboard component={<WorkComponent />} />} >
            <Route path="/work" element={<ProtectedRoute path="/work" component={<WorkComponent />} />} />
          </Route>
          <Route element={<WithDashboard component={<ProfileComponent />} />} >
            <Route path="/profile" element={<ProtectedRoute path="/profile" component={<ProfileComponent />} />} />
          </Route>
          <Route element={<WithDashboard component={<CalendarComponent />} />} >
            <Route path="/calendar" element={<ProtectedRoute path="/calendar" component={<CalendarComponent />} />} />
          </Route>
          <Route element={<WithDashboard component={<ManageUsersComponent />} />} >
            <Route path="/userManagment" element={<ProtectedRoute path="/userManagment" component={<ManageUsersComponent />} />} />
          </Route>
          <Route element={<WithDashboard component={<ManageWorkDayComponent />} />} >
            <Route path="/manageWorkDay" element={<ProtectedRoute path="/manageWorkDay" component={<ManageWorkDayComponent />} />} />
          </Route>
          <Route element={<WithDashboard component={<CreateUserComponent />} />} >
            <Route path="/createUser" element={<ProtectedRoute path="/createUser" component={<CreateUserComponent />} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
