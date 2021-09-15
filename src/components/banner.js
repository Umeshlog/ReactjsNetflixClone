import axios from "../localaxios";
import React, { useState,useEffect } from "react";
import userreqests from "../Request";
import "./banner.css";

function Banner() {
    const [movie,setMovie]=useState([])


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(userreqests.fetchNetflixOriginals);
            console.log(request.data.results);
            console.log(Math.floor(Math.random() * request.data.results.length-1));

            setMovie(
              request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
              ]
            );
        }
       fetchData();
    }, [])
      return (
        <div
          className="banner"
          style={{
            backgroundImage: `URL('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="banner__contant">
            <h1 className="banner__title">
              {movie?.title || movie?.original_name || movie?.name}
            </h1>
            <div className="banner__buttons">
              <button>Play</button>
              <button>MyList</button>
            </div>
            <div className="banner__discription">
              <p>{movie?.overview}</p>
            </div>
          </div>
          <div className="banner__fade"></div>
        </div>
      );
}

export default Banner;
