import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory as history } from "history";
import SignInComponent from './Containers/SignInComponent';
import RegisterComponent from './Containers/RegisterComponent';
import DashboardComponent from './Containers/DashboardComponent';

const token= localStorage.getItem('token')

function App() {
  return (
    <Router history={history}>
      <div>
        <Routes>
          <Route exact path="/" element={<SignInComponent />} />
          <Route exact path="/register" element={<RegisterComponent />} />
          {token && <Route exact path="/dashboard" element={<DashboardComponent />} /> }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
