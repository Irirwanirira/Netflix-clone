import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './page/LoginPage';
import NetFlix from './page/NetFlix';
import SignUpPage from './page/SignUpPage';
import TvShow from './page/TvShow';
import MoviePage from './page/MoviePage';
import Player from './page/player';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<NetFlix />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<SignUpPage />}/>
    <Route path='/player' element={<Player />}/>
    <Route path='/tv' element={<TvShow />}/>
    <Route path='/movie' element={<MoviePage />}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
