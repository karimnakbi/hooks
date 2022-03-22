import React from "react";

const img_api = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, overview, poster_path, vote_average, token }) => {
  return (
    <div className="movie">
      <img src={!token ? img_api + poster_path : poster_path} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>
      <div className="movie_over">
        <h2>overview:</h2>
        <br />
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;