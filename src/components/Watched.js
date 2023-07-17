import React from "react";
import { useMovieContext } from "./context/GlobalContext";
import MovieCard from "./MovieCard";
import "./Watched.css";

function Watched() {
  const moviesContext = useMovieContext();

  return (
    <div className="watched">
      <div className="container">
        <div className="main-heading">
          <h1>My Watched</h1>
          <span className="movie-count">
            {moviesContext.watched.length}
            {moviesContext.watched.length > 1 ? "Movies" : "Movie"}
          </span>
        </div>
        {moviesContext.watched.length > 0 ? (
          <div className="movie-grid">
            {moviesContext.watched.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h1 className="no-movies">No Movies in Your List , Add Some!</h1>
        )}
      </div>
    </div>
  );
}

export default Watched;
