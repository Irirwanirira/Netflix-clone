import React, { useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai#AiOutlineLogout';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';

const TopNav = ({ isScrolled }) => {
  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Tv Show', link: '/' },
    { name: 'My List', link: '/' },
    { name: 'Movies', link: '/' },
  ];

  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate('/login');
  });

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <NavContainer>
      <nav className={isScrolled ? 'scrolled' : 'notScroll'}>
        <div className='leftSide'>
          <div className='logo'>
            <img
              src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png'
              alt='logo'
            />
          </div>
          <ul className='links'>
            {navLinks.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className='rightSide'>
          <button onClick={() => signOut(firebaseAuth)}>
            <AiOutlineLogout />
          </button>
        </div>
        <div className='navbar'>
          <div className='nav-icon'>
            <FaBars onClick={handleMenuClick} />
          </div>

          <ul className={isMenuOpened ? 'menu-open' : 'menu-close'}>
            {navLinks.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link
                    to={link}
                    className='a'
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
            <button onClick={() => signOut(firebaseAuth)}>Log Out</button>
          </ul>
        </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  .notScroll {
    display: flex;
  }
  .scrolled {
    display: flex;
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 6rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0.4rem;
    align-items: center;
    transition: 0ms.3s ease-in-out;

    .leftSide {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-left: 5rem;
    }
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 10rem;
      height: 2rem;
    }
  }
  .links {
    display: flex;
    gap: 3rem;
    li {
      list-style: none;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }

  .rightSide {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1rem;
    button {
      background-color: black;
      border: none;
      cursor: pointer;
      border-radius: 50%;
    }
    &:focus {
      outline: none;
    }
    svg {
      color: white;
      font-size: 2rem;
    }
  }
  .navbar {
    display: none;
  }

  @media only screen and (max-width: 480px) {
    .notScroll {
      max-width: 480px;
      display: flex;
      width: 450px;
    }
    .scrolled {
      max-width: 480px;
      display: flex;
      background-color: black;
      width: 450px;
    }
    .leftSide {
      .links {
        display: none;
      }
    }
    .rightSide {
      display: none;
    }
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .nav-icon {
        position: fixed;
        right: 1rem;
        svg {
          color: white;
          font-size: 2rem;
          margin-right: 1rem;
        }
      }
      .menu-open {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        top: 3rem;
        right: -0.5rem;
        background-color: rgb(246, 14, 14, 0.6);
        padding: 1rem;
        width: 7rem;
        text-decoration: none;
        list-style-type: none;
        li {
          font-weight: bold;
          font-size: 1rem;
          .a {
            color: white;
            text-decoration: none;
          }
        }
        button {
          padding: 0.5rem;
          border: none;
          background-color: black;
          color: white;
          border-radius: 10%;
          font-weight: bold;
        }
      }
      .menu-close {
        display: none;
      }
    }
  }
`;

export default TopNav;
