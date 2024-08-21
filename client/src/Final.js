/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Final = () => {
  const navigate = useNavigate();

  const handleStartGameClick = () => {
    navigate(`/`);
  };

  return (
    <div className="bkgr4">
        <div className='feliz' id='mob'>Congratulations</div>
        <div className='feliz2'>You have won: {localStorage.getItem("stageValue")}$</div>
        <div className="btn" onClick={handleStartGameClick}>
            <div className="btn_txt">Play Again</div>
        </div>
    </div>
  );
}

export default Final;