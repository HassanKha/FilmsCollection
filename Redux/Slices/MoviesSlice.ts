import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Movie } from '../../src/types/Movie';
import { RootState } from '../rootReducer';

// Define the initial state
interface MoviesState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
};

// Define the movie slice
export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // Action for setting loading state
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    // Action for setting error state
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    // Action for setting movie data
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
  },
});

// Export actions
export const { setLoading, setError, setMovies } = moviesSlice.actions;

// Selectors
export const selectMovies = (state: RootState) => state.movies.movies;
export const selectLoading = (state: RootState) => state.movies.loading;
export const selectError = (state: RootState) => state.movies.error;

// Export reducer
export default moviesSlice.reducer;