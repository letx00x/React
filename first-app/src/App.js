import logo from './logo.svg';
import './App.css';

const App = () =>  {
  return (   
    <div className = 'app-wrapper'> 
      <header className = 'header'>
        <img src ="https://img2.freepng.ru/20180509/gvw/kisspng-globe-earth-clip-art-5af366a46f1587.271956161525900964455.jpg"/>
      </header>  
      <nav className = 'nav'>
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
      <div className = 'content'>
        <img src = "https://cloud.pulse19.ru/uploads/2020/05/dhxh3box4aa1qyo.jpg"/>
        <div>ava+description</div>
        <div>My posts</div>
        <div>New Post</div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div> 
    </div>   
  );
}

export default App;
