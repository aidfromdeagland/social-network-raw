import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";


function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navigation/>
        <Content data={props} />
      </div>
    </BrowserRouter>
  );
}

export default App;
