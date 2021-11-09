import logo from './logo.svg';
import './App.css';

function App() {
  return (   
    <div> 
      <Header />
      <Technologies />
    </div>   
  );
}

function Header() {
  return(
    <h1>Header</h1>
  )
}

function Technologies(){
  return(
    <div>
        <ul>
          <li>Node</li>
          <li>React</li>
          <li>Angular</li>
          <li>HTML</li>
        </ul>
      </div>
  )
}

export default App;
