import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () =>{
  return (
    <div className = {classes.content}>
        <img src = "https://cloud.pulse19.ru/uploads/2020/05/dhxh3box4aa1qyo.jpg"/>
        <div>ava+description</div>
        
        <MyPosts />
      </div>
  ) 
}

export default Profile