import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import "../cssPages/Game.css"
import game1 from "../images/whack.png"
import game2 from "../images/gravity.png"


const Games = () => {
  
  return (
    <>
      <section className="vs">
        <Navigation />
      </section>
      <div class="gamelist">
            <Link to='whack'className='gameLinks'>
              <div class="gamecon">
                  <img class="gameimg"src={game1} alt="Whack A Mole"/>
                  <h3 className='h3game'>Whack A Mole</h3>
                  <p class="subtextgame">Show your anger on the mole, not on people</p>
              </div>
            </Link>
              <a href="https://play.unity.com/mg/other/webgl-build2-2" target='blank'>
                <div class="gamecon">
                    <img class="gameimg"src={game2} alt="Gravity"/>
                    <h3 className='h3game'>Gravity</h3>
                    <p class="subtextgame">A game where you have the power to control gravity</p>
                </div>
              </a>
            
        </div>
    </>
  );
};

export default Games;
