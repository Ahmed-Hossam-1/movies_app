import React, { useEffect, useState } from "react";
import "./Add.css";
import axios from "axios";
import Card from "./Card";

function Add() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${search}&apikey=767ca55d`)
      .then((res) => {
        if (res.data.Search) {
          setMovies(res.data.Search);
        }
      })
      .catch((e) => console.log(e));
  }, [search]);
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-container">
            <input
              type="text"
              placeholder="Search For a Movies"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {movies.length > 0 && (
            <ul className="results">
              {movies.map((movie) => (
                <li key={movie.imdbID}>
                  <Card movies={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Add;
