import React from "react";
import { useGlobalContext } from "../../context/context";
import { NavLink } from "react-router-dom";
import filmcamera from "../../assets/My project.png";

function Movies() {
  const { movie, isLoading } = useGlobalContext();

  // if (isLoading) {
  //   return <div className="loading">Loading....</div>;
  // }

  return (
    <>
      {isLoading ? (
        <div className={"loaderDiv"}>
          <div className={"loaderRing"}></div>{" "}
        </div>
      ) : (
        <section className="movie-page">
          <div className="container grid grid-4-col">
            {movie
              ? movie.map((curr) => {
                  const { imdbID, Poster, Title, Type, Year } = curr;
                  console.log(Poster);
                  const movieName = Title.substring(0, 15);
                  return (
                    <NavLink to={`movie/${imdbID}`} key={imdbID}>
                      <div className="card">
                        <div className="card-info">
                          <h2>
                            {movieName.length >= 15
                              ? `${movieName} ...`
                              : movieName}
                          </h2>
                          <img
                            src={Poster === "N/A" ? filmcamera : Poster}
                            alt={"poster"}
                          />
                        </div>
                      </div>
                    </NavLink>
                  );
                })
              : ""}
          </div>
        </section>
      )}
    </>
  );
}

export default Movies;
