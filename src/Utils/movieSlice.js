const movieSlice = createSlice({
  name: "movies",
  initialState: { nowPlayingMovies: null },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const nowPlayingMovies = movieSlice.actions;

export default movieSlice = movieSlice.reducer;
