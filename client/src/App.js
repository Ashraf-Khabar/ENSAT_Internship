import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import MainNavBar from "./components/MainNavBar";

function App() {
  return (
      <BrowserRouter>
        <MainNavBar/>
        <Switch>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/dashboard">
            <Navbar/>
            <Dashboard/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;