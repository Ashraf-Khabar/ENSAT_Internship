import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import MainNavBar from "./components/MainNavBar";
import './App.css';
import Page_404 from "./components/Page_404";
import Home from "./components/Home";

function App() {
  return (
      <Router>
          <div className="App">
              <div className="relative h-screen overflow-hidden bg-indigo-900 opacity-93">
                  <Switch>
                      <Route exact path="/">
                          <MainNavBar/>
                          <Home/>
                      </Route>
                      <Route path="/login">
                          <MainNavBar/>
                          <Login/>
                      </Route>
                      <Route path="/register">
                          <MainNavBar/>
                          <Register/>
                      </Route>
                      <Route path="/dashboard">
                          <Navbar/>
                          <Dashboard/>
                      </Route>
                      <Route path="*">
                          <MainNavBar/>
                          <Page_404/>
                      </Route>
                  </Switch>
              </div>
          </div>
      </Router>
  );
}

export default App;