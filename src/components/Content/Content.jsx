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
               postsData={props.state.profilePage.postsData}
               newPostText={props.state.profilePage.newPostText}
               updateNewPostText={props.updateNewPostText}
               addPost={props.addPost}
             />}
      />
      <Route exact path='/messages'
             render={() => <Messages
               dialogData={props.state.messagesPage.dialogData}
               messagesData={props.state.messagesPage.messagesData}
               addMessage={props.addMessage}
               updateNewMessage={props.updateNewMessage}
             />}
      />
    </main>
  );
};

export default Content;