import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{

  let posts = [
    {id:1, post: 'Hello, i am Alex', likesCount: 4},
    {id:2, post: 'Как у тебя дела?', likesCount: 14}
  ]

  let postsElements = posts.map(p => <Post message = {p.id} post = {p.post} likes = {p.likesCount}/>)

  return (
        <div className = {classes.postsBlock}><h3>My posts</h3>
          <div>
            <div>
              <textarea></textarea>
            </div>  
            <div>
            <button>add</button>
            </div>
          </div>        
        <div className = {classes.posts}>
          {postsElements}
        </div>      
      </div>
  ) 
}

export default MyPosts