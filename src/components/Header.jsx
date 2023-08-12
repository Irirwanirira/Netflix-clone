import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Header = ({login}) => {
    const navigate = useNavigate()

    return ( 

        <HeaderContainer>
            <div  className='logo'>
                <img 
                   
                    src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"
                    alt='No internet connection'
                />
            </div>
            <button onClick={()=>navigate(login ? '/login' : '/signup')}>
                {login ? 'Login In' : 'Sign In'}
            </button>

        </HeaderContainer>
     );
};
const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    .logo{
        img{
            height:3rem;
            width: 8rem;
        }
    }
    button{
        padding: 0.5rem 1rem;
        background-color: red;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
    }
`;

 
export default Header;