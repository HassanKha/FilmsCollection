import { combineReducers } from '@reduxjs/toolkit';
import moviesReducer from '../Redux/Slices/MoviesSlice';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;