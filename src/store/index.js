import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import {api_key, TMDB_BASE_URL } from '../utils/Constant'

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

export const getGenres = createAsyncThunk("netflix/genres", async()=> {
 const {data: {genres}} =  await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${api_key}`)
//  console.log('......................', genres);
 return genres
})

const NetflixSlice = createSlice({
  name: 'Netflix',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action)=>{
      state.genres = action.payload;
      state.genresLoaded = true;
    })
  },
});

const arrayOfMoviesData = (array, moviesArray, generes)=> {
  array.forEach((movie) => {
    const moviesGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = generes.find(({id})=> id === genre)
      if(name) moviesGenres.push(name.name)
  });

  if(movie.backdrop_path)
  moviesArray.push({
      id: movie.id,
      name: movie?.original_name ? movie.original_name :  movie.original_title,
      image: movie.backdrop_path,
      genres: moviesGenres.slice(0,2)

    })
  })
}

const getMovieData  = async (api, genres,paging = false) => {
  const moviesArray = []
  for(let i=1; moviesArray.length < 80 && i < 10; i++){
      const {data: {results },} = await axios.get(`${api}${paging ? `&page=${i}` : "" }`)
      arrayOfMoviesData(results, moviesArray,genres)
  }

  return moviesArray
}


export const fetchMovieData = createAsyncThunk("netflix/trending", async({type}, myThunk) => {
  const {netflix: { genres },} = myThunk.getState()
  const data = getMovieData(`${TMDB_BASE_URL}/trending/${type}/week?api_key=${api_key}`, genres, true);
  console.log(data);
  // return data
})

export const store = configureStore({
  reducer:{
    netflix: NetflixSlice.reducer,
  },
});
