import React from 'react';
import {Route} from 'react-router-dom'
import styles from './Content.module.css';
import Profile from './Profile/Profile';
import Messages from './Messages/Messages';

function Content() {
  return (
    <main className={styles.Block}>
      <Route exact path='/profile'
             render={(props) => <Profile {...props} wallpaperUrl={'https://mcdn.wallpapersafari.com/medium/90/73/Wnv15y.jpg'} />}/>
      <Route exact path='/messages' component={Messages}/>
    </main>
  );
}

export default Content;