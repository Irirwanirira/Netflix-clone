import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { firebaseAuth } from '../utils/firebase-config';
import Header from '../components/Header';
import BackGround from '../components/BackgroundImg';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValue, setFormValue] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValue;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const start = () => {
    setShowPassword(true);
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/');
  });

  return (
    <Container>
      <BackGround />
      <div className='content'>
        <Header login />
        <div className='body'>
          <div className='text'>
            <h1>Unlimited movies, Tv shows and more</h1>
            <h4>Watch anywhere, cancel Anytime</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div className='form'>
            {showPassword ? (
              <input
                type='password'
                placeholder='password'
                name='password'
                value={formValue.password}
                onChange={(e) =>
                  setFormValue({
                    ...formValue,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            ) : (
              <input
                type='email'
                placeholder='email address'
                name='email'
                value={formValue.email}
                onChange={(e) =>
                  setFormValue({
                    ...formValue,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}
            {!showPassword ? (
              <button onClick={start}>Get started</button>
            ) : (
              <button onClick={handleSignIn}>Sign up</button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
    .body {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .text {
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 2rem;
      color: white;
    }
    h1 {
      padding: 0 25rem;
    }
    h4 {
      margin-top: -1.5rem;
    }
    h6 {
      margin-top: -1.5rem;
    }
    .form {
      display: grid;
      width: 60%;
      grid-template-columns: ${({ showPassword }) =>
        showPassword ? '1fr 1fr' : '2fr 1fr'};
      input {
        color: black;
        padding: 1.2rem;
        font-size: 1.2rem;
        width: 45rem;
        &:focus {
          outline: none;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: red;
        border: none;
        cursor: pointer;
        color: white;
        font-size: 1.05rem;
        width: 10rem;
      }
    }
  }
`;

export default SignUpPage;
