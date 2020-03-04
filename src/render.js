import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage, addPost} from "./state";

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        addMessage={addMessage}
      />
    </BrowserRouter>, document.getElementById('root')
  )
};