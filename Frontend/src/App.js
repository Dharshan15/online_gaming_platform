import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LandingPage from './jsPages/LandingPage';
import LoginSignUp from './jsPages/LoginSignUp';
import Esport from './jsPages/Esport';
import DiscussionPage from './jsPages/DiscussionPage';
import Games from './jsPages/Games';
import Whack from './jsPages/Whack';
import ScorePage from './jsPages/ScorePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path='/loginsignup' element={<LoginSignUp/>}></Route>
          <Route path="/discuss" element={<DiscussionPage />}></Route>
          <Route path="/games" element={<Games/>}></Route>
          <Route path="/scores" element={<ScorePage/>}></Route>
          <Route path="/games/whack" element={<Whack />}></Route>
          <Route path="/esport" element={<Esport/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
