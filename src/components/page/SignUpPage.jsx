import React from "react";
import styled from 'styled-components';
import Header from "../Header";
import BackGround from "../BackgroundImg";
import { useState } from "react";


const SignUpPage = () => {
    return (
        <Container>
            <BackGround />
            <div className="content">
                <Header login/>
                <div className="body">
                    <div className="text">
                        <h1>Unlimited movies, Tv shows and more</h1>
                        <h4>Watch anywhere, cancel Anytime</h4>
                        <h6>Ready to watch? Enter your email to create or restart membership</h6>
                    </div>
                    <form className="form">
                        <input type="password" placeholder="password" name="password" />
                        <input type="email" placeholder="email address" name="email" />
                        <button>Get started</button>
                        <button>Sign up</button>
                    </form>
                </div>
            </div>
        </Container>
    );
}
const Container = styled.div`
position: relative;
.content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.8);
    height: 100vh;
    width: 100vw;
}
`

export default SignUpPage;