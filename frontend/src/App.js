import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory as history } from "history";
import SignInComponent from './Containers/SignInComponent';
import RegisterComponent from './Containers/RegisterComponent';
import WorkComponent from './Containers/Components/WorkComponent';
import WithDashboard from './Containers/Nav/WithDashboard';
import WithoutDashboard from './Containers/Nav/WithoutDashboard';
import ProfileComponent from './Containers/Components/ProfileComponent';
import ProtectedRoute from './Containers/Nav/ProtectedRoute';
import CalendarComponent from './Containers/Components/CalendarComponent';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
