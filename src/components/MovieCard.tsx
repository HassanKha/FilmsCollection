import React from "react";
import { Movie } from "../types/Movie";
import { Link } from 'react-router-dom';
type Props = {
  movie: Movie;
};

function MovieCard({ movie }: Props) {
  return (
    <Link to={`/movies/${movie.id}`} className="w-96 h-60 bg-white rounded-md shadow-lg hover:scale-110 cursor-pointer">
      <div className="w-full h-1/2 flex items-center rounded-md justify-center  ">
        <img className="w-full h-full object-cover rounded-md " alt={movie.title} src={movie.image} />
      </div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold p-1 text-[#111827] ">{movie.title}</h1>
        <p className="text-[1rem] font-medium p-2 text-center">{movie.description}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
