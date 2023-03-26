import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalData } from "../../App";
import "./moviecard.css";


const Moviecard = ({ allMovies }) => {
const context = useContext(GlobalData)

  // console.log(allMovies);
  return (
    <>
      <div className="cardContainer">
        {typeof allMovies !== "object" || allMovies.length !== 0 ? (
          <>
            {allMovies &&
              allMovies.map((ele) => {
                return (
                  <Link to={`/movie/${ele.id}`}>
                    <>
                      <div className="card">
                        <img
                          className="cardImg"
                          src={`https://image.tmdb.org/t/p/original/${
                            ele && ele.poster_path
                          }`}
                          alt=""
                        />
                        <div className="cardOverlay">
                          <div className="card_Title">
                            {ele && ele.original_title}
                          </div>
                          <div className="posterImageReleasingDateRating">
                            {ele && ele.release_date}
                            <span>{ele && ele.vote_average}</span>
                          </div>
                        </div>
                      </div>
                    </>
                  </Link>
                );
              })}
          </>
        ) : null}
      </div>
    </>
  );
};

export default Moviecard;
