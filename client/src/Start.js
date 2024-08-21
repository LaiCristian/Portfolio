/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function genRandonString(length) {
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}[]';
  var charLength = chars.length;
  var result = '';
  for ( var i = 0; i < length; i++ ) {
     result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}

const Start = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  function playSound(path) {
    const audio = new Audio(path);
    audio.play();
  }
  const handleStartGameClick = () => {
    playSound("/Sounds/start-replay.mp3");
    const userId = genRandonString(24);
    localStorage.setItem('username', userId);
    setToken(userId);
    setTimeout(()=>{
      navigate(`/main/0?token=${userId}`);
    }, 200) 
  };

  return (
    <div className="bkgr">
      <div className="btn" onClick={handleStartGameClick}>
        <div className="btn_txt">Start</div>
      </div>
      {/* <video className="video" id="close_curt">
        <source src="/Img/close_curt.webm" type="video/webm" />
      </video> */}
    </div>
  );
}

export default Start;










// export function Start({ onPlayVid }) {
//     const [videoPlayed, setVideoPlayed] = useState(false);
//     const playVid = () => {
//         const video2 = document.querySelector(".video");
//         video2.classList.add("active");
//         const video = document.getElementById('close_curt');
//         video.play();
//         setVideoPlayed(true);
//         onPlayVid();
//       };
//   return (
//     <div className="bkgr">
//       <div className="btn" onClick={playVid}>
//         <div className="btn_txt">Start</div>
//       </div>
//       <video className="video" id="close_curt">
//         <source src="/Img/close_curt.webm" type="video/webm" />
//       </video>
//     </div>
//   );
// }