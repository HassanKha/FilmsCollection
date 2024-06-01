import React, { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "../types/Movie";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from 'react-redux';
import { selectMovies, selectLoading, selectError, setMovies, setLoading, setError } from '../../Redux/Slices/MoviesSlice';

function Cards() {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    const fetchMovies = async () => {
        dispatch(setLoading(true));
        try {
          const response = await axios.get<Movie[]>(
            'https://my-json-server.typicode.com/HassanKha/FilmsCollection/movies'
          );
          dispatch(setMovies(response.data));
        } catch (err) {
          dispatch(setError('Error fetching movies'));
        } finally {
          dispatch(setLoading(false));
        }
    };

    fetchMovies();
  }, []);

  if (loading) return <div className="h-screen w-full mt-52 px-96">
     <h1 className="text-5xl p-5 text-center font-extrabold font-sans underline">Featured Films</h1>
  <span id="ProgressLabel" className="sr-only">
    Loading
  </span>

  <span
    role="progressbar"
    aria-labelledby="ProgressLabel"
    aria-valuenow={50}
    className="block rounded-full bg-gray-200"
  >
    <span
      className="block h-3 rounded-full bg-indigo-600"
      style={{ width: `50%` }}
    ></span>
  </span>
</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="w-full  flex justify-center items-center  flex-col ">
        <h1 className="text-5xl p-5  font-extrabold font-sans underline mt-2">Featured Films</h1>
      <div className="flex flex-wrap  items-center  justify-center gap-9 m-5 w-full">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}/>
        ))}
      </div>
    </div>
  );
}

export default Cards;
