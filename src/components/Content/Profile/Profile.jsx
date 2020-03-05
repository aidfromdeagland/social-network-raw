import React from 'react';
import styles from './Profile.module.css';
import Post from "./Post/Post";

const Profile = (props) => {
  let posts = props.postsData.map(p => <Post key={p.id} id={p.id} name={p.name} date={p.date} content={p.content}
                                             likesCount={p.likesCount} avatarUrl={p.avatarUrl}/>);

  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let newPost = newPostElement.current.value;
    props.updateNewPostText(newPost);
  };

  return (
    <div className={styles.Block}>
      <img className={styles.Wallpaper} src={props.wallpaperUrl} alt='Profile wallpaper'/>
      <div className={styles.Profile}>
        <img className={styles.Avatar} src='https://svgsilh.com/svg/1633249.svg' alt='Profile avatar'/>
        <span className={styles.Name}>My name</span>
        <div className={styles.Posts}>
          <div className={styles.AddPost}>
            <textarea className={styles.NewPostTextarea} ref={newPostElement} placeholder='Type new post here'
                      value={props.newPostText} onChange={onPostChange}/>
            <button className={styles.NewPostSend} onClick={addPost}>Add post</button>
          </div>
          {posts}
          <div className={styles.Wall}>

          </div>
        </div>
      </div>


    </div>
  );
};

export default Profile;