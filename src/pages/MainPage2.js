import React from "react";
import { dummy } from "../movieDummy";
import Movie from "./Movie";
import "./css/Mainpage2.css";
import Mainheader from "./Mainheader";

const MainPage2 = () => {
  return (
    <div className="movie">
      <div className="hide-bg"> </div>
      <Mainheader />
      {dummy.results.map((item) => {
        return (
          <Movie
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
          />
        );
      })}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default MainPage2;
