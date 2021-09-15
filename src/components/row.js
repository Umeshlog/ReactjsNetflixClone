import axios from "../localaxios";
import React, { useEffect, useState } from "react";
import "./row.css";

function Row({ title, isLargeRow, fetchurl }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchurl);
      //   console.log(request.data.results);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchurl]);
  console.log(movies);
  console.log(base_url + fetchurl);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__poster">
        {movies.map((movie) => (
          
          <img
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            className={`rowposter ${isLargeRow && "largeimage"}`}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
