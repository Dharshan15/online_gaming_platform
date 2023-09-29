import React from 'react';
import '../cssPages/LandingPage.css';
import miniPekka from '../images/minipekka.png';
import "../cssPages/LandingPage.css"
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <section className="hero">
        <Navigation/>
        <div className="hero-area">
          <img className='minipekka'src={miniPekka} alt='minipekka'/>
          <div className="htext">
            <h1 className='landingH1'>DN</h1>
            <div className='sub-text'>Maker of Gravity , Dream , Capooter ,Trucker and more</div>
            <div className='button-centerer'>
              <div className="button"><Link to="/loginsignup">See latest</Link></div>
            </div>
          </div>
        </div>
      </section>
      <footer id="contactme">
        <h2 className='landingH2'>Contact Us</h2>
        <p>dngames@gmail.com</p>
      </footer>
    </div>
  )
}

export default LandingPage;
