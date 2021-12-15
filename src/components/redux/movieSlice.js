import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const movieApifetch = createAsyncThunk(
  'movie/movieData',
  async () => {
    const response = await fetch('https://www.omdbapi.com/?s=movie&apikey=3f2753b8')
      .then((res) => res.json())
    return response
  }
);
const initialState = {
  movies: [],
  singleMovie: {},
  CartProduct:[]
};
export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
 
    singleMovie: (state, action) => {
      state.singleMovie = state.movies.find((movie) => movie.imdbID==action.payload);
    },
    addToCart: (state, action) => {
      state.CartProduct.push(action.payload
    )
    },
    removeFromCart: (state, action) => {
      state.CartProduct = state.CartProduct.filter((item) => item.imdbID !==action.payload);
    }
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(movieApifetch.fulfilled, (state, action) => {
     state.movies = action.payload.Search
    });
  },
});



// Action creators are generated for each case reducer function
export const { singleMovie, addToCart, removeFromCart } = movieSlice.actions;

export default movieSlice.reducer;