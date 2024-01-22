import React from "react";
import { dummy } from "../movieDummy";
import Movie from "./Movie";
import "./css/Mainpage2.css";

const MainPage2 = () => {
  return (
    <div className="movie">
      <a href="/">
        <img src="images/logo.png" />
      </a>
      <ul>
        <li>Home</li>
        <li>series</li>
      </ul>
      <div className="hide-bg"> </div>
      {dummy.results.map((item) => {
        return (
          <Movie
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview}
          />
        );
      })}
    </div>
  );
};

export default MainPage2;
