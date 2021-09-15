import React from "react";
import "./homescreen.css";
import Nav from "./nav";
import Banner from "./banner";
import Row from "./row";
import userreqests from "../Request";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        isLargeRow
        fetchurl={userreqests.fetchNetflixOriginals}
      />
      <Row title="Trending Row" fetchurl={userreqests.fetchTrending} />
      <Row title="Top Rated" fetchurl={userreqests.fetchTopRated} />
      <Row title="Action Movies" fetchurl={userreqests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={userreqests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={userreqests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchurl={userreqests.fetchRomanceMovies} />
      <Row title=" Documantries" fetchurl={userreqests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
