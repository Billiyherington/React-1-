
import './App.css';
import Flower from "./img/image (37).png"
import Person from "./img/Street Life Standing.png"
import Vector from "./img/Vector (13).png"
import Love from "./img/love.png"
import comment from "./img/comments.png"
import camera from "./img/camera.png"
import upload from "./img/upload.png"
function App() {
  return (
    <div className="App">
      <div className="App-top">
        <img className='Street' src={Person} alt="" />

        <img className='three-dots' src={Vector} alt="" />
      </div>

      <div className='UI Card'></div>

      <img className='Flower' src={Flower} alt="" />
    <img className='Love' src= {Love} alt="" />
    <img className='Comment' src= {Comment} alt="" />
    <img className='upload' src={upload} alt="" />
    </div>


  );
}

export default App;
