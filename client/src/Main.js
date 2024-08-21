/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Stages } from './Stages';
import { StagesMob } from './StagesMob';
import { useNavigate } from 'react-router-dom';
import { stages } from './Stages';

const Main = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [radioSymbol, setRadioSymbol] = useState([]);
  const [vote, setVote] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [curentMoney, setcurentMoney] = useState(0);
  const [savedMoney, setSavedMoney] = useState(0);
  const [id, setId] = useState([]);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [shuffledAnswers2, setShuffledAnswers2] = useState([]);
  let [stageCounter, setStageCounter] = useState(0);
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [currentWindowSize, setCurrentWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowSize = () => {
      setCurrentWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', updateWindowSize);
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  let voteWidth = 0;
  if(currentWindowSize<900){
    voteWidth = 280;
  }else{
    voteWidth = 450;
  };

  const handleQuitGameClick = () => {
    navigate("/");
  };

  function playSound(path) {
    const audio = new Audio(path);
    audio.play();
  }

  useEffect(() => {
    fetchQuestionsAndAnswers();
    // if (videoRef.current) {
    //   const video = videoRef.current;
    //   var isPlaying = video.currentTime > 0 && !video.paused && !video.ended &&
    //     video.readyState > video.HAVE_CURRENT_DATA;
    //   if (!isPlaying) {
    //     video.play();
    //   }
    //   setTimeout(() => {
    //     video.classList.add('remove');
    //   }, 2000);
    // }
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   console.log(shuffledAnswers);
  // }, [shuffledAnswers]);

  const fetchQuestionsAndAnswers = async () => {
    try {
      const username = localStorage.getItem('username');
      const response = await fetch('/home', {
        headers: {
          'Content-Type': 'application/json',
          'username': username,
          'stageCounter': stageCounter
        },
      });
      const data = await response.json();
      setQuestions(data.question);
      setId(data.question.id);
      const allOptions = [...data.question.wrong, data.question.right];
      shuffleAnswers(allOptions);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const shuffleAnswers = (allAnswers) => {
    if (allAnswers) {
      for (let i = allAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
      }
      setShuffledAnswers(allAnswers);
      setShuffledAnswers2(allAnswers);
      setRadioSymbol(Array(allAnswers.length).fill('◇'));
    }
  };

  const handleAnswerClick = (event, index) => {
    const selectedDiv = event.currentTarget;

    const answerDivs = document.querySelectorAll('.answer');
    answerDivs.forEach(div => {
      div.classList.remove('selected');
    });

    selectedDiv.classList.add('selected');
    playSound("/Sounds/click.mp3");

    const newRadioSymbols = Array(shuffledAnswers.length).fill('◇');
    newRadioSymbols[index] = '◈';
    setRadioSymbol(newRadioSymbols);

    setSelectedAnswer(shuffledAnswers[index]);
  };

  const nextstage = () =>{
    const wrapElement = document.querySelector('.wrap');
    setTimeout(()=>{
      wrapElement.classList.remove('dissapear');
      playSound("/Sounds/passed_lvl.mp3");
    }, 1000)
    const cMoney = localStorage.getItem('stageValue');
    setcurentMoney(cMoney)
  }

  const winWindow = () =>{
    setTimeout(()=>{
      navigate(`/finalmil`);
      playSound("/Sounds/win.mp3");
    }, 1000)
  }

  const nextConfirm = () =>{
    const username = localStorage.getItem('username');
    stageCounter = stageCounter+1;
    setStageCounter(stageCounter);
    fetchQuestionsAndAnswers();
    navigate(`/main/${stageCounter}?token=${username}`);
    const wrapElement = document.querySelector('.wrap');
    const answerDivs = document.querySelectorAll('.answer');
    answerDivs.forEach(div => {
      div.classList.remove('unav');
    });
    wrapElement.classList.add('dissapear');
  }

  const gameover = () =>{
    const wrapElement = document.querySelector('.wrap1');
    setTimeout(()=>{
      wrapElement.classList.remove('dissapear');
      playSound("/Sounds/lost_lvl.mp3");
    }, 1000)

    if(stageCounter>=3 && stageCounter<6){
      setSavedMoney(stages[6].value)
    }else if(stageCounter>=6){
      setSavedMoney(stages[3].value)
    }
  }

  const takeMoney = () =>{
    navigate(`/final`);
    playSound("/Sounds/take_money.mp3");
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const username = localStorage.getItem('username');
    const submittedAnswer = selectedAnswer;
    try {
      const response = await fetch('/check-answer', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username,
              submittedAnswer,
              stageCounter,
              id
          })
      });
      console.log(username,submittedAnswer,stageCounter,id);
      const data = await response.json();

      if (data.resp.isCorrect) {
        if(data.resp.win){
          const selectedDiv = document.querySelector('.selected');
          if (selectedDiv) {
              selectedDiv.classList.add('correct');
              playSound("/Sounds/right-answer.mp3");
              setTimeout(()=>{
                
                winWindow(); 
              }, 400) 
          }
        }else{
        const selectedDiv = document.querySelector('.selected');
          if (selectedDiv) {
              selectedDiv.classList.add('correct');
              playSound("/Sounds/right-answer.mp3");
              setTimeout(()=>{
                
                nextstage(username);  
              }, 400)   
          }
        }
      } else {
          const selectedDiv = document.querySelector('.selected');
          if (selectedDiv) {
              selectedDiv.classList.add('wrong');
              playSound("/Sounds/wrong-answer.mp3");
              setTimeout(()=>{
                
                gameover();
              }, 400) 
          }
      }
    } catch (error) {
        console.error('Error checking answer:', error);
    }
  };

  const handleVoteAppear = () => {
    const wrapElement = document.querySelector('.wrap2');
    wrapElement.classList.remove('dissapear');
  }

  const handleOkVoteClick = () => {
    const wrapElement = document.querySelector('.wrap2');
    wrapElement.classList.add('dissapear');
  }

  const handleHelp = async (event) => {
    event.preventDefault();
    const username = localStorage.getItem('username');
    const selectedHelp = event.currentTarget.id;
    const selectedHelpDiv = event.currentTarget;
    try {
      const response = await fetch('/usehelp', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username,
              selectedHelp,
              stageCounter,
              id
          })
      });
      const data = await response.json();
      if (data.help.isCorrect===1) {
        console.log("fifty")
        playSound("/Sounds/passed_lvl.mp3");
        // console.log(data.help.options)
        setSelectedAnswer(null);
        shuffledAnswers.forEach((answer, index) => {
          if (data.help.options[0] === answer){
            const answerDivs = document.querySelectorAll('.answer');
            answerDivs[index].classList.add("unav");
          }
        });
        shuffledAnswers.forEach((answer, index) => {
          if (data.help.options[1] === answer){
            const answerDivs = document.querySelectorAll('.answer');
            answerDivs[index].classList.add("unav");
          }
        });
        selectedHelpDiv.classList.add('used');
      } else if(data.help.isCorrect===2) {
        playSound("/Sounds/passed_lvl.mp3");
        console.log("people")
        selectedHelpDiv.classList.add('used');
        
        handleVoteAppear();
        const votArr = [];
        let vot = 0;
        shuffledAnswers2.forEach((answer, index) => {
          for(let i = 0; i<4; i++){
            if (answer === data.help.vote[i].answer){
              vot = data.help.vote[i].procent;
              votArr.push(vot); 
            }
          }
        });
        setVote(votArr);
        // console.log(votArr);
      }else if(data.help.isCorrect===3) {
        playSound("/Sounds/passed_lvl.mp3");
        console.log("refresh")
        selectedHelpDiv.classList.add('used');
        const answerDivs = document.querySelectorAll('.answer');
        answerDivs.forEach(div => {
          div.classList.remove('unav');
        });
        setQuestions(data.help.question);
        setId(data.help.question.id);
        const allOptions = [...data.help.question.wrong, data.help.question.right];
        shuffleAnswers(allOptions);
      }
    } catch (error) {
        console.error('Error ussing help:', error);
    }
  };

  const stageMobAppear = () => {
    const stageCont = document.querySelector('.stageMenu');
    stageCont.classList.add('active');
  }

  const stageMobDisappear = () => {
    const stageCont = document.querySelector('.stageMenu');
    stageCont.classList.remove('active');
  }

  return (
    <div className="bkgr" id="bkgr3">
      <div className='wrap dissapear'>
        <div className='passed_win'>
          <div className='feliz'>Stage Passed!</div>
          <div className="feliz2">Your total: {curentMoney}$</div>
          <div className='situation_cont'>
            <div className="check_btn" id='btn_mob' onClick={takeMoney}>Take money</div>
            <div className="check_btn" id='btn_mob' onClick={nextConfirm}>Next stage</div>
          </div>
        </div>
      </div>
      <div className='wrap1 dissapear'>
        <div className='passed_win'>
          <div className='feliz'>Game Over</div>
          <div className="feliz2">Your take: {savedMoney}$</div>
          <div className='situation_cont'>
            <div className="check_btn" onClick={handleQuitGameClick}>Quit Game</div>
          </div>
        </div>
      </div>
      <div className='wrap2 dissapear'>
        <div className='passed_win vote'>
          <div className='feliz'>Public Vote</div>
          {shuffledAnswers2.map((answer, index) => (
                <div className="answer2 vote" key={`voted_ans${index}`}> 
                <div className='voteprocents' style={{ '--votepro': `${vote[index]*voteWidth/100}px` }}></div>
                <div className='voteNumber'>{vote[index]}%</div>
                <label htmlFor={`Answer_${index}`}>{answer}</label>
              </div>
            ))}
            <div className='situation_cont'>
              <div className="check_btn" onClick={handleOkVoteClick}>Ok</div>
            </div>
        </div>
      </div>
      {/* <video className="video" ref={videoRef} id="open_curt" autoPlay muted>
        <source src="/Img/open_curt.webm" type="video/webm" />
      </video> */}
      <Stages stagePass={stageCounter} />
      <div className='stageMenu'>
        <div className='butt_extend' onClick={stageMobDisappear}></div>
        <div className='butt_extend' id='open' onClick={stageMobAppear}></div>
        <StagesMob stagePass={stageCounter} />
      </div>
      <form className="main_game" id="game_continue" onSubmit={handleFormSubmit}>
        <div className="question">{questions.question}</div>
        <div className="answer_cont">
          <fieldset>
            {shuffledAnswers.map((answer, index) => (
              <div
                className={`answer ${radioSymbol[index] === '◈' ? 'selected' : ''}`}
                key={`answer_${index}`}
                onClick={(event) => handleAnswerClick(event, index)}
              >
                <span className="answer_letter">{radioSymbol[index]}</span>
                <input type="radio" id={`Answer_${index}`} name="answers"></input>
                <label htmlFor={`Answer_${index}`}>{answer}</label>
              </div>
            ))}
          </fieldset>
        </div>
        <div className="line2"></div>
        <div className="option_cont">
          <div className="check_btn" id='quit_btn' onClick={handleQuitGameClick}>Quit game</div>
          <div className="help_cont">
            <div className="help" id="fifty" onClick={handleHelp}></div>
            <div className="help" id="people" onClick={handleHelp}></div>
            <div className="help" id="refresh" onClick={handleHelp}></div>
          </div>
          <input type='submit' className="check_btn" id='submit_btn' value="Submit answer"></input>
        </div>
        <div className="line2"></div>
        <div className="option_cont" id='option_mob'>
          <div className="check_btn" id='quit_btn_mob' onClick={handleQuitGameClick}>Quit game</div>
          <input type='submit' className="check_btn" id='submit_btn_mob' value="Submit answer"></input>
        </div>
        <div className="line2" id='line_mob'></div>
      </form>
    </div>
  );
}

export default Main