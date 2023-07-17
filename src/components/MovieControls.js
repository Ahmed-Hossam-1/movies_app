import React from "react";
import { useMovieContext } from "./context/GlobalContext";
import * as action from "./context/ActionTypes";

function MovieControls({ movie, type }) {
  const movieContext = useMovieContext();
  return (
    <div className="inner-card-controls">
      {type === "watchList" && (
        <>
          <button
            onClick={() =>
              movieContext.moviesDispatch({
                type: action.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
            className="ctrl-btn"
          >
            <i className="fa-solid fa-eye"></i>
          </button>
          <button
            onClick={() =>
              movieContext.moviesDispatch({
                type: action.REMOVE_MOVIE_TO_WATCHEDLIST,
                payload: movie.imdbID,
              })
            }
            className="ctrl-btn"
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            onClick={() =>
              movieContext.moviesDispatch({
                type: action.MOVIE_TO_WATCHEDLIST,
                payload: movie,
              })
            }
            className="ctrl-btn"
          >
            <i class="fa-solid fa-eye-slash"></i>
          </button>
          <button
            onClick={() =>
              movieContext.moviesDispatch({
                type: action.REMOVE_MOVIE_TO_WATCHED,
                payload: movie.imdbID,
              })
            }
            className="ctrl-btn"
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
}

export default MovieControls;
