import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";


function App(props) {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navigation/>
      <Content data={props}/>
    </div>
  );
}

export default App;
