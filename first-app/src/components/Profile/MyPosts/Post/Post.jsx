import classes from './Post.module.css';

const Post = (props) =>{
  return ( 
          <div className = {classes.item}>
             <img src = 'https://miro.medium.com/fit/c/256/256/1*CKZ5ixjxTF3vuzsXV1Utkw.png'></img>  
             {props.message}   
             <div>
              <span>Like</span> {props.likes}
             </div>       
          </div> 
  ) 
}

export default Post