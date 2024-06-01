import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../types/Movie";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get<Movie>(
          `https://my-json-server.typicode.com/HassanKha/FilmsCollection/movies/${id}`
        );
        console.log(response.data);
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching movie");
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading)
    return (
        <div className="h-screen w-full mt-52 px-96">
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
      </div>
    );
  if (error) return <div>{error}</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="flex justify-center items-center  w-full h-screen ">
      <div className="flex w-full px-6 h-fit  gap-7">
        <div className="w-1/2 h-full  flex justify-center items-center  shadow-2xl ">
          <img
            src={movie.image}
            className="w-full h-full  rounded-lg  object-cover"
            alt={movie.title}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-3">
          <div className="flex flex-col gap-5">
            <h1 className="font-sans font-semibold text-5xl text-[#111827]">
              {movie.title}
            </h1>
            <p className="font-thin text-lg">{movie.description}</p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-sans font-semibold text-3xl text-[#111827]">
              Synopsis
            </h3>
            <p className="font-thin text-md">{movie.synopsis}</p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-sans font-semibold text-3xl text-[#111827]">
              Cast
            </h3>
            <ul className="list-disc">
              {movie.cast.map((actor, key) => (
                <li className="ml-5 font-thin text-md" key={key}>
                  {actor}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-sans font-semibold text-3xl text-[#111827]">
              Release Date
            </h3>
            <p className="font-thin text-md">{movie.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
