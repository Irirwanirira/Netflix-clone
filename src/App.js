import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/page/LoginPage';
import NetFlix from './components/page/NetFlix';
import SignUpPage from './components/page/SignUpPage';
import TvShow from './components/page/TvShow';
import MoviePage from './components/page/MoviePage';
import Player from './components/page/player';

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
