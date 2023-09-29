import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../cssPages/Whack.css';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Whack = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [molePosition, setMolePosition] = useState(null);
  const [username, setUsername] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const squares = Array.from(Array(9).keys());

  const countDownTimerIdRef = useRef(null);
  const moleTimerIdRef = useRef(null);

  const moveMole = () => {
    moleTimerIdRef.current = setInterval(() => {
      setMolePosition(prevPosition => {
        if (prevPosition !== null) {
          return null;
        }

        const newPosition = Math.floor(Math.random() * squares.length);

        return newPosition;
      });
    }, 500);
  };

  const handleSquareClick = squareId => {
    if (timeLeft > 0 && squareId === molePosition) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  const saveScore = async () => {
    if (timeLeft === 0) {
      try {
        const response = await axios.post('http://localhost:8080/scores/saveScore', {
          username,
          score,
        });
        console.log(response.data); // Handle the response from the server
        alert("score saved");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const startGame = () => {
    setGameStarted(true);
    moveMole();
    countDownTimerIdRef.current = setInterval(countDown, 1000);
  };

  const countDown = () => {
    setTimeLeft(prevTime => {
      if (prevTime === 0) {
        clearInterval(countDownTimerIdRef.current);
        clearInterval(moleTimerIdRef.current);
        saveScore(); // Call the saveScore function when time reaches 0
      }

      return prevTime > 0 ? prevTime - 1 : prevTime;
    });
  };

  useEffect(() => {
    return () => {
      clearInterval(countDownTimerIdRef.current);
      clearInterval(moleTimerIdRef.current);
    };
  }, []);

  return (
    <div>
      <section className="vs">
        <Navigation />
      </section>
      <h1>Whack-A-Mole</h1>
      <div>
        
          <button onClick={startGame}>Start Game</button>
        
        <Link to="/scores" ><button>View Scores</button></Link> 
        <h2>Your score: {score}</h2>
        <h2>Time left: {timeLeft}</h2>
        <div className="containergame">
          <div className="grid">
            {squares.map(squareId => (
              <div
                key={squareId}
                className={`square ${molePosition === squareId ? 'mole' : ''}`}
                onClick={() => handleSquareClick(squareId)}
              >
                {squareId + 1}
              </div>
            ))}
          </div>
        </div>
        {timeLeft === 0 && (
          <div>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
            />
            <button onClick={saveScore}>Submit Score</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Whack;
