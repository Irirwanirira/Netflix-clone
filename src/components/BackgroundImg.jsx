import React from 'react';
import { styled } from 'styled-components';

const image ='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265236/NetflixApp/netflix-reuse-official_ntcjl2_wtrhhh.jpg'


const BackGround = () => {
  
  return (
    <Container>
      <img
      src={image}
        alt='No internet connection'
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 10vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;

export default BackGround;
