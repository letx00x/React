import classes from './ProfileInfo.module.css';

const ProfileInfo = () =>{
  return (
    <div>
    <div>  
      <img src = "https://cloud.pulse19.ru/uploads/2020/05/dhxh3box4aa1qyo.jpg"/>
      <div className = {classes.descriptionBlock}>ava+description</div>
    </div>
    </div>
  ) 
}

export default ProfileInfo