import React from 'react'
import styled from 'styled-components'
import MovieSlider from './MovieSlider'

const SliderContainer = ({movies}) => {
  const getMoviesBtn = (start, end)=>{
        return movies.slice(start, end)
  }

  return (
    <SliderWrapper>
        <MovieSlider data={getMoviesBtn(0,10)} title="Only on Netflix" />
        <MovieSlider data={getMoviesBtn(10,20)} title="Romantic" />
        <MovieSlider data={getMoviesBtn(20,30)} title="New trend" />
        <MovieSlider data={getMoviesBtn(30,40)} title="Action" />
        <MovieSlider data={getMoviesBtn(40,50)} title="Comedy" />
        <MovieSlider data={getMoviesBtn(50,60)} title="Explorer" />
        <MovieSlider data={getMoviesBtn(60,70)} title="Historical" />
        <MovieSlider data={getMoviesBtn(70,80)} title="Horror" />




    </SliderWrapper>
  )
}

const SliderWrapper = styled.div`
    

`


export default SliderContainer