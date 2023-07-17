import * as Action from "./ActionTypes";

export const reduser = (state, action) => {
  switch (action.type) {
    case Action.ADD_MOVIE_TO_WATCHEDLIST:
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    case Action.REMOVE_MOVIE_TO_WATCHEDLIST:
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };
    case Action.MOVIE_TO_WATCHEDLIST:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
        watchList: [action.payload, ...state.watchList],
      };
    case Action.ADD_MOVIE_TO_WATCHED:
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
        watched: [action.payload, ...state.watched],
      };
    case Action.REMOVE_MOVIE_TO_WATCHED:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };
    default:
      return state;
  }
};
