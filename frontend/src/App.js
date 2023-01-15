import './App.css';
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

function App() {
  return (
    <Router history={history}>
      <div>
        <Routes>
          <Route element={<WithoutDashboard />} >
            <Route exact path="/" element={<SignInComponent />} />
          </Route>
          <Route element={<WithoutDashboard />} >
            <Route exact path="/register" element={<RegisterComponent />} />
          </Route>
          <Route element={<WithDashboard component={<WorkComponent />} />} >
            <Route exact path="/work" element={<ProtectedRoute path="/work" component={<WorkComponent />} />} />
          </Route>
          <Route element={<WithDashboard component={<ProfileComponent />} />} >
            <Route exact path="/profile" element={<ProtectedRoute path="/profile" component={<ProfileComponent />} />} />
          </Route>
          <Route element={<WithDashboard component={<CalendarComponent />} />} >
            <Route exact path="/calendar" element={<ProtectedRoute path="/calendar" component={<CalendarComponent />} />} />
          </Route>
          <Route element={<WithDashboard component={<ManageUsersComponent />} />} >
            <Route exact path="/userManagment" element={<ProtectedRoute path="/userManagment" component={<ManageUsersComponent />} />} />
          </Route>
          <Route element={<WithDashboard component={<ManageWorkDayComponent />} />} >
            <Route exact path="/manageWorkDay" element={<ProtectedRoute path="/manageWorkDay" component={<ManageWorkDayComponent />} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
