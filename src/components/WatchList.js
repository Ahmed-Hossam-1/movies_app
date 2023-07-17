import React from "react";
import { useMovieContext } from "./context/GlobalContext";
import MovieCard from "./MovieCard";
import "./WatchList.css";

function WatchList() {
  const moviesContext = useMovieContext();
  return (
    <div className="watch-list">
      <div className="container">
        <div className="main-heading">
          <h1>My WatchList</h1>
          <span className="movie-count">
            {moviesContext.watchList.length}
            {moviesContext.watchList.length > 1 ? "Movies" : "Movie"}
          </span>
        </div>
        {moviesContext.watchList.length > 0 ? (
          <div className="movie-grid">
            {moviesContext.watchList.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watchList" />
            ))}
          </div>
        ) : (
          <h1 className="no-movies">No Movies in Your List , Add Some!</h1>
        )}
      </div>
    </div>
  );
}

export default WatchList;
