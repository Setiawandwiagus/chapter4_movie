import React, { useEffect, useState } from "react";
import { MovieComponents } from "../assets/components/MovieComponents";
import { getNowPlayingMovies } from "../services/apiService";

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await getNowPlayingMovies();
        console.log(moviesData);
        setMovies(moviesData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col p-10 bg-slate-800 min-h-screen">
      <div className="flex mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-300 tracking-wide">
          Popular Movies
        </h1>
      </div>
      <MovieComponents movies={movies} />
    </div>
  );
};
