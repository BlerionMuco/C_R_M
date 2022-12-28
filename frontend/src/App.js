import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory as history } from "history";
import SignInComponent from './Containers/SignInComponent';

function App() {
  return (
    <Router history={history}>
      <div>
        <Routes>
          <Route exact path="/" element={<SignInComponent />} />
          {/* <Route exact path="/signUp" element={<SignUp />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
