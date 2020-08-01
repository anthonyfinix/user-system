import React from 'react';
import './App.css';
import Header from "./components/header";
import MainWrapper from "./components/main";
import { RecoilRoot } from 'recoil';


function App() {
  
  return (
    <RecoilRoot>
      <div className="App">
        <Header></Header>
        <MainWrapper></MainWrapper>
      </div>
    </RecoilRoot>
  );
}

export default App;
