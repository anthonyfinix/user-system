import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import Header from "./components/header";
import Hero from "./components/hero";
import Login from "./components/login";
import Register from "./components/register";
import MainWrapper from "./components/main";
import ProtectedRoute from './components/util/protectedRoute';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <RecoilRoot>
        <div className="App">
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Hero}></Route>
            <ProtectedRoute exact path="/login" component={Login}></ProtectedRoute>
            <ProtectedRoute exact path="/register" component={Register}></ProtectedRoute>
            <Route exact path="/app" component={MainWrapper}></Route>
          </Switch>
        </div>
      </RecoilRoot>
    </Router>
  );
}

export default App;
