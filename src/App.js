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
      <Content
        state={props.state}
        addPost={props.addPost}
        addMessage={props.addMessage}
        updateNewPostText={props.updateNewPostText}
        updateNewMessage={props.updateNewMessage}
      />
    </div>
  );
}

export default App;
