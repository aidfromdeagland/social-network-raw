import React from 'react';
import styles from './Profile.module.css';
import Post from "./Post/Post";

const Profile = (props) => {
  return (
    <div className={styles.Block}>
      <img className={styles.Wallpaper} src={props.wallpaperUrl} alt='Profile wallpaper'/>
      <div className={styles.Profile}>
        <img className={styles.Avatar} src='https://svgsilh.com/svg/1633249.svg' alt='Profile avatar'/>
        <span className={styles.Name}>My name</span>
        <div className={styles.Posts}>
          <div className={styles.AddPost}>
            <textarea placeholder='Type new post here'></textarea>
            <button>Add post</button>
          </div>
          <div className={styles.Wall}>
            <Post name='Billy Bob' date='Just now' content='You are hired!' likesCount='12'
                  avatarUrl='https://svgsilh.com/svg/1633249.svg'/>
            <Post name='John Wayne' date='Two hours ago' content='Make juniors great again!' likesCount='187'
                  avatarUrl='https://svgsilh.com/svg/1633249.svg'/>
            <Post name='Big Lebovsky' date='Yesterday, at 9 p.m.' content='Go home!' likesCount='8'
                  avatarUrl='https://svgsilh.com/svg/1633249.svg'/>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Profile;