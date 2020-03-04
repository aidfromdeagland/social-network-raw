import React from 'react';
import {Route} from 'react-router-dom'
import styles from './Content.module.css';
import Profile from './Profile/Profile';
import Messages from './Messages/Messages';

const Content = (props) => {
  return (
    <main className={styles.Block}>
      <Route exact path='/profile'
             render={() => <Profile
               wallpaperUrl={'https://mcdn.wallpapersafari.com/medium/90/73/Wnv15y.jpg'}
               postsData={props.data.state.postsData}
               addPost={props.data.addPost}
             />}
      />
      <Route exact path='/messages'
             render={() => <Messages
               dialogData={props.data.state.dialogData}
               messagesData={props.data.state.messagesData}
               addMessage={props.data.addMessage}/>}/>
    </main>
  );
};

export default Content;