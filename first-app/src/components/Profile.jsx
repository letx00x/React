import classes from './Profile.module.css';

const Profile = () =>{
  return (
    <div className = {classes.content}>
        <img src = "https://cloud.pulse19.ru/uploads/2020/05/dhxh3box4aa1qyo.jpg"/>
        <div>ava+description</div>
        <div>My posts
          <div>
            New Post
          </div>
        </div>
        <div className = {classes.posts}>
          <div className = {classes.item}>Post 1</div>
          <div className = {classes.item}>Post 2</div>
        </div>
      </div>
  ) 
}

export default Profile