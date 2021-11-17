import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{
  return (
        <div>My posts
          <div>
            <textarea></textarea>
            <button>add</button>
          </div>        
        <div className = {classes.posts}>
          <Post message = 'Hello, i am Alex' likes = '4' />     
          <Post message = 'Как у тебя дела?' likes = '10' /> 
        </div>      
      </div>
  ) 
}

export default MyPosts