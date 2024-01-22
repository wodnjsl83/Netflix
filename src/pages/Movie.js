import React from "react";
import "./css/Mainpage2.css";
const IMG_BASE_ULR = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average, overview }) {
  return (
    <div className="movie-bx">
      <img src={IMG_BASE_ULR + poster_path} alt='"영화포스터' />
      <div className="movie-if">
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
      <div className="hbg-box">{overview}</div>
    </div>
  );
}
