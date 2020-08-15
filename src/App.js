import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserCheck from "./components/util/userCheck";
import Header from "./components/header";
import Hero from "./components/hero";
import Login from "./components/login";
import Register from "./components/register";
import MainWrapper from "./components/main";
import ProtectedRoute from "./components/util/protectedRoute";
import RedirectIfLogin from "./components/util/redirectIfLoggedIn";
import NotfoundPage from './components/notFoundPage'

function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className="App">
          <UserCheck>
            <Header></Header>
            <Switch>
              <Route exact path="/" component={Hero}></Route>
              <ProtectedRoute exact path="/login" component={Login} />
              <ProtectedRoute exact path="/register" component={Register} />
              <RedirectIfLogin exact path="/app" component={MainWrapper} />
              <Route component={NotfoundPage} />
            </Switch>
          </UserCheck>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
