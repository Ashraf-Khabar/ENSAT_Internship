import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import MainNavBar from "./components/MainNavBar";
import './App.css';
import Page_404 from "./components/Page_404";
import Home from "./components/Home";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useState} from "react";

function App() {
    const [userId, setUserId] = useState(null);
    
  return (
      <Router>
          <div className="App">
              <ToastContainer/>
              <div className="relative h-screen overflow-hidden bg-indigo-900 opacity-93">
                  <Navbar userId={userId} setUserId={setUserId}/>
                  <Switch>
                      <Route exact path="/">
                          <Home/>
                      </Route>
                      <Route path="/login" >
                          <Login setUserId={setUserId}/>
                      </Route>
                      <Route path="/register">
                          <Register/>
                      </Route>
                      <Route path="/dashboard">
                          <Dashboard/>
                      </Route>
                      <Route path="*">
                          <Page_404/>
                      </Route>
                  </Switch>
              </div>
          </div>
      </Router>
  );
}

export default App;