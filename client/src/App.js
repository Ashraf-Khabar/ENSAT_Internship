import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import './App.css';
import Page_404 from "./components/Page_404";
import Home from "./components/Home";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useState} from "react";
import Profile from "./components/dashboardComponents/Profile";
import Offers from "./components/dashboardComponents/Offers";
import Dashboardemp from "./components/dashboardemp";
import Myoffers from "./components/dashboardComponents/employer/Myoffers";
import Addoffer from "./components/dashboardComponents/employer/Addoffer";
function App() {
    const [userId, setUserId] = useState(null);

    /* this function is for frontend */
    const setup = () => {
        const getTheme = () => {
            if (window.localStorage.getItem('dark')) {
                return JSON.parse(window.localStorage.getItem('dark'))
            }
            return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        }

        const setTheme = (value) => {
            window.localStorage.setItem('dark', value)
        }

        return {
            loading: true,
            isDark: getTheme(),
            toggleTheme() {
                this.isDark = !this.isDark
                setTheme(this.isDark)
            },
        }
    }

  return (
      <Router>
          <div className="App">
              <ToastContainer position="top-center"/>
              <div className="relative h-screen overflow-auto bg-white opacity-93">
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
                      <Route exact path="/dashboard">
                          <Dashboard/>
                      </Route>
                      <Route path="/dashboard/profile">
                          <Profile/>
                      </Route>
                      <Route exact path="/dashboardemp">
                          <Dashboardemp/>
                      </Route>
                      <Route path="/dashboardemp/Myoffers">
                          <Myoffers/>
                      </Route>
                      <Route path="/dashboardemp/Addoffer">
                          <Addoffer/>
                      </Route>
                      <Route path="/dashboard/offers">
                          <Offers/>
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