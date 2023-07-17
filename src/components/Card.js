import React from "react";
import "./Card.css";
import { useMovieContext } from "./context/GlobalContext";
import * as allActions from "./context/ActionTypes";

function Card({ movies }) {
  const movieContext = useMovieContext();
  const storedMovie = movieContext.watchList.find(
    (o) => o.imdbID === movies.imdbID
  );
  const storedMovieWatched = movieContext.watched.find(
    (o) => o.imdbID === movies.imdbID
  );
  const watchListDisable = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;
  const watchedDisable = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movies.Poster ? (
          <img src={movies.Poster} alt={movies.Title} />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="heading">
          <h3 className="title">{movies.Title}</h3>
          {movies.Year ? (
            <h4 className="release-date">{movies.Year}</h4>
          ) : (
            "----"
          )}
        </div>
        <div className="controls">
          <button
            onClick={() =>
              movieContext.moviesDispatch({
                type: allActions.ADD_MOVIE_TO_WATCHEDLIST,
                payload: movies,
              })
            }
            className="btn"
            disabled={watchListDisable}
          >
            Add To Watch List
          </button>
          <button
            onClick={() =>
              movieContext.moviesDispatch({
                type: allActions.ADD_MOVIE_TO_WATCHED,
                payload: movies,
              })
            }
            className="btn"
            disabled={watchedDisable}
          >
            Add To Watched
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
