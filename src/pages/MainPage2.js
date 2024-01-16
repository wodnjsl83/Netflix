import React from "react";
import { dummy } from "../movieDummy";
import Movie from "./Movie";
import "./css/Mainpage2.css";

const MainPage2 = () => {
  return (
    <div className="movie">
      {/* <Header></Header> */}
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
