import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
    <Dislike />
     
    </div>
  );
}

function Dislike(){
  const [dislike,setDislike] = useState(0);

  return(
    <div className="App">
    <button onClick={()=>{
      setDislike(dislike + 1);
    }}>👎{dislike}</button>
  </div>
  );
}
export default App;
