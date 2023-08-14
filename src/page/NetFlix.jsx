import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import {AiOutLineInfoCircle} from 'react-icons/ai'
// import {faPlay} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import TopNav from '../components/TopNav';
// import Card from '../components/Card';
import { fetchMovieData, getGenres } from '../store';
import SliderContainer from '../components/SliderContainer';

const NetFlix = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const navigate = useNavigate();

  const movies = useSelector((state) => state.netflix.movies)
  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded)

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getGenres());
  }, []);


  useEffect(() => {
    if(genresLoaded){
      dispatch(fetchMovieData({type: "all"}));
    }
  });
  // console.log(movies);

  return (
    <HeroContainer>
      <div className='hero'>
        <TopNav isScrolled={isScrolled} />

        <img
          className='background-image'
          src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg'
          alt='No internet connection'
        />

        <div className='container'>
          <div className='title'>
            <h1>Super Man</h1>

            <p>
              Superman is a superhero who appears in American comic books
              published by DC Comics. The character was created by writer Jerry
              Siegel and artist Joe Shuster, and debuted in the comic book
              Action Comics #1 (cover-dated June 1938 and published April 18,
              1938).Superman has been adapted to a number of other media, which
              includes radio serials, novels, films, television shows, theater,
              and video games.
            </p>
          </div>
          <div className='buttons'>
            <button
              onClick={() => navigate('/player')}
              className='playBtn'
            >
              Play
            </button>
            <button className='moreBtn'>More</button>
          </div>
        </div>
      </div>
      <SliderContainer movies={movies}/>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  .hero {
    position: relative;
    .background-image {
      filter: brightness(40%);
      height: 70vh;
      width: 100%;
    }
    /* img{
            height: 100vh;
            width: 100%;
        } */
    .container {
      position: absolute;
      bottom: 1rem;

      .title {
        h1 {
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 73px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          margin-bottom: -50px;
          width: 640px;
          margin-left: 5rem;
          font-family: 'lexend Deca', sans-serif;
          color: white;
        }
      }
      .buttons {
        display: flex;
        margin: 5rem;
        gap: 2rem;

        .playBtn {
          color: red;
          border-radius: 1rem;
          font-size: 1.4rem;
          gap: 1rem;
          padding: 0.9rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
        }

        .moreBtn {
          color: white;
          background-color: black;
          border-radius: 1rem;
          font-size: 1.4rem;
          gap: 1rem;
          padding: 0.9rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: 0.5px solid white;
          cursor: pointer;
        }
      }
    }
  }
`;

export default NetFlix;
