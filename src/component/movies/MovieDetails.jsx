import React from "react";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "../useFetch";

function MovieDetails() {
  const { id } = useParams();
  console.log(id);

  const { isLoading, movie, isError } = useFetch(`&i=${id}`);

  // if (isLoading) {
  //   return (
  //     <section className="movie-section ">
  //       <div className="loading">Loading....</div>;
  //     </section>
  //   );
  // }
  return (
    <>
      {isLoading ? (
        <div className={"loaderDiv"}>
          <div className={"loaderRing"}></div>{" "}
        </div>
      ) : (
        <section className="movie-section">
          <div className="movie-card">
            <figure>
              <img src={movie.Poster} alt="" />
            </figure>
            <div className="card-content">
              <p className="title">{movie.Title}</p>
              <p className=""></p>
              <p className="card-text" style={{ color: "white" }}>
                {movie.Plot}
              </p>
              <p className="card-text"> Movie Released : {movie.Released}</p>
              <p className="card-text"> Genre :{movie.Genre}</p>
              <p className="card-text">
                {" "}
                IMDB Rating : {movie.imdbRating} / 10
              </p>
              <p className="card-text"> Box Office : {movie.BoxOffice}</p>
              <p className="card-text"> Languges : {movie.Language}</p>
              <p className="card-text"> Country : {movie.Country}</p>
              <p className="card-text"> Director : {movie.Director}</p>
              <p className="card-text"> Actors : {movie.Actors}</p>
              <p className="card-text"> Writer : {movie.Writer}</p>
              <NavLink to="/" className="back-btn">
                Go Back
              </NavLink>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default MovieDetails;
